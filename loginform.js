import React, { useState } from "react";
import "./loginform.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-form-container">
            <div className="login-form-wrapper p-3 ">
                <form onSubmit={handleSubmit} className="login-form">
                <center><h2>Login</h2></center>
                    <div className="mb-3">
                        <label htmlFor="email"><b>UserName/Email</b></label>
                        <input
                            type="email"
                            placeholder="Enter UserName or Email"
                            className="form-control"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <center><button type="submit" className="btn btn-success"><b>Login</b></button></center>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
