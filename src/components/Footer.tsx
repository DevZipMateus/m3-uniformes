
import { Instagram, Phone, Mail, MapPin, Shirt, Award, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/1abbca59-8b6c-42cb-bb39-a90b8d0cd420.png" 
                alt="M3 Uniformes" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Especialistas em uniformes corporativos, camisas personalizadas e abadás. 
              Qualidade superior e excelência em acabamento.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/m3uniformesslz?igsh=MWRyN2wzd2xldWM5dQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Instagram da M3 Uniformes"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#serviços" className="hover:text-white transition-colors flex items-center">
                  <Shirt className="h-4 w-4 mr-2" />
                  Uniformes Corporativos
                </a>
              </li>
              <li>
                <a href="#serviços" className="hover:text-white transition-colors flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  Camisas Personalizadas
                </a>
              </li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Abadás</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Consultoria em Uniformes</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Informações</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Segunda a Sexta: 8h às 18h</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Sábados: 8h às 12h</span>
                </div>
              </li>
              <li className="pt-2">
                <span className="text-green-400 font-semibold">
                  "Na M3, vamos muito além do básico"
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <a href="tel:+5598987301780" className="hover:text-white transition-colors">
                  (98) 98730-1780
                </a>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <a href="mailto:contato.m3uniformes@gmail.com" className="hover:text-white transition-colors break-words">
                  contato.m3uniformes@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Rua da Independência, 29</p>
                  <p>Cidade Operária - São Luís - MA</p>
                  <p>CEP: 65058-421</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} M3 Uniformes LTDA. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido para oferecer a melhor experiência em uniformes</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
