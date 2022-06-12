import React from 'react'
import { ComPegaMenu } from '../ComPegaMenu'

export function PegaMenu(){
    
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
            <ComPegaMenu></ComPegaMenu>
        </div>
    )
}