import './styles.css';

export const Contacto = () => {
  return (
    <div id="contacto" className="container-fluid  d-flex rectangle">
      <iframe
        className="mapa-sisters"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.857098037988!2d-68.8585011!3d-32.9245551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0933018c4e95%3A0x28992c03e356a88a!2sSIST3RS!5e0!3m2!1sen!2sus!4v1638206714149!5m2!1sen!2sus"></iframe>

      <div className="text-container">
        <h2 className="title">Dónde Estamos</h2>
        <p className="address">
          ALTE. BROWN 1520, GODOY CRUZ, MENDOZA <br />
          lunes a viernes de 10hs a 16hs
        </p>
      </div>

      <div className="form-container ">
        <h2 className="form-title">Comunicate con nosotras</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="nombre y apellido"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="dirección de correo electrónico"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control message-textarea"
              id="message"
              placeholder="dejanos tu mensaje aqui..."></textarea>
          </div>
          <button type="submit" className="btn">
            Envi4r
          </button>
        </form>
      </div>
    </div>
  );
};
