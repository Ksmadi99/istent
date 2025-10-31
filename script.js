// Mobile Menu
document.querySelector('.hamburger').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('active'));

// Lang Toggle (Simple – swap text)
document.querySelector('.lang-toggle').addEventListener('change', (e) => {
  if (e.target.value === 'KR') document.documentElement.lang = 'ko';
  else document.documentElement.lang = 'en';
});

// Glitch Easter Egg: Type "IST"
let typed = ''; document.addEventListener('keydown', e => {
  typed += e.key.toUpperCase();
  if (typed.includes('IST')) {
    document.body.classList.add('glitch-mode');
    setTimeout(() => document.body.classList.remove('glitch-mode'), 2000);
    typed = '';
  }
  if (typed.length > 3) typed = '';
});
const style = document.createElement('style');
style.textContent = '.glitch-mode .glitch { animation:glitch 0.1s infinite !important; }';
document.head.appendChild(style);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', e => { e.preventDefault(); document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior:'smooth' }); }); });
