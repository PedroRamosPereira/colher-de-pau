import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase text-xs tracking-[0.3em] text-caramel mb-6"
          >
            Cafeteria & Bistrô · desde 2017
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground"
          >
            Uma pausa para o <em className="text-caramel">afeto</em> e o verdadeiro sabor.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Desde 2017 proporcionando experiências gastronômicas singulares. O conforto
            inigualável de um legítimo cantinho de Paris aguardando por você em Vila Velha.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="rounded-full bg-caramel text-primary-foreground hover:bg-bistro h-12 px-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <a href="#cardapio">Desbravar o Cardápio <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-caramel/40 text-caramel hover:bg-caramel hover:text-primary-foreground transition-all duration-300">
              <a href="/cardapio.pdf" target="_blank" rel="noopener">Cardápio em PDF</a>
            </Button>
            <Button asChild size="lg" className="rounded-full h-12 px-7 bg-[#EA1D2C] text-white hover:bg-[#c8121f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <a href="https://www.ifood.com.br/delivery/vila-velha-es/colher-de-pau" target="_blank" rel="noopener">Pedir no iFood</a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative arch-image aspect-[4/5] shadow-2xl">
            <img src={heroImg} alt="Interior da Colher de Pau" className="h-full w-full object-cover" width={1600} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-t from-bistro/40 via-transparent to-transparent" />
          </div>
          <div className="hidden lg:flex absolute -left-10 bottom-10 bg-background border border-border rounded-2xl px-5 py-4 shadow-xl items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-caramel/15 flex items-center justify-center font-serif text-caramel">★</div>
            <div>
              <p className="text-sm font-medium">Pet Friendly</p>
              <p className="text-xs text-muted-foreground">Varandas acolhedoras</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
