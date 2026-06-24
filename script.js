(function initParticles() {
    const c = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.width = p.style.height = (Math.random() * 4 + 3) + 'px';
        p.style.animationDuration = (Math.random() * 20 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        c.appendChild(p);
    }
})();

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
fadeEls.forEach(el => observer.observe(el));

const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => backBtn.classList.toggle('show', window.scrollY > 400));
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
