import React from 'react';
import { Activity, Heart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 aspect-[4/5] bg-stone-200 overflow-hidden">
               <img 
                src="public/imgs/image.png" 
                alt="Dra. Carolina em atendimento" 
                className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-brown-800/30 z-0"></div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-8">
            <h4 className="text-gold-600 uppercase tracking-widest text-sm font-semibold">Sobre a Especialista</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-brown-800 leading-tight">
              Medicina integrativa com olhar humano e científico.
            </h2>
            
            <div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
              <p>
                Olá, sou a <strong className="text-brown-800 font-medium">Dra. Carolina Cunha</strong>. Acredito que a verdadeira estética é o reflexo de uma saúde plena. Meu trabalho não é apenas sobre números na balança, mas sobre devolver a sua vitalidade.
              </p>
              <p>
                Com anos de experiência e mais de <span className="text-brown-800 border-b border-gold-400">2000 pacientes atendidos</span>, desenvolvi um método proprietário que une a precisão da ciência médica com o cuidado individualizado que você merece.
              </p>
              <p>
                No Health Center, você não é apenas mais um paciente. Nós mapeamos seu metabolismo, rotina e objetivos para criar um plano que se adapta à sua vida, e não o contrário.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col space-y-2">
                <Activity className="text-gold-400 mb-2" size={28} />
                <h3 className="font-serif text-xl text-brown-800">Performance</h3>
                <p className="text-sm text-stone-500">Otimização metabólica para seu máximo potencial.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <ShieldCheck className="text-gold-400 mb-2" size={28} />
                <h3 className="font-serif text-xl text-brown-800">Longevidade</h3>
                <p className="text-sm text-stone-500">Envelhecimento saudável com autonomia e vigor.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Heart className="text-gold-400 mb-2" size={28} />
                <h3 className="font-serif text-xl text-brown-800">Cuidado</h3>
                <p className="text-sm text-stone-500">Acompanhamento próximo e humanizado.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;