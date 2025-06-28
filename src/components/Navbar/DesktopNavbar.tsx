import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../../utils/lib/utils";

interface NavigationMenuProps {
  className?: string;
  children: React.ReactNode;
  viewport?: boolean;
  [key: string]: any;
}

interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuList({
  className,
  ...props
}: BaseComponentProps) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-2",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuItem({
  className,
  ...props
}: BaseComponentProps) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:opacity-80 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-opacity-80"
);

export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: BaseComponentProps) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

export function NavigationMenuContent({
  className,
  ...props
}: BaseComponentProps) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "absolute top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 w-auto",
        "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight",
        "data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight",
        "origin-top-center transition-all duration-200 opacity-0 translate-y-[-8px] scale-95 data-[state=open]:opacity-100 data-[state=open]:translate-y-0 data-[state=open]:scale-100",
        "bg-black/95 backdrop-blur-sm rounded-lg border border-gray-800 shadow-lg p-2 z-50",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuViewport({
  className,
  ...props
}: BaseComponentProps) {
  return (
    <div className="absolute left-0 top-full flex w-full justify-center z-50">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] overflow-hidden rounded-lg border border-gray-800 bg-black/90 shadow-lg text-gray-100 md:w-[var(--radix-navigation-menu-viewport-width)]",
          "transition-all duration-300 opacity-0 translate-y-[-8px] scale-95 data-[state=open]:opacity-100 data-[state=open]:translate-y-0 data-[state=open]:scale-100",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function NavigationMenuLink({
  className,
  ...props
}: BaseComponentProps) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors duration-200 hover:bg-white/10 focus:bg-white/5",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuIndicator({
  className,
  ...props
}: BaseComponentProps) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="bg-gray-800 relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export function DesktopNavbar({ activeLink, setActiveLink }: { 
  activeLink: string;
  setActiveLink: (link: string) => void;
}) {
  const [tempHighlight, setTempHighlight] = React.useState<string | null>(null);
  
  // Função para criar efeito temporário de clique
  const handleItemClick = (linkName: string) => {
    setTempHighlight(linkName);
    setTimeout(() => {
      setTempHighlight(null);
    }, 600); // Efeito dura 600ms
  };

  return (
    <div className="hidden lg:flex items-center space-x-6">
      <a 
        href="/" 
        className={cn(
          "text-white hover:text-gray-200 px-3 py-2 rounded-md transition-all duration-300",
          "hover:bg-white/10 hover:shadow-md hover:-translate-y-0.5",
          tempHighlight === "inicio" && "animate-[highlightAndFade_0.6s_ease-out]"
        )}
        onClick={() => handleItemClick("inicio")}
      >
        Início
      </a>
      
      <div className="relative">
        <NavigationMenu viewport={false} className="">
          <NavigationMenuList className="">
            <NavigationMenuItem className="">
              <NavigationMenuTrigger 
                className={cn(
                  "text-white hover:text-gray-200 hover:bg-white/10",
                  "hover:shadow-md hover:-translate-y-0.5 transition-all duration-300",
                  tempHighlight === "produtos" && "animate-[highlightAndFade_0.6s_ease-out]"
                )}
                onClick={() => handleItemClick("produtos")}
              >
                Produtos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="rounded-lg overflow-hidden">
                <ul className="w-[280px] p-2 grid gap-2 animate-[fadeIn_0.3s_ease-in-out]">
                  <li>
                    <NavigationMenuLink className="p-3 hover:bg-white/10 block transition-all duration-200 hover:-translate-y-1 hover:shadow-md rounded-lg">
                      <div className="font-medium text-white">Novos Produtos</div>
                      <div className="text-sm text-gray-400">Confira nossos lançamentos</div>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="p-3 hover:bg-white/10 block transition-all duration-200 hover:-translate-y-1 hover:shadow-md rounded-lg">
                      <div className="font-medium text-white">Mais Vendidos</div>
                      <div className="text-sm text-gray-400">Produtos populares</div>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="p-3 hover:bg-white/10 block transition-all duration-200 hover:-translate-y-1 hover:shadow-md rounded-lg">
                      <div className="font-medium text-white">Promoções</div>
                      <div className="text-sm text-gray-400">Ofertas especiais</div>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="p-3 hover:bg-white/10 block transition-all duration-200 hover:-translate-y-1 hover:shadow-md rounded-lg">
                      <div className="font-medium text-white">Todos os Produtos</div>
                      <div className="text-sm text-gray-400">Ver catálogo completo</div>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <a 
        href="/#quemSomos" 
        className={cn(
          "text-white hover:text-gray-200 px-3 py-2 rounded-md transition-all duration-300",
          "hover:bg-white/10 hover:shadow-md hover:-translate-y-0.5",
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
          "text-white hover:text-gray-200 px-3 py-2 rounded-md transition-all duration-300",
          "hover:bg-white/10 hover:shadow-md hover:-translate-y-0.5",
          tempHighlight === "contato" && "animate-[highlightAndFade_0.6s_ease-out]"
        )}
        onClick={() => handleItemClick("contato")}
      >
        Contato
      </a>
      
      <a 
        href="/localizacao" 
        className={cn(
          "text-white hover:text-gray-200 px-3 py-2 rounded-md transition-all duration-300",
          "hover:bg-white/10 hover:shadow-md hover:-translate-y-0.5",
          tempHighlight === "localizacao" && "animate-[highlightAndFade_0.6s_ease-out]"
        )}
        onClick={() => handleItemClick("localizacao")}
      >
        Localização
      </a>
    </div>
  );
}