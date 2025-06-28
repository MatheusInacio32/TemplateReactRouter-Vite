import * as React from "react";
import { Menu, X, ChevronDownIcon } from "lucide-react";
import { cn } from "../../../utils/lib/utils";

interface MobileNavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
  setSearchExpanded?: (expanded: boolean) => void;
}

export function MobileNavbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeLink,
  setActiveLink,
  setSearchExpanded
}: MobileNavbarProps) {
  const [tempHighlight, setTempHighlight] = React.useState<string | null>(null);
  
  const toggleMenu = () => {
    if (!mobileMenuOpen && setSearchExpanded) {
      setSearchExpanded(false);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Função para criar efeito temporário de clique
  const handleItemClick = (linkName: string) => {
    setTempHighlight(linkName);
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      setTempHighlight(null);
    }, 600); // Efeito dura 600ms
  };
  
  return (
    <>
      <div className="block lg:hidden">
        <button 
          onClick={toggleMenu}
          className="text-white p-2 focus:outline-none transition-all duration-300 hover:bg-white/10 rounded-md"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 animate-[rotate_0.3s_ease-in-out]" />
          ) : (
            <Menu className="h-6 w-6 hover:animate-pulse" />
          )}
        </button>
      </div>
      
      <div 
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 absolute top-full left-0 right-0 z-50 bg-black/95 backdrop-blur-md rounded-b-lg",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ "--slide-height": "240px" } as React.CSSProperties}
      >
        <div className="py-3 mt-3 border-t border-gray-800 space-y-1">
          <a 
            href="/" 
            className={cn(
              "block text-white hover:bg-white/10 px-3 py-3 rounded-md transition-all duration-300 hover:pl-5",
              tempHighlight === "inicio" && "animate-[highlightAndFade_0.6s_ease-out]"
            )}
            onClick={() => handleItemClick("inicio")}
          >
            Início
          </a>
          
          <div className="relative">
            <details className="text-white">
              <summary 
                className={cn(
                  "hover:bg-white/10 px-3 py-3 rounded-md transition-all duration-300 hover:pl-5 cursor-pointer flex items-center justify-between",
                  tempHighlight === "produtos" && "animate-[highlightAndFade_0.6s_ease-out]"
                )}
                onClick={(e) => {
                  // Previne o comportamento padrão de toggle do details
                  e.preventDefault();
                  const details = e.currentTarget.parentElement as HTMLDetailsElement;
                  details.open = !details.open;
                  
                  // Aplica o efeito de highlight
                  setTempHighlight("produtos");
                  setTimeout(() => setTempHighlight(null), 600);
                }}
              >
                <span>Produtos</span>
                <ChevronDownIcon className="h-4 w-4 transition-transform ui-open:rotate-180" />
              </summary>
              <div className="pl-5 mt-1 space-y-1 animate-[fadeIn_0.3s_ease-in]">
                <a href="/produtos/novos" className="block py-2 px-3 text-sm hover:bg-white/10 rounded-md transition-colors">
                  Novos Produtos
                </a>
                <a href="/produtos/populares" className="block py-2 px-3 text-sm hover:bg-white/10 rounded-md transition-colors">
                  Mais Vendidos
                </a>
                <a href="/produtos/promocoes" className="block py-2 px-3 text-sm hover:bg-white/10 rounded-md transition-colors">
                  Promoções
                </a>
                <a href="/produtos" className="block py-2 px-3 text-sm hover:bg-white/10 rounded-md transition-colors">
                  Todos os Produtos
                </a>
              </div>
            </details>
          </div>
          
          <a 
            href="/#quemSomos" 
            className={cn(
              "block text-white hover:bg-white/10 px-3 py-3 rounded-md transition-all duration-300 hover:pl-5",
              tempHighlight === "quemsomos" && "animate-[highlightAndFade_0.6s_ease-out]"
            )}
            onClick={() => handleItemClick("quemsomos")}
          >
            Quem Somos
          </a>
          <a 
            href="https://wa.me/554498143827?text=Olá, acessei o site da Original Produtos e gostaria de mais informações sobre os produtos." 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "block text-white hover:bg-white/10 px-3 py-3 rounded-md transition-all duration-300 hover:pl-5",
              tempHighlight === "contato" && "animate-[highlightAndFade_0.6s_ease-out]"
            )}
            onClick={() => handleItemClick("contato")}
          >
            Contato
          </a>
          <a 
            href="/localizacao" 
            className={cn(
              "block text-white hover:bg-white/10 px-3 py-3 rounded-md transition-all duration-300 hover:pl-5",
              tempHighlight === "localizacao" && "animate-[highlightAndFade_0.6s_ease-out]"
            )}
            onClick={() => handleItemClick("localizacao")}
          >
            Localização
          </a>
        </div>
      </div>
    </>
  );
}