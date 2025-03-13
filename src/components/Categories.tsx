"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
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

  const categories = [
    {
      title: "Receitas Básicas",
      description: "Dieta balanceada para o dia a dia, mantendo a nutrição ideal e suprindo todas as necessidades do seu gato. Perfeitas para a alimentação cotidiana.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: ["Frango Balanceado Básico", "Mistinho de Carne Bovina", "Delícia de Peru", "Nutrição completa diária"]
    },
    {
      title: "Receitas para Ocasiões Especiais",
      description: "Opções para variar o cardápio e surpreender o paladar do seu felino sem comprometer a nutrição. Perfeitas para dias especiais e comemorações.",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: ["Patê de Sardinha", "Petisco de Coração", "Variedade no cardápio", "Sabores diferenciados"]
    },
    {
      title: "Receitas Terapêuticas",
      description: "Fórmulas específicas para gatos com condições de saúde como obesidade, sensibilidade digestiva e problemas renais. Desenvolvidas com foco terapêutico.",
      image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: ["Mix Leve para Sobrepeso", "Refeição para Problemas Renais", "Fórmulas para Sensibilidade Digestiva", "Nutrição adaptada"]
    },
    {
      title: "Receitas com Peixes",
      description: "Ricas em ácidos graxos essenciais como Ômega-3, ideais para reforçar a imunidade e melhorar a saúde da pele e pelagem do seu gato.",
      image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: ["Mix de Peixe Branco", "Mix de Atum Ocasional", "Mix de Peixes Variados", "Rica em Ômega-3"]
    },
    {
      title: "Receitas com Vísceras e Proteínas Variadas",
      description: "Combinações de carnes e órgãos essenciais para suprir taurina, vitaminas e minerais. Nutrição completa para seu felino com variedade de proteínas.",
      image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      features: ["Combo de Cordeiro", "Mix de Coelho", "Mix de Vísceras Completo", "Rica em taurina"]
    }
  ];

  return (
    <section id="categorias" ref={sectionRef} className="w-full py-10 md:py-16 bg-white relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-3 md:mb-4">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-highlight/15 text-highlight font-medium text-sm md:text-base">
              Opções para todas as necessidades
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 section-title text-gray-800">
            Categorias de <span className="highlight">Receitas</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-700">
            Nosso e-book oferece receitas para todas as necessidades do seu gato, com opções para diferentes situações e condições de saúde.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-5">
          <div className={`lg:w-1/3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-card-bg rounded-lg p-4 md:p-5 border border-highlight/10 shadow-md">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-800 text-center">Escolha uma categoria</h3>
              <div className="space-y-1.5 md:space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full text-left p-2 md:p-3 rounded-lg transition-all duration-300 text-xs md:text-sm ${
                      activeCategory === index 
                        ? 'bg-highlight text-white font-medium shadow-md' 
                        : 'bg-white hover:bg-highlight/5 text-gray-700 hover:shadow-sm'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={`lg:w-2/3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-lg overflow-hidden border border-highlight/10 shadow-lg">
              <div className="relative h-48 md:h-56 lg:h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 z-20">
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-white drop-shadow-md">{categories[activeCategory].title}</h3>
                </div>
                <Image 
                  src={categories[activeCategory].image} 
                  alt={categories[activeCategory].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105 z-0"
                />
              </div>
              
              <div className="p-4 md:p-5">
                <p className="text-xs md:text-sm text-gray-700 mb-4 md:mb-5">{categories[activeCategory].description}</p>
                
                <div className="mb-4 md:mb-5">
                  <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800">Exemplos de receitas:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {categories[activeCategory].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-highlight/15 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 md:h-3 md:w-3 text-highlight" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center mt-4 md:mt-5">
                  <a href="#comprar" className="inline-block bg-highlight text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-base hover:bg-highlight/90 transition-colors shadow-md hover:shadow-lg">
                    QUERO ESTE E-BOOK AGORA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 