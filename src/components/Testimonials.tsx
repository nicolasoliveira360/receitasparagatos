"use client";

import { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Ana P.",
      location: "São Paulo, SP",
      rating: 5,
      text: "Meu gato Simba sempre foi exigente com comida e tinha problemas de pele recorrentes. Depois de começar a preparar as receitas deste e-book, a transformação foi incrível! Sua pelagem está brilhante, ele está mais ativo e os problemas de pele desapareceram completamente. Estou economizando com veterinário e vendo meu gato muito mais feliz.",
      catName: "Simba",
      catAge: "4 anos",
      highlight: "Problemas de pele resolvidos",
      date: "15/03/2023"
    },
    {
      name: "Carlos M.",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Minha gata Luna tinha vômitos frequentes com ração industrializada. Estava desesperado procurando soluções quando encontrei este e-book. Comecei a preparar as receitas terapêuticas para problemas digestivos e os vômitos pararam em menos de uma semana! Agora ela come com prazer e está ganhando peso saudável. As instruções são claras e as receitas são simples de preparar.",
      catName: "Luna",
      catAge: "3 anos",
      highlight: "Vômitos frequentes eliminados",
      date: "27/04/2023"
    },
    {
      name: "Mariana S.",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Meu Thor estava com sobrepeso e letárgico. O veterinário recomendou uma dieta especial, mas as rações diet eram caríssimas. Com as receitas para controle de peso deste e-book, consegui ajudá-lo a perder 2kg em 3 meses de forma saudável. Ele está muito mais ativo e brincalhão agora! O suporte por email foi fundamental para tirar minhas dúvidas durante a transição alimentar.",
      catName: "Thor",
      catAge: "6 anos",
      highlight: "Perda de 2kg em 3 meses",
      date: "10/05/2023"
    },
    {
      name: "Roberto L.",
      location: "Curitiba, PR",
      rating: 5,
      text: "Minha gata idosa Mia estava com problemas renais e o veterinário sugeriu uma alimentação caseira controlada. As receitas terapêuticas para saúde renal deste e-book foram um divisor de águas! Seus exames melhoraram significativamente e ela recuperou a energia. A tabela de substituição de ingredientes é perfeita para adaptar as receitas conforme as preferências dela.",
      catName: "Mia",
      catAge: "12 anos",
      highlight: "Melhora nos exames renais",
      date: "03/06/2023"
    },
    {
      name: "Juliana F.",
      location: "Brasília, DF",
      rating: 5,
      text: "Tenho três gatos e estava gastando uma fortuna com rações premium. Desde que comecei a preparar as receitas deste e-book, estou economizando quase 40% por mês! Além da economia, meus gatos estão visivelmente mais saudáveis, com pelagem brilhante e mais disposição. O guia de suplementação garantiu que eles recebessem todos os nutrientes necessários.",
      catName: "Vários gatos",
      catAge: "2-5 anos",
      highlight: "Economia de 40% nos gastos mensais",
      date: "22/07/2023"
    }
  ];

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

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className="w-full py-10 md:py-16 bg-white relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-3 md:mb-4">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-highlight/15 text-highlight font-medium text-sm md:text-base">
              Histórias reais de tutores preocupados
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 section-title text-gray-800">
            Veja Como Outros Tutores <span className="highlight">Superaram Seus Medos</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-700">
            Tutores como você que estavam preocupados com a saúde de seus gatos e encontraram a solução para uma alimentação segura e nutritiva.
          </p>
        </div>

        <div className={`relative mb-8 md:mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-card-bg rounded-xl shadow-md p-4 md:p-6 border border-highlight/10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
              <div className="w-full md:w-3/4">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="flex">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 ml-2">Publicado em {testimonials[activeIndex].date}</span>
                </div>
                
                <blockquote className="mb-3 md:mb-4">
                  <p className="text-sm md:text-base text-gray-700 italic">&ldquo;{testimonials[activeIndex].text}&rdquo;</p>
                </blockquote>
                
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="mr-2 md:mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base text-gray-800">{testimonials[activeIndex].name}</p>
                      <p className="text-xs md:text-sm text-gray-600">{testimonials[activeIndex].location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-2 md:mt-3">
                    <div className="mr-2 md:mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base text-gray-800">Sobre o gato:</p>
                      <p className="text-xs md:text-sm text-gray-600">{testimonials[activeIndex].catName}, {testimonials[activeIndex].catAge}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/4 bg-highlight/10 p-3 md:p-4 rounded-lg border border-highlight/15">
                <div className="text-center">
                  <div className="mb-2 md:mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-highlight mx-auto" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm md:text-base text-gray-800 mb-1 md:mb-2">Resultado Principal:</h4>
                  <p className="text-xs md:text-sm text-gray-700">{testimonials[activeIndex].highlight}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-4 md:mt-5 gap-2 md:gap-3">
            <button 
              onClick={handlePrev}
              className="p-1.5 md:p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100 transition-all"
              aria-label="Depoimento anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex gap-1 md:gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                    activeIndex === index ? 'bg-highlight scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-1.5 md:p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100 transition-all"
              aria-label="Próximo depoimento"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-5 border border-gray-200 flex items-center">
            <div className="mr-3 md:mr-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base text-gray-800 mb-1">Satisfação Garantida</h3>
              <p className="text-xs md:text-sm text-gray-700">30 dias de garantia incondicional de satisfação ou seu dinheiro de volta.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 md:p-5 border border-gray-200 flex items-center">
            <div className="mr-3 md:mr-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm md:text-base text-gray-800 mb-1">+500 Tutores Satisfeitos</h3>
              <p className="text-xs md:text-sm text-gray-700">Junte-se a milhares de tutores que já transformaram a saúde de seus gatos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}