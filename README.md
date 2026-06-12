# Debasish Lenka — Portfolio 🌐

Personal portfolio website for **Debasish Lenka**, Systems and Network Engineer.

🔗 **Live site:** https://YOUR_GITHUB_USERNAME.github.io/debasish-portfolio

## 📁 Project Structure

```
debasish-portfolio/
├── index.html                  ← Main portfolio page
├── css/
│   └── style.css               ← All styles
├── js/
│   └── script.js               ← Interactions & animations
├── images/
│   ├── icons/                  ← Profile photo, LinkedIn SVG
│   └── certificates/           ← CCNA, Fortinet, Google, IBM, Cisco
├── files/
│   └── debasish_lenka_cv.pdf   ← Downloadable CV
├── projects/                   ← Individual project pages
│   ├── cisco-meraki-mx75.html
│   ├── manageengine-dlp.html
│   ├── network-infrastructure.html
│   ├── helpdesk-support.html
│   ├── o365-administration.html
│   └── unifi-access-points.html
├── Dockerfile                  ← Nginx container
├── nginx.conf                  ← Web server config
└── .github/workflows/
    └── deploy.yml              ← CI/CD pipeline
```

## 🚀 How Deployment Works

Every `git push` to `main`:
1. GitHub Actions builds a Docker image → pushes to Docker Hub
2. Deploys static files to GitHub Pages
3. Site is live in ~60 seconds

## 🛠 Tech Stack

- HTML5 · CSS3 · JavaScript
- Bootstrap 5.3
- Docker + Nginx
- GitHub Actions (CI/CD)
- GitHub Pages (free hosting)

## 💻 Run Locally

```bash
# Option 1: Docker (recommended)
docker build -t debasish-portfolio .
docker run -p 8080:80 debasish-portfolio
# Open http://localhost:8080

# Option 2: Direct (no server needed)
open index.html
```
