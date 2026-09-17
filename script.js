const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .section-heading, .price-card, .story-card').forEach((element) => {
  element.classList.add('reveal');
  revealObserver.observe(element);
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('name');
  status.textContent = `Bedankt${name ? `, ${name}` : ''}! We nemen binnen 24 uur contact met je op.`;
  form.reset();
});

document.querySelectorAll('.class-row button').forEach((button) => {
  button.addEventListener('click', () => {
    window.open('https://www.virtuagym.com/', '_blank', 'noopener,noreferrer');
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});

const heroStage = document.querySelector('#hero-stage');
const heroVideo = document.querySelector('.hero-video');

window.setTimeout(() => {
  heroStage.classList.add('is-expanded');
}, 2800);

heroVideo.addEventListener('error', () => {
  heroStage.classList.add('video-unavailable');
});