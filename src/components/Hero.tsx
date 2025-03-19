"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-10 md:py-16 bg-soft overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-5 sm:px-6 md:px-8 lg:px-10">
        <div className={`w-full md:w-1/2 flex flex-col gap-4 md:gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div>
            <div className="mb-3 md:mb-4">
              <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-highlight/15 text-highlight font-medium text-sm md:text-base">
                Transforme a Saúde do Seu Gato em 7 Dias
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-800">
              <span className="highlight">Livro Digital</span> de Receitas Saudáveis para Gatos
            </h1>
          </div>
          
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            📘 Receba <strong>HOJE MESMO</strong> o ebook completo com receitas fáceis, seguras e aprovadas para deixar seu gato mais feliz, saudável e livre de rações industrializadas.
          </p>
          
          <div className="flex flex-wrap gap-2 md:gap-3 mt-1 md:mt-2">
            <div className="flex items-center gap-2 bg-white/90 p-2 md:p-3 rounded-lg border border-highlight/15 shadow-sm">
              <span className="text-xs md:text-sm text-gray-700 font-medium">❌ Seu gato vive vomitando ou com intestino preso?</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 p-2 md:p-3 rounded-lg border border-highlight/15 shadow-sm">
              <span className="text-xs md:text-sm text-gray-700 font-medium">❌ Cansado de gastar com rações caras e remédios?</span>
            </div>
          </div>
          
          <p className="text-sm md:text-base text-gray-700 font-medium">
            <span className="text-highlight font-bold">A verdade é:</span> Muitas rações industrializadas possuem ingredientes que prejudicam a saúde e o bem-estar do seu gato.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-3 md:mt-4">
            <Link 
              href="https://pay.hotmart.com/B98656274B" 
              className="btn-primary text-center font-bold text-sm md:text-base py-3 md:py-4 px-6 md:px-8 shadow-md hover:shadow-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              QUERO GARANTIR MEU LIVRO DIGITAL AGORA!
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mt-3 p-3 md:p-4 bg-white/90 rounded-lg border border-highlight/15 shadow-sm">
            <p className="text-xs md:text-sm text-gray-700">
              <span className="font-bold text-highlight">🔒 Garantia total:</span> ou seu dinheiro de volta!
            </p>
          </div>
        </div>
        
        <div className={`w-full md:w-1/2 flex justify-center mt-6 md:mt-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative w-full max-w-xs md:max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white text-highlight font-bold py-1 md:py-1.5 px-3 md:px-4 rounded-full shadow-md text-xs md:text-sm z-20">
              E-book Digital
            </div>
            <div className="absolute bottom-3 md:bottom-5 left-0 right-0 text-center z-20">
              <span className="inline-block bg-white/90 text-highlight font-medium py-1 md:py-1.5 px-4 md:px-5 rounded-full shadow-md text-xs md:text-sm">
                Acesso Imediato
              </span>
            </div>
            <Image
              src="/images/mockup livro.png"
              alt="Mockup do e-book 20 Receitas Caseiras Balanceadas para Gatos"
              fill
              className="object-cover z-0 rounded-image"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 md:mt-10 px-5 sm:px-6 md:px-8 lg:px-10">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/95 p-4 md:p-5 rounded-lg shadow-md flex items-center gap-3 md:gap-4 border border-highlight/10 hover:shadow-lg transition-all">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-0.5 md:mb-1">Você se sente perdido?</h3>
              <p className="text-xs md:text-sm text-gray-700 m-0">Informações contraditórias sobre nutrição felina te deixam confuso</p>
            </div>
          </div>
          
          <div className="bg-white/95 p-4 md:p-5 rounded-lg shadow-md flex items-center gap-3 md:gap-4 border border-highlight/10 hover:shadow-lg transition-all">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-0.5 md:mb-1">Tem medo de errar?</h3>
              <p className="text-xs md:text-sm text-gray-700 m-0">Receio de prejudicar a saúde do seu gato com alimentação inadequada</p>
            </div>
          </div>
          
          <div className="bg-white/95 p-4 md:p-5 rounded-lg shadow-md flex items-center gap-3 md:gap-4 border border-highlight/10 hover:shadow-lg transition-all">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-0.5 md:mb-1">Gato com problemas?</h3>
              <p className="text-xs md:text-sm text-gray-700 m-0">Alergias, problemas digestivos ou excesso de peso causados pela alimentação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 