import logoMobile from '../NavBar/logo/logoMobile.png';
import logoDesktop from '../NavBar/logo/logoDesktop.png';
import menuIcon from '../NavBar/logo/menuIcon.png';
import './styles.css';

export const NavBar = () => {
  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (!navbarToggler.classList.contains('collapsed')) {
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-md custom-nav custom-bg  container-fluid d-flex ">
      <div className="d-flex justify-content-between">
        <a className="navbar-brand" href="#cartel">
          <img
            src={logoDesktop}
            alt="Logo"
            width="335"
            height="107"
            className="logo-desktop"
          />
          <img src={logoMobile} alt="Logo Mobile" className="logo-mobile" />
        </a>
      </div>
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <img
          src={menuIcon}
          className="menu-icon img-menu-icon"
          alt="Menu Icon"
        />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="custom-link"
              href="#catalogo"
              onClick={handleNavLinkClick}>
              C4tálogo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="custom-link"
              href="#contacto"
              onClick={handleNavLinkClick}>
              Contact0
            </a>
          </li>
          <li className="nav-item">
            <a
              className="custom-link"
              href="#quienes-somos"
              onClick={handleNavLinkClick}>
              Qui3nes s0mos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
