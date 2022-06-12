import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contate-nos</h1>
        <p className="p__opensans">
          Rodovia Senador José Ermírio de Moraes, 1425 - Jardim Constantino
          Matucci, Sorocaba - SP, 18085-784
        </p>
        <p className="p__opensans">(15) 4002-8922</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.japanlogo} alt="footer_logo" />

        <p className="p__opensans">
          "O sabor da vida depende de quem tempera."{" "}
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          classname="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horário de funcionamento</h1>
        <p className="p__opensans">Segunda - sexta</p>
        <p className="p__opensans">17h - 23h</p>
        <p className="p__opensans">Sábado - Domingo</p>
        <p className="p__opensans">19h - 00h</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2022 Moriya Sushi. Todos os direitos reservados.{" "}
      </p>
    </div>
  </div>
);

export default Footer;
