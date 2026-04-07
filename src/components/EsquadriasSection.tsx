"use client";

import { motion } from "framer-motion";
import { Volume2, CloudRain, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function EsquadriasSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo - Texto e Benefícios */}
          <div className="flex flex-col gap-10 relative z-10">
            <div>
              <span className="text-brand-orange font-sans font-semibold tracking-[0.2em] text-sm uppercase mb-4 block">
                Alumínio e Vidro
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                Esquadrias de Alto Padrão para Projetos Exigentes.
              </h2>
              <p className="text-zinc-400 font-sans text-lg md:text-xl leading-relaxed">
                Do fechamento de varandas a fachadas imponentes. Nossas esquadrias unem estética minimalista, segurança e conforto térmico para o seu projeto.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <Volume2 className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-zinc-200 font-medium leading-snug">Isolamento Acústico e Térmico</h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <CloudRain className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-zinc-200 font-medium leading-snug">Resistência Extrema ao Tempo</h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-zinc-200 font-medium leading-snug">Design Minimalista e Elegante</h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-zinc-200 font-medium leading-snug">Manutenção Zero</h3>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center px-8 py-4 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-[#0A0A0A] font-semibold rounded-md transition-all duration-300"
              >
                Falar com Especialista em Esquadrias
              </a>
            </div>
          </div>

          {/* Lado Direito - Imagem Imersiva */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] md:h-[700px] w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-white/5"
          >
            <Image 
              src="/esquadrias-servico.png" 
              alt="Esquadrias de Alumínio de Alto Padrão" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            {/* Overlay sutil na base para dar peso e contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
