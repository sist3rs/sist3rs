import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './styles.css';

export const Contacto = () => {

  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    let errors = {};

    if (!name) {
      errors.name = '*Campo obligatorio';
    }

    if (!email) {
      errors.email = '*Campo obligatorio';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      errors.email = 'Dirección de correo electrónico inválida';
    }

    if (!message) {
      errors.message = '*Campo obligatorio';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs.sendForm('service_ss2viqg', 'template_ajsxmm2', form.current, 'HKCvuYAraDw2ROBya')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado correctamente',
          confirmButtonColor: 'rgba(27, 146, 142, 0.7)'
        });
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contacto" className="container-fluid  d-flex rectangle">
      <div className="text-container">
      <iframe
        className="mapa-sisters"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13401.857098037988!2d-68.8585011!3d-32.9245551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0933018c4e95%3A0x28992c03e356a88a!2sSIST3RS!5e0!3m2!1sen!2sus!4v1638206714149!5m2!1sen!2sus"></iframe>

      
        <h2 className="title">Dónde Estamos</h2>
        <p className="address">
          ALTE. BROWN 1520, GODOY CRUZ, MENDOZA <br />
lunes a viernes de 17 a 21hs  <br />        
miércoles a sábado 10 a 14hs <br />  
          ¡También podemos concertar cita a tu conveniencia!

        </p>
      </div>

      <div className="form-container ">
        <h2 className="form-title">Comunicate con nosotras</h2>
        <form ref={form}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="user_name"
              placeholder="nombre y apellido"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="telephone"
              name="user_telephone"
              placeholder="celular de contacto"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="user_email"
              placeholder="dirección de correo electrónico"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <textarea
              className="form-control message-textarea"
              id="message"
              name="message"
              placeholder="dejanos tu mensaje aqui..."></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button onClick={sendEmail} type="submit" className="btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
