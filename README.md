# Metche

A static marketing site for Metche, a family beekeeping brand from Macedonia. The site is bilingual (English and Macedonian) and covers the honey range, journal articles, contact, and common questions.

## Tech stack

Plain HTML, CSS and JavaScript. No build step, bundler or package manager. Language switching is handled in the browser (`assets/js/i18n.js`) and remembered in `localStorage`.

## Folder structure

```
.
├── index.html                 # Home
├── pages/                     # Contact, FAQ, terms, privacy
├── products/                  # Product listing and product pages
├── blog/                      # Journal listing and articles
├── assets/
│   ├── css/                   # Shared stylesheet
│   ├── js/                    # i18n and site behaviour
│   ├── images/
│   │   ├── products/          # Product photography (WebP)
│   │   ├── honey/             # Honey and still-life photos (WebP)
│   │   ├── nature/            # Landscape, bees and apiary photos (WebP)
│   │   └── brand/             # Open Graph image and textures (WebP)
│   └── icons/                 # Logo, favicons (WebP + favicon.ico)
├── Dockerfile
├── compose.yaml
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder with any static server.

With Docker:

```bash
docker compose up --build
```

The site is served on container port 80. Publish it with `-p 8080:80` if you want it on localhost.

## Team

- Elena Petkovska
- Matej Stefanoski
- Dimitar Dimitrov
