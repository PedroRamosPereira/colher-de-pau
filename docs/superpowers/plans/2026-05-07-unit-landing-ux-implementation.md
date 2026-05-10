# Unit Landing UX Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the unit-facing landing experience so QR-code visitors reach the correct unit page, see fast actions immediately, and can open the main PDF menu or daily recommendations in one click while preserving the warmer Colher de Pau tone.

**Architecture:** Keep the current TanStack/Vite page structure and implement the UX upgrade by extending the unit data model, centralizing quick-action rendering in a focused site component, and refining the hero/recommendation hierarchy without changing the placeholder image strategy. Praia da Costa will support two PDF actions through optional unit data, while Itaparica continues with a single primary menu path.

**Tech Stack:** React 19, TypeScript, TanStack Router, Tailwind CSS v4, Framer Motion, Lucide React

---

## File Map

- Modify: `src/data/units.ts`
  Defines unit metadata, menu links, and recommendation data.
- Create: `src/components/site/UnitQuickActions.tsx`
  Renders the fast-action block with unit-aware buttons and labels.
- Modify: `src/components/site/Hero.tsx`
  Makes the hero more compact and inserts the new quick-action behavior on the homepage/unit landing flow.
- Modify: `src/components/site/Recommendations.tsx`
  Adds the compact curated recommendation block and tightens section hierarchy.
- Modify: `src/components/site/UnitPage.tsx`
  Aligns direct unit pages with the same quick-access behavior and recommendation-first structure.
- Modify: `src/components/site/Navbar.tsx`
  Keeps a direct menu entry in the sticky header with unit-aware labeling.
- Modify: `src/styles.css`
  Adds any minimal utility classes needed for the quick-action surface if Tailwind utility composition becomes noisy.

## Verification Note

This repository currently has no automated test runner configured in `package.json`. To stay in scope, this plan uses build, lint, and manual browser verification instead of introducing new test infrastructure.

### Task 1: Extend Unit Menu Data

**Files:**
- Modify: `src/data/units.ts`

- [ ] **Step 1: Replace the single PDF field with explicit menu link fields in the `Unit` type**

```ts
export type Unit = {
  slug: "itaparica" | "praia-da-costa";
  name: string;
  shortName: string;
  tag: string;
  address: string;
  city: string;
  hours: string;
  petFriendly: boolean;
  whatsapp: string;
  maps: string;
  ifood?: string;
  instagram: string;
  menuPdf: string;
  menuLabel?: string;
  wineMenuPdf?: string;
  wineMenuLabel?: string;
  about: string;
  highlights: { title: string; desc: string }[];
  menu: MenuItem[];
  weekly: WeeklyPick[][];
};
```

- [ ] **Step 2: Update the Itaparica data to use the renamed main menu field only**

```ts
const itaparica: Unit = {
  slug: "itaparica",
  name: "Unidade Praia de Itaparica",
  shortName: "Itaparica",
  // ...
  instagram: "https://instagram.com/colherdepaucafeteriabistro",
  menuPdf: "/cardapio-itaparica.pdf",
  menuLabel: "Cardapio da casa",
  about:
    "Onde tudo começou...",
  // ...
};
```

- [ ] **Step 3: Update the Praia da Costa data to expose both the main menu and the wine menu**

```ts
const praiaDaCosta: Unit = {
  slug: "praia-da-costa",
  name: "Unidade Praia da Costa",
  shortName: "Praia da Costa",
  // ...
  instagram: "https://instagram.com/colherdepaucafeteriabistro",
  menuPdf: "/cardapio-praia-da-costa.pdf",
  menuLabel: "Cardapio da casa",
  wineMenuPdf: "/carta-de-vinhos-praia-da-costa.pdf",
  wineMenuLabel: "Carta de vinhos",
  about:
    "A irma caçula nasceu para receber quem vive a orla...",
  // ...
};
```

- [ ] **Step 4: Run a project-wide replacement for consumers of `cardapioPdf` and confirm there are no remaining references**

Run: `rg "cardapioPdf" src`

Expected: no matches after refactor.

- [ ] **Step 5: Run a build to catch type errors introduced by the rename**

Run: `npm run build`

Expected: build fails only if old `cardapioPdf` references still exist; otherwise continue.

### Task 2: Add a Reusable Quick-Actions Surface

**Files:**
- Create: `src/components/site/UnitQuickActions.tsx`
- Modify: `src/components/site/Hero.tsx`
- Modify: `src/components/site/Navbar.tsx`

- [ ] **Step 1: Create a focused `UnitQuickActions` component to render the unit-aware button group**

```tsx
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, MessageCircle, Sparkles, Wine } from "lucide-react";
import type { Unit } from "@/data/units";

type UnitQuickActionsProps = {
  unit: Unit;
  compact?: boolean;
};

export function UnitQuickActions({ unit, compact = false }: UnitQuickActionsProps) {
  const base = compact ? "h-11 px-4" : "h-12 px-5";

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      <Button asChild className={`rounded-2xl bg-caramel text-primary-foreground hover:bg-bistro ${base}`}>
        <a href={unit.menuPdf} target="_blank" rel="noopener">
          {unit.menuLabel ?? "Cardapio em PDF"}
        </a>
      </Button>

      <Button asChild variant="secondary" className={`rounded-2xl ${base}`}>
        <a href="#recomendacoes-rapidas">
          <Sparkles className="mr-2 h-4 w-4" /> Recomendacao do dia
        </a>
      </Button>

      {unit.wineMenuPdf && (
        <Button asChild variant="outline" className={`rounded-2xl border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground ${base}`}>
          <a href={unit.wineMenuPdf} target="_blank" rel="noopener">
            <Wine className="mr-2 h-4 w-4" /> {unit.wineMenuLabel ?? "Carta de vinhos"}
          </a>
        </Button>
      )}

      {unit.ifood && (
        <Button asChild className={`rounded-2xl bg-[#EA1D2C] text-white hover:bg-[#c8121f] ${base}`}>
          <a href={unit.ifood} target="_blank" rel="noopener">
            Pedir no iFood <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )}

      <div className="grid gap-3 sm:grid-cols-2 xl:contents">
        <Button asChild variant="outline" className={`rounded-2xl ${base}`}>
          <a href={unit.whatsapp} target="_blank" rel="noopener">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" className={`rounded-2xl ${base}`}>
          <a href={unit.maps} target="_blank" rel="noopener">
            <MapPin className="mr-2 h-4 w-4" /> Como chegar
          </a>
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Replace the hero CTA row with a short welcome summary plus the reusable quick-actions block**

```tsx
import { ArrowRight, Clock, MapPin, PawPrint } from "lucide-react";
import { UnitQuickActions } from "./UnitQuickActions";

// inside Hero
<motion.p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
  Escaneou da mesa? Abra o cardapio da unidade em um clique ou deixe a casa te guiar pelos destaques de hoje.
</motion.p>

<div className="mt-8 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
  <div className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3">
    <div className="flex items-start gap-3">
      <MapPin className="mt-0.5 h-4 w-4 text-caramel" />
      <span>{unit.shortName}</span>
    </div>
  </div>
  <div className="rounded-2xl border border-border/70 bg-background/80 px-4 py-3">
    <div className="flex items-start gap-3">
      <Clock className="mt-0.5 h-4 w-4 text-caramel" />
      <span>{unit.hours}</span>
    </div>
  </div>
</div>

<motion.div className="mt-8">
  <UnitQuickActions unit={unit} />
</motion.div>
```

- [ ] **Step 3: Simplify the navbar CTA to point at the new primary menu field and keep the wording direct**

```tsx
<Button asChild variant="outline" className="rounded-full border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground">
  <a href={unit.menuPdf} target="_blank" rel="noopener">
    {unit.menuLabel ?? "Cardapio PDF"}
  </a>
</Button>
```

- [ ] **Step 4: Add the wine-menu CTA to the mobile drawer only when available**

```tsx
{unit.wineMenuPdf && (
  <Button asChild variant="outline" className="rounded-full border-caramel/40 text-caramel">
    <a href={unit.wineMenuPdf} target="_blank" rel="noopener">
      {unit.wineMenuLabel ?? "Carta de vinhos"}
    </a>
  </Button>
)}
```

- [ ] **Step 5: Run the build and visually inspect that the button group wraps correctly on mobile**

Run: `npm run build`

Expected: successful production build.

Manual check:
- open the homepage/unit page in a narrow viewport
- confirm the primary menu button is first
- confirm Praia da Costa shows the wine menu button and Itaparica does not

### Task 3: Add the Quick Recommendation Module

**Files:**
- Modify: `src/components/site/Recommendations.tsx`
- Modify: `src/components/site/Hero.tsx`

- [ ] **Step 1: Derive `highlight` and `classics` from the existing daily picks**

```tsx
const picks = unit.weekly[today];
const [highlight, ...classics] = picks;
const dayName = days[today];
```

- [ ] **Step 2: Add a compact recommendation section above the existing recommendation grid**

```tsx
<section id="recomendacoes-rapidas" className="py-12 lg:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <Reveal>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
            <div className="aspect-[4/3] overflow-hidden md:aspect-auto">
              <img src={highlight.image} alt={highlight.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 lg:p-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-caramel">Destaque do dia · {dayName}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{highlight.name}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{highlight.desc}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-caramel/10 px-4 py-2 text-sm font-medium text-caramel">{highlight.price}</span>
                <Button asChild className="rounded-full bg-caramel text-primary-foreground hover:bg-bistro">
                  <a href={unit.menuPdf} target="_blank" rel="noopener">Abrir cardapio completo</a>
                </Button>
              </div>
            </div>
          </div>
        </article>

        <div className="grid gap-4">
          {classics.map((item) => (
            <article key={item.name} className="rounded-3xl border border-border bg-background/80 p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.24em] text-caramel">Classico da casa</p>
              <div className="mt-2 flex items-baseline justify-between gap-3">
                <h3 className="text-2xl">{item.name}</h3>
                <span className="text-sm font-medium text-caramel">{item.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  </div>
</section>
```

- [ ] **Step 3: Tighten the heading and CTA copy in the existing recommendations section so it feels like a continuation**

```tsx
<p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5 inline-flex items-center gap-2">
  <Sparkles className="h-3.5 w-3.5" /> Mais sugestoes da casa · {dayName} · {unit.shortName}
</p>
<h2 className="font-serif text-4xl md:text-5xl">Se quiser explorar mais um pouco, separamos outras escolhas para agora.</h2>
<p className="mt-5 text-muted-foreground text-lg">
  Comece pelo destaque rapido acima ou percorra outras combinacoes pensadas para a unidade {unit.shortName}.
</p>
```

- [ ] **Step 4: Point all full-menu CTAs in the recommendation area to `unit.menuPdf`**

```tsx
<Button asChild variant="outline" className="rounded-full border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground">
  <a href={unit.menuPdf} target="_blank" rel="noopener">Ver cardapio completo</a>
</Button>
```

- [ ] **Step 5: Run the build and manually verify the anchor jump from the hero quick-action button**

Run: `npm run build`

Expected: successful production build.

Manual check:
- click `Recomendacao do dia`
- confirm the page scrolls to `#recomendacoes-rapidas`
- confirm the first card reads as the daily highlight and the next two as house classics

### Task 4: Align the Direct Unit Page With the New Flow

**Files:**
- Modify: `src/components/site/UnitPage.tsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Replace the current free-form CTA cluster in `UnitPage` with the reusable quick-actions block**

```tsx
import { UnitQuickActions } from "./UnitQuickActions";

// replace the current button cluster with
<div className="mt-10">
  <UnitQuickActions unit={data} compact />
</div>
```

- [ ] **Step 2: Add a short hospitality-focused orientation line above the quick actions**

```tsx
<p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
  Chegou pela mesa ou pelo bairro? Abra o cardapio certo em um clique e veja o que a casa recomenda para agora.
</p>
```

- [ ] **Step 3: Move `Recommendations` above the long highlight grid so practical discovery happens earlier**

```tsx
<main>
  <section className="relative">...</section>
  <Recommendations />
  <section className="py-20 lg:py-28 bg-accent/40">...</section>
  <MenuSection />
</main>
```

- [ ] **Step 4: Add one minimal utility only if spacing or card rhythm becomes repetitive during implementation**

```css
@layer utilities {
  .quick-surface {
    background: color-mix(in oklch, var(--color-card) 88%, white 12%);
    border: 1px solid color-mix(in oklch, var(--color-border) 82%, white 18%);
    box-shadow: 0 18px 50px -28px rgb(54 33 15 / 0.28);
  }
}
```

Only add this class if the existing utility stack becomes harder to read than the extracted class.

- [ ] **Step 5: Run lint, build, and final manual QA on both units**

Run: `npm run lint`

Expected: no ESLint errors.

Run: `npm run build`

Expected: successful production build.

Manual QA checklist:
- Itaparica shows one main menu CTA and no wine CTA.
- Praia da Costa shows main menu CTA plus `Carta de vinhos`.
- The primary menu action is visible above the fold on mobile.
- The quick recommendation block appears before the fuller recommendation grid.
- Placeholder images remain unchanged and correctly cropped.

## Self-Review

- Spec coverage: the plan covers the quick actions, recommendation hierarchy, sticky nav CTA, unit-specific dual-menu handling for Praia da Costa, and the placeholder-image constraint.
- Placeholder scan: no TBD/TODO markers remain.
- Type consistency: `menuPdf`, `menuLabel`, `wineMenuPdf`, and `wineMenuLabel` are used consistently across all tasks.
