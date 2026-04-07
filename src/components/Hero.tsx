"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Graphic/Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
        <Image
          src="/estande-televisao.png"
          alt="Móveis Planejados de Alto Padrão"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover opacity-100 mix-blend-multiply"
        />
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))] opacity-[0.03] z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="/logo.png" 
              alt="Casas em Detalhe Logo" 
              width={200} 
              height={100}
              className="mx-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange mb-6 text-sm font-semibold tracking-wide uppercase shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Qualidade, Eficiência e Conforto
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-black mb-4 leading-[1.1]"
          >
            Transforme sua casa com <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              móveis e esquadrias
            </span>{" "}
            sob medida
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed"
          >
            Soluções inteligentes, design exclusivo e acabamento impecável para cada ambiente. Do seu jeito, no seu espaço.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <a
              href="http://wa.me/556184896251"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-orange-600 hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_rgba(239,108,0,0.4)] active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            
            <a
              href="#servicos"
              className="group flex items-center justify-center gap-2 bg-zinc-100 border border-zinc-200 text-brand-black px-8 py-4 rounded-xl text-lg font-medium transition-all hover:bg-zinc-200 hover:border-zinc-300"
            >
              Conhecer Nossos Serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
