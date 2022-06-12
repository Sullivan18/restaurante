import React from "react";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <subHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Encontre-nos{" "}
      </h1>
      <div className="app__wrapper-conbtent">
        <p className="p__opensans">
          Rodovia Senador José Ermírio de Moraes, 1425 - Jardim Constantino
          Matucci, Sorocaba - SP, 18085-784
        </p>
        <p
          className="p__opensans"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Horário de funcionamento
        </p>
        <p className="p__opensans">Seg - Sex: 17h - 23h</p>
        <p className="p__opensans">Sab - Dom: 19h - 00h</p>
      </div>
      <a href="https://goo.gl/maps/ngUfMogQowhkuL37A" target="_blank">
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          Visite-nos
        </button>
      </a>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"></img>
    </div>
  </div>
);

export default FindUs;
