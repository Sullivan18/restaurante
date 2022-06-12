import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.M} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nós</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">
          Somos apaixonados pelo que fazemos. O nosso restaurante à la carte,
          conta com um aconchegante sushi bar e um menu com pratos quentes e
          frios, mesclando culinária tradicional e contemporânea japonesa.
          Buscando sempre se modernizar, o restaurante leva à mesa do cliente um
          conceito inovador: experiência à la Carte em formato de Rodízio, com
          ingredientes sofisticados e de alta qualidade. Azeite de trufas, ovas,
          salsa trufada, vieira e foie gras são algumas iguarias que contemplam
          essa experiência.
        </p>
        <button type="button" className="custom__button">
          Saiba mais
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">história</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">
          Desde 1993, é o primeiro restaurante japonês de Sorocaba. Fundado por
          duas irmãs após uma delas ter aprendido a culinária japonesa durante o
          período em que morou no Japão. Depois de 10 anos, já consolidado, o
          Moriya Sushi se tornou um restaurante de toda a família. ​ Hoje, com
          27 anos de casa, buscamos o oferecer o melhor atendimento e o melhor
          sabor para você. Nossas receitas são tradicionais da cultura japonesa,
          preservando a qualidade, o aroma e os sabores típicos do Japão.
        </p>
        <button type="button" className="custom__button">
          Saiba mais
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
