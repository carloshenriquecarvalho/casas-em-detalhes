"use client";

import { motion } from "framer-motion";
import { Volume2, CloudRain, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function EsquadriasSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Lado Esquerdo - Texto e Benefícios */}
          <div className="flex flex-col gap-8 md:gap-10 relative z-10 order-2 lg:order-1">
            <div>
              <span className="text-brand-orange font-sans font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4 block">
                Alumínio e Vidro
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-6 leading-tight">
                Esquadrias de Alto Padrão para Projetos.
              </h2>
              <p className="text-zinc-400 font-sans text-base sm:text-lg md:text-xl leading-relaxed">
                Do fechamento de varandas a fachadas imponentes. Nossas esquadrias unem estética minimalista, segurança e conforto térmico para o seu projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <Volume2 className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-zinc-200 font-medium leading-snug">Isolamento Acústico e Térmico</h3>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <CloudRain className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-zinc-200 font-medium leading-snug">Resistência Extrema ao Tempo</h3>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-zinc-200 font-medium leading-snug">Design Minimalista e Elegante</h3>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-zinc-200 font-medium leading-snug">Manutenção Zero</h3>
              </div>
            </div>

            <div className="pt-2 md:pt-4">
              <a 
                href="#contato" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-[#0A0A0A] font-semibold rounded-md transition-all duration-300 text-center"
              >
                Falar com Especialista em Esquadrias
              </a>
            </div>
          </div>

          {/* Lado Direito - Imagem Imersiva */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[700px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-white/5 order-1 lg:order-2"
          >
            <Image 
              src="/esquadrias-servico.png" 
              alt="Esquadrias de Alumínio de Alto Padrão" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
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
