# CosMend Medicos & Physiotherapy Centre — Website

A modern, single-page website for Dr. Harpreet Singh's physiotherapy &
rehabilitation clinic in Dasuya, Punjab. Features 3D animated hero shapes
(Three.js), rotating 3D service icons, scroll reveal animations, and
mouse-tilt effects on cards.

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

## Content sourced from the clinic flyer

- Clinic: CosMend Medicos & Physiotherapy Centre
- Physiotherapist: Dr. Harpreet Singh
- Phone: +91 78885 21507
- Address: Panwan Road, Dasuya, Punjab
- Instagram: @physio._harpreet
- Services: Back Pain, Neck Pain & Slip Disc Therapy, Sports Injury
  Rehabilitation, Post-Surgery Physiotherapy, Paralysis Treatment,
  Arthritis & Joint Pain Care, Muscle Strengthening Exercises,
  Electrotherapy (IFT, TENS, Ultrasound), Home Visits Available
- Doctor's photo: cropped from the flyer (`assets/dr-harpreet.jpg`)

## ⚠️ Still placeholder — confirm before going fully live

| Item | Current placeholder | Found in |
|---|---|---|
| Clinic hours | Mon–Sat 9–1 & 5–8, Sun closed | `index.html` Contact section |
| Testimonials | 3 generic reviews | `index.html` Testimonials section |
| Exact address / pincode / landmark | "Panwan Road, Dasuya, Punjab" (no pincode) | `index.html` Contact + footer + map |
| Email address | none included (not on flyer) | add if available |
| Contact form submission | Front-end only, no backend | `index.html` Contact form — wire up to Formspree/email/CRM |

Once you confirm these details, they can be swapped in directly.
