import * as React from "react";
import { ErrorMessage, Formik, Form, Field, setIn } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BrowserRouter, useNavigate, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import "./Pedido.css"




export default function ComPegaMenu() {
    let navigate = useNavigate();
    const { state } = useLocation();
    console.log("a" + state);

    React.useEffect(() => {
        funcaoAssync();
    }, []);

    const [opcoes, setOpcoes] = React.useState([]);
    const [init, setInit] = React.useState({});

    const funcaoAssync = async () => {
        console.log("func async");
        const resultado = await fetch("http://localhost:5000/opcaoDePrato");
        const json = await resultado.json();
        setOpcoes(json);
        let valoresIniciais = {};
        json.forEach((o) => {
            valoresIniciais[o._id] = 1;
        });

        setInit(valoresIniciais);
        console.log(init);
    };

    async function pegaValores() {
        const resultado = await fetch("http://localhost:5000/opcaoDePrato");
        const json = await resultado.json();
        let valoresIniciais = {};
        json.forEach((o, i) => {
            valoresIniciais[o._id] = 1;
        });
        console.log(valoresIniciais);
        return valoresIniciais;
    }

    const handleSubmit = (values) => {
        console.log(JSON.parse(sessionStorage.getItem("currentUser")).email);
        values.email = JSON.parse(sessionStorage.getItem("currentUser")).email;
        console.log('SUBMIT', values);
        axios.post("http://localhost:5000/pedido/", values)
            .then((response) => {
                console.log(response.data);
                toast.success("Pedido efetuado!");
                navigate("/pedir/efetuado", { state: { pedido: response.data.pedido } });
            });
    };

    return (
        <div className="pedido_container">
            <div className="pedido">
                <Formik onSubmit={ handleSubmit } initialValues={ {} } >
                    <Form>
                        <div className="pedido_box pedido_form">
                            <div className="pedido_content pedido_sushi">
                                <h1 className="pedido_title">Sushis</h1>
                                { opcoes.map((op, i) => {
                                    if (op.tipo === "sushi") return (
                                        <div className="menuDeOp">
                                            <ul>
                                                <li className="lista">
                                                    <label className="forte">{ op.nome }</label>
                                                    <div className="preco">
                                                        <label>R$:</label><label className="numero_preco">{ op.preco.toFixed(2) }</label>
                                                    </div>
                                                    <label className="label_field"><Field id={ op.id } name={ op._id } type="number" ></Field></label>
                                                </li>
                                            </ul>
                                        </div>
                                    );
                                }) }
                            </div>

                            <div className="pedido_content pedido_porcao">
                                <h1 className="pedido_title">Porções</h1>
                                { opcoes.map((op, i) => {
                                    if (op.tipo === "porcao") return (
                                        <div className="menuDeOp">
                                            <ul>
                                                <li className="lista">
                                                    <label className="forte">{ op.nome }</label>
                                                    <div className="preco">
                                                        <label>R$:</label><label className="numero_preco">{ op.preco.toFixed(2) }</label>
                                                    </div>
                                                    <label className="label_field"><Field id={ op.id } name={ op._id } type="number" ></Field></label>
                                                </li>
                                            </ul>
                                        </div>
                                    );
                                }) }
                            </div>
                            <div className="pedido_content pedido_bebida">
                                <h1 className="pedido_title">Bebidas</h1>
                                { opcoes.map((op, i) => {
                                    if (op.tipo === "bebida") return (
                                        <div className="menuDeOp">
                                            <ul>
                                                <li className="lista">
                                                    <label className="forte">{ op.nome }</label>
                                                    <div className="preco">
                                                        <label>R$:</label><label className="numero_preco">{ op.preco.toFixed(2) }</label>
                                                    </div>
                                                    <label className="label_field"><Field id={ op.id } name={ op._id } type="number" ></Field></label>
                                                </li>
                                            </ul>
                                        </div>
                                    );
                                }) }
                            </div>
                        </div>

                        <div className="entrega_box">
                            <div className="pedido_entrega">
                                <h2 className="pedido_entrega_title">Dados de entrega</h2>
                                <div className="endereço">
                                    <label>Endereço: </label> <label className="label_field_endereço"><Field placeholder="Nome da rua" type="text" name="endereco" required></Field></label>
                                </div>
                                
                                <div className="pedido_dados_box" role="group" aria-labelledby="my-radio-group">
                                    <div className="pedido_dados">
                                        <label>
                                            <Field type="radio" name="formaPagamento" value="credito" required />
                                            Cartão de Crédito
                                        </label>
                                    </div>

                                    <div className="pedido_dados">
                                        <label>
                                            <Field type="radio" name="formaPagamento" value="debito" />
                                            Cartão de Débito
                                        </label>
                                    </div>

                                    <div className="pedido_dados">
                                        <label>
                                            <Field type="radio" name="formaPagamento" value="dinheiro" />
                                            Dinheiro
                                        </label>
                                    </div>
                                </div>
                                <button className="button" type="submit">Finalizar</button>
                            </div>
                        </div>

                    </Form>
                </Formik>
            </div>


        </div>
    );
};