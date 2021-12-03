import React from "react";
import "./login.styles.scss";
import Textarea from "../control-component/textarea";
import Input from "../control-component/input";

const Login = () => {

    const handleFocus = (e) => {
        e.target.classList.add("hasFocus");
    }

    const handleBlur = (e) => {
        if (e.target.value === "") {
            e.target.classList.remove("hasFocus");
        }
    }

    return (
        <>
            <section className="login-sec">
                <div className="bg-pattern">
                    <img src="assets/images/login-pattern.svg" alt="" />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-3 mx-auto">
                            <div className="login-card-wrapper card">
                                <div className="card-body">
                                    <div className="site-logo-icon">
                                        <img src="assets/images/esrp-logo.png" alt="" />
                                    </div>
                                    <div className="login-text-content">
                                        <h3>Login</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci velit quas quia nulla. Itaque!</p>
                                    </div>
                                    <form>
                                        <div className="form-row">
                                            <Input name="email" id="email" type="email" lable="Email"/>
                                            <Input name="password" id="password" type="password" lable="Password"/>
                                            <div className="input-item forget">
                                                <span>Forgot Password? <a href="#!">Reset here</a></span>
                                            </div>
                                            <div className="input-item">
                                                <button type="submit" className="btn primary rounded">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;