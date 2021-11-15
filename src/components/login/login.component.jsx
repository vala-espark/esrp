import React from "react";
import "./login.styles.scss";

const Login = () => {
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
                                            <div className="input-item">
                                                <label htmlFor="">Email</label>
                                                <input type="email" name="" id="" />
                                            </div>
                                            <div className="input-item">
                                                <label htmlFor="">Password</label>
                                                <input type="password" name="" id="" />
                                            </div>
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