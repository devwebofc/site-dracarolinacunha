import React from 'react';
import Button from './ui/Button';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-beige-100 pt-20 pb-10 border-t border-brown-800/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-2xl font-serif text-brown-800 tracking-widest uppercase border-l-4 border-gold-400 pl-4">
              HC <br/>
              <span className="text-sm font-sans font-normal normal-case block mt-1">Health Center</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              Transformando vidas através da medicina integrativa, estética e performance. Sua melhor versão começa aqui.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-brown-800 text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-stone-600 text-sm">
              <li><a href="#sobre" className="hover:text-gold-500 transition-colors">Sobre Dra. Carolina</a></li>
              <li><a href="#metodo" className="hover:text-gold-500 transition-colors">Nosso Método</a></li>
              <li><a href="#depoimentos" className="hover:text-gold-500 transition-colors">Resultados</a></li>
              <li><a href="#contato" className="hover:text-gold-500 transition-colors">Agendamento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-brown-800 text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-stone-600 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-500" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-500" />
                <span>contato@healthcenter.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 mt-1" />
                <span>Av. Paulista, 1000 - São Paulo<br/>Edifício Medical Tower</span>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="bg-white p-6 shadow-sm border border-brown-100">
            <h4 className="font-serif text-brown-800 text-lg mb-4">Pronto para mudar?</h4>
            <p className="text-xs text-stone-500 mb-6">
              Agende sua avaliação inicial e descubra o protocolo ideal para você.
            </p>
            <Button className="w-full justify-center">
              Agendar Agora
            </Button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-800/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
          <p>&copy; {new Date().getFullYear()} Health Center - Dra. Carolina Cunha. CRM/SP 000000.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;