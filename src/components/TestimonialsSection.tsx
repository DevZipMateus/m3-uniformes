
import AnimatedSection from './AnimatedSection';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  // Depoimentos genéricos baseados na área de atuação da empresa
  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'Empresa de Serviços',
      text: 'Os uniformes da M3 transformaram a apresentação da nossa equipe. A qualidade é excepcional e o conforto é incomparável.',
      rating: 5
    },
    {
      name: 'João Santos',
      company: 'Restaurante Local',
      text: 'Excelente atendimento e produtos de alta qualidade. Nossa equipe se sente mais profissional e confiante.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      company: 'Clínica Médica',
      text: 'A M3 entende nossas necessidades. Os uniformes são duráveis, confortáveis e mantêm a elegância profissional.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="section-background py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-green-50/70"></div>
      <div className="relative z-10">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">O que Nossos Clientes Dizem</h2>
          <p className="section-subtitle">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.name} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-green-400 opacity-50" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-green-600">{testimonial.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto bg-green-50/50">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Seja Nosso Próximo Cliente Satisfeito</h3>
            <p className="text-gray-600 mb-6">
              Junte-se aos nossos clientes que já experimentaram a qualidade e excelência da M3 Uniformes.
            </p>
            <a 
              href="https://wa.me/5598987301780" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Fale Conosco
            </a>
          </div>
        </AnimatedSection>
      </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
