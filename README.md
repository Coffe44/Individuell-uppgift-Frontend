# MyShop - statisk webbsida

Individuell inlämning frontend. fiktiv webshop
## Innehåll
- `index.html` - Sidans struktur och innehåll (header, hero, produkter, nyhetsbrev och footer).
- `styles.css` - Layout och visuell styling, inklusive responsiv design.
- `script.js` - Interaktioner ("lägg i varukorg"-status, nyhetsbrevsformulär) samt logging av tillgänglighetstest och prestanda.
- `images/` - Bildresurser som används i hero- och produktkort.

## HTML (index.html)
- Semantiska element: `header`, `nav`, `main`, `section`, `footer`.
- Tillgänglighet:
  - "Skip to content"-länk.
  - `aria-live`-region för statusmeddelanden.
  - Tydliga `aria-label`- och `aria-labelledby`-attribut.
  - Alt-texter på bilder.
- Prestanda:
  - Förladdning av hero-bilden.
  - `loading="lazy"` på produktbilder.

## CSS (styles.css)
- Grundläggande reset och typografi.
- Layout för toppmeny, hero, produktkort och nyhetsbrev.
- Fokusmarkering för tangentbordsnavigering (`:focus-visible`).
- Responsiv anpassning för mindre skärmar.
- Optimering via `content-visibility` och `contain-intrinsic-size` för större sektioner.

## JavaScript (script.js)
- Statusmeddelanden när en användare klickar "Add to cart".
- Hanterar nyhetsbrevsformulär och visar bekräftelsemeddelande.
- Kör tillgänglighetstest med `axe-core` i konsolen om biblioteket är laddat.
- Loggar LCP (Largest Contentful Paint) via `web-vitals` i konsolen.

## Körning
Detta är en statisk sida. Öppna `index.html` i en webbläsare.

## Anteckningar
- `axe-core` och `web-vitals` laddas via CDN i `index.html`.
- Loggning syns i webbläsarens utvecklarkonsol.
