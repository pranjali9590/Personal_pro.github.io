/**
 * PRANJALI // TECH + MBA PORTFOLIO
 * Interactive JavaScript: Canvas Neural & Financial Network,
 * Dynamic Typing, Project Lightbox, Stat Counters, Smooth Scroll & Filters
 */

document.addEventListener('DOMContentLoaded', () => {
  initNeuralFinancialCanvas();
  initTypingEffect();
  initCounters();
  initProjectFilters();
  initLightbox();
  initNavigation();
  initContactForm();
});

/* ==========================================================================
   1. NEURAL & FINANCIAL NETWORK CANVAS ANIMATION (Tech + MBA Fusion)
   ========================================================================== */
function initNeuralFinancialCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, particles = [];
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 16000), 80);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
      // 60% cyan (tech), 30% amber (MBA/finance), 10% emerald (growth/data)
      const rand = Math.random();
      if (rand < 0.6) {
        this.color = 'rgba(0, 240, 255, ';
      } else if (rand < 0.85) {
        this.color = 'rgba(245, 158, 11, ';
      } else {
        this.color = 'rgba(16, 185, 129, ';
      }
      this.baseAlpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.baseAlpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color + '0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Draw floating chart trendlines in the background for MBA motif
  let time = 0;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Subtle financial sinus wave representing growth
    time += 0.008;
    ctx.beginPath();
    ctx.moveTo(0, height * 0.7 + Math.sin(time) * 30);
    for (let x = 0; x < width; x += 40) {
      const y = height * 0.7 + Math.sin(x * 0.003 + time) * 35 + Math.cos(x * 0.0015 - time * 0.5) * 20;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.04)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Secondary tech wave
    ctx.beginPath();
    ctx.moveTo(0, height * 0.3 + Math.cos(time * 0.7) * 25);
    for (let x = 0; x < width; x += 50) {
      const y = height * 0.3 + Math.cos(x * 0.0025 - time * 0.7) * 40;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.035)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Update & connect particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. DYNAMIC TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const textElement = document.getElementById('typing-text');
  if (!textElement) return;

  const roles = [
    'AI/ML & Predictive Analytics Specialist',
    'MBA Candidate @ GLIM Chennai',
    'Tech-Driven Strategic Product Manager',
    'Financial Modeling & Residual Risk Architect',
    'B.Tech Computer Science (9.04 CGPA)',
    '10+ Time Hackathon Winner & Team Captain'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 65;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      textElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 30;
    } else {
      textElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end of sentence
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before new sentence
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   3. ANIMATED COUNTERS
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = counter.getAttribute('data-target').includes('.');
          const duration = 1800; // ms
          const startTime = performance.now();

          function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeOut;

            if (isDecimal) {
              counter.textContent = currentVal.toFixed(2);
            } else {
              counter.textContent = Math.floor(currentVal);
            }

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              if (isDecimal) {
                counter.textContent = target.toFixed(2);
              } else {
                counter.textContent = target;
              }
            }
          }

          requestAnimationFrame(updateCount);
        });
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.stats-container');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   4. PROJECT FILTERING TABS
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const flagshipCards = document.querySelectorAll('.flagship-card');

  if (!filterButtons.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      // Filter standard project cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });

      // Filter flagship cards if relevant
      flagshipCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. FULLSCREEN IMAGE LIGHTBOX MODAL
   ========================================================================== */
let lightboxList = [];
let currentLightboxIndex = 0;

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalTitle = document.getElementById('lightbox-title');
  const modalDesc = document.getElementById('lightbox-desc');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  // Gather all previewable images
  const previewElements = document.querySelectorAll('[data-lightbox-src]');
  lightboxList = Array.from(previewElements).map(el => ({
    src: el.getAttribute('data-lightbox-src'),
    title: el.getAttribute('data-lightbox-title') || 'Project Screenshot',
    desc: el.getAttribute('data-lightbox-desc') || ''
  }));

  previewElements.forEach((el, idx) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });

  function openLightbox(index) {
    if (!lightboxList.length) return;
    currentLightboxIndex = index;
    updateLightboxContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateLightboxContent() {
    const item = lightboxList[currentLightboxIndex];
    if (!item) return;
    modalImg.src = item.src;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxList.length;
    updateLightboxContent();
  }

  function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxList.length) % lightboxList.length;
    updateLightboxContent();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content-wrap')) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Flagship Thumbnail Switcher
  initThumbnailSwitchers();
}

function initThumbnailSwitchers() {
  const thumbStrips = document.querySelectorAll('.thumb-strip');
  thumbStrips.forEach(strip => {
    const thumbs = strip.querySelectorAll('.thumb-item');
    const mainWrap = strip.parentElement.querySelector('.main-preview-wrap');
    if (!mainWrap) return;
    const mainImg = mainWrap.querySelector('img');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        const newSrc = thumb.getAttribute('data-full-src');
        const newTitle = thumb.getAttribute('data-title');
        const newDesc = thumb.getAttribute('data-desc');

        if (newSrc && mainImg) {
          mainImg.src = newSrc;
          mainWrap.setAttribute('data-lightbox-src', newSrc);
          mainWrap.setAttribute('data-lightbox-title', newTitle);
          mainWrap.setAttribute('data-lightbox-desc', newDesc);
        }
      });
    });
  });
}

/* ==========================================================================
   6. NAVIGATION & SMOOTH SCROLLING
   ========================================================================== */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Navbar shadow on scroll
    if (scrollY > 50) {
      navbar.style.borderBottomColor = 'rgba(0, 240, 255, 0.2)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
    } else {
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      navbar.style.boxShadow = 'none';
    }
  });
}

/* ==========================================================================
   7. CONTACT FORM SIMULATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type=\"submit\"]');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '<i class=\"fa-solid fa-spinner fa-spin\"></i> Sending Message...';

    // Simulate sending
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class=\"fa-solid fa-check\"></i> Message Sent!';
      form.reset();

      if (status) {
        status.textContent = 'Thank you! Your message has been received. Pranjali will get back to you shortly.';
        status.classList.add('success');
      }

      setTimeout(() => {
        btn.innerHTML = originalText;
        if (status) status.classList.remove('success');
      }, 5000);
    }, 1200);
  });
}
