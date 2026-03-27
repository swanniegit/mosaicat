# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Mosaic Accounting and Taxation, a South African accounting and tax services firm based in Paarl/Durbanville, Western Cape.

## Development

Static HTML/CSS/JS website with no build process. To develop:

- Open `index.html` directly in a browser, or use any local server (e.g., `npx serve` or VS Code Live Server)
- No dependencies to install

## Architecture

```
mosaicat/
├── index.html          # Main HTML (semantic, BEM-style classes)
├── css/
│   └── styles.css      # All styles (CSS variables, components, layouts)
├── js/
│   └── main.js         # JavaScript modules (FAQ accordion, smooth scroll)
├── image001.jpg        # Company logo
├── CIBA logo.jpg       # Professional body logo
├── SAICA logo.jpg      # Professional body logo
└── SAIT logo.jpg       # Professional body logo
```

## CSS Architecture

- **Design Tokens**: All colors, spacing, typography defined as CSS variables in `:root`
- **Components**: Reusable `.btn`, `.card`, `.section-title`, `.credentials` classes
- **Layouts**: `.header`, `.hero`, `.section`, `.grid`, `.footer`
- **BEM-style naming**: `.block__element` pattern (e.g., `.card__title`, `.contact-item__icon`)
- **Modifiers**: `.section--white`, `.section--dark`, `.btn--primary`

## JavaScript Architecture

- IIFE pattern to avoid global scope pollution
- Module pattern for features (FAQ, SmoothScroll)
- Each module has `init()` method called on DOMContentLoaded

## Business Context

- **Directors**: Jadé Grobler (CIBA: 2025080-1637, PR: PR-0122022), Leani Venter (SAICA: 20053224, PR: PR-0096797)
- **Location**: 44 Templier Street, Hoog-en-Droog, Paarl, Western Cape, 7646
- **Contact**: jade@mosaicat.co.za, +27 83 255 3433, +27 82 327 1353
