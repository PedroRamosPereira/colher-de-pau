# Remove Unit Banner Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the dark unit banner from the site header without changing the rest of the navigation.

**Architecture:** The change stays isolated to the existing navbar composition. `Navbar` will stop rendering the banner component, and the unused `UnitBanner` file will be deleted to keep the codebase clean.

**Tech Stack:** React, TypeScript, TanStack Router, Vite

---

### File Structure

**Modify:**
- `src/components/site/Navbar.tsx` - remove the `UnitBanner` import and render call

**Delete:**
- `src/components/site/UnitBanner.tsx` - unused banner component after navbar update

**Verification:**
- `npm run build`

### Task 1: Remove Banner From Navbar

**Files:**
- Modify: `src/components/site/Navbar.tsx`
- Delete: `src/components/site/UnitBanner.tsx`
- Verify: `npm run build`

- [ ] **Step 1: Inspect the current navbar and banner usage**

Read these locations before editing:

```tsx
import { UnitBanner } from "./UnitBanner";

<header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
  <UnitBanner />
```

- [ ] **Step 2: Update `src/components/site/Navbar.tsx` to remove the banner**

Apply this minimal edit:

```tsx
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useUnit } from "@/context/UnitContext";
import { UnitSwitcher } from "./UnitSwitcher";

const links = [
  { href: "#essencia", label: "A Essência" },
  { href: "#recomendacoes", label: "Recomendações" },
  { href: "#casas", label: "Nossas Casas" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#encomendas", label: "Encomendas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { unit } = useUnit();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 text-foreground shrink-0">
          <img src={logo} alt="Colher de Pau by Samira Norbim" className="h-12 w-12 object-contain" />
          <span className="font-serif text-2xl tracking-tight hidden sm:inline">
            Colher <span className="italic text-caramel">de</span> Pau
          </span>
        </a>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Delete the unused banner component file**

Remove this file entirely because it becomes dead code:

```tsx
import { useUnit } from "@/context/UnitContext";

export function UnitBanner() {
  const { unit } = useUnit();
  return (
    <div className="w-full bg-bistro text-cream border-b border-caramel/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-2.5 text-center text-sm">
        <span className="opacity-80">Você está vendo: </span>
        <strong className="font-semibold text-caramel">Unidade {unit.shortName}</strong>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify there are no remaining references**

Run:

```bash
rg "UnitBanner|Você está vendo|Voce está vendo" src docs/superpowers/specs/2026-05-09-remove-unit-banner-design.md
```

Expected:
- No matches under `src`
- Matches may remain only in the spec or plan documents

- [ ] **Step 5: Build the project**

Run:

```bash
npm run build
```

Expected:
- Vite production build completes successfully
