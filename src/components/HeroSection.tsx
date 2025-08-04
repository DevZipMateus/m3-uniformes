import { ChevronRight, Shirt, Award, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const HeroSection = () => {
  return <section id="início" className="section-background relative min-h-screen flex items-start pt-32 md:pt-24 md:items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-white/50 to-green-50/30"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-green-500/10 skew-x-12 transform origin-bottom"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-green-400/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 rounded-full bg-green-300/20"></div>
      </div>

      <div className="container mx-auto px-4 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-2 px-4 bg-green-100 text-green-700 rounded-full">
              Na M3, vamos muito além do básico
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Uniformes que <br />
              <span className="text-green-700">Fazem a Diferença</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Especialistas na criação de uniformes corporativos, camisas personalizadas e abadás. 
              Oferecemos produtos de alta qualidade que combinam estilo, conforto e funcionalidade.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://wa.me/5598987301780" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                Solicitar Orçamento
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#serviços" className="btn-secondary">
                Conheça Nossos Serviços
              </a>
            </div>

            <div className="pt-8 flex items-center gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
                  <Shirt className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm text-gray-600">Uniformes<br />Personalizados</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm text-gray-600">Qualidade<br />Superior</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm text-gray-600">Atendimento<br />Personalizado</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-12 -left-8 w-64 h-64 bg-green-400/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-300/20 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Uniformes corporativos de alta qualidade da M3 Uniformes" className="rounded-2xl w-full h-auto object-cover" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      
    </section>;
};
export default HeroSection;