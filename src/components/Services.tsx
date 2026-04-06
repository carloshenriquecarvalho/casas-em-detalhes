"use client";

import { motion } from "framer-motion";
import { Hammer, DoorOpen, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-black">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Design, fabricação e instalação impecável. Dominamos duas áreas essenciais para transformar o seu espaço.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Serviço 1: Móveis Planejados */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 z-10 transition-colors duration-500" />
            <Image 
              src="/IMG_0251.WEBP"
              alt="Móveis Planejados"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10 z-20">
              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20">
                <Hammer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Móveis Planejados</h3>
              <p className="text-zinc-200 leading-relaxed max-w-md mb-6 shadow-sm">
                Cozinhas, dormitórios, salas e closets projetados para maximizar seu espaço com ergonomia, beleza e materiais de primeiríssima linha.
              </p>
              <a href="http://wa.me/556184896251" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-white transition-colors">
                Solicitar Orçamento <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Serviço 2: Esquadrias de Alumínio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 z-10 transition-colors duration-500" />
            <Image 
              src="/IMG_0059.PNG"
              alt="Esquadrias de Alumínio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10 z-20">
              <div className="bg-brand-orange w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/30">
                <DoorOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Esquadrias de Alumínio</h3>
              <p className="text-zinc-200 leading-relaxed max-w-md mb-6 shadow-sm">
                Janelas, portas e fachadas em alumínio que trazem luz natural, isolamento e um visual moderno de alto padrão para sua obra.
              </p>
              <a href="http://wa.me/556184896251" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-brand-orange transition-colors">
                Solicitar Orçamento <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
