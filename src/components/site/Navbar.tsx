import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useOptionalUnit } from "@/context/UnitContext";
import { UnitSwitcher } from "./UnitSwitcher";

const homeLinks = [
  { href: "#essencia", label: "A Essência" },
  { href: "#casas", label: "Nossas Casas" },
  { href: "#encomendas", label: "Encomendas" },
];

const unitLinks = [
  { href: "#recomendacoes", label: "Recomendações" },
  { href: "#cardapio", label: "Principais da casa" },
  { href: "#encomendas", label: "Encomendas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const unitContext = useOptionalUnit();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const links = pathname === "/" ? homeLinks : unitLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md [webkit-backdrop-filter:blur(12px)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 text-foreground shrink-0">
          <img
            src={logo}
            alt="Colher de Pau by Samira Norbim"
            className="h-12 w-12 object-contain"
          />
          <span className="font-serif text-2xl tracking-tight hidden sm:inline">
            Colher <span className="italic text-caramel">de</span> Pau
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/75 hover:text-caramel transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">{unitContext && <UnitSwitcher />}</div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md [webkit-backdrop-filter:blur(12px)] md:hidden">
          <div className="px-6 py-6 flex flex-col gap-4">
            {unitContext && <UnitSwitcher />}
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
