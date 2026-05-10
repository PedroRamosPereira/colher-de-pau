import { Reveal } from "./Reveal";
import { Sparkles } from "lucide-react";
import { useUnit } from "@/context/UnitContext";

const days = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function Recommendations() {
  const { unit } = useUnit();
  const today = new Date().getDay();
  const picks = unit.weekly[today];
  const highlight = picks[0];
  const classics = picks.slice(1);
  const dayName = days[today];

  return (
    <section id="recomendacoes-rapidas" className="scroll-mt-28 py-24 lg:py-32 bg-cream/60">
      <div id="recomendacoes" className="mx-auto max-w-7xl scroll-mt-28 px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="max-w-2xl">
              <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5 inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Recomendações de hoje · {dayName} ·{" "}
                {unit.shortName}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">
                Continue passeando pela seleção de hoje.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Aqui estão as escolhas do dia com mais calma, para você explorar sabores, preços e
                detalhes antes de abrir o cardápio completo da unidade {unit.shortName}.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)] mb-10 lg:mb-12">
            <div className="overflow-hidden rounded-[2rem] border border-caramel/15 bg-background shadow-xl shadow-bistro/5">
              <div className="grid gap-6 sm:grid-cols-[1.05fr_0.95fr] sm:items-stretch">
                <div className="aspect-[4/3] overflow-hidden sm:aspect-auto sm:h-full">
                  <img
                    src={highlight.image}
                    alt={highlight.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-caramel">
                      Destaque de hoje
                    </p>
                    <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                      {highlight.name}
                    </h2>
                    <p className="mt-3 text-sm font-medium text-caramel">
                      {highlight.tag} · {highlight.price}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {highlight.desc} Uma escolha pensada para quem quer começar pelo favorito da
                      casa hoje.
                    </p>
                  </div>
                  <p className="mt-6 rounded-2xl bg-caramel/10 px-4 py-3 text-sm leading-relaxed text-foreground/75">
                    A seleção muda diariamente; o cardápio completo fica concentrado no bloco de
                    ações e na seção de cardápio da unidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-6 sm:p-7">
              <p className="uppercase text-xs tracking-[0.3em] text-caramel">
                Clássicos para acompanhar
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Se a vontade pedir mais um mimo da vitrine, estes dois completam a mesa com o mesmo
                clima da seleção de hoje.
              </p>
              <div className="mt-6 space-y-4">
                {classics.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 rounded-2xl border border-border/80 bg-background/70 p-3"
                  >
                    <div className="h-20 w-20 overflow-hidden rounded-2xl shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-caramel">
                        {item.tag}
                      </p>
                      <div className="mt-1 flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-xl leading-tight">{item.name}</h3>
                        <span className="whitespace-nowrap text-sm font-medium text-caramel">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
