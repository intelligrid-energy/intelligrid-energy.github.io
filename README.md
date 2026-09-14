# IntelliGrid Energy Dynamic — Website

Official website for **IntelliGrid Energy Dynamic**, the research laboratory led by
Dr. Arnab Ghosh (Professor Grade 1) in the Department of Electrical Engineering,
National Institute of Technology Rourkela.

This is a static, dependency-free website (plain HTML/CSS/JavaScript — no build step,
no framework, no server required to preview it). It is ready to be uploaded to any
static host or shared hosting plan (e.g. Hostinger) as-is.

---

## 1. Folder structure

```
intelligrid/
├── index.html              ← Homepage
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css           ← Design system: colors, typography, all components
├── js/
│   └── main.js              ← Shared behavior: nav, theme toggle, WhatsApp enquiry logic
├── data/
│   └── content.js           ← ALL editable content lives here (see §3 below)
├── images/                  ← Put real photos/instrument images/product images here
└── pages/
    ├── about.html
    ├── research-areas.html
    ├── team.html
    ├── facilities.html
    ├── projects.html
    ├── publications.html
    ├── products.html
    ├── product-detail.html  ← ONE template for all products — reads ?id=PROD-00X
    ├── news.html
    ├── gallery.html
    ├── contact.html
    └── privacy.html
```

## 2. How to preview locally

No build tools needed. Either:
- Open `index.html` directly in a browser, **or**
- Run a tiny local server from the project root so relative paths behave exactly
  like they will on the live server:
  ```
  python3 -m http.server 8000
  ```
  then visit `http://localhost:8000`.

## 3. How to update content

**Almost everything lives in `data/content.js`.** Open it in any text editor —
it's one JavaScript object (`window.SITE_DATA`) with clearly commented sections:

| Section | Controls |
|---|---|
| `lab` | Lab name, address, email, phone, WhatsApp number |
| `director` | Dr. Arnab Ghosh's photo, bio, qualifications, research interests, faculty profile link |
| `researchAreas` | Homepage research-highlight cards |
| `team` | Faculty, PhD scholars, Master's/UG researchers, staff, alumni |
| `projects` | Homepage featured-project cards |
| `products` | **The full product catalogue** (see §4) |
| `facilities` | Homepage facilities preview |
| `news` | Homepage news preview |

Every field currently containing text in `[square brackets]` is a **placeholder**.
Replace the bracketed text with real, verified information — nothing else needs
to change; the pages re-render automatically from this file.

Some pages (Research Areas, Facilities, Projects, Publications, News, Gallery)
keep their own more detailed data arrays directly inside a `<script>` tag near
the bottom of that page's HTML file, because they need more fields than the
homepage preview does. Look for a clearly-named constant near the top of the
script block (e.g. `const AREAS = [...]`, `const PROJECTS = [...]`,
`const PUBLICATIONS = [...]`, `const FACILITIES = [...]`, `const NEWS = [...]`,
`const GALLERY = [...]`) — edit the objects in that array the same way.

## 4. Updating the Product Catalogue

Products live in `data/content.js` → `SITE_DATA.products`. Each product is one
object:

```js
{
  id: "PROD-001",                 // Used in URLs: product-detail.html?id=PROD-001
  name: "...",
  category: "...",                // Must match one of the categories used on products.html
  price: "₹XX,XXX",               // Leave "" to show "Request a Quote"
  availability: "In Stock",       // Or "Request a Quote", "Made to Order", etc.
  featured: true,                 // true = shows on the Homepage
  dateAdded: "2026-01-01",        // Used for "Recently Added" sorting
  image: "../images/product1.jpg",
  gallery: ["../images/product1-1.jpg", "../images/product1-2.jpg"],
  shortDesc: "...",               // One-line summary (catalogue cards)
  description: "...",             // Full description (product detail page)
  specs: { "Input Voltage": "12V", "Output": "5V/2A" },
  features: ["Feature 1", "Feature 2"],
  applications: ["Application 1", "Application 2"],
  datasheetUrl: "../images/product1-datasheet.pdf",
  faqs: [{ q: "Question?", a: "Answer." }]
}
```

To **add a new product**: copy an existing object, give it a new unique `id`,
fill in the fields, add it to the array. It will automatically appear on the
catalogue page, and `product-detail.html?id=YOUR-NEW-ID` will work immediately
— no other file needs to change.

To **remove a product**: delete its object from the array.

## 5. The WhatsApp Buy Now / Enquiry workflow

- The destination number is set once, at the top of `js/main.js`:
  ```js
  const WHATSAPP_NUMBER = "919433379717"; // +91 94333 79717
  ```
  Change this single line to update the number everywhere on the site.
- Clicking **Buy Now** opens a modal, validates the form, then opens
  `https://wa.me/<number>?text=<pre-filled message>` in a new tab. The visitor
  still has to press **Send** inside WhatsApp — nothing is transmitted
  automatically, and no payment or card information is ever collected on the
  site itself.
- If the browser blocks the popup, a manual "Open WhatsApp" fallback link
  appears in the modal.

## 6. Team member photos, instrument photos, gallery images

Every photo on the site currently shows a dashed placeholder box because no
real images have been supplied yet. To add a real photo:
1. Save the image file into `images/` (e.g. `images/arnab-ghosh.jpg`).
2. Set the corresponding `photo` / `image` field in `data/content.js` (or the
   relevant page's inline array) to `"../images/arnab-ghosh.jpg"` (from a page
   inside `pages/`) or `"images/arnab-ghosh.jpg"` (from `index.html`).

## 7. SEO files

- `robots.txt` and `sitemap.xml` are included at the project root. Before
  publishing, replace every `https://[your-domain]/` placeholder with your
  actual domain.
- Each page already has a unique `<title>` and meta description — update these
  per page as content is finalized.

## 8. Known placeholders that must be verified before launch

Search the codebase for `[` to find every remaining placeholder. In particular:
- Dr. Arnab Ghosh's photo, biography, qualifications, achievements, and
  official faculty-profile link (`pages/about.html`, `pages/team.html`,
  `data/content.js`)
- Official lab email address and phone number (used across every page)
- Team members, instruments, projects, and publications beyond the one real,
  verified publication already included (the SOC/SOH stacked-LSTM+ICA paper)
- Google Maps embed URL on the Contact page
- All product names, prices, specs, and images

## 9. Suggested next steps (not built in this version)

- **Backend for the contact form**: it currently validates input but does not
  send anywhere — wire it to a form service (e.g. Formspree) or your own
  server endpoint.
- **Site-wide search** across publications/products/team/projects: the brief
  calls for this; each page currently has its own local search/filter. A true
  global search would need either a small backend index or a build step that
  merges all content arrays into one searchable JSON file.
- **CMS**: if non-technical staff will update content often, consider wrapping
  `data/content.js` in a lightweight headless CMS (e.g. a simple JSON file
  edited through a small admin form) rather than hand-editing JavaScript.

---
Built incrementally, page by page, per the original project brief. No
academic qualifications, publications, awards, team members, instruments, or
products were invented — every unverified field is explicitly marked as a
placeholder.
