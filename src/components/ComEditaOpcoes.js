import * as React from "react"
import axios from 'axios'
import { Formik, Form, Field } from 'formik'
import { toast } from 'react-toastify';


 
export function ComEditaOpcoes(){
    

    //Isso ta pegando todos os pedidos para criar o menu no começo
    React.useEffect(()=> {
        funcaoAssync();
      }, [])
    

    //Id utilizado para saber qual é o objeto que se vai fazer a mudança
    //opções do dropdown
    const [opcoes, setOpcoes] = React.useState([]);

    //Função que pega todos os pratos do mongo
    const funcaoAssync = async() => {
        const resultado = await fetch("http://localhost:5000/opcaoDePrato");
        const json = await resultado.json();
        setOpcoes(json);
    };

    /* const handleSubmit = (e) => {
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
    } */


    const handleEdit = (e) => {
        console.log(e);

        axios.patch("http://localhost:5000/opcaoDePrato/"+e.id, e)
        .then((response) =>{
            toast.success("Trocado!");
        })
        

    }
    
    const handleDelete = (e) => {
        axios.delete("http://localhost:5000/opcaoDePrato/"+e.target.id)
        .then((response) =>{
            console.log(response);
        })
    }

    return (
        <div>

            {opcoes.map((op)=>{
                let nome = "nome";
                let preco = "preco";
                let descricao = "descricao";
                let initial = {};
                initial[nome] = op.nome;
                initial[preco] = op.preco;
                initial[descricao] = op.descricao;
                initial["id"] = op._id;
                return(
                <Formik onSubmit={handleEdit} initialValues={initial}>
                    <Form className="form">
                        <Field type="hidden" value={op._id} name="id"></Field>
                        <Field type="text" name={nome} ></Field>
                        <Field type="number" step=".01" name={preco} ></Field>
                        <Field type="text" name={descricao}></Field>
                        <button type="submit">Atualizar</button>
                        <button type="button" id={op._id} onClick={handleDelete}>Deleta</button>
                    </Form>
                </Formik>
                )
            })}
        </div>
    );
}

export default ComEditaOpcoes