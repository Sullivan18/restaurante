import * as React from "react"
import axios from 'axios'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import "../"

export function ComLogin() {

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
                    })

            })
    }

    return (
        <div className="app__login section__padding" >
            <h1 className="app__login-h1">Login</h1>
            <Formik onSubmit={ handleLogin } initialValues={ {} }>
                <Form>
                    <div className="app__login-campo">
                        <div className="app__login-form ">
                            <label for="email">Email: </label>
                            <Field
                                id="email"
                                name="email"
                                type="text"
                                required>

                            </Field>
                        </div>
                        <div className="app__login-form ">
                            <label for="password">Senha: </label>
                            <Field
                                id="password"
                                name="password"
                                type="text"
                                required>

                            </Field>
                        </div>
                        <button className='app__button custom__button' type="submit">Login</button>
                    </div>

                </Form>
            </Formik>
        </div>
    )
}