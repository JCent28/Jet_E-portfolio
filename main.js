// ============================================================
// main.js — Portfolio Interactivity & Rendering
// Reads all content from data.js (PORTFOLIO_DATA)
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 700, once: true, offset: 80 });
  buildAll();
  initScrollBehavior();
  initThemeToggle();
  initHamburger();
  initScrollTop();
  initContactForm();
  initModal();
  initLightbox();
  initTyping();
});

// ── IMAGE HELPER ─────────────────────────────────────────────
// Returns an <img> tag for file paths, or a <span> for emojis.
function renderImage(src, alt = "", cssClass = "") {
  const isFile = /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(src);
  if (isFile) {
    return `<img src="${src}" alt="${alt}" class="${cssClass}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.parentElement.innerHTML='🖼️'">`;
  }
  return `<span>${src}</span>`;
}

// ── BUILD ALL SECTIONS ───────────────────────────────────────
function buildAll() {
  buildHero();
  buildAbout();
  buildSkills();
  buildCerts();
  buildProjects();
  buildExperience();
  buildContact();
  buildFooter();
}

// ── HERO ────────────────────────────────────────────────────
function buildHero() {
  const { hero } = PORTFOLIO_DATA;
  document.querySelector(".hero-greeting").textContent = hero.greeting;
  document.querySelector(".hero-name").textContent = hero.name;
  document.querySelector(".hero-tagline").textContent = hero.tagline;

  const cta = document.getElementById("hero-cta");
  cta.textContent = hero.cta.label;
  cta.href = hero.cta.target;

  const cta2 = document.getElementById("hero-cta2");
  cta2.textContent = hero.ctaSecondary.label;
  cta2.href = hero.ctaSecondary.target;

  // Nav initials
  const initials = hero.name.split(" ").map(w => w[0]).join("");
  document.getElementById("nav-name").textContent = initials;
}

// ── TYPING ANIMATION ────────────────────────────────────────
function initTyping() {
  const roles = PORTFOLIO_DATA.hero.roles;
  const el = document.getElementById("typing-text");
  let roleIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 55 : 95);
  }
  type();
}

// ── ABOUT ───────────────────────────────────────────────────
function buildAbout() {
  const { about } = PORTFOLIO_DATA;

  // Bio
  const bioEl = document.getElementById("about-bio");
  about.bio.forEach(p => {
    const el = document.createElement("p");
    el.textContent = p;
    el.style.color = "var(--text-muted)";
    el.style.marginBottom = "1rem";
    el.style.lineHeight = "1.8";
    bioEl.appendChild(el);
  });

  // Education
  const { education: edu } = about;
  document.getElementById("about-edu").innerHTML = `
    <div class="about-edu-icon">🎓</div>
    <div class="about-edu-text">
      <strong>${edu.degree}</strong>
      <span>${edu.school} · ${edu.year}</span>
      <span class="about-edu-honors">${edu.honors}</span>
    </div>
  `;

  // Badge
  document.getElementById("edu-badge").textContent = "4th Year";

  // Interests
  const interestsEl = document.getElementById("about-interests");
  about.interests.forEach(interest => {
    const tag = document.createElement("span");
    tag.className = "interest-tag";
    tag.textContent = interest;
    interestsEl.appendChild(tag);
  });

  // Stats
  const statsEl = document.getElementById("stats-grid");
  about.stats.forEach(stat => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <span class="stat-value" data-target="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</span>
      <span class="stat-label">${stat.label}</span>
    `;
    statsEl.appendChild(card);
  });

  // Animate counters on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(statsEl);
}

function animateCounters() {
  document.querySelectorAll(".stat-value").forEach(el => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix;
    let current = 0;
    const step = Math.ceil(target / 50);
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(interval);
    }, 30);
  });
}

// ── SKILLS ──────────────────────────────────────────────────
function buildSkills() {
  const { skills } = PORTFOLIO_DATA;
  const categories = ["All", ...new Set(skills.map(s => s.category))];

  // Filters
  const filtersEl = document.getElementById("skill-filters");
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "All" ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterSkills(cat);
    });
    filtersEl.appendChild(btn);
  });

  // Cards
  const gridEl = document.getElementById("skills-grid");
  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.dataset.category = skill.category;
    card.innerHTML = `
      <div class="skill-icon">${skill.icon}</div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-bar">
        <div class="skill-fill" data-level="${skill.level}"></div>
      </div>
      <div class="skill-level">${skill.level}%</div>
    `;
    gridEl.appendChild(card);
  });

  // Animate bars on scroll
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-fill").forEach(fill => {
          fill.style.width = fill.dataset.level + "%";
        });
        barObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });
  barObserver.observe(gridEl);
}

function filterSkills(category) {
  document.querySelectorAll(".skill-card").forEach(card => {
    if (category === "All" || card.dataset.category === category) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// ── CERTIFICATIONS ───────────────────────────────────────────
function buildCerts() {
  const wrapper = document.getElementById("cert-swiper-wrapper");
  PORTFOLIO_DATA.certifications.forEach(cert => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="cert-card" style="--cert-color:${cert.color}">
        <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${cert.color};border-radius:var(--radius) var(--radius) 0 0"></div>
        <span class="cert-badge">${cert.badge}</span>
        <div class="cert-title">${cert.title}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-date">Issued ${cert.date}</div>
        <a href="${cert.link}" target="_blank" class="cert-link">View Certificate ↗</a>
      </div>
    `;
    wrapper.appendChild(slide);
  });

  new Swiper(".cert-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    pagination: { el: ".cert-pagination", clickable: true },
    navigation: { prevEl: ".cert-prev", nextEl: ".cert-next" },
    breakpoints: {
      600: { slidesPerView: 2 },
      900: { slidesPerView: 3 },
      1100: { slidesPerView: 4 },
    },
  });
}

// ── PROJECTS ─────────────────────────────────────────────────
const activeProject = { data: null };

function buildProjects() {
  const { projects } = PORTFOLIO_DATA;
  const featured = projects.find(p => p.featured);

  // Featured
  if (featured) {
    const el = document.getElementById("featured-project");
    el.innerHTML = `
      <div class="featured-card">
        <div class="featured-badge"></div>
        <div class="featured-left">
          <h3>${featured.title}</h3>
          <p>${featured.description}</p>
          <div class="featured-tech">
            ${featured.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="featured-actions">
            <a href="${featured.github}" target="_blank" class="btn btn-primary">GitHub →</a>
            <a href="${featured.demo}" target="_blank" class="btn btn-ghost">Live Demo</a>
            <button class="btn btn-ghost" onclick='openModal(${JSON.stringify(featured).replace(/'/g,"&#39;")})'>Full Details</button>
          </div>
        </div>
        <div class="featured-preview">
          <div class="preview-screens">
            ${featured.images.map((img, i) => `
              <div class="preview-screen ${i===0?"active":""}" title="${featured.imageLabels[i]}" style="overflow:hidden;position:relative;">
                ${renderImage(img, featured.imageLabels[i])}
              </div>
            `).join("")}
          </div>
          <div class="preview-screen-label">${featured.imageLabels[0]}</div>
        </div>
      </div>
    `;

    // Image switcher
    el.querySelectorAll(".preview-screen").forEach((screen, i) => {
      screen.addEventListener("click", () => {
        el.querySelectorAll(".preview-screen").forEach(s => s.classList.remove("active"));
        screen.classList.add("active");
        el.querySelector(".preview-screen-label").textContent = featured.imageLabels[i];
      });
    });
  }

  // Year Filter Tabs
  const years = ["All", ...new Set(projects.filter(p => !p.featured).map(p => p.year))];
  const filtersEl = document.getElementById("year-filters");
  years.forEach(year => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (year === "All" ? " active" : "");
    btn.textContent = year;
    btn.addEventListener("click", () => {
      document.querySelectorAll("#year-filters .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterProjects(year);
    });
    filtersEl.appendChild(btn);
  });

  // Project Cards (non-featured)
  const gridEl = document.getElementById("projects-grid");
  projects.filter(p => !p.featured).forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.year = proj.year;
    card.innerHTML = `
      <div class="project-card-emoji">${renderImage(proj.images[0], proj.title)}</div>
      <div class="project-card-year">${proj.year}</div>
      <div class="project-card-title">${proj.title}</div>
      <div class="project-card-desc">${proj.description}</div>
      <div class="project-card-tech">
        ${proj.tech.slice(0,3).map(t => `<span class="project-mini-tag">${t}</span>`).join("")}
        ${proj.tech.length > 3 ? `<span class="project-mini-tag">+${proj.tech.length-3}</span>` : ""}
      </div>
    `;
    card.addEventListener("click", () => openModal(proj));
    gridEl.appendChild(card);
  });
}

function filterProjects(year) {
  document.querySelectorAll(".project-card").forEach(card => {
    const match = year === "All" || card.dataset.year === year;
    card.classList.toggle("hidden", !match);
  });
}

// ── MODAL ───────────────────────────────────────────────────
function initModal() {
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

// ── LIGHTBOX STATE ────────────────────────────────────────────
const lightboxState = { images: [], labels: [], index: 0 };

function openLightbox(images, labels, startIndex) {
  lightboxState.images = images;
  lightboxState.labels = labels;
  lightboxState.index = startIndex;
  renderLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderLightbox() {
  const { images, labels, index } = lightboxState;
  const wrap = document.getElementById("lightbox-img-wrap");
  const labelEl = document.getElementById("lightbox-label");
  const src = images[index];
  const isFile = /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(src);
  wrap.innerHTML = isFile
    ? `<img src="${src}" alt="${labels[index]}">`
    : `<span>${src}</span>`;
  labelEl.textContent = labels[index] || "";
  document.getElementById("lightbox-prev").classList.toggle("hidden", index === 0);
  document.getElementById("lightbox-next").classList.toggle("hidden", index === images.length - 1);
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function initLightbox() {
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", e => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.getElementById("lightbox-prev").addEventListener("click", e => {
    e.stopPropagation();
    if (lightboxState.index > 0) { lightboxState.index--; renderLightbox(); }
  });
  document.getElementById("lightbox-next").addEventListener("click", e => {
    e.stopPropagation();
    if (lightboxState.index < lightboxState.images.length - 1) { lightboxState.index++; renderLightbox(); }
  });
  document.addEventListener("keydown", e => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft" && lightboxState.index > 0) { lightboxState.index--; renderLightbox(); }
    if (e.key === "ArrowRight" && lightboxState.index < lightboxState.images.length - 1) { lightboxState.index++; renderLightbox(); }
  });
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(proj) {
  const body = document.getElementById("modal-body");

  // Build main image display
  const firstSrc = proj.images[0];
  const isFirstFile = /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(firstSrc);

  body.innerHTML = `
    <div class="modal-gallery">
      <div class="modal-main-img" id="modal-main-img" data-current="0">
        ${isFirstFile
          ? `<img src="${firstSrc}" alt="${proj.imageLabels[0]}" id="modal-main-imgel">`
          : `<span id="modal-main-emoji">${firstSrc}</span>`}
        <span class="modal-zoom-hint">🔍 Click to enlarge</span>
      </div>
      ${proj.images.length > 1 ? `
      <div class="modal-thumb-strip" id="modal-thumb-strip">
        ${proj.images.map((img, i) => {
          const isFile = /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(img);
          return `
          <div class="modal-img-thumb ${i===0?"active":""}" data-idx="${i}">
            ${isFile ? `<img src="${img}" alt="${proj.imageLabels[i]}">` : `<span>${img}</span>`}
            <span class="modal-img-label">${proj.imageLabels[i]}</span>
          </div>`;
        }).join("")}
      </div>` : ""}
    </div>
    <div class="modal-year-badge">${proj.year} Project</div>
    <div class="modal-title">${proj.title}</div>
    <div class="modal-desc">${proj.longDescription}</div>
    <div class="modal-tech">
      ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
    </div>
    <div class="modal-actions">
      <a href="${proj.github}" target="_blank" class="btn btn-primary">View on GitHub →</a>
      <a href="${proj.demo}" target="_blank" class="btn btn-ghost">Live Demo ↗</a>
    </div>
  `;

  // Thumbnail click → swap main image
  body.querySelectorAll(".modal-img-thumb").forEach((thumb, i) => {
    thumb.addEventListener("click", () => {
      body.querySelectorAll(".modal-img-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");

      const mainWrap = document.getElementById("modal-main-img");
      const src = proj.images[i];
      const isFile = /\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$/i.test(src);
      // Fade swap
      mainWrap.style.opacity = "0.4";
      setTimeout(() => {
        mainWrap.innerHTML = isFile
          ? `<img src="${src}" alt="${proj.imageLabels[i]}"><span class="modal-zoom-hint">🔍 Click to enlarge</span>`
          : `<span>${src}</span><span class="modal-zoom-hint">🔍 Click to enlarge</span>`;
        mainWrap.dataset.current = i;
        mainWrap.style.opacity = "1";
      }, 160);
    });
  });

  // Main image click → open lightbox
  body.querySelector(".modal-main-img").addEventListener("click", () => {
    const idx = +body.querySelector(".modal-main-img").dataset.current || 0;
    openLightbox(proj.images, proj.imageLabels, idx);
  });

  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ── EXPERIENCE ──────────────────────────────────────────────
function buildExperience() {
  const timelineEl = document.getElementById("timeline");
  PORTFOLIO_DATA.experience.forEach((exp, i) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.setAttribute("data-aos", "fade-up");
    item.setAttribute("data-aos-delay", i * 100);
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-icon">${exp.icon}</div>
      <div class="timeline-role">${exp.role}</div>
      <div class="timeline-company">${exp.company}</div>
      <div class="timeline-meta">${exp.period} · ${exp.location}</div>
      <div class="timeline-desc">${exp.description}</div>
      <div class="timeline-tags">
        ${exp.highlights.map(h => `<span class="timeline-tag">${h}</span>`).join("")}
      </div>
    `;
    timelineEl.appendChild(item);
  });
}

// ── CONTACT ─────────────────────────────────────────────────
function buildContact() {
  const { contact } = PORTFOLIO_DATA;
  const infoEl = document.getElementById("contact-info");
  infoEl.innerHTML = `
    <div class="contact-detail">
      <div class="contact-detail-icon">📧</div>
      <div>
        <div class="contact-detail-label">Email</div>
        <div class="contact-detail-value">${contact.email}</div>
      </div>
    </div>
    <div class="contact-detail">
      <div class="contact-detail-icon">📍</div>
      <div>
        <div class="contact-detail-label">Location</div>
        <div class="contact-detail-value">${contact.location}</div>
      </div>
    </div>
    <div class="contact-avail">
      <span class="avail-dot"></span>
      ${contact.availability}
    </div>
    <div class="contact-socials">
      ${contact.socials.map(s => `
        <a href="${s.url}" target="_blank" class="social-link">
          <span>${s.icon}</span> ${s.label}
        </a>
      `).join("")}
    </div>
  `;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.textContent = "Sending...";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = "Send Message →";
      btn.disabled = false;
      form.reset();
      showToast("✅ Message sent! I'll get back to you soon.");
    }, 1500);
  });
}

// ── FOOTER ──────────────────────────────────────────────────
function buildFooter() {
  document.getElementById("footer-name").textContent = PORTFOLIO_DATA.hero.name;
  const socialsEl = document.getElementById("footer-socials");
  PORTFOLIO_DATA.contact.socials.forEach(s => {
    const a = document.createElement("a");
    a.href = s.url;
    a.target = "_blank";
    a.className = "footer-social-link";
    a.title = s.label;
    a.textContent = s.icon;
    socialsEl.appendChild(a);
  });
}

// ── SCROLL BEHAVIOR ──────────────────────────────────────────
function initScrollBehavior() {
  const navbar = document.getElementById("navbar");
  const scrollBtn = document.getElementById("scroll-top");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;

    // Navbar glass
    navbar.classList.toggle("scrolled", y > 30);

    // Scroll to top button
    scrollBtn.classList.toggle("visible", y > 400);

    // Active nav highlight
    let current = "";
    sections.forEach(section => {
      if (y >= section.offsetTop - 120) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        closeMobileMenu();
      }
    });
  });
}

// ── SCROLL TO TOP ────────────────────────────────────────────
function initScrollTop() {
  document.getElementById("scroll-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── THEME TOGGLE ─────────────────────────────────────────────
function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme") || "dark";
  root.dataset.theme = saved;
  icon.textContent = saved === "dark" ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    const current = root.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    icon.textContent = next === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", next);
  });
}

// ── HAMBURGER / MOBILE MENU ──────────────────────────────────
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = mobileMenu.querySelector("ul");

  // Clone nav links into mobile menu
  document.querySelectorAll(".nav-link").forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.textContent;
    a.addEventListener("click", closeMobileMenu);
    li.appendChild(a);
    mobileLinks.appendChild(li);
  });

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    const spans = hamburger.querySelectorAll("span");
    const isOpen = mobileMenu.classList.contains("open");
    spans[0].style.transform = isOpen ? "translateY(7px) rotate(45deg)" : "";
    spans[1].style.opacity = isOpen ? "0" : "";
    spans[2].style.transform = isOpen ? "translateY(-7px) rotate(-45deg)" : "";
  });
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("open");
  const spans = document.querySelectorAll(".hamburger span");
  spans.forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
}

// ── TOAST ────────────────────────────────────────────────────
function showToast(message, duration = 3500) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}
