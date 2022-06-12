import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

export default function SpecialMenu(){ 
  React.useEffect(() => {
    funcaoAssync();
  }, [])

  const [opcoes, setOpcoes] = React.useState([]);
  const [opPorcao, setPorcao] = React.useState([]);

  const funcaoAssync = async () => {
      const resultado = await fetch("http://localhost:5000/opcaoDePrato/pegaCincoPratosSushi");
      const json = await resultado.json();
      const resultado2 = await fetch("http://localhost:5000/opcaoDePrato/pegaCincoPorcoes")
      const jsonDePorcoes = await resultado2.json();
      console.log(json,jsonDePorcoes);

      setOpcoes(json);
      setPorcao(jsonDePorcoes)
  };

  return(
    <div className="app__specialMenu flex__center section_padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu que se adapta à sua paleta" />
        <h1 className="headtext__cormorant">Especial de hoje</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Sushi's</p>
          <div className="app__specialMenu_menu_items">
            {opcoes.map((op, index) => (
              <MenuItem
                key={op.nome + index}
                title={op.nome}
                price={`R$${op.preco.toFixed(2).replace(".",",")}`}
                tags={op.descricao}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu2} alt="menu img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Porções</p>
          <div className="app__specialMenu_menu_items">
            {opPorcao.map((op, index) => (
              <MenuItem
                key={op.nome + index}
                title={op.nome}
                price={`R$${op.preco.toFixed(2).replace(".",",")}`}
                tags={op.descricao}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          Veja mais
        </button>
      </div>
    </div>
  );
}

