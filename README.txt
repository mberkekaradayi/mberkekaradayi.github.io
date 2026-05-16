Portfolio Website
https://mberkekaradayi.com/

Hosting: GitHub Pages (static Next.js export from mbk/).

Source (Next.js): mbk/
Archived static site (pre-migration): legacy/

GitHub Pages setup: Settings → Pages → Build: GitHub Actions. Pushes to main run
.github/workflows/deploy-github-pages.yml, which builds mbk/ and deploys mbk/out.
Custom domain (e.g. mberkekaradayi.com): set under Pages; CNAME stays at repo root.
