
const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.primary-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const e=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!e));nav.classList.toggle('open')})}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
