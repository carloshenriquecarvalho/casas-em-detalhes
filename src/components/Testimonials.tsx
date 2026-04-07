"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-black">
            O que nossos clientes dizem?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior propaganda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {[
            {
              text: "Fiz toda a marcenaria do meu apartamento com eles. O resultado ficou incrível, padrão altíssimo e entregaram até antes do prazo combinado. Recomendo de olhos fechados!",
              author: "Mariana Costa",
              role: "Projeto Residencial"
            },
            {
              text: "Colocamos as esquadrias de alumínio na nossa casa e o visual mudou completamente. Muito profissionais, limpos durante o serviço e preço justo pelas condições em 18x.",
              author: "Roberto e Silva",
              role: "Esquadrias de Alumínio"
            },
            {
              text: "Depois de muita dor de cabeça com outros marceneiros, achei a empresa. Fizeram o escritório da minha clínica e ficou perfeito. Acabamento fino.",
              author: "Dra. Aline Mendes",
              role: "Projeto Comercial"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-50 p-6 rounded-3xl border border-zinc-200 shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-orange to-amber-300 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-brand-black font-semibold">{item.author}</div>
                  <div className="text-brand-orange text-sm font-medium">{item.role}</div>
                </div>
              </div>
              <div>
                <p className="text-zinc-700">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
