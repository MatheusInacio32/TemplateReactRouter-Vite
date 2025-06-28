import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "../../../utils/lib/utils";

export const styles = `
  @keyframes enterFromRight {from {opacity:0;transform:translateX(100px);} to {opacity:1;transform:translateX(0);}}
  @keyframes enterFromLeft {from {opacity:0;transform:translateX(-100px);} to {opacity:1;transform:translateX(0);}}
  @keyframes exitToRight {from {opacity:1;transform:translateX(0);} to {opacity:0;transform:translateX(100px);}}
  @keyframes exitToLeft {from {opacity:1;transform:translateX(0);} to {opacity:0;transform:translateX(-100px);}}
  @keyframes fadeIn {from {opacity:0;} to {opacity:1;}}
  @keyframes fadeOut {from {opacity:1;} to {opacity:0;}}
  @keyframes pulse {0%,100%{opacity:1;}50%{opacity:0.85;}}
  @keyframes slideDown {from {height:0;opacity:0;transform:translateY(-8px);} to {height:var(--slide-height);opacity:1;transform:translateY(0);}}
  @keyframes slideUp {from {height:var(--slide-height);opacity:1;transform:translateY(0);} to {height:0;opacity:0;transform:translateY(-8px);}}
  @keyframes expandWidth {from {width:40px;opacity:0.9;} to {width:220px;opacity:1;}}
  @keyframes expandWidthSm {from {width:40px;opacity:0.9;} to {width:160px;opacity:1;}}
  @keyframes bounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-4px);}}
  @keyframes rotate {from {transform:rotate(0deg);} to {transform:rotate(360deg);}}
  @keyframes highlightAndFade {0%{background-color:rgba(255,255,255,0.2);} 40%{background-color:rgba(255,255,255,0.1);} 100%{background-color:transparent;}}
`;

export function useAnimations() {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
}

interface AnimatedSearchBoxProps {
  className?: string;
  expandDirection?: 'left' | 'right';
  isExpanded?: boolean;
  setIsExpanded?: (expanded: boolean) => void;
  hidden?: boolean;
}

export const AnimatedSearchBox = ({ 
  className,
  expandDirection = 'right',
  isExpanded: controlledExpanded,
  setIsExpanded: setControlledExpanded,
  hidden = false
}: AnimatedSearchBoxProps) => {
  const [localExpanded, setLocalExpanded] = React.useState(false);
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : localExpanded;
  const setIsExpanded = setControlledExpanded || setLocalExpanded;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [windowWidth, setWindowWidth] = React.useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const effectiveDirection = windowWidth < 640 ? 'left' : expandDirection;

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Pesquisando: ${searchQuery}`);
      alert(`Pesquisando por: ${searchQuery}`);
    }
  };

  if (hidden) return null;

  return (
    <div className={cn(
      "relative flex items-center", 
      effectiveDirection === 'left' ? 'justify-end' : 'justify-start',
      className
    )}>
      {/* Adicionando um wrapper com borda ao redor do form inteiro */}
      <div className={cn(
        "rounded-md overflow-hidden",
        isExpanded ? "border border-gray-700 ring-1 ring-white/10" : ""
      )}>
        <form onSubmit={handleSubmit} className={cn(
          "flex items-center",
          effectiveDirection === 'left' ? 'flex-row-reverse' : 'flex-row'
        )}>
          {isExpanded && (
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={cn(
                "h-9 border-0 bg-black/30 px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-white/20",
                "text-gray-200",
                windowWidth < 640 ? "animate-[expandWidthSm_0.25s_ease-out_forwards] text-xs" : "animate-[expandWidth_0.25s_ease-out_forwards]",
                "placeholder:text-gray-400",
                effectiveDirection === 'left' ? "rounded-r-none" : "rounded-l-none"
              )}
            />
          )}
          <button
            type={isExpanded ? "submit" : "button"}
            onClick={isExpanded ? undefined : toggleSearch}
            className={cn(
              "flex h-9 items-center justify-center bg-black/60 px-3 py-1 text-white transition-all duration-200 backdrop-blur-sm hover:bg-white/10",
              isExpanded ? 
                (effectiveDirection === 'left' ? "rounded-l-none" : "rounded-r-none") : 
                "rounded-md border border-gray-700 ring-1 ring-white/10",
              "hover:shadow-md active:scale-95"
            )}
            aria-label={isExpanded ? "Buscar" : "Abrir pesquisa"}
          >
            <Search className="h-5 w-5 transition-transform hover:scale-110" />
          </button>
        </form>
      </div>
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className={cn(
            "text-gray-400 hover:text-white transition-colors",
            effectiveDirection === 'left' ? "mr-3" : "ml-3"
          )}
          aria-label="Fechar pesquisa"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};