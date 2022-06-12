import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Faça sua inscrição</h1>
      <p className="p__opensans">E não perca as novidades!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Digite seu e-mail" />
      <button type="button" className="custom__button">
        Inscreva-se
      </button>
    </div>
  </div>
);

export default Newsletter;
