import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "./Reveal";
import { PawPrint } from "lucide-react";
import { useUnit } from "@/context/UnitContext";
import type { MenuItem } from "@/data/units";

function Card({ item }: { item: MenuItem }) {
  return (
    <div className="group rounded-3xl overflow-hidden bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-xl">{item.name}</h3>
          {item.price && (
            <span className="text-caramel font-medium whitespace-nowrap">{item.price}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export function MenuSection() {
  const { unit } = useUnit();
  const groups = {
    confeitaria: unit.menu.filter((i) => i.category === "confeitaria"),
    bistro: unit.menu.filter((i) => i.category === "bistro"),
    cafeteria: unit.menu.filter((i) => i.category === "cafeteria"),
  };

  return (
    <section id="cardapio" className="py-24 lg:py-32 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5">
              Principais da casa · {unit.shortName}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Favoritos para cada hora do dia.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Uma seleção dos principais da unidade {unit.shortName}, da confeitaria ao café.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Tabs defaultValue="confeitaria" className="mt-14">
            <div className="flex justify-center overflow-x-auto whitespace-nowrap pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsList className="mx-auto inline-flex min-w-max rounded-full bg-background border border-border p-1.5 h-auto">
                <TabsTrigger
                  value="confeitaria"
                  className="min-h-11 rounded-full px-5 py-2.5 data-[state=active]:bg-caramel data-[state=active]:text-primary-foreground"
                >
                  Confeitaria
                </TabsTrigger>
                <TabsTrigger
                  value="bistro"
                  className="min-h-11 rounded-full px-5 py-2.5 data-[state=active]:bg-caramel data-[state=active]:text-primary-foreground"
                >
                  Bistrô
                </TabsTrigger>
                <TabsTrigger
                  value="cafeteria"
                  className="min-h-11 rounded-full px-5 py-2.5 data-[state=active]:bg-caramel data-[state=active]:text-primary-foreground"
                >
                  Cafeteria
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(groups).map(([key, items]) => (
              <TabsContent key={key} value={key} className="mt-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((item) => (
                    <Card key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>

        {unit.petFriendly && (
          <Reveal delay={0.2}>
            <div className="mt-12 mx-auto max-w-2xl rounded-2xl border border-caramel/30 bg-background px-6 py-5 flex items-center gap-4 shadow-sm">
              <PawPrint className="h-5 w-5 text-caramel shrink-0" />
              <p className="text-sm text-foreground/80">
                <span className="font-medium">{unit.shortName}</span> é uma casa pet friendly, traga
                seu melhor amigo.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
