import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
      <a
          href="#contacto"
          rel="noopener noreferrer">
          <AiOutlineMail />
        </a>
        <a
          href="https://wa.me/5492616600636"
          target="_blank"
          rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/sist3rsmendoza?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/sistrs.mendoza"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
