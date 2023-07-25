import React from "react";
import "../styles/gallery.css";
const Gallery = () => {
  return (
    <section id="gallery">
      {" "}
      <div className="hero d-flex flex-column justify-content-center align-items-center">
        <h1 className="hero-header ">Gallery</h1>
        <p className="hero-description text-center ">
          Bienvenue dans la galerie Brasselie ! Plongez dans l'univers enivrant
          de la bière et de l'ambiance chaleureuse des bars à travers une
          sélection captivante d'images.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="image-block col-sm-4 ">
            <div className="child img1"></div>
          </div>
          <div className="image-block col-sm-8 ">
            <div className="child img2"></div>
          </div>
          <div className="image-block col-sm-4 ">
            <div className="child img3"></div>
          </div>
          <div className="image-block col-sm-4 ">
            <div className="child img4"></div>
          </div>
          <div className="image-block col-sm-4 ">
            <div className="child img5"></div>
          </div>
          <div className="image-block col-sm-8 ">
            <div className="child img6"></div>
          </div>
          <div className="image-block col-sm-4 ">
            <div className="child img7"></div>
          </div>
        </div>
        <div className="video d-flex flex-column flex-md-row  justify-content-center align-items-center">
          <div className="video-text">
            <h2>La musique de moment</h2>
            <p>
              "Beer" from the album "We Couldn't Think of a Title"
              <br />
              Vous cherchez une musique pour une soirée ? <br />
              Je recommande cette musique à tous les alcoolique 🍺
            </p>
          </div>
          <iframe
            height="460"
            src="https://www.youtube.com/embed/O-jOEAufDQ4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
