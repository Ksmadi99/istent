// Mobile Menu Toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// Language Toggle (Placeholder)
document.querySelector('.lang-select').addEventListener('change', (e) => {
  alert(`Language switched to: ${e.target.value === 'kr' ? '한국어' : 'English'}`);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade In on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card').forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});
