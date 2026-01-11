import React from 'react';
import { Leaf, Zap, Scale, Sparkles } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Scale className="w-8 h-8 text-white" />,
      title: "Emagrecimento Seguro",
      description: "Estratégias baseadas em evidências para perda de peso sustentável, sem efeito sanfona e preservando sua massa muscular."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Energia & Foco",
      description: "Regulação hormonal e nutricional para acabar com o cansaço crônico e aumentar sua produtividade diária."
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Qualidade de Vida",
      description: "Melhora do sono, disposição e prevenção de doenças crônicas através de um estilo de vida equilibrado."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Estética Avançada",
      description: "Tratamentos que harmonizam sua beleza natural, devolvendo a autoestima e confiança no espelho."
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-gold-600 uppercase tracking-widest text-sm font-semibold mb-4 block">Metodologia Exclusiva</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brown-800 mb-6">
            Um plano desenhado exclusivamente para o seu corpo.
          </h2>
          <p className="text-stone-500 text-lg font-light">
            Esqueça as dietas restritivas genéricas. Aqui tratamos a causa raiz, garantindo resultados definitivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 bg-beige-50 hover:bg-brown-800 transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 bg-brown-800 group-hover:bg-gold-400 flex items-center justify-center mb-6 transition-colors duration-500">
                {/* Clone icon with distinct color handling via CSS classes in parent/icon logic or simplify */}
                <div className="text-gold-400 group-hover:text-white transition-colors duration-500">
                   {/* React.cloneElement is a bit tricky with TS strict types without proper setup, 
                       so we rely on text color class inheritance or wrapper */}
                   {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-brown-800 group-hover:text-white mb-4 transition-colors duration-500">
                {benefit.title}
              </h3>
              <p className="text-stone-600 group-hover:text-white/80 font-light text-sm leading-relaxed transition-colors duration-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;