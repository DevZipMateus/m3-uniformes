
import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  return (
    <section id="contato" className="section-background py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 to-white/60"></div>
      <div className="relative z-10">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e transformar sua visão em realidade
          </p>
        </AnimatedSection>

        <div className="mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-8 border-green-200/20">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contato Principal */}
                <div className="space-y-6">
                  {/* Telefone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Telefone</h4>
                      <a 
                        href="tel:+5598987301780" 
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        (98) 98730-1780
                      </a>
                    </div>
                  </div>
                  
                  {/* E-mail */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 mb-1">E-mail</h4>
                      <a 
                        href="mailto:contato.m3uniformes@gmail.com" 
                        className="text-green-600 hover:text-green-700 font-medium break-words"
                      >
                        contato.m3uniformes@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Instagram className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Instagram</h4>
                      <a 
                        href="https://www.instagram.com/m3uniformesslz?igsh=MWRyN2wzd2xldWM5dQ==" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        @m3uniformesslz
                      </a>
                    </div>
                  </div>
                </div>

                {/* Localização */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Endereço</h4>
                      <p className="text-gray-600">
                        Rua da Independência, nº 29<br />
                        Residencial São Paulo - Cidade Operária<br />
                        CEP 65058-421 - São Luís - MA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900 mb-1">Horário de Funcionamento</h4>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábados: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-xl font-bold mb-4 text-green-800">Solicite seu Orçamento</h4>
                <p className="text-green-700 mb-4">
                  Entre em contato conosco e descubra como podemos transformar a imagem da sua empresa 
                  com uniformes de alta qualidade.
                </p>
                <a 
                  href="https://wa.me/5598987301780" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
