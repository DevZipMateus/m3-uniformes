
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/5598987301780"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <div className={`absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}>
          Fale conosco no WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-l-[6px] border-l-gray-900 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
          </div>
        </div>

        {/* Button */}
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
