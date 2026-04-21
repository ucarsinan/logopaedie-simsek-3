# Illustrationen Storybook-Stil — Design Spec
**Datum:** 2026-04-21  
**Projekt:** logopaedie-simsek-3  
**Status:** Approved

---

## Kontext & Entscheidung

Alle bestehenden Website-Bilder sind KI-generierte photorealistische Fotos. Diese implizieren echte Patienten mit Einwilligung — ein Vertrauensproblem für eine Gesundheitswebsite (YMYL).

**Lösung:** Ersetze alle 8 Fotos durch Illustrationen im Storybook/Organic-Stil. Illustrationen sind klar als Kunstwerk erkennbar — sichtbare Gesichter (auch der Therapeutin) sind bei Illustrationen ethisch unbedenklich, da niemand sie für echte Personen hält.

---

## Stil-Guide

### Stil
**Modern Warm Illustration** — smooth digital painting, clean soft color fills, contemporary Scandinavian children's book style. Warm, lebendig, modern. Kein Foto-Realismus, kein Vintage-Look.

> **Validiert:** ChatGPT GPT-4o trifft diesen Stil sehr gut. Copilot tendiert zu Vintage — daher ChatGPT bevorzugen.

### Farben (immer in Prompts nennen)
| Token | Hex | Verwendung |
|---|---|---|
| Primary | `#2a7f6f` | Therapeutin-Kleidung, Akzente |
| Accent | `#c4714f` | Kinder-Kleidung, Highlights |
| Background | `#faf8f5` | Raumhintergrund |
| Surface | `#f0ebe3` | Tische, Böden |
| Skin warm | `#e8c9a8` | Hauttöne |

### Gesichter
**Alle Personen von vorne mit sichtbarem Gesicht** — Therapeutin, Kinder, Erwachsene, Senioren. Ausdrucksstark, freundlich, warm.

### Sprache in Bildern

**Immer Deutsch** — Bildkarten, Poster, Schilder im Bild müssen deutsche Wörter zeigen (z.B. "Katze", "Haus", "Apfel"). **Keine englischen Texte** im Bild. **Keine Motivations-Poster** an Wänden.

### Konsistenz-Prefix (jeden Prompt damit beginnen)
```
Modern warm illustration, smooth digital painting, clean soft color fills, 
contemporary Scandinavian children's book style, friendly expressive faces, 
teal green #2a7f6f and terracotta #c4714f color palette, cream warm background, 
flat depth with subtle shadows, NOT photorealistic, NOT vintage, NOT watercolor, 
NOT old-fashioned, contemporary editorial illustration style.
```

### Tool

- **Primär:** ChatGPT Free (GPT-4o Image Generation) — bestes Ergebnis für diesen Stil
- **Backup:** Microsoft Copilot (copilot.microsoft.com) — kostenlos, aber tendiert zu Vintage-Look

---

## 8 Illustrationen — Fertige Prompts

### 1. Hero-Bild (`hero-photo.webp`)
**Seite:** Startseite, oberster Bereich  
**Format:** 9:16 Hochformat oder 4:3

```
Warm storybook illustration, soft organic shapes, gentle watercolor-like textures, 
friendly expressive faces, teal green and terracotta color palette, 
cream warm background, NOT photorealistic, NOT photograph, illustrated style only.

A cozy speech therapy session in a bright, plant-filled therapy room. 
A female speech therapist with dark hair and a warm smile, wearing a teal green blouse, 
sits at a small round wooden table. Across from her: a cheerful young girl (age 4-5) 
with a big smile holding a colorful picture flashcard, and a friendly elderly man 
with grey hair smiling warmly. Colorful wooden toys and picture cards on the table. 
Soft morning light, terracotta plant pots on shelves, warm and inviting atmosphere. 
All three faces clearly visible and expressive.
```

---

### 2. About-Section (`about-section-kind-senior-therapeutin.webp`)
**Seite:** Über uns / Startseite About-Block  
**Format:** 16:9 Querformat

```
Warm storybook illustration, soft organic shapes, gentle watercolor-like textures, 
friendly expressive faces, teal green and terracotta color palette, 
cream warm background, NOT photorealistic, NOT photograph, illustrated style only.

A welcoming speech therapist with dark hair, warm brown eyes and a genuine smile, 
wearing a mint green top, sitting in a bright therapy room. 
A happy toddler (age 3) sits on her lap looking up at her, and a kind elderly man 
sits beside them at the table, smiling contentedly. 
Bookshelves with colorful therapy books in background, indoor plants, soft window light. 
Warm, trustworthy, professional atmosphere. All faces clearly visible.
```

---

### 3. Frühförderung (`fruehfoerderung-logopaedie-kind-duisburg.webp`)
**Seite:** `/fruehfoerderung-duisburg`  
**Format:** 3:4 Hochformat

```
Warm storybook illustration, soft organic shapes, gentle watercolor-like textures, 
friendly expressive faces, teal green and terracotta color palette, 
cream warm background, NOT photorealistic, NOT photograph, illustrated style only.

A joyful early childhood speech therapy session on a cozy jute rug. 
A young female therapist with curly dark hair smiles warmly, sitting cross-legged, 
holding up a picture flashcard showing an apple with the word "Apfel". 
A delighted toddler (age 2-3) with curly hair sits across from her, laughing and 
pointing at the card, surrounded by colorful wooden building blocks. 
Terracotta plant pots and children's books on shelves in background. 
Playful, warm, educational mood. Both faces clearly visible and joyful.
```

---

### 4. Hausbesuche (`hausbesuche-logopaedie-duisburg.webp`)
**Seite:** `/hausbesuche-duisburg`  
**Format:** 3:4 Hochformat

```
Warm storybook illustration, soft organic shapes, gentle watercolor-like textures, 
friendly expressive faces, teal green and terracotta color palette, 
cream warm background, NOT photorealistic, NOT photograph, illustrated style only.

A home visit speech therapy session in a cozy living room. 
A young female speech therapist with dark hair in a bun, wearing a light green blouse, 
sits across from a friendly elderly man in an armchair. She holds up picture flashcards 
(apple, house, bird). He leans forward with interest and a gentle smile. 
A "Speech Therapy" tote bag sits on the floor. 
Warm home atmosphere: wooden furniture, indoor plants, afternoon sunlight through curtains. 
Both faces clearly visible, warm and engaged.
```

---

### 5. Erwachsenen-Therapie (`logopaedie-erwachsene-bildkarten-duisburg.webp`)
**Seite:** `/therapieangebot/erwachsene`  
**Format:** 3:4 Hochformat

```
Warm storybook illustration, soft organic shapes, gentle watercolor-like textures, 
friendly expressive faces, teal green and terracotta color palette, 
cream warm background, NOT photorealistic, NOT photograph, illustrated style only.

An adult speech therapy session in a bright clinic room. 
A focused female therapist with dark wavy hair and a kind expression, wearing a teal blouse, 
sits at a light wooden desk. She holds picture flashcards (apple, house, bird) toward 
a smiling elderly man sitting across from her, who holds his own set of cards with 
concentration and a warm smile. 
Colorful folders on bookshelves, a pencil and notepad on the desk, natural window light. 
Both faces clearly visible — engaged, professional, trustworthy.
```

---

### 6. Türkische Familie (`tuerkische-logopaedie-familie-duisburg.webp`)
**Seite:** `/tuerkische-logopaedie-duisburg`  
**Format:** 3:4 Hochformat

```
Warm storybook illustration, soft organic shapes, gentle watercolor-like textures, 
friendly expressive faces, teal green and terracotta color palette, 
cream warm background, NOT photorealistic, NOT photograph, illustrated style only.

A multilingual family speech therapy session around a small round wooden table. 
A female speech therapist with dark hair and warm eyes smiles encouragingly. 
Across from her: a young boy (age 4-5) with curly dark hair and Mediterranean features, 
laughing and proudly pointing at a letter flashcard showing the letter "S" and "Sonne/Güneş". 
His mother, with dark hair and Turkish features, watches with a proud, loving smile. 
Terracotta plant pots on wooden shelves, soft warm light. 
Multicultural, welcoming, warm atmosphere. All three faces clearly visible.
```

---

### 7. Schlucktherapie (`schlucktherapie-dysphagie-duisburg.webp`)
**Seite:** `/therapieangebot/schluckstoerungen`  
**Format:** 3:4 Hochformat

```
Warm storybook illustration, soft organic shapes, gentle watercolor-like textures, 
friendly expressive faces, teal green and terracotta color palette, 
cream warm background, NOT photorealistic, NOT photograph, illustrated style only.

A calm dysphagia/swallowing therapy session in a bright therapy room. 
A gentle female speech therapist with dark hair in a ponytail, wearing a mint blouse, 
sits at a wooden table across from a kind elderly man. 
She holds a small ceramic cup toward him with a reassuring smile. 
He looks at the cup with focus and gentle determination. 
A notepad and pencil on the table. Bookshelves with therapy folders in background. 
Calm, professional, caring atmosphere. Both faces clearly visible, compassionate.
```

---

### 8. Stimmtherapie (`stimmtherapie-bildkarten-duisburg.webp`)
**Seite:** `/therapieangebot/stimmtherapie`  
**Format:** 3:4 Hochformat

```
Warm storybook illustration, soft organic shapes, gentle watercolor-like textures, 
friendly expressive faces, teal green and terracotta color palette, 
cream warm background, NOT photorealistic, NOT photograph, illustrated style only.

A voice therapy session in a bright room with large windows overlooking a garden. 
A female speech therapist with dark hair in a bun, wearing a sage green blouse, 
sits at a round wooden table and points at one of many colorful picture flashcards 
spread across the table (bird "Vogel", apple "Apfel", house "Haus"). 
An elderly man with silver hair sits across from her, holding a fan of flashcards, 
smiling with focus and engagement. 
Colorful folders on shelves, green garden visible through window. 
Both faces expressive and clearly visible, warm morning light.
```

---

## Technische Integration (Astro)

### Drop-in Replacement
Illustrationen als `.webp` exportieren mit identischen Dateinamen:
```
src/assets/therapy/hero-photo.webp
src/assets/therapy/about-section-kind-senior-therapeutin.webp
src/assets/therapy/fruehfoerderung-logopaedie-kind-duisburg.webp
src/assets/therapy/hausbesuche-logopaedie-duisburg.webp
src/assets/therapy/logopaedie-erwachsene-bildkarten-duisburg.webp
src/assets/therapy/tuerkische-logopaedie-familie-duisburg.webp
src/assets/therapy/schlucktherapie-dysphagie-duisburg.webp
src/assets/therapy/stimmtherapie-bildkarten-duisburg.webp
```
**Kein Code-Änderung nötig** — Astro's `<Image>` Komponenten laden automatisch die neuen Dateien.

### Export-Einstellungen
- Format: `.webp`
- Qualität: 85%
- Hochformat (3:4): 800×1067px
- Querformat (16:9): 1200×675px
- Hero (9:16): 900×1200px

### OG-Bild
`og-logopaedie-simsek-duisburg.webp` separat generieren (16:9, 1200×630px) mit Hero-Szene + Praxisname-Text-Overlay.

---

## Workflow

1. ChatGPT Free öffnen → Prompt aus Spec kopieren → Bild generieren → als `.webp` exportieren
2. Falls Tageslimit erreicht: Microsoft Copilot (copilot.microsoft.com) mit gleichem Prompt
3. Auf konsistenten Stil achten: gleicher Konsistenz-Prefix in jedem Prompt
4. Datei umbenennen → in `src/assets/therapy/` ersetzen
5. `npm run build` — fertig
