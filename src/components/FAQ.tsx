"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Vocês fabricam tanto móveis quanto esquadrias de alumínio?",
    answer: "Sim! Somos especialistas na fabricação, venda e instalação tanto de móveis planejados sob medida quanto de esquadrias de alumínio de alto padrão."
  },
  {
    question: "Como funciona o pagamento em até 18x sem juros?",
    answer: "Trabalhamos com condições especiais no cartão de crédito, permitindo dividir o projeto inteiro em até 18x sem juros após a aprovação do orçamento, sujeito a análise."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo varia conforme a complexidade e tamanho do projeto, mas estipulamos no contrato um prazo exato e garantimos a entrega até a data combinada, sem atrasos."
  },
  {
    question: "Fazem orçamento sem compromisso?",
    answer: "Com certeza! Basta clicar no botão do WhatsApp e nos mandar uma mensagem. Entenderemos a sua necessidade e enviaremos um orçamento detalhado e sem compromisso."
  },
  {
    question: "Vocês atendem quais regiões?",
    answer: "Estamos localizados em Jardim América, Águas Lindas - GO, e atendemos todo o Distrito Federal e regiões próximas. Entre em contato para confirmar a disponibilidade do nosso time na sua região."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-black">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-zinc-600">
            Tudo o que você precisa saber antes de fechar o seu projeto conosco.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white border border-zinc-200 shadow-sm rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-brand-black pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-brand-orange transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-zinc-600 mb-4">Ainda com dúvidas?</p>
          <a
            href="http://wa.me/556184896251"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-orange-600 transition-colors border-b border-brand-orange pb-1 hover:border-orange-600"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
