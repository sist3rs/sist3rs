import './styles.css';

const Contacto = () => {
  return (
    <section id="quienes-somos" className="container">
      <article className="article top-section">
        <div className="img-container">
          <img
            src="src/components/Nosotros/img/07.png"
            alt="img_sisters"
          />
        </div>
        <div className="nosotros-text-container">
          <h3>M1SIÓN</h3>
          <p>
            Nuestra misión es proporcionar a las mujeres de Mendoza una amplia
            gama de opciones de ropa de alta calidad, mientras fomentamos la
            igualdad de género, el empoderamiento femenino y la inclusión de
            todas las personas. Nos comprometemos a desafiar los estándares de
            belleza establecidos, celebrar la diversidad y crear un espacio
            acogedor donde todas nuestras clientas se sientan valoradas y
            representadas.
          </p>
        </div>
      </article>
      <article className="article bottom-section">
        <div className="img-container">
          <img
            src="src/components/Nosotros/img/01.png"
            alt="img_local"
          />
        </div>
        <div className="nosotros-text-container">
          <h3>V1SIÓN</h3>
          <p>
            Nuestra visión es ser reconocidas como la tienda de moda femenina en
            Mendoza, que ofrece una experiencia única para sus clientas,
            seleccionando prendas de calidad que reflejen su estilo y resaltando
            la individualidad de su belleza fuera de todo cànon o estereotipo.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Contacto;
