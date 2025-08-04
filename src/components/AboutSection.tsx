
import { Target, Award, Shirt, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description: 'Revolucionar o segmento de uniformes focando no conforto, excelência em acabamento e qualidade superior.'
    },
    {
      icon: Award,
      title: 'Qualidade Superior',
      description: 'Cada etapa do processo é cuidadosamente considerada para proporcionar máximo conforto e durabilidade.'
    },
    {
      icon: Shirt,
      title: 'Materiais Selecionados',
      description: 'Selecionamos apenas os melhores materiais para garantir produtos de alta qualidade.'
    },
    {
      icon: Users,
      title: 'Profissionalismo',
      description: 'Acreditamos que um bom uniforme é uma extensão da identidade e profissionalismo dos nossos clientes.'
    }
  ];

  return (
    <section id="sobre" className="section-background py-24 relative">
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative z-10">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre a M3 Uniformes</h2>
          <p className="section-subtitle">
            Fundada com uma visão clara de revolucionar o segmento de uniformes
          </p>
        </AnimatedSection>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Excelência em Cada Detalhe
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A M3 Uniformes foi fundada com uma visão clara: revolucionar o segmento de uniformes 
                  ao focar no conforto, excelência em acabamento e qualidade superior. Desde o início, 
                  nossa missão tem sido oferecer produtos que superem as expectativas de nossos clientes.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nosso compromisso com a qualidade se reflete em cada etapa do processo de produção. 
                  Desde a seleção dos melhores materiais até o acabamento final, cada detalhe é 
                  cuidadosamente considerado para proporcionar o máximo de conforto e durabilidade.
                </p>
                <div className="pt-4">
                  <span className="text-green-600 font-bold text-xl italic">
                    "Na M3, vamos muito além do básico"
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={feature.title} className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
