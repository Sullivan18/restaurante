import React from "react";
import ComCriaOpcoes from "./components/ComCriaOpcoes";
import ComEditaOpcoes from "./components/ComEditaOpcoes";
import ComPegaMenu from "./components/pages/Pedido/ComPegaMenu";
//import { ComLogin } from "./pages/Login/ComLogin";
import { ComLogin } from "./components/pages/Login/ComLogin.js";
import { BrowserRouter, useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import Main from "./pages/Home/index";
import { MenuPrincipal } from "./components/MenuPrincipal";
import { PainelDeAdmin } from "./components/pages/PainelDeAdmin";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/pages/layout";
import { ComPedidoFeito } from "./components/ComPedidoFeito"

function App() {
  function requireAuth(nextState, replace, next) {
    console.log("Require auth");
    if (!verificaUsuario) {
      replace({
        pathname: "/login",
        state: { nextPathname: nextState.location.pathname }
      });
    }
    next();
  }

  function verificaUsuario() {
    console.log("Verifica user");
    if (sessionStorage.getItem("currentUser") !== null) {
      console.log("Dentro do true");
      return true;
    }
    else {
      return false;
    }
  }

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout></Layout> }>
            <Route index element={ <MenuPrincipal></MenuPrincipal> }></Route>
            <Route path="/login" element={ <ComLogin></ComLogin> }></Route>
            <Route path="/painelAdmin" element={ <PainelDeAdmin></PainelDeAdmin> }></Route>
            <Route path="/pedir" element={ (verificaUsuario() ? (<ComPegaMenu></ComPegaMenu>) : (<Navigate to="/login"></Navigate>)) }></Route>
            <Route path="/pedir/efetuado" element={ <ComPedidoFeito></ComPedidoFeito> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App;
