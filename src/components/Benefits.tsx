"use client";

import { motion } from "framer-motion";
import { Clock, CreditCard, ShieldCheck, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Até 18x Sem Juros",
    description: "Facilitamos o pagamento para que o seu projeto saia do papel direto para a sua casa sem pesar no bolso."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Entrega no Prazo",
    description: "Trabalhamos com cronograma rigoroso. O que combinamos no contrato é o que entregamos, pontualmente."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Anos de Garantia",
    description: "Confiamos na excelência do nosso trabalho. Todos os nossos produtos possuem garantia estendida de fábrica."
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Atendimento Rápido",
    description: "Suporte e dúvidas direto pelo WhatsApp. Você fala direto com quem entende e resolve o seu problema."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 relative z-10 -mt-8 rounded-t-[3rem]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-black">
            Por que escolher a Casas em Detalhe?
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Além da qualidade inquestionável, oferecemos uma experiência de compra que te deixa tranquilo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 group"
            >
              <div className="bg-brand-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-black">{benefit.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
