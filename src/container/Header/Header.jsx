import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Busque um novo sabor" />
      <h1 className="app__header-h1">A CHAVE PARA UM JANTAR REQUINTADO</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Você escolhe o seu amanhã a cada mordida que você dá hoje.
      </p>
      <a href="#menu">
        <button type="button" className="custom__button">
          Explore o Menu
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
