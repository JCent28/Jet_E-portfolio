# 🎓 IT Student E-Portfolio

A modern, interactive, and fully responsive portfolio website for a 4th-year IT student. Built with **vanilla HTML, CSS, and JavaScript** — no build tools required. Just open and go.

---

## 📁 File Structure

```
portfolio/
├── index.html      ← Main HTML (structure only, no hardcoded content)
├── style.css       ← All styles + dark/light theme
├── main.js         ← All interactivity & DOM rendering
├── data.js         ← ✏️ EDIT ALL YOUR CONTENT HERE
└── README.md       ← You're reading this
```

---

## ✏️ How to Edit Your Content

**Open `data.js`** — this is the ONLY file you need to edit.

Everything is labeled with comments:

```js
// ─────────────────────────────────────────────
// 🏠 HERO SECTION — EDIT HERE
// ─────────────────────────────────────────────
hero: {
  name: "Your Name",
  ...
}
```

### To add a new project:
```js
{
  year: "4th Year",           // Which year tab it appears under
  title: "My New Project",
  featured: false,            // Set true to make it the featured hero card
  description: "Short description (shown on card)",
  longDescription: "Full description (shown in modal popup)",
  tech: ["React", "Node.js", "MongoDB"],
  images: ["💻", "📊", "📱"],        // Emoji placeholders (or swap for real images)
  imageLabels: ["Dashboard", "Charts", "Mobile"],
  github: "https://github.com/yourrepo",
  demo: "https://yoursite.com",
  category: "Full-Stack",
},
```

### To add a certification:
```js
{
  title: "Cert Name",
  issuer: "Issuing Body",
  date: "2024",
  badge: "🏅",
  color: "#ff5722",    // Accent color for the top bar
  link: "https://your-cert-link.com",
},
```

---

## 🚀 Running Locally

No build step needed! Just open `index.html` in your browser.

For best results, use a local server (avoids CORS issues):

**Option A — VS Code Live Server:**
1. Install the "Live Server" extension
2. Right-click `index.html` → Open with Live Server

**Option B — Python:**
```bash
cd portfolio/
python -m http.server 8000
# Open http://localhost:8000
```

**Option C — Node.js:**
```bash
npx serve .
```

---

## 🌐 Deploying to Vercel (Free)

1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```
3. From the portfolio folder:
   ```bash
   vercel
   ```
4. Follow the prompts — your site will be live in ~30 seconds!

**Or use the Vercel Dashboard:**
1. Push your folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → Deploy
4. Done! You get a free `.vercel.app` URL

---

## 🌐 Deploying to GitHub Pages (Free)

1. Create a GitHub repo (e.g., `my-portfolio`)
2. Push all files to the `main` branch
3. Go to Settings → Pages → Source: `main` branch, `/root`
4. Your site will be live at `https://yourusername.github.io/my-portfolio`

---

## 🎨 Customization Tips

### Change Color Accent
In `style.css`, find `:root` and change:
```css
--accent: #7c6af7;       /* Main accent color */
--green: #2dd4a0;        /* Secondary accent (green) */
```

### Add Real Photos
Replace the emoji `🎓` in the avatar section (in `data.js` / `main.js`) with an `<img>` tag referencing your photo.

### Add Real Project Images
Replace the emoji arrays in each project's `images: []` field. For HTML images, update `main.js`'s `buildProjects()` function to render `<img>` tags instead of emojis.

### Change Fonts
In `index.html`, swap the Google Fonts import link. Then update `style.css`:
```css
--font-display: 'Your Display Font', sans-serif;
--font-body: 'Your Body Font', sans-serif;
```

---

## 📦 External Libraries Used

| Library | Purpose | CDN |
|---------|---------|-----|
| [AOS](https://michalsnik.github.io/aos/) | Scroll animations | ✅ |
| [Swiper.js](https://swiperjs.com/) | Certifications carousel | ✅ |
| [Google Fonts](https://fonts.google.com/) | Syne + DM Sans + JetBrains Mono | ✅ |

All loaded from CDN — no npm install needed.

---

## ✅ Features Checklist

- [x] Dark / Light mode toggle (persisted in localStorage)
- [x] Typing animation (hero section)
- [x] Animated stats counters
- [x] Skill filter tabs (Programming / Web / Tools)
- [x] Animated skill progress bars
- [x] Certifications carousel (Swiper.js)
- [x] Projects filter by year level (1st–4th Year)
- [x] Featured project card (Green Stairs System)
- [x] Project modal popups with image slider
- [x] Scroll-triggered animations (AOS)
- [x] Active nav highlight on scroll
- [x] Scroll-to-top button
- [x] Contact form with toast notification
- [x] Responsive (mobile/tablet/desktop)
- [x] Timeline for Experience section
- [x] Single data file (`data.js`) for all content

---

Built for job applications · Designed to stand out 🚀
