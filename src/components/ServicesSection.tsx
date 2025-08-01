
import { Shirt, Palette, Award, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Shirt,
      title: 'Uniformes Corporativos',
      description: 'Uniformes profissionais sob medida para empresas de todos os segmentos, com foco no conforto e elegância.'
    },
    {
      icon: Palette,
      title: 'Camisas Personalizadas',
      description: 'Camisas customizadas com sua marca, logo ou design exclusivo. Perfeitas para eventos e equipes.'
    },
    {
      icon: Sparkles,
      title: 'Abadás',
      description: 'Abadás de alta qualidade para eventos, festas e blocos carnavalescos. Tecidos confortáveis e estampas vibrantes.'
    },
    {
      icon: Award,
      title: 'Consultoria em Uniformes',
      description: 'Orientação completa para escolha dos melhores materiais, cores e modelos para sua empresa.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-green-50/30 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Especialistas na criação de produtos que combinam qualidade, estilo e funcionalidade
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Por que escolher a M3 Uniformes?</h3>
            <p className="text-gray-600 mb-6">
              Acreditamos que um bom uniforme não é apenas uma peça de roupa, mas uma extensão 
              da identidade e profissionalismo de nossos clientes.
            </p>
            <a 
              href="https://wa.me/5598987301780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Solicite seu orçamento
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
