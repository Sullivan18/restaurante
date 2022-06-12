import * as React from "react"
import { toast } from "react-toastify";

export function ComCriaOpcoes(){
    const[nome, setNome] = React.useState();
    const[preco, setPreco] = React.useState();
    const[tipo, setTipo] = React.useState();
    const[descricao, setDescricao] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const opcao = {nome, tipo, preco, descricao};
        if (opcao.tipo == undefined) opcao.tipo = "sushi"; //se é undefined, é a primeira opção
        console.log(opcao)
        fetch("http://localhost:5000/opcaoDePrato", {
            method: 'POST',
            headers: {"Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(opcao)
        }).then(()=>{
            console.log("Opção adicionada.");
            toast.success("Opção adicionada!");
            setNome("");
            setPreco("");
            setDescricao("");
        }).catch((e)=>
        console.log(e.message));
    }

    return(
        <div>
            <h1>Criador de cardapio</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label for="nome">Nome:</label>
                    <input 
                    id="nome"
                    type="text" 
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label for="tipo">Tipo</label>
                    <select onChange={(e)=> {setTipo(e.target.value)}} id="tipo">
                        <option value="sushi">Sushi</option>
                        <option value="porcao">Porção</option>
                        <option value="bebida">Bebida</option>
                    </select>
                </div>
                <div>
                    <label for="preco">Preço:</label>
                    <input 
                    id="preco"
                    type="number"
                    step=".01" 
                    required
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label for="descricao">Descrição:</label>
                    <textarea 
                    id="descricao"
                    required
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    ></textarea>
                </div>
                <button>Adicionar opção</button>
            </form>
        </div>
    );
}


export default ComCriaOpcoes;