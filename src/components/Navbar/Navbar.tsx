import * as React from "react";
import { cn } from "../../../utils/lib/utils";
import { AnimatedSearchBox, useAnimations } from "./NavbarAnimations";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

interface NavbarProps {
  title?: string;
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [searchExpanded, setSearchExpanded] = React.useState(false);
  
  useAnimations();
  
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "w-full bg-black/95 backdrop-blur-md shadow-md rounded-lg md:mx-4 mx-2", 
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? "py-2 shadow-lg shadow-black/20" : "py-3",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          <MobileNavbar 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            activeLink="" // Valor vazio pois não usamos mais
            setActiveLink={() => {}} // Função vazia pois não usamos mais
            setSearchExpanded={setSearchExpanded}
          />
          <DesktopNavbar 
            activeLink="" // Valor vazio pois não usamos mais
            setActiveLink={() => {}} // Função vazia pois não usamos mais
          />
          <AnimatedSearchBox 
            className="ml-auto" 
            expandDirection="left"
            isExpanded={searchExpanded}
            setIsExpanded={setSearchExpanded}
          />
        </div>
      </div>
    </header>
  );
};

export * from "./DesktopNavbar";
export default Navbar;