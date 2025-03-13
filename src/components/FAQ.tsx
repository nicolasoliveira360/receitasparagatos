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
      question: "As rações industrializadas realmente podem prejudicar meu gato?",
      answer: "Infelizmente, sim. Muitas rações comerciais contêm subprodutos de baixa qualidade, conservantes artificiais e excesso de carboidratos que os gatos, como carnívoros obrigatórios, não estão adaptados a processar. Estudos mostram uma correlação entre alimentação industrializada de baixa qualidade e o aumento de problemas como diabetes, obesidade, doenças renais e alergias em gatos. Nossas receitas eliminam esses riscos ao usar apenas ingredientes naturais e balanceados.",
      category: "Riscos"
    },
    {
      question: "Tenho medo de fazer algo errado e prejudicar meu gato. Como evitar isso?",
      answer: "Essa é uma preocupação muito comum e totalmente compreensível. É por isso que desenvolvemos receitas cientificamente balanceadas e testadas, com instruções detalhadas passo a passo. Cada receita inclui a quantidade exata de nutrientes necessários, e nosso guia de suplementação garante que seu gato receba tudo o que precisa. Além disso, incluímos sinais de alerta para observar e quando consultar um veterinário. Você não estará sozinho nessa jornada.",
      category: "Segurança"
    },
    {
      question: "Meu gato já tem problemas de saúde. A alimentação natural pode ajudar?",
      answer: "Muitos problemas de saúde em gatos têm relação direta com a alimentação. Nosso e-book inclui receitas terapêuticas específicas para condições como problemas renais, digestivos, obesidade e alergias alimentares. Tutores relatam melhoras significativas após a transição para alimentação natural adequada. No entanto, sempre recomendamos consultar seu veterinário antes de fazer mudanças na dieta de um gato com condições médicas, e nosso guia inclui informações para compartilhar com seu veterinário.",
      category: "Saúde"
    },
    {
      question: "Preparar comida caseira não é muito caro e trabalhoso?",
      answer: "Este é um dos maiores mitos sobre alimentação natural. Quando você compara o custo de rações premium de qualidade com nossas receitas, frequentemente a alimentação caseira acaba sendo mais econômica. Além disso, nossas receitas foram desenvolvidas pensando na praticidade: a maioria pode ser preparada em 30-45 minutos, e podem ser feitas em lotes e congeladas para uso posterior. Incluímos estratégias de economia e dicas de preparação rápida que se adaptam até às rotinas mais ocupadas.",
      category: "Custo e Tempo"
    },
    {
      question: "Como sei se estou oferecendo todos os nutrientes necessários?",
      answer: "Esta é uma preocupação válida que abordamos detalhadamente no e-book. Cada receita foi formulada para fornecer a proporção correta de proteínas, gorduras e nutrientes essenciais. Além disso, incluímos um guia completo de suplementação que explica exatamente quais suplementos usar, em que quantidade e onde encontrá-los. Eliminamos todas as dúvidas para que você tenha certeza de que seu gato está recebendo uma nutrição completa e balanceada.",
      category: "Nutrição"
    },
    {
      question: "E se meu veterinário for contra a alimentação natural?",
      answer: "Muitos veterinários não recebem treinamento extensivo em nutrição felina e podem ter reservas iniciais. Por isso, incluímos uma seção especial com informações baseadas em evidências científicas que você pode compartilhar com seu veterinário. Também listamos estudos recentes sobre os benefícios da alimentação natural adequadamente balanceada. Cada vez mais veterinários estão reconhecendo os benefícios de dietas naturais bem formuladas, e nosso guia ajuda a facilitar essa conversa.",
      category: "Veterinários"
    },
    {
      question: "Meu gato é muito exigente. E se ele rejeitar a comida caseira?",
      answer: "Gatos podem ser notoriamente seletivos, e entendemos essa preocupação. Por isso, desenvolvemos um protocolo especial de transição para gatos exigentes, com técnicas que aumentam significativamente a taxa de aceitação. O e-book inclui variações de textura, temperatura e apresentação, além de 'truques' comprovados para gatos resistentes a mudanças. Com 20 receitas diferentes, há opções suficientes para encontrar algo que seu gato adore, mesmo os mais exigentes.",
      category: "Aceitação"
    },
    {
      question: "Não tenho tempo para cozinhar todos os dias. Como lidar com isso?",
      answer: "Desenvolvemos nossas receitas pensando em tutores ocupados. A maioria das receitas pode ser preparada em grandes lotes (uma vez por semana ou até quinzenalmente) e congelada em porções diárias. O e-book inclui um plano detalhado de preparação e armazenamento, com dicas para otimizar seu tempo na cozinha. Muitos tutores relatam que gastam apenas 1-2 horas por semana na preparação, menos tempo do que levariam para ir à loja de pets comprar ração várias vezes.",
      category: "Praticidade"
    },
    {
      question: "E se eu comprar e não conseguir implementar as receitas?",
      answer: "Entendemos que pode haver apreensão em fazer uma mudança na alimentação do seu gato. Por isso, oferecemos garantia de satisfação de 30 dias. Se você não conseguir implementar as receitas ou não ficar satisfeito com o e-book por qualquer motivo, basta enviar um e-mail para nosso suporte e processaremos o reembolso integral, sem questionamentos. Queremos que você tenha total confiança na sua decisão.",
      category: "Garantia"
    },
    {
      question: "Vou ficar sozinho nessa jornada ou terei algum suporte?",
      answer: "Você definitivamente não estará sozinho! Além do e-book detalhado, oferecemos suporte por e-mail por 30 dias após a compra. Nossa equipe está disponível para responder perguntas sobre as receitas, substituições de ingredientes, ou qualquer outra dúvida. Também incluímos acesso a recursos adicionais e atualizações gratuitas do e-book por um ano. Estamos comprometidos em ajudar você a ter sucesso nessa transição importante.",
      category: "Suporte"
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="w-full py-10 md:py-16 bg-white relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-3 md:mb-4">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-highlight/15 text-highlight font-medium text-sm md:text-base">
              Dúvidas que tiram seu sono
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 section-title text-gray-800">
            Respondendo Suas <span className="highlight">Preocupações</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-gray-700">
            Sabemos que você tem medos e dúvidas sobre a alimentação do seu gato. Aqui estão as respostas que vão te ajudar a tomar a melhor decisão para o bem-estar do seu felino.
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
              href="https://pay.hotmart.com/B98656274B?off=7cfnci5g" 
              className="inline-block bg-highlight text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-base hover:bg-highlight/90 transition-colors shadow-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              QUERO ACABAR COM MINHAS PREOCUPAÇÕES
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