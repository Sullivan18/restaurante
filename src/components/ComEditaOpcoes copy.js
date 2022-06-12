import * as React from "react"
import axios from 'axios'

 
export function ComEditaOpcoes(){
    //Refs para poder alterar os valores do input quando muda o drop down
    const nomeInput = React.createRef();
    const precoInput = React.createRef();

    //Isso ta pegando todos os pedidos para criar o menu no começo
    React.useEffect(()=> {
        funcaoAssync();
      }, [])
    
    //Nome e preço para o envio do formulario
    const[nome, setNome] = React.useState([]);
    const[preco, setPreco]= React.useState([]);
    //Id utilizado para saber qual é o objeto que se vai fazer a mudança
    const[id, botaId] = React.useState([]);
    //opções do dropdown
    const [opcoes, setOpcoes] = React.useState([]);

    //Função que pega todos os pratos do mongo
    const funcaoAssync = async() => {
        const resultado = await fetch("http://localhost:5000/opcaoDePrato");
        const json = await resultado.json();
        setOpcoes(json);
    };

    //Essa função atualiza as opções do formulário internamente
    const funcChangeOp = async(e) => {
        console.log(`e na hora do func change: ${e}`)
        const op = await fetch("http://localhost:5000/opcaoDePrato/"+e)
        const json = await op.json();
        console.log(`changeOp${json}`)
        setNome(json.nome);
        nomeInput.current.value=json.nome;
        setPreco(json.preco);
        precoInput.current.value=json.preco;
        botaId(e); //tem que ficar no final eu não sei o pq
    }


    //Isso envia o formulário para a API
    const handleSubmit = (e) => {
        e.preventDefault();
        const opcao = {nome, preco};
        fetch("http://localhost:5000/opcaoDePrato/"+id, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(opcao)
        }).then(()=>{
            console.log("Opção atualizada.");
        }).catch((e)=>
        console.log(e.message));
    }
    
    const deleteFunc = (e) => {
        axios.delete("http://localhost:5000/opcaoDePrato/"+id)
        .then((response) =>{
            console.log(response);
        })
    }

    return (
        <div>
            <div>
            <h1>Editor de preco</h1>
            <div className="menuDeOp">
                <select onChange={(e)=> {console.log(`e: ${e.target.value}`) ; funcChangeOp(e.target.value)}}>
                    {opcoes.map((op)=> { return (
                        <option value={op._id}>
                            {op.nome}
                        </option>
                    )})}
                </select>
                <form onSubmit={handleSubmit}>
                    <input ref={nomeInput} id="nome" onChange={(e) => setNome(e.target.value)}></input>
                    <input ref={precoInput} id="preco" onChange={(e) => setPreco(e.target.value)}></input>
                    <button>Atualizar</button>
                </form>


            </div>
            <button onClick={deleteFunc}>Deleta</button>
            </div>
        </div>
    );
}

export default ComEditaOpcoes