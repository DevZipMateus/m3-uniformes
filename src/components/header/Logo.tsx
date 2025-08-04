
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#início" className="flex items-center z-10 relative" aria-label="M3 Uniformes - Página inicial">
      <img 
        src="/lovable-uploads/b018260d-0bbc-4ce4-863e-732fc2f66407.png" 
        alt="M3 Uniformes - Logo" 
        className={cn(
          "w-auto transition-all duration-300",
          scrolled ? "h-14" : "h-16",
          "hover:scale-105"
        )}
      />
    </a>
  );
};

export default Logo;
