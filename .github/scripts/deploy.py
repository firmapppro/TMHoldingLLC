import os
from ftplib import FTP, error_perm
from pathlib import Path

root = Path(__file__).resolve().parents[2]
remote = '/TMHoldingLLC'
allowed = {'.html', '.css', '.js', '.svg', '.webp', '.png', '.jpg', '.jpeg', '.woff2', '.ttf', '.txt', '.ico', '.json'}
files = [f for folder in ('assets', 'brandbook') for f in (root / folder).rglob('*') if f.is_file() and f.suffix in allowed]
files += list(root.glob('*.html'))
files.sort(key=lambda f: (f.suffix == '.html', str(f)))
with FTP() as ftp:
    ftp.connect(os.environ.get('FTP_SERVER') or 's29.hostia.name', 21, timeout=120)
    ftp.login(os.environ.get('FTP_USERNAME') or 'dev@chypulis.top', os.environ['FTP_PASSWORD'])
    ftp.encoding = 'utf-8'
    created = set()
    for file in files:
        rel = file.relative_to(root).as_posix()
        dest = remote + '/' + rel
        directory = dest.rsplit('/', 1)[0]
        current = ''
        for part in directory.strip('/').split('/'):
            current += '/' + part
            if current in created:
                continue
            try:
                ftp.mkd(current)
            except error_perm as exc:
                if not str(exc).startswith('550'):
                    raise
                ftp.cwd(current)  # A permission error is only acceptable if the directory exists.
                ftp.cwd('/')
            created.add(current)
        temporary = dest + '.uploading'
        with file.open('rb') as stream:
            ftp.storbinary('STOR ' + temporary, stream)
        ftp.rename(temporary, dest)
        print('Uploaded ' + rel)
print('TM Holding LLC deployment complete')
