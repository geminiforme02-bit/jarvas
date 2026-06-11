# Physio Harpreet — Clinic Website

A modern, single-page website for a physiotherapy & rehabilitation clinic, featuring
3D animated hero shapes (Three.js), rotating 3D service icons, scroll reveal
animations, and mouse-tilt effects on cards.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Tech

- Plain HTML / CSS / JS (no build step)
- Three.js (vendored locally in `js/vendor/`) for the animated hero scene
- CSS 3D transforms for the spinning service icon cubes
- Google Fonts (Poppins + Inter)

## ⚠️ Placeholder content to replace

This site was built with realistic placeholder details since the Instagram
profile (`@physio._harpreet`) couldn't be scraped automatically. Search for and
replace the following before going live:

| Item | Current placeholder | Found in |
|---|---|---|
| Clinic name | "Physio Harpreet" | `index.html` (logo, title, footer) |
| Physiotherapist name | "Dr. Harpreet" | `index.html` (About section) |
| Phone number | `+91 98765 43210` | `index.html` (multiple `tel:` links + text) |
| WhatsApp number | `919876543210` | `index.html` (`wa.me` links) |
| Email | `info@physioharpreet.com` | `index.html` (Contact + footer) |
| Address | "123 Wellness Avenue, Model Town, Ludhiana, Punjab 141002" | `index.html` (Contact + footer + map) |
| Opening hours | Mon–Sat 9–1 & 5–8, Sun closed | `index.html` (Contact section) |
| Services list / descriptions | 6 generic services | `index.html` (Services section) |
| Bio / experience stats | "10+ years", "5000+ patients", "4.9★" | `index.html` (Hero + About) |
| Photo of physiotherapist | Emoji placeholder | `index.html` `.img-placeholder` / `css/style.css` |
| Testimonials | 3 generic reviews | `index.html` (Testimonials section) |
| Map | Generic "Ludhiana, Punjab" embed | `index.html` (Contact section iframe) |
| Contact form submission | Front-end only, no backend | `index.html` (Contact form) — wire up to Formspree/email/CRM |

Once you confirm the real details (name, phone, address, hours, services,
photos, etc.), these can be swapped in directly.
