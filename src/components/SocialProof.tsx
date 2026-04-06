"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "18x", label: "Parcelamento Sem Juros" },
  { value: "100%", label: "Projetos Sob Medida" },
  { value: "Rápida", label: "Entrega Garantida" },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-b border-zinc-200 relative z-10 -mt-4 rounded-t-3xl sm:-mt-8 sm:rounded-t-[3rem] shadow-xl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-zinc-200">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-3xl md:text-5xl font-black text-brand-black tracking-tighter mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-zinc-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
