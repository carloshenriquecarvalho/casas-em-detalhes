"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendGTMEvent } from "@next/third-parties/google";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";


export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    projectType: "",
    urgency: "",
    stage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Push event to Google Tag Manager dataLayer
    if (typeof window !== "undefined") {
      sendGTMEvent({
        event: "whatsapp_click",
        lead_data: {
          project_type: formData.projectType,
          urgency: formData.urgency,
          stage: formData.stage,
        },
      });
    }

    // Simulate processing time
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Build WhatsApp message based on form
      const urgencyText = formData.urgency ? ` Pretendo iniciar ${formData.urgency.toLowerCase()}.` : "";
      const stageText = formData.stage ? ` A obra está ${formData.stage.toLowerCase()}.` : "";
      const text = `Olá! Meu nome é ${formData.name}. Tenho interesse em projetos de ${formData.projectType || 'ambientes sob medida'}.${urgencyText}${stageText}`;
      
      const whatsappUrl = `https://wa.me/556184896251?text=${encodeURIComponent(text)}`;
      
      // Redirect after a short delay so the user sees the success state
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setIsSuccess(false);
        setFormData({ name: "", whatsapp: "", projectType: "", urgency: "", stage: "" });
      }, 1500);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="orcamento" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Dê o primeiro passo para o seu <span className="text-brand-orange">novo ambiente</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed">
              Conte-nos um pouco sobre a sua necessidade. Isso nos ajuda a direcionar o especialista ideal para entender e cotar o seu projeto com agilidade e precisão.
            </p>

            <div className="space-y-6">
              {[
                "Atendimento rápido via WhatsApp",
                "Orçamento detalhado e transparente",
                "Especialistas em projetos de alto padrão",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-zinc-300">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl relative"
          >
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center text-center h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">Tudo Certo!</h3>
                <p className="text-zinc-600 mb-6">
                  Estamos redirecionando você para o WhatsApp do nosso especialista...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-brand-black">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="João Silva"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-zinc-400"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-brand-black">WhatsApp</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-zinc-400"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="projectType" className="text-sm font-medium text-brand-black">O que você está buscando?</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all text-brand-black"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Móveis Planejados">Móveis Planejados</option>
                    <option value="Esquadrias de Alumínio">Esquadrias de Alumínio</option>
                    <option value="Móveis e Esquadrias">Ambos (Móveis e Esquadrias)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="stage" className="text-sm font-medium text-brand-black">Estágio do projeto</label>
                    <select
                      id="stage"
                      name="stage"
                      required
                      value={formData.stage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all text-brand-black text-sm"
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="Na planta">Na planta</option>
                      <option value="Em obras">Em obras</option>
                      <option value="Pronto para mobiliar">Pronto / Entregue</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="urgency" className="text-sm font-medium text-brand-black">Quando pretende iniciar?</label>
                    <select
                      id="urgency"
                      name="urgency"
                      required
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all text-brand-black text-sm"
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="Imediatamente">Imediatamente</option>
                      <option value="1 a 3 meses">De 1 a 3 meses</option>
                      <option value="Mais de 3 meses">Mais de 3 meses</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-4 rounded-xl text-lg font-bold transition-all hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed group shadow-[0_0_20px_-5px_rgba(239,108,0,0.3)] hover:shadow-[0_0_25px_-5px_rgba(239,108,0,0.5)]"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Solicitar Orçamento
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-zinc-500 mt-4">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
