"use client";

import { useEffect, useState, useRef } from 'react';

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const problems = [
    {
      icon: '⚠️',
      title: 'Rações Industrializadas',
      description: 'Muitas rações contêm subprodutos de baixa qualidade, conservantes artificiais e grãos que podem causar problemas de saúde a longo prazo.'
    },
    {
      icon: '🤢',
      title: 'Problemas Digestivos',
      description: 'Seu gato sofre com vômitos frequentes, diarreia ou constipação? A alimentação inadequada pode ser a causa desses problemas.'
    },
    {
      icon: '💔',
      title: 'Doenças Renais',
      description: 'Rações de baixa qualidade podem sobrecarregar os rins do seu gato, levando a problemas renais graves e reduzindo sua expectativa de vida.'
    },
    {
      icon: '⚖️',
      title: 'Obesidade e Diabetes',
      description: 'O excesso de carboidratos nas rações comerciais pode levar à obesidade e ao desenvolvimento de diabetes em felinos.'
    },
    {
      icon: '🔍',
      title: 'Informações Confusas',
      description: 'Você se sente perdido entre tantas informações contraditórias sobre alimentação felina e não sabe em quem confiar?'
    },
    {
      icon: '😰',
      title: 'Medo de Errar',
      description: 'Você tem receio de tentar alimentação natural e acabar prejudicando a saúde do seu gato por falta de conhecimento adequado?'
    }
  ];

  const solutions = [
    "Seu gato mais saudável e feliz",
    "Alimentação natural e equilibrada",
    "Livre de rações industrializadas",
    "Receitas simples, prontas em minutos",
    "Economia garantida: sem precisar gastar com rações caras ou idas frequentes ao veterinário"
  ];

  return (
    <section id="beneficios" ref={sectionRef} className="w-full py-10 md:py-16 bg-card-bg relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-3 md:mb-4">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-highlight/15 text-highlight font-medium text-sm md:text-base">
              Por que mudar para uma alimentação natural?
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 section-title text-gray-800">
            Benefícios <span className="highlight">Imediatos</span> para seu Gato
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-700">
            Agora você pode mudar isso com um clique! Receba nosso <strong>Livro Digital com 20 Receitas Caseiras Balanceadas para Gatos</strong> e aprenda como preparar refeições naturais, saudáveis e seguras no conforto da sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`bg-white p-4 md:p-5 rounded-lg shadow-md border border-highlight/10 transition-all duration-300 hover:shadow-lg hover:border-highlight/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-highlight/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-xl">{problem.icon}</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">{problem.title}</h3>
                  <p className="text-xs md:text-sm text-gray-700">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-8 md:mt-10 p-4 md:p-5 bg-white rounded-lg shadow-md border border-highlight/10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-highlight/15 flex items-center justify-center text-2xl md:text-3xl">
                📘
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800 text-center md:text-left">O que você vai receber:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-highlight/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-highlight text-xs md:text-sm font-bold">✅</span>
                    </div>
                    <span className="text-xs md:text-sm text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 md:mt-6 text-center">
                <a 
                  href="https://pay.hotmart.com/B98656274B?off=alr1fi43" 
                  className="inline-block bg-highlight text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-base hover:bg-highlight/90 transition-colors shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  QUERO RECEBER O MEU EBOOK AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 