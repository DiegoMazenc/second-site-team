import React from 'react';
import './contact.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <h2><p>Le Baril</p>Contactez-nous</h2>
      <div className="contact-form">
        <div className="photo-section">
          <img src={require("../biere-etude.jpg")} alt="Votre photo" />
          <p></p>
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse :  Distillerie de Biercée
           Rue de la Roquette 36, 6532 Thuin, Belgique </label> 
        </div>
        <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1311418.416564453!2d2.5595745184290273!3d50.06074261640531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c220dbe1e883d7%3A0x767bc37dacab67b4!2sDistillerie%20de%20Bierc%C3%A9e!5e0!3m2!1sfr!2sfr!4v1690290987016!5m2!1sfr!2sfr" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Prénom :</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom :</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone :</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="userPhoto">Insérez votre photo :</label>
          <input type="file" id="userPhoto" name="userPhoto" accept="image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit" className="submit-btn">Envoyer</button>
      </div>
      {/* <div className="owl-carousel">
        <img src={require("../biere-etude.jpg")} alt="Votre photo1" />
        <img src={require("../biere-etude.jpg")} alt="Votre photo2" />
        <img src={require("../biere-etude.jpg")} alt="Votre photo3" />
        <img src={require("../biere-etude.jpg")} alt="Votre photo4" />
        <img src={require("../biere-etude.jpg")} alt="Votre photo5" />
      </div> */}
      <div className="social-links">
        <a href="https://www.facebook.com/VotrePageFacebook" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.instagram.com/VotreCompteInstagram" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/VotreProfilLinkedIn" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <div className="contact-info">
        <p>Email : votre@email.com</p>
        <p>Téléphone : +33 123 456 789</p>
      </div>
    </div>
  );
};

export default Contact;
