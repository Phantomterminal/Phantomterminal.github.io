# Swastik Dwivedi — Cyberpunk Portfolio

A responsive, animated personal portfolio built with plain HTML, CSS, and JavaScript. Designed for GitHub Pages; no build tools or package installation required.

## Features
- Cyberpunk visual system: neon cyan/pink, dark UI, scanlines, glow, terminal visuals
- Animated 3D-inspired orb and orbit rings made with CSS
- Canvas starfield, subtle cursor glow, reveal-on-scroll animations
- Mouse-responsive project cards, animated ticker, mobile navigation
- Responsive layout and reduced-motion support
- Project sections, learning timeline, skills, GitHub and LinkedIn links

## Run locally
Open `index.html` in a browser. For a local server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a repository named `Phantomterminal.github.io` (or use any repository and enable Pages in Settings).
2. Upload `index.html`, `style.css`, `script.js`, and this README to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the site.

## Personalize before publishing
- In `index.html`, replace the generic LinkedIn destination `https://www.linkedin.com/` with your exact profile URL.
- In `script.js`, set `CONFIG.email` to the email address you want to publish (or remove the copy-email button).
- Replace the project links currently pointing to your GitHub profile with each project's individual repository URL once available.
- Review the skill indicators and project descriptions so they accurately reflect your current experience and implementation status.
- If you have a resume PDF, add it to the repository and add a visible resume link.

## Project notes
Project cards currently describe the concepts and projects discussed in your portfolio brief. They intentionally link to your GitHub profile until individual repository URLs are supplied. Do not present concepts as finished products unless they are implemented and publicly available.

## License
You may adapt this portfolio for personal use.
