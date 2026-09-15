# Pranjali — Tech + MBA Strategic Portfolio

A modern, highly animated, dark luxury portfolio website showcasing 20+ engineering projects, 10+ hackathon podium finishes, AI/ML models, residual risk analytics, and commercial MBA case studies.

---

## 🚀 How to Host Live on GitHub Pages (Free Hosting Link)

You can publish this portfolio live in less than 2 minutes using either **Method 1 (Easiest — No commands needed)** or **Method 2 (Git CLI)**:

### Method 1: Web Browser (Drag & Drop — Recommended if Git is not installed)
1. Go to [GitHub.com](https://github.com/) and click **New Repository**.
2. Name the repository:
   - **`pranjali9590.github.io`** (Your website URL will be `https://pranjali9590.github.io`)
3. Make sure it is set to **Public**, and leave all initialize checkboxes unchecked. Click **Create repository**.
4. On the quick setup page, click the link: **"uploading an existing file"**.
5. Drag and drop the following files and folders from this directory into GitHub:
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/` (the entire folder containing `img/`)
6. Click **Commit changes**.
7. Go to **Settings** &rarr; **Pages** (in the left sidebar).
8. Under **Build and deployment** &rarr; **Branch**, select `main` (or `master`) and `/ (root)`, then click **Save**.
9. In ~60 seconds, your portfolio is live at:
   **`https://pranjali9590.github.io`**

---

### Method 2: Git Command Line
If you have Git installed on your system, open PowerShell in this directory (`c:\Users\prata\Desktop\Portfilio`) and run:

```bash
git init
git add index.html style.css script.js assets README.md
git commit -m "Launch Tech + MBA animated portfolio"
git branch -M main
git remote add origin https://github.com/pranjali9590/pranjali9590.github.io.git
git push -u origin main
```

Then in GitHub &rarr; **Settings** &rarr; **Pages**, ensure source is set to `main` branch root `/`.

---

## 🎨 Design System & Highlights
- **Obsidian Dark Luxury Aesthetic**: `#070a12` dark background accented with **Neon Cyan** (Algorithms & Tech), **Emerald Green** (Data Science & Healthcare), and **Executive Amber/Gold** (MBA Strategy & Trophies).
- **Interactive Canvas Network**: Custom particle neural network + dynamic financial sinusoidal waves responding to cursor movement.
- **Dynamic Typing Roles**: Alternating between AI/ML Specialist, GLIM MBA Candidate, Strategic Product Manager, and Risk Modeler.
- **Interactive Lightbox Modal**: High-res fullscreen preview with Next/Previous arrows, caption details, and ESC key closing for all 21 project screenshots, trophies, and award ceremony photos.
- **Interactive Multi-Filter Tabs**: Filter instantly between All Solutions (20+), Strategic Case Studies (TVS & Saregama), AI & Analytics, and Full-Stack Platforms.
- **Live Counter Animations**: 20+ Projects, 10+ Podiums, 9.04 CGPA, 100+ Onboarded Gyms, 300+ Problems Solved.

---

## 📁 Key File Structure
```
├── index.html                  # Complete portfolio webpage
├── style.css                   # Responsive dark-theme styling & glassmorphism
├── script.js                   # Interactive canvas, typing effect, lightbox, filters
├── README.md                   # Deployment and hosting instructions
└── assets/
    └── img/                    # Cleanly organized web assets
        ├── profile.jpeg        # Executive headshot
        ├── tvs-*.png           # TVS Epic 8.0 Challenge (7 screens)
        ├── un40-*.png          # Saregama UN40 Case Study (2 slides)
        ├── hackathon-*.jpg     # Trophies and stage award ceremony
        └── *-*.jpg / *-*.png   # Project screenshots
```
