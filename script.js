// === TYPED in contact section ===
new Typed('#typeDisplay', {
  strings: [
    'Available for freelance...',
    'Open to collaborations...',
    'Love exciting projects...',
    'Let\'s build together!'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

// === 3D TILT ON CARDS ===
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) translateY(-10px) scale(1.01)`;
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s cubic-bezier(.17,.67,.35,1.2)';
  });
});

// === PHOTO 3D PARALLAX ON HERO ===
const photoWrap = document.getElementById('photoWrap');

document.addEventListener('mousemove', (e) => {
  if (!photoWrap) return;
  const rect = photoWrap.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = (e.clientX - cx) / (window.innerWidth / 2);
  const dy = (e.clientY - cy) / (window.innerHeight / 2);
  photoWrap.style.transform = `rotateY(${dx * 10}deg) rotateX(${-dy * 8}deg)`;
  photoWrap.style.transition = 'transform 0.15s ease';
});

document.addEventListener('mouseleave', () => {
  if (photoWrap) {
    photoWrap.style.transform = '';
    photoWrap.style.transition = 'transform 0.6s ease';
  }
});

// === SCROLL REVEAL with IntersectionObserver ===
const reveals = document.querySelectorAll('.work-card, .about-card, .skill-item, .float-card');

reveals.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// === SKILL BAR ANIMATION ===
const fills = document.querySelectorAll('.fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

fills.forEach(f => barObserver.observe(f));

// === NAVBAR ACTIVE STATE ===
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 250) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });

  // Navbar shrink on scroll
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 80) {
    navbar.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
  } else {
    navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
  }
});

// === BLOB MOUSE PARALLAX ===
document.addEventListener('mousemove', (e) => {
  const blobEls = document.querySelectorAll('.blob');
  const mx = (e.clientX / window.innerWidth - 0.5) * 2;
  const my = (e.clientY / window.innerHeight - 0.5) * 2;

  blobEls.forEach((blob, i) => {
    const factor = (i + 1) * 15;
    blob.style.transform += ` translate(${mx * factor}px, ${my * factor}px)`;
  });
});

// === FLOATING SHAPES RANDOM START ===
document.querySelectorAll('.shape').forEach(shape => {
  shape.style.setProperty('--r', Math.random() * 360 + 'deg');
});

// === HERO TEXT ENTRANCE ===
const heroTitle = document.querySelector('.hero-title');
const heroSub = document.querySelector('.hero-sub');
const heroCta = document.querySelector('.hero-cta');

if (heroTitle) {
  heroTitle.style.opacity = '0';
  heroTitle.style.transform = 'translateY(30px)';
  heroSub.style.opacity = '0';
  heroSub.style.transform = 'translateY(20px)';
  heroCta.style.opacity = '0';

  setTimeout(() => {
    heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';
  }, 200);

  setTimeout(() => {
    heroSub.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    heroSub.style.opacity = '1';
    heroSub.style.transform = 'translateY(0)';
  }, 450);

  setTimeout(() => {
    heroCta.style.transition = 'opacity 0.8s ease';
    heroCta.style.opacity = '1';
  }, 700);
}

