import React from 'react';
import Button from './ui/Button';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-brown-800 overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brown-900/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 text-white order-2 lg:order-1 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest font-medium">Health Center Premium</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
            Te ajudo a <br/>
            <span className="italic text-gold-400">conquistar</span> sua vida <br/>
            e corpo dos sonhos.
          </h1>

          <p className="text-lg text-white/80 max-w-lg font-light leading-relaxed">
            Emagrecimento saudável, performance, qualidade de vida e acompanhamento médico personalizado para quem não aceita o básico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button onClick={() => document.getElementById('contato')?.scrollIntoView()}>
              Agende sua consulta
            </Button>
            <button className="px-8 py-3 text-white border border-white/30 hover:bg-white/10 transition-colors uppercase text-xs sm:text-sm tracking-wide">
              Conheça o Método
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-white/10 mt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-brown-800 bg-beige-100 overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${i + 10}`} alt="Paciente" className="w-full h-full object-cover" />
                 </div>
               ))}
               <div className="w-10 h-10 rounded-full border-2 border-brown-800 bg-gold-400 text-white flex items-center justify-center text-xs font-bold">
                 +2k
               </div>
            </div>
            <div>
              <div className="flex text-gold-400 mb-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm text-white/70">
                <span className="text-white font-medium">+ de 2000 vidas</span> transformadas
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[500px] lg:h-[800px] w-full order-1 lg:order-2 flex items-end justify-center lg:justify-end">
           {/* 
              In a real scenario, this would be the provided image of Dra. Carolina (brunette, red suit).
              Using a styled placeholder to represent the visual weight.
           */}
           <div className="relative w-full h-full max-w-lg">
             <div className="absolute inset-0 bg-gold-400/20 rounded-t-full blur-3xl transform translate-y-20"></div>
             <img 
              src="public/imgs/image.png" 
              alt="Dra. Carolina Cunha" 
              className="relative w-full h-full object-cover object-top rounded-t-full shadow-2xl border-b-0 grayscale-[20%] sepia-[10%]"
             />
             
             {/* Floating Badge */}
             <div className="absolute bottom-10 -left-6 bg-white/95 backdrop-blur shadow-xl p-4 max-w-[200px] hidden md:block">
               <p className="font-serif text-2xl text-brown-800 italic">"Sua saúde é o seu maior luxo."</p>
               <p className="text-xs text-stone-500 mt-2 uppercase tracking-wide">— Dra. Carolina Cunha</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;