import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mb-6 px-4 pt-4">
        <Navbar title="Produtos Store" />
      </div>
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <Link 
            to="/page2" 
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md"
          >
            Ir para Página 2
          </Link>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <Footer />
      </div>
    </main>
  );
}