import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function Page2Content() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mb-6 px-4 pt-4">
        <Navbar title="Página 2 | Produtos Store" />
      </div>
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Bem-vindo à Página 2</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Esta é a segunda página do nosso site OriginalProdutos.
          </p>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-green-700 dark:text-green-300">
              Explore mais sobre nossos produtos e serviços nesta seção.
            </p>
          </div>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <Footer />
      </div>
    </main>
  );
}