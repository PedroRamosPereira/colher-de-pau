import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useUnit } from "@/context/UnitContext";

const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

export function Recommendations() {
  const { unit } = useUnit();
  const today = new Date().getDay();
  const picks = unit.weekly[today];
  const dayName = days[today];

  return (
    <section id="recomendacoes" className="py-24 lg:py-32 bg-cream/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5 inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Recomendações de hoje · {dayName} · {unit.shortName}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">A curadoria de hoje, feita para você.</h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Nossa Chef Samira seleciona, todos os dias, três pequenas obras disponíveis na unidade {unit.shortName}. Volte amanhã para uma nova combinação.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline" className="rounded-full border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground">
                <a href={unit.cardapioPdf} target="_blank" rel="noopener">Ver cardápio completo</a>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {picks.map((p, i) => (
            <Reveal key={p.name} delay={0.1 * i}>
              <div className="group rounded-3xl overflow-hidden bg-card border border-border h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-caramel">{p.tag}</p>
                  <div className="mt-2 flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-2xl">{p.name}</h3>
                    <span className="text-caramel font-medium whitespace-nowrap">{p.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
