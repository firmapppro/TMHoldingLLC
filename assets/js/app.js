(() => {
  const dialog = document.querySelector('#contact-dialog');
  let opener;
  document.querySelectorAll('[data-open-contact]').forEach(button => button.addEventListener('click', () => { opener = button; dialog.showModal(); }));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => opener?.focus());
  document.querySelector('#enquiry-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get('name')}\nOrganisation: ${data.get('organisation')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    const recipient = 'test@email.com'; // Temporary placeholder approved by the project owner. Replace before OEM submissions.
    const href = `mailto:${recipient}?subject=${encodeURIComponent('TM Holding LLC — Corporate enquiry')}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    document.querySelector('#draft-status').textContent = 'Email draft requested. Nothing has been sent by this website. If no application opened, configure an email application first.';
  });
})();
