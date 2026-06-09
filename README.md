# SECURE MOBILE INDIA — ASSETS FOLDER
## How to Replace the Logo & Images

---

## 📁 FOLDER STRUCTURE

```
assets/
├── README.md              ← This file
├── logo.svg               ← Main logo (white version — for dark backgrounds)
├── logo-dark.svg          ← Dark logo (black version — for white backgrounds)
├── logo-orange.svg        ← Orange accent logo variant
├── favicon.ico            ← Browser tab icon (replace with real favicon)
└── images/                ← Optional: store local images here
    └── (place your images here)
```

---

## 🔁 HOW TO REPLACE THE LOGO

1. **Export your real logo** in SVG format (recommended) or PNG with transparent background.
2. **For the white (navbar on dark bg) version:** save as `assets/logo.svg`
3. **For the dark (navbar on white bg / inner pages) version:** save as `assets/logo-dark.svg`
4. In every HTML file, the logo is in the `.nav-logo` section. Replace the inline SVG shield icon with an `<img>` tag:

```html
<!-- BEFORE (inline SVG placeholder): -->
<div class="nav-logo-icon">
  <svg viewBox="0 0 24 24"><path d="M12 1L3 5v..."/></svg>
</div>
<div>
  <div class="nav-logo-text">SECURE MOBILE</div>
  <div class="nav-logo-sub">India · Est. 1995</div>
</div>

<!-- AFTER (real logo image): -->
<img src="assets/logo.svg" alt="Secure Mobile India" style="height: 44px; width: auto;">
```

---

## 🖼️ HOW TO REPLACE HERO / SECTION IMAGES

All images currently use **Unsplash placeholder URLs**. To replace with real SMI photos:

1. Place your image files inside the `assets/images/` folder.
2. Find the relevant `background-image` CSS or `<img src="...">` in the HTML.
3. Replace the Unsplash URL with your local path, e.g.:

```html
<!-- Replace this: -->
url('https://images.unsplash.com/photo-xxx?w=1920&q=80')

<!-- With this: -->
url('assets/images/smi-hero-background.jpg')
```

---

## 📄 PAGE-BY-PAGE IMAGE GUIDE

| Page | Section | Suggested Image |
|---|---|---|
| `index.html` | Hero background | SMI factory / armoured vehicle dramatic shot |
| `index.html` | About strip (left) | SMI manufacturing facility interior |
| `about.html` | Page hero | SMI team / production floor |
| `about.html` | About intro image | CEO or facility exterior |
| `about.html` | Timeline split images | Factory / milestone event photos |
| `about.html` | Team cards | Real headshots of leadership team |
| `services.html` | Service card images | Product-specific shots (blanket, bunker, etc.) |
| `vehicles.html` | Vehicle card images | Real photos of SMI-armoured vehicles |
| `blast-protection.html` | Product images | Bomb suppression blanket, blast bin, bunker photos |
| `news.html` | Article thumbnails | Event photos, product launches, delivery ceremonies |
| `contact.html` | Hero background | SMI Nangloi Delhi office / facility exterior |

---

## 🎨 BRAND COLOURS (for reference)

| Use | Hex |
|---|---|
| Primary Black | `#0a0a0a` |
| Accent Orange | `#e85d04` |
| White | `#ffffff` |
| Off-White | `#f5f4f2` |

---

## 📞 REAL CONTACT DETAILS (already in all pages)

- **Address:** A-20 Adhyapak Nagar, Najafgarh Road, Nangloi, Delhi — 110 041
- **Phone:** +91-9811251496
- **Fax/Alt:** +91-11-25944555
- **Email:** contact@securemobileindia.com
- **Website:** www.securemobileindia.com

---

*Last updated: 2025 | Secure Mobile India Pvt. Ltd.*
