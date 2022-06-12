import React from 'react';

import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
} from "../../container";
import { Navbar } from "../../components";
import "../../App.css";

function Main() {
    return (
        <div>
            
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
        
    );
};

export default Main;