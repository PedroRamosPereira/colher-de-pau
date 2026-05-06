import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 text-center">
        <a href="#top" className="inline-flex flex-col items-center gap-3">
          <img src={logo} alt="Colher de Pau by Samira Norbim" className="h-24 w-24 object-contain" />
          <span className="font-serif text-3xl">
            Colher <span className="italic text-caramel">de</span> Pau
          </span>
        </a>
        <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
          Cafeteria & Bistrô · Vila Velha — ES
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://instagram.com/colherdepaucafeteriabistro"
            aria-label="Instagram"
            className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:text-caramel hover:border-caramel transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 text-xs text-muted-foreground space-y-2">
          <p>© 2017 Colher de Pau by Samira Norbim. Todos os direitos de criação e imagem intelectual reservados.</p>
          <p>COLHER DE PAU CAFETERIA & BISTRO LTDA · CNPJ matriz 30.611.225/0001-45</p>
        </div>
      </div>
    </footer>
  );
}
