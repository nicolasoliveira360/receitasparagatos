"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the countdown date to 7 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        // Reset the countdown if it's expired
        targetDate.setDate(now.getDate() + 7);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

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

  const features = [
    "Ebook digital enviado diretamente para seu e-mail",
    "Receitas desenvolvidas com orientação de especialistas",
    "Ingredientes simples encontrados no mercado",
    "Passo a passo fácil, até para quem nunca cozinhou",
    "Acesse do celular, tablet ou computador",
    "Envio imediato após a compra!"
  ];

  return (
    <section id="comprar" ref={sectionRef} className="w-full py-10 md:py-16 bg-soft relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-3 md:mb-4">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-highlight/15 text-highlight font-medium text-sm md:text-base">
              Oferta Especial por Tempo Limitado
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 section-title text-gray-900">
            O <span className="text-highlight">Livro Digital</span> Completo com 20 Receitas
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-700">
            Poderia custar R$297, mas estamos oferecendo por apenas R$37 para ajudar mais tutores conscientes!
          </p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-lg overflow-hidden border border-highlight/10 shadow-lg max-w-3xl mx-auto">
            <div 
              className="card-header p-4 md:p-5 relative" 
              style={{
                backgroundColor: '#b8860b',
                color: '#ffffff'
              }}
            >
              <div className="absolute top-0 right-0 bg-white text-highlight font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-bl-lg transform translate-y-0 text-xs md:text-sm z-10 shadow-md">
                87% OFF
              </div>
              <h3 
                className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2"
                style={{color: '#ffffff'}}
              >
                O Livro Digital (Ebook) Completo com 20 Receitas Caseiras Balanceadas para Gatos!
              </h3>
              <p 
                className="text-xs md:text-sm"
                style={{color: '#ffffff'}}
              >
                Transforme a saúde do seu gato em 7 dias com nosso livro digital de receitas saudáveis!
              </p>
            </div>
            
            <div className="p-4 md:p-6">
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <span className="text-gray-500 line-through text-sm md:text-base mr-2 md:mr-3">R$ 297,00</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-highlight bg-highlight/10 px-3 py-1 rounded-md">R$ 37,00</span>
                <span className="text-gray-600 ml-2 md:ml-3 text-xs md:text-sm">pagamento único</span>
              </div>
              
              <div className="mb-6 md:mb-8">
                <div className="bg-highlight/10 p-3 md:p-4 rounded-lg border border-highlight/20 mb-4 md:mb-6 shadow-sm">
                  <div className="text-center mb-1 md:mb-2">
                    <p className="font-medium text-gray-900 text-xs md:text-sm">Oferta por tempo limitado! Termina em:</p>
                  </div>
                  <div className="flex justify-center gap-2 md:gap-3">
                    <div className="bg-white px-2 md:px-3 py-1 md:py-2 rounded-lg text-center min-w-[50px] md:min-w-[60px] shadow-sm border border-highlight/10">
                      <div className="text-sm md:text-base lg:text-lg font-bold text-highlight">{timeLeft.days}</div>
                      <div className="text-xs text-gray-600">Dias</div>
                    </div>
                    <div className="bg-white px-2 md:px-3 py-1 md:py-2 rounded-lg text-center min-w-[50px] md:min-w-[60px] shadow-sm border border-highlight/10">
                      <div className="text-sm md:text-base lg:text-lg font-bold text-highlight">{timeLeft.hours}</div>
                      <div className="text-xs text-gray-600">Horas</div>
                    </div>
                    <div className="bg-white px-2 md:px-3 py-1 md:py-2 rounded-lg text-center min-w-[50px] md:min-w-[60px] shadow-sm border border-highlight/10">
                      <div className="text-sm md:text-base lg:text-lg font-bold text-highlight">{timeLeft.minutes}</div>
                      <div className="text-xs text-gray-600">Min</div>
                    </div>
                    <div className="bg-white px-2 md:px-3 py-1 md:py-2 rounded-lg text-center min-w-[50px] md:min-w-[60px] shadow-sm border border-highlight/10">
                      <div className="text-sm md:text-base lg:text-lg font-bold text-highlight">{timeLeft.seconds}</div>
                      <div className="text-xs text-gray-600">Seg</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-6 md:mb-8">
                  <Link 
                    href="https://pay.hotmart.com/B98656274B?off=7cfnci5g" 
                    className="inline-block bg-highlight text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-base hover:bg-highlight/90 transition-all duration-300 shadow-md hover:shadow-lg w-full max-w-md mx-auto flex items-center justify-center gap-1 md:gap-2 hover:scale-[1.02]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>QUERO RECEBER O MEU EBOOK AGORA POR APENAS R$37!</span>
                  </Link>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xs text-gray-700 mt-3 md:mt-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-1 md:mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Pagamento seguro</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-1 md:mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Garantia total de 7 dias</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-gray-900 text-center">O que você vai <span className="text-highlight font-bold">receber</span>:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-highlight/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 md:h-3 md:w-3 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs md:text-sm text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="mt-6 md:mt-8 text-xs md:text-sm text-gray-800 text-center">
                  <span className="font-semibold text-highlight">Garantia incondicional:</span> Não gostou do livro digital? Devolvemos 100% do seu dinheiro, sem perguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 