
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#início" className="flex items-center z-10 relative" aria-label="M3 Uniformes - Página inicial">
      <img 
        src="/lovable-uploads/1abbca59-8b6c-42cb-bb39-a90b8d0cd420.png" 
        alt="M3 Uniformes - Logo" 
        className={cn(
          "h-12 w-auto transition-all duration-300",
          scrolled ? "h-10" : "h-12",
          "hover:scale-105"
        )}
      />
    </a>
  );
};

export default Logo;
