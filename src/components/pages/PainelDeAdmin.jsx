import React from 'react'
import ComCriaOpcoes from '../ComCriaOpcoes'
import ComEditaOpcoes from '../ComEditaOpcoes'

export function PainelDeAdmin(){
    
    const verificaUsuario = () =>{
        if(sessionStorage.getItem("currentUser") !== null){
          return true;
        }
        else{
          return false;
        }
      }


    return(
        <div>
            {verificaUsuario() ? <ComCriaOpcoes></ComCriaOpcoes> : null}
            {verificaUsuario() ? <ComEditaOpcoes></ComEditaOpcoes> : null}

        </div>
    )
}