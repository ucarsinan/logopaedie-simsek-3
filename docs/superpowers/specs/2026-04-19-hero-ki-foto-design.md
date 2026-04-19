# Hero KI-Foto — Design Spec

**Datum:** 2026-04-19
**Status:** Approved
**Scope:** Ersetze `hero-illustration.svg` durch ein KI-generiertes Foto mit transparentem Hintergrund

---

## Ziel

Die aktuelle Hero-Illustration (abstrakte SVG mit Kreisen und Schallwellen) ist nicht aussagend. Sie wird ersetzt durch ein photorealistisches KI-Bild, das sofort kommuniziert: *Logopädie = Menschen, Kommunikation, Wärme*.

---

## Bildkonzept

**Komposition:**
- Logopädin in der **Mitte**, von hinten zu sehen (kein Gesicht sichtbar), schulterlanges dunkles Haar, teal/salbeigrünes Oberteil
- Links: **Mädchen, ~3–4 Jahre**, strahlend, kichernd, rosige Wangen, helles Outfit (rosa oder gelb)
- Rechts: **älterer Mann, ~70 Jahre**, silbernes/weißes Haar, freundliche Falten, lächelt herzlich, blaues Casual-Pullover
- Alle drei sichtbar gut gelaunt, lachend

**Bildstil:** Photorealistisch, weiches Studioliclht, editoriale Fotografie

**Hintergrund:** Warmes Weiß (`#faf8f5`), nahtlos — optimiert für Background Removal

**Format:** 1024 × 1024 px (1:1)

---

## DALL-E 3 Prompt

```
Photorealistic professional photo, soft studio lighting, pure warm white background (#faf8f5).

Three people in a warm, joyful interaction:
- CENTER: A female speech therapist (Logopädin), seen from behind, shoulder-length dark hair, wearing a clean teal/sage green top. Her posture is open and welcoming, slightly leaning toward the others.
- LEFT: A happy 3-4 year old girl, bright eyes, rosy cheeks, giggling with mouth open, wearing a soft pink or yellow outfit. She is looking at the therapist with delight.
- RIGHT: A cheerful elderly man, approximately 70 years old, warm smile showing teeth, silver/white hair, kind wrinkles, wearing a casual blue sweater. He is engaged and laughing softly.

All three are visibly happy and laughing. The mood is warm, trusting, and professional.
Camera: eye-level, medium shot (waist up), slight depth of field.
Style: clean editorial photography, no harsh shadows, soft natural light from slightly left.
Background: pure warm white, seamlessly blended — suitable for background removal.
```

---

## Workflow

1. **Generieren** — Prompt in ChatGPT (DALL-E 3) eingeben → 1024×1024 → bestes Bild wählen
2. **Background Removal** — Bild auf [remove.bg](https://remove.bg) hochladen → transparentes PNG herunterladen
3. **Speichern** — Datei als `/public/hero-photo.png` ablegen
4. **Code** — `Hero.astro` anpassen (siehe unten)

---

## Code-Änderungen

### `src/components/sections/Hero.astro`

```diff
- <img
-   src="/hero-illustration.svg"
-   alt=""
-   aria-hidden="true"
-   class="w-[clamp(220px,28vw,400px)] h-auto"
-   width="480"
-   height="480"
- />
+ <img
+   src="/hero-photo.png"
+   alt="Logopädin mit einem Kind und einem älteren Patienten"
+   class="w-[clamp(220px,28vw,400px)] h-auto"
+   width="1024"
+   height="1024"
+ />
```

> `aria-hidden="true"` entfällt, weil das Bild jetzt inhaltlich relevant ist und einen aussagekräftigen alt-Text hat.

---

## Entscheidungen & Begründungen

| Entscheidung | Wahl | Begründung |
|---|---|---|
| Bildstil | Photorealistisch | Maximale Glaubwürdigkeit, Vertrauen |
| Tool | ChatGPT / DALL-E 3 | Vorhanden, einfachste Handhabung |
| Setting | Clean/Neutral | Beste Integration in #faf8f5 Seitenfarbe |
| Format | 1:1 Quadrat | Kein Layout-Umbau nötig |
| Integration | Background Removal | Kein sichtbares Rechteck, professioneller Eindruck |

---

## Out of Scope

- Kein WebP-Konvertierungsschritt (PNG reicht für diese Seite)
- Kein Responsive-Sizes Attribut (Bild ist klein genug, ~400px max)
- Keine Änderung an der Hero-Sektion selbst (Layout, Text, Buttons)
