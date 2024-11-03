import Link from 'next/link';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const handleLogoClick = () => {
      window.location.href = '/';
    };

    const logo = document.getElementById('logoHome');
    logo.addEventListener('click', handleLogoClick);

    return () => {
      logo.removeEventListener('click', handleLogoClick);
    };
  }, []);

  return (
    <div className="menu-background">
      <img src="/img/logo.png" alt="Logo do site" className="logo" id="logoHome" />

      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="#catalogo" legacyBehavior>
                <a className="nav-link">Catálogo</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#faleConosco" legacyBehavior>
                <a className="nav-link">Fale Conosco</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#sobreNos" legacyBehavior>
                <a className="nav-link">Sobre Nós</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
