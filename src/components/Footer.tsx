import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Logo / Sobre */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tighter">
              Casas em <span className="text-brand-orange">Detalhe</span>
            </h2>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Transformando casas e empresas com móveis planejados de alto padrão e esquadrias de alumínio premium no Distrito Federal.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-400 hover:text-brand-orange transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-zinc-400 hover:text-brand-orange transition-colors">Serviços</a></li>
              <li><a href="http://wa.me/556184896251" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-brand-orange transition-colors">Orçamento</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>(61) 99143-8455</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>contato@casasemdetalhe.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>Quadra 15 lote 15 Jardim América 3, Águas Lindas - GO</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Casas em Detalhe. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs font-mono uppercase tracking-wider">
            A PREMIUM IMPLEMENTATION. MADE BY NEXUS GROWTH
          </p>
        </div>
      </div>
    </footer>
  );
}
