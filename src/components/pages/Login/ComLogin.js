import * as React from "react"
import axios from 'axios'
import { Formik, Form, Field } from 'formik'
import "./Login.css";
import { FiFacebook, FiTwitter, FiInstagram, } from "react-icons/fi";
import { BsEnvelope, BsKey } from "react-icons/bs";
import { toast } from 'react-toastify';
import "./Login.css";
import { useNavigate} from 'react-router-dom';


export function ComLogin() {
    let navigate = useNavigate();
    

    const handleLogin = (values) => {
        console.log('LOGIN', values);
        axios.post("http://localhost:5000/usuario/login", values)
            .then((response) => {
                console.log("RESPONSE VALUES", response)
                console.log("RESPONSE VALUES", response.data.email)

                axios.post("http://localhost:5000/admin/", response.data.email)
                    .then((resp) => {
                        console.log(resp.data);
                        console.log(response.data);
                        response.data.isAdmin = resp.data.isAdmin;  //Rapaz que código espaguete é esse, virou o que, o Mario?
                        sessionStorage.setItem("currentUser", JSON.stringify(response.data));
                        toast.success(`Bem-vindo ${response.data.username}!`);
                        navigate("/");
                    })

            }).catch( e => {
                console.log(e);
                toast.error(e.response.data.message);
            })
    }

    return (

        <div>

            <div className="container ">
                
                    
                
                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">Bem vindo!</h2>
                        <p className="description description-primary">Para desfrutar de uma</p>
                        <p className="description description-primary">experiência customizada </p>
                        <p className="description description-primary">faça login na sua conta.</p>

                    </div>

                    <div className="second-column">
                        <h2 className="title">Login</h2>
                        <div className="social-media">
                            <ul className="list-social-media">
                                <li className="item-social-media"><a href="#"><FiFacebook /> </a></li>
                                <li className="item-social-media"><a href="#"><FiTwitter /></a></li>
                                <li className="item-social-media"><a href="#"> <FiInstagram /></a></li>
                            </ul>
                        </div>

                        <p className="description description-second">ou use seu email: </p>

                        <Formik onSubmit={ handleLogin } initialValues={ {} }>
                            <Form className="form">

                                <label className="label-input">
                                    <div className="icon-modify"><BsEnvelope /></div>
                                    <Field name="email" type="email" placeholder="Email" id="email" required></Field>
                                </label>
                                <label className="label-input">
                                    <div className="icon-modify"><BsKey /></div>
                                    <Field name="password" type="text" placeholder="Senha" id="password" required></Field>

                                </label>

                                <a className="password" href="#">Esqueceu sua senha?</a>
                                <button type="submit" className="btn btn-second">Sign up</button>

                            </Form>
                        </Formik>

                    </div>
                </div>



            </div>



        </div>
    )
}