import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useUnit } from "@/context/UnitContext";
import { UnitSwitcher } from "./UnitSwitcher";
import { UnitBanner } from "./UnitBanner";

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
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/75 hover:text-caramel transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <UnitSwitcher />
          <Button asChild variant="outline" className="rounded-full border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground">
            <a href={unit.cardapioPdf} target="_blank" rel="noopener">Cardápio PDF</a>
          </Button>
          {unit.ifood && (
            <Button asChild className="rounded-full bg-[#EA1D2C] text-white hover:bg-[#c8121f]">
              <a href={unit.ifood} target="_blank" rel="noopener">
                iFood <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            <UnitSwitcher />
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80">
                {l.label}
              </a>
            ))}
            <Button asChild variant="outline" className="rounded-full border-caramel/40 text-caramel">
              <a href={unit.cardapioPdf} target="_blank" rel="noopener">Cardápio em PDF</a>
            </Button>
            {unit.ifood && (
              <Button asChild className="rounded-full bg-[#EA1D2C] text-white hover:bg-[#c8121f]">
                <a href={unit.ifood} target="_blank" rel="noopener">Pedir no iFood</a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
