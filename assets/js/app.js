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
    const arabic = document.documentElement.lang === 'ar';
    const labels = arabic ? ['الاسم', 'المؤسسة', 'البريد الإلكتروني', 'موضوع الاستفسار'] : ['Name', 'Organisation', 'Email', 'Purpose'];
    const body = `${labels[0]}: ${data.get('name')}\n${labels[1]}: ${data.get('organisation')}\n${labels[2]}: ${data.get('email')}\n${labels[3]}: ${data.get('purpose')}\n\n${data.get('message')}`;
    const recipient = 'info@tmholding.qa';
    const href = `mailto:${recipient}?subject=${encodeURIComponent(arabic ? 'تي ام هولدنج ذ.م.م — استفسار مؤسسي' : 'TM Holding LLC — Private enquiry')}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    document.querySelector('#draft-status').textContent = arabic ? 'تم طلب فتح مسودة رسالة في تطبيق البريد الإلكتروني لديكم. لم تُرسل أي رسالة عبر هذا الموقع. إذا لم يُفتح التطبيق، يرجى مراسلة info@tmholding.qa مباشرةً.' : 'Email draft requested. Nothing has been sent by this website. If no application opened, email info@tmholding.qa directly from your email application.';
  });
})();
// Navigation and understated viewport reveals.
(() => {
 const nav=document.querySelector('#navigation'),toggle=document.querySelector('.menu-toggle');
 function menu(open){nav.hidden=!open;toggle.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';document.querySelector('main').inert=open;document.querySelector('footer').inert=open;document.querySelector('.header').inert=open;if(open)nav.querySelector('a').focus();else toggle.focus();}
 toggle.addEventListener('click',()=>menu(true));nav.querySelector('.menu-close').addEventListener('click',()=>menu(false));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!nav.hidden)menu(false);if(e.key==='Tab'&&!nav.hidden){const items=[...nav.querySelectorAll('button,a')],first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
 const header=document.querySelector('.header');function sticky(){header.classList.toggle('scrolled',window.scrollY>60)}window.addEventListener('scroll',sticky,{passive:true});sticky();
 if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.body.classList.add('reveal-ready');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
 const assetDialog=document.querySelector('#asset-dialog');assetDialog.querySelector('.dialog-close').addEventListener('click',()=>assetDialog.close());let assetOpener;assetDialog.addEventListener('close',()=>assetOpener?.focus());
 const localizedContent={"en": {"aviation": ["A structured approach to aircraft ownership", "Our approach connects acquisition decisions with the ongoing responsibilities of ownership.", "Areas of oversight include:", ["Acquisition assessment and transaction coordination", "Ownership and contractual arrangements", "Operator and specialist-provider appointments", "Maintenance planning and technical reporting", "Insurance and expenditure review", "Lifecycle planning and eventual disposal"], "The scope of oversight is defined for each aircraft and its operating arrangements."], "maritime": ["Continuity throughout the vessel lifecycle", "We approach vessel ownership as a continuing responsibility, supported by coordinated technical, financial and contractual oversight.", "Areas of oversight include:", ["Acquisition assessment and transaction coordination", "Ownership and management arrangements", "Technical condition and maintenance planning", "Refit budgets and project oversight", "Insurance and expenditure review", "Lifecycle planning and eventual disposal"], "The scope of oversight is defined for each vessel and its operating arrangements."]}, "ar": {"aviation": ["نهج منظّم لملكية الطائرات", "يربط نهجنا بين قرارات الاقتناء والمسؤوليات المستمرة المترتبة على الملكية.", "تشمل مجالات الإشراف:", ["تقييم فرص الاقتناء وتنسيق إجراءات الصفقة", "ترتيبات الملكية والأطر التعاقدية", "تعيين المشغّلين ومقدّمي الخدمات المتخصصين", "تخطيط الصيانة والتقارير الفنية", "مراجعة التأمين والنفقات", "تخطيط دورة حياة الأصل والتصرف فيه مستقبلاً"], "يُحدّد نطاق الإشراف على كل طائرة وفقاً لترتيبات تشغيلها."], "maritime": ["الاستمرارية طوال دورة حياة الأصل البحري", "نتعامل مع ملكية السفن واليخوت بوصفها مسؤولية مستمرة تستند إلى إشراف فني ومالي وتعاقدي متكامل.", "تشمل مجالات الإشراف:", ["تقييم فرص الاقتناء وتنسيق إجراءات الصفقة", "ترتيبات الملكية والإدارة", "الحالة الفنية وتخطيط الصيانة", "موازنات أعمال إعادة التجهيز والإشراف على المشاريع", "مراجعة التأمين والنفقات", "تخطيط دورة حياة الأصل والتصرف فيه مستقبلاً"], "يُحدّد نطاق الإشراف على كل أصل بحري وفقاً لترتيبات تشغيله."]}};
 const content=localizedContent[document.documentElement.lang]||localizedContent.en;
 document.querySelectorAll('[data-asset]').forEach(button=>button.addEventListener('click',()=>{
  assetOpener=button;
  const [title,intro,label,items,closing]=content[button.dataset.asset];
  document.querySelector('#asset-title').textContent=title;
  const container=document.querySelector('#asset-content');container.replaceChildren();
  [intro,label].forEach(text=>{const p=document.createElement('p');p.textContent=text;container.append(p)});
  const list=document.createElement('ul');items.forEach(text=>{const li=document.createElement('li');li.textContent=text;list.append(li)});container.append(list);
  const p=document.createElement('p');p.textContent=closing;container.append(p);
  assetDialog.showModal();
 }));
})();
// Gentle depth without visual noise; active only while a section is on screen.
(() => {
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const sections=[...document.querySelectorAll('.section')];
 if('IntersectionObserver' in window){const ambientObserver=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('ambient-active',e.isIntersecting)),{rootMargin:'60px'});sections.forEach(s=>ambientObserver.observe(s));}
 let parallaxFrame=0,scrollFrame=0;
 function depth(){parallaxFrame=0;const hero=document.querySelector('.hero');if(preference.matches){hero.style.setProperty('--hero-drift','0px');return}hero.style.setProperty('--hero-drift',`${Math.min(24,window.scrollY*.045)}px`)}
 window.addEventListener('scroll',()=>{if(!parallaxFrame)parallaxFrame=requestAnimationFrame(depth)},{passive:true});preference.addEventListener('change',depth);depth();
 function stopScroll(){cancelAnimationFrame(scrollFrame);scrollFrame=0}
 ['wheel','touchstart'].forEach(type=>window.addEventListener(type,stopScroll,{passive:true}));window.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End'].includes(e.key))stopScroll()});
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.getElementById(a.getAttribute('href').slice(1));if(!target)return;e.preventDefault();stopScroll();
  const start=window.scrollY,offset=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||112,end=Math.max(0,Math.min(document.documentElement.scrollHeight-innerHeight,start+target.getBoundingClientRect().top-offset));
  history.pushState(null,'',a.getAttribute('href'));
  if(preference.matches){window.scrollTo({top:end,behavior:'instant'});return}
  let began;const duration=Math.min(1600,1050+Math.abs(end-start)*.09);
  function frame(time){if(began===undefined)began=time;const t=Math.min(1,(time-began)/duration),eased=t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2;window.scrollTo({top:start+(end-start)*eased,behavior:'instant'});if(t<1)scrollFrame=requestAnimationFrame(frame);else scrollFrame=0}
  scrollFrame=requestAnimationFrame(frame);
 }));
})();

// A single, viewport-triggered reveal for each asset profile.
(() => {
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const cards=[...document.querySelectorAll('.asset-feature')];
 if(!cards.length||preference.matches||!('IntersectionObserver' in window))return;
 document.body.classList.add('feature-ready');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
 }),{threshold:.16,rootMargin:'0px 0px -40px 0px'});
 cards.forEach(card=>observer.observe(card));
 preference.addEventListener('change',()=>{if(preference.matches){observer.disconnect();document.body.classList.remove('feature-ready')}});
})();

// Both pages retain the current section when changing language.
(() => {
 document.querySelectorAll('.language-switch').forEach(link=>link.addEventListener('click',()=>{const url=new URL(link.href);url.hash=location.hash;link.href=url.href}));
 const dialog=document.querySelector('#privacy-dialog');let opener;
 document.querySelectorAll('[data-open-privacy]').forEach(button=>button.addEventListener('click',()=>{opener=button;dialog.showModal()}));
 dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>opener?.focus());
})();
