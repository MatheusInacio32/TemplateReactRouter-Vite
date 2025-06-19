import React from 'react';
import { cn } from "utils/lib/utils";

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("w-full bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md mt-auto rounded-lg", className)}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">OriginalProdutos</h3>
            <p className="text-sm text-green-100">Qualidade e originalidade garantidas</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-2">Produtos</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-green-200 transition-colors">Novidades</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Categorias</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Promoções</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Suporte</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-green-200 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-green-200 transition-colors">Devolução</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-2">Contato</h4>
              <address className="text-sm not-italic">
                <p>contato@originalprodutos.com</p>
                <p>(11) 9999-9999</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-500 mt-6 pt-4 text-center text-sm">
          <p>&copy; {currentYear} OriginalProdutos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;