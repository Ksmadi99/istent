// Mobile Menu
document.querySelector('.hamburger').onclick = () => {
  document.querySelector('.nav-links').classList.toggle('active');
};

// Easter Egg: Type "1st"
let code = '';
document.addEventListener('keydown', e => {
  code += e.key.toLowerCase();
  if (code.includes('1st')) {
    document.body.classList.add('glitch-mode');
    setTimeout(() => document.body.classList.remove('glitch-mode'), 3000);
    code = '';
  }
  if (code.length > 5) code = code.slice(-3);
});

// Add glitch mode style
const style = document.createElement('style');
style.textContent = `
  .glitch-mode * { animation: glitch 0.1s infinite !important; }
  .glitch-mode .hero-bg { filter: hue-rotate(180deg) saturate(200%); }
`;
document.head.appendChild(style);
