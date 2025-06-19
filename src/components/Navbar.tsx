import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "utils/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
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
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-2",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:opacity-80 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-opacity-80"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
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
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "absolute top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 w-auto",
        "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight",
        "data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight",
        "origin-top-center transition-all duration-200 opacity-0 translate-y-[-8px] scale-95 data-[state=open]:opacity-100 data-[state=open]:translate-y-0 data-[state=open]:scale-100",
        "bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 shadow-lg p-2 z-50",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute left-0 top-full flex w-full justify-center z-50">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 text-gray-900 md:w-[var(--radix-navigation-menu-viewport-width)]",
          "transition-all duration-300 opacity-0 translate-y-[-8px] scale-95 data-[state=open]:opacity-100 data-[state=open]:translate-y-0 data-[state=open]:scale-100",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}
const styles = `
  @keyframes enterFromRight {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes enterFromLeft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(200px);
    }
  }

  @keyframes exitToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

type NavbarProps = {
  title?: string;
  className?: string;
};

const Navbar = ({ title = "OriginalProdutos", className }: NavbarProps) => {
  React.useEffect(() => {
    // Adicionar as animações ao documento
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <header className={cn("w-full bg-gradient-to-r from-green-500 to-green-600 shadow-md rounded-lg", className)}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo ou título */}
          <div className="text-white text-xl font-semibold">
            {title}
          </div>
          
          {/* Menu principal com itens alinhados */}
          <div className="flex items-center space-x-1">
            {/* Menu Produtos */}
            <div className="relative">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-white hover:bg-green-600">
                      Produtos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[260px] p-2 grid gap-2">
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Novos Produtos</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Confira nossos lançamentos</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Mais Vendidos</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Produtos populares</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Promoções</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Ofertas especiais</div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {/* Menu Sobre Nós */}
            <div className="relative">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-white hover:bg-green-600">
                      Sobre Nós
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[260px] p-2 grid gap-2">
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Nossa História</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Conheça nossa jornada</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Equipe</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Nossos profissionais</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Missão e Valores</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">O que nos motiva</div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            {/* Menu Contato */}
            <div className="relative">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:text-white hover:bg-green-600">
                      Contato
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[260px] p-2 grid gap-2">
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Fale Conosco</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Envie sua mensagem</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Suporte</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Ajuda com produtos</div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink className="p-2 hover:bg-green-100 dark:hover:bg-green-900 block transition-all duration-200">
                            <div className="font-medium">Localização</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Nossas lojas físicas</div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
  Navbar
};

export default Navbar;
