import './styles.css';
import misionImg from './img/misionImg.png'
import localImg from './img/localImg.png'

const Contacto = () => {
  return (
    <section id="quienes-somos" className="container">
      <article className="article top-section">
        <div className="img-container">
          <img
            src={misionImg}
            alt="img_sisters"
          />
        </div>
        <div className="nosotros-text-container">
          <h3>#gustateComoSos</h3>
          <p>
            Somos Gise y Jime, hermanas y socias!
Te ofrecemos múltiples opciones en moda urbana de calidad, para que encuentres dentro de tu estilo, la mejor versión de vos. 
Estamos comprometidas con desafiar la hegemonía de cuerpos y los estereotipos. Celebramos la diversidad y promovemos la identificación de la belleza en cada mujer. 
          </p>
        </div>
      </article>
      <article className="article bottom-section">
        <div className="img-container">
          <img
            src={localImg}
            alt="img_local"
          />
        </div>
        <div className="nosotros-text-container">
          <h3>#todasSomosModelos</h3>
          <p>
            Somos Gise y Jime, hermanas y socias!
Te ofrecemos múltiples opciones en moda urbana de calidad, para que encuentres dentro de tu estilo, la mejor versión de vos. 
Estamos comprometidas con desafiar la hegemonía de cuerpos y los estereotipos. Celebramos la diversidad y promovemos la identificación de la belleza en cada mujer. .
          </p>
        </div>
      </article>
    </section>
  );
};

export default Contacto;
