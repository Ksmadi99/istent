// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Easter Egg: Type "1ST" → intense glitch
let typed = '';
document.addEventListener('keydown', e => {
  typed += e.key.toLowerCase();
  if (typed.includes('1st')) {
    document.body.classList.add('intense-glitch');
    setTimeout(() => document.body.classList.remove('intense-glitch'), 2000);
    typed = '';
  }
  if (typed.length > 10) typed = '';
});

// Add intense glitch style
const style = document.createElement('style');
style.textContent = `
  .intense-glitch .glitch { animation: glitch 0.1s infinite !important; }
`;
document.head.appendChild(style);
