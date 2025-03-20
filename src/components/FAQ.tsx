"use client";

import { useState, useRef, useEffect } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "O que exatamente estou comprando?",
      answer: "Você está comprando um livro digital (ebook) com 20 receitas caseiras balanceadas e saudáveis para gatos. Após o pagamento, ele será enviado para seu e-mail.",
      category: "Produto"
    },
    {
      question: "É seguro para o meu gato?",
      answer: "Sim! Todas as receitas foram elaboradas com orientação de especialistas, com ingredientes adequados para a saúde felina.",
      category: "Segurança"
    },
    {
      question: "Recebo quando?",
      answer: "Imediatamente após a compra! O ebook será enviado diretamente para seu e-mail.",
      category: "Entrega"
    },
    {
      question: "Preciso ter experiência na cozinha?",
      answer: "Não! As receitas são fáceis, rápidas e com ingredientes simples.",
      category: "Preparo"
    },
    {
      question: "Como sei se as receitas são balanceadas?",
      answer: "Todas as receitas foram desenvolvidas com orientação de especialistas em nutrição felina, garantindo o equilíbrio nutricional que seu gato precisa como carnívoro obrigatório.",
      category: "Nutrição"
    },
    {
      question: "Posso imprimir o ebook?",
      answer: "Sim! O ebook é fornecido em formato PDF, que você pode imprimir facilmente se preferir ter uma cópia física para consulta na cozinha.",
      category: "Formato"
    },
    {
      question: "E se meu gato não gostar das receitas?",
      answer: "O ebook inclui dicas para introduzir gradualmente a alimentação natural e adaptar as receitas às preferências do seu gato. Além disso, oferecemos garantia de 7 dias - se seu gato não se adaptar, devolvemos seu dinheiro.",
      category: "Adaptação"
    },
    {
      question: "Quanto tempo leva para preparar as receitas?",
      answer: "A maioria das receitas pode ser preparada em 20-30 minutos. Além disso, você pode preparar em lotes e congelar porções para a semana, economizando ainda mais tempo.",
      category: "Tempo"
    },
    {
      question: "Onde encontro os ingredientes?",
      answer: "Todos os ingredientes são comuns e podem ser encontrados em supermercados, açougues e feiras. O ebook também inclui sugestões de substituições caso algum ingrediente não esteja disponível.",
      category: "Ingredientes"
    },
    {
      question: "A garantia é realmente sem perguntas?",
      answer: "Sim! Se você não ficar satisfeito com o ebook por qualquer motivo dentro do período de 7 dias, basta enviar um e-mail solicitando o reembolso e devolveremos 100% do seu dinheiro, sem questionamentos.",
      category: "Garantia"
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="w-full py-10 md:py-16 bg-white relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-3 md:mb-4">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-highlight/15 text-highlight font-medium text-sm md:text-base">
              Tire suas dúvidas
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 section-title text-gray-800">
            Perguntas <span className="highlight">Frequentes</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-700">
            Aqui estão as respostas para as perguntas mais comuns sobre o nosso livro digital de receitas para gatos.
          </p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-2 md:space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-highlight/10 shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-4 md:px-5 py-3 md:py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base pr-2">{faq.question}</h3>
                  <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    <span className="text-xs px-2 py-0.5 md:py-1 bg-highlight/10 text-highlight rounded-full hidden md:inline-block">
                      {faq.category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 md:h-5 md:w-5 text-highlight transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-4 md:px-5 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-4 md:pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 text-xs md:text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-10 text-center">
            <a
              href="https://hotm.art/HnrB3p8"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  // Google Ads conversion tracking
                  try {
                    // @ts-ignore
                    gtag('event', 'conversion', {'send_to': 'AW-16840469676/Dn-YCJT-_ZQZEJfHrqQ9'});
                  } catch (e) {
                    console.error('Google Ads conversion failed', e);
                  }
                  
                  // Facebook Pixel conversion tracking
                  try {
                    // @ts-ignore
                    fbq('track', 'InitiateCheckout');
                  } catch (e) {
                    console.error('Facebook Pixel conversion failed', e);
                  }
                }
              }}
            >
              QUERO RECEBER O MEU EBOOK AGORA POR APENAS R$10!
            </a>
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-700">
              Ainda tem dúvidas? Entre em contato: <a href="mailto:suporte@receitasparagatos.com.br" className="text-highlight font-medium hover:underline">suporte@receitasparagatos.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 