import * as React from 'react';
import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Header,
    Gallery,
    Intro,
    Laurels,
    SpecialMenu,
} from "../container";
import "../App.css";



export function MenuPrincipal(){
    React.useEffect(()=> {
        funcaoAssync();
      }, [])
      
    const [opcoes, setOpcoes] = React.useState([]);
    const funcaoAssync = async() => {
        const resultado = await fetch("http://localhost:5000/opcaoDePrato");
        const json = await resultado.json();
        setOpcoes(json);
        console.log(json);
    };
    return(
    <div>
        <Header />
        <AboutUs />
        <SpecialMenu opPratos={opcoes} />
        <Gallery />
        <FindUs />
        <Footer />

    </div>
    );
}