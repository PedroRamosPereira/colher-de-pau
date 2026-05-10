import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

type OrdersProps = {
  unitName?: string;
  whatsappHref?: string;
};

export function Orders({ unitName, whatsappHref: _whatsappHref }: OrdersProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [date, setDate] = useState("");

  const productLabels: Record<string, string> = {
    bolo: "Bolo inteiro",
    cesta: "Cesta de café da manhã",
    evento: "Coffee break / evento",
    outro: "Outro",
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "5527981890666";
    const selectedProduct = productLabels[product] ?? product;
    const message = encodeURIComponent(
      `Olá! Gostaria de fazer uma encomenda:\n\n` +
        `Nome: ${name}\n` +
        `Celular: ${phone}\n` +
        `Produto: ${selectedProduct}\n` +
        `Data desejada: ${date}`,
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="encomendas"
      className="relative py-24 lg:py-32 bg-bistro text-cream overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, oklch(0.7 0.15 60) 0, transparent 40%), radial-gradient(circle at 80% 90%, oklch(0.6 0.12 50) 0, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="uppercase text-xs tracking-[0.3em] text-caramel mb-5">
            After Coffee · Encomendas{unitName ? ` · ${unitName}` : ""}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
            Eternize e transforme seus momentos com as nossas{" "}
            <em className="text-caramel">encomendas exclusivas.</em>
          </h2>
          <p className="mt-6 text-cream/75 text-lg leading-relaxed max-w-lg">
            {unitName
              ? `A unidade ${unitName} recebe pedidos de bolos inteiros, cestas de café da manhã e itens para eventos sob medida.`
              : "Comercializamos bolos inteiros, cestas de café da manhã majestosas e fornecemos itens para eventos executados inteiramente sob medida para a sua celebração."}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-cream/5 backdrop-blur-md border border-cream/15 p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="order-name" className="text-cream/80">
                  Nome
                </Label>
                <Input
                  id="order-name"
                  className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 rounded-xl h-11"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="order-phone" className="text-cream/80">
                  Celular
                </Label>
                <Input
                  id="order-phone"
                  className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/40 rounded-xl h-11"
                  placeholder="(27) 9..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label id="order-type-label" className="text-cream/80">
                Natureza da encomenda
              </Label>
              <Select value={product} onValueChange={setProduct}>
                <SelectTrigger
                  aria-labelledby="order-type-label"
                  className="bg-cream/10 border-cream/20 text-cream rounded-xl h-11"
                >
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bolo">Bolo inteiro</SelectItem>
                  <SelectItem value="cesta">Cesta de café da manhã</SelectItem>
                  <SelectItem value="evento">Coffee break / evento</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="order-date" className="text-cream/80">
                Data prevista
              </Label>
              <Input
                id="order-date"
                type="date"
                className="bg-cream/10 border-cream/20 text-cream rounded-xl h-11"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-caramel hover:bg-caramel/90 text-primary-foreground h-12 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <MessageCircle className="h-4 w-4 mr-1" /> Solicitar Orçamento Ágil via WhatsApp
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
