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
// Navigation and understated viewport reveals.
(() => {
 const nav=document.querySelector('#navigation'),toggle=document.querySelector('.menu-toggle');
 function menu(open){nav.hidden=!open;toggle.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';if(open)nav.querySelector('a').focus();else toggle.focus();}
 toggle.addEventListener('click',()=>menu(true));nav.querySelector('.menu-close').addEventListener('click',()=>menu(false));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!nav.hidden)menu(false)});
 const header=document.querySelector('.header');function sticky(){header.classList.toggle('scrolled',window.scrollY>60)}window.addEventListener('scroll',sticky,{passive:true});sticky();
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.body.classList.add('reveal-ready');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
 const assetDialog=document.querySelector('#asset-dialog');assetDialog.querySelector('.dialog-close').addEventListener('click',()=>assetDialog.close());let assetOpener;assetDialog.addEventListener('close',()=>assetOpener?.focus());
 const content={aviation:['Business aviation','<p>Our intended focus includes long-range business aircraft, with ownership, leasing and lifecycle oversight considered for each proposed acquisition.</p><dl><div><dt>Bombardier Global 6500</dt><dd>Rolls-Royce Pearl 15</dd></div><div><dt>Bombardier Global 7500 / 8000</dt><dd>GE Aerospace Passport</dd></div></dl><p>These are indicative aircraft of interest. No ownership, order or manufacturer affiliation is implied.</p><p class="source-links">Engine references: <a href="https://www.rolls-royce.com/products-and-services/civil-aerospace/business-aviation/pearl-15.aspx" target="_blank" rel="noopener">Rolls-Royce</a> · <a href="https://www.geaerospace.com/commercial/aircraft-engines/passport" target="_blank" rel="noopener">GE Aerospace</a></p>'],maritime:['Maritime assets','<p>Our intended focus is the acquisition, ownership and management of maritime vessels for civil leasing and charter arrangements.</p><p>Vessel selection, propulsion, classification, flag registration and operator arrangements are determined for each proposed acquisition.</p><p>Commercial use and maintenance depend on applicable approvals and the specific vessel. No active fleet or manufacturer partnership is represented.</p>']};
 document.querySelectorAll('[data-asset]').forEach(button=>button.addEventListener('click',()=>{assetOpener=button;const [title,html]=content[button.dataset.asset];document.querySelector('#asset-title').textContent=title;document.querySelector('#asset-content').innerHTML=html;assetDialog.showModal()}));
})();
