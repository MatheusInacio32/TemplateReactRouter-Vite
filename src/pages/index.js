import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Products from '../components/Products';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    // Atualiza o ano automaticamente no rodapé
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Adiciona a classe 'active' ao clicar nos links da navbar
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Redireciona para a página inicial ao clicar na logo
    document.getElementById('logoHome').addEventListener('click', function() {
      window.location.href = '/';
    });
  }, []);

  return (
    <>
      <Head> <title>Original Produtos</title> </Head>
      <Navbar />
      <Carousel />
      <Products />
      <ContactForm />
      <a href="https://wa.me/SEU_NUMERO" target="_blank" className="whatsapp-button">
        <img src="/img/zap.png" alt="Botão WhatsApp" />
      </a>
      <footer>
        <p>© <span id="currentYear"></span> Agencia Astro. Todos os direitos reservados. Desenvolvido por Agência Astro</p>
      </footer>
    </>
  );
}
