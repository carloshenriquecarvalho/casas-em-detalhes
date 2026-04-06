"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-black">
            Chega de dores de cabeça na sua obra
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Entendemos que mobiliar ou reformar pode ser estressante. Aqui, o processo é diferente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Problemas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-semibold text-brand-black">Como costuma ser</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Atrasos intermináveis na entrega e montagem",
                "Móveis que não se encaixam perfeitamente no espaço",
                "Qualidade inferior ao prometido",
                "Falta de transparência e comunicação ruim",
                "Preços abusivos e difíceis de parcelar"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-600">
                  <span className="text-zinc-400 mt-1 shrink-0">—</span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solução (Borges) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-brand-orange/10 to-transparent p-8 sm:p-10 rounded-3xl border border-brand-orange/30 shadow-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/40 blur-3xl z-0" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                <h3 className="text-2xl font-semibold text-brand-black">Com a Casas em Detalhe</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Pontualidade rigorosa e entrega garantida",
                  "Projetos 100% personalizados e sob medida",
                  "Acabamentos premium e durabilidade superior",
                  "Atendimento próximo via WhatsApp",
                  "Condições facilitadas em até 18x sem juros"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-black">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 shrink-0" />
                    <p className="font-medium">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
