import { Button } from "@/components/ui/button";
import type { Unit } from "@/data/units";
import {
  Clock,
  Croissant,
  ExternalLink,
  MapPin,
  MessageCircle,
  UtensilsCrossed,
  Wine,
} from "lucide-react";

type UnitQuickActionsProps = {
  unit: Unit;
  mode?: "full" | "menu-only";
};

export function UnitQuickActions({ unit, mode = "full" }: UnitQuickActionsProps) {
  const isMenuOnly = mode === "menu-only";

  return (
    <div className="rounded-[1.5rem] border border-caramel/15 bg-background/85 p-4 shadow-xl shadow-bistro/5 backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full bg-caramel px-6 text-primary-foreground hover:bg-bistro"
        >
          <a href={unit.menuPdf} target="_blank" rel="noopener">
            <UtensilsCrossed className="h-4 w-4" /> {unit.menuLabel ?? "Ver cardápio"}
          </a>
        </Button>
        {unit.ifood && (
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-[#EA1D2C] px-6 text-white hover:bg-[#c8121f]"
          >
            <a href={unit.ifood} target="_blank" rel="noopener">
              Pedir no iFood <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        {unit.wineMenuPdf && (
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-caramel/40 px-6 text-caramel hover:bg-caramel hover:text-primary-foreground"
          >
            <a href={unit.wineMenuPdf} target="_blank" rel="noopener">
              <Wine className="h-4 w-4" /> {unit.wineMenuLabel ?? "Drinks e vinhos"}
            </a>
          </Button>
        )}
        {unit.brunchMenuPdf && (
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-caramel/40 px-6 text-caramel hover:bg-caramel hover:text-primary-foreground"
          >
            <a href={unit.brunchMenuPdf} target="_blank" rel="noopener">
              <Croissant className="h-4 w-4" /> {unit.brunchMenuLabel ?? "Brunch"}
            </a>
          </Button>
        )}
        {!isMenuOnly && (
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-foreground/15 px-6"
          >
            <a href={unit.whatsapp} target="_blank" rel="noopener">
              <MessageCircle className="h-4 w-4 text-caramel" /> Falar no WhatsApp
            </a>
          </Button>
        )}
        {!isMenuOnly && (
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-foreground/15 px-6"
          >
            <a href={unit.maps} target="_blank" rel="noopener">
              <MapPin className="h-4 w-4 text-caramel" /> Como chegar
            </a>
          </Button>
        )}
      </div>
      {isMenuOnly && (
        <div className="mt-3 space-y-2 border-t border-caramel/15 pt-3 text-xs leading-5 text-muted-foreground sm:text-sm">
          <p>
            Veja o cardápio da unidade, confira as sugestões da casa e escolha com calma antes da
            visita.
          </p>
          {unit.brunchAvailability && (
            <p className="inline-flex items-start gap-2 text-foreground/75">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
              <span>
                <span className="font-medium text-foreground">Brunch:</span>{" "}
                {unit.brunchAvailability}
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
