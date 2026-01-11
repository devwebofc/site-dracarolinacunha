import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Eu achava que já tinha tentado de tudo para emagrecer. Com a Dra. Carolina, descobri que o problema não era falta de esforço, mas a estratégia errada. Perdi 12kg e recuperei minha autoestima.",
      author: "Mariana S.",
      role: "Empresária, 34 anos"
    },
    {
      text: "O atendimento no Health Center é impecável. Desde a recepção até a consulta, você se sente acolhido. Não é só estética, é saúde de verdade. Hoje tenho a disposição que tinha aos 20 anos.",
      author: "Carlos E.",
      role: "Advogado, 42 anos"
    },
    {
      text: "A Dra. Carol mudou minha relação com a comida e com meu corpo. O método é leve, possível de seguir e os resultados são visíveis muito rápido. Recomendo de olhos fechados.",
      author: "Fernanda L.",
      role: "Arquiteta, 29 anos"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-brown-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <Quote className="text-gold-400 w-12 h-12 mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Histórias Reais</h2>
          <p className="text-white/60 font-light max-w-2xl">
            O resultado do nosso compromisso com a excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-8 border border-white/10 hover:border-gold-400/50 transition-all duration-300">
              <div className="flex mb-4 text-gold-400">
                ★★★★★
              </div>
              <p className="text-white/80 font-light italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-serif text-lg text-white">{t.author}</p>
                <p className="text-xs text-gold-400 uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;