import React from "react";
import { useState } from "react";
import { signin } from "../helpers/api.js";
import { useNavigate } from 'react-router-dom';
import { setUserData } from "../helpers/functions.js";
function Login() {
    const navigateTo = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        // Prevent page reload
        event.preventDefault();
        try {
            const res = await signin({ email: email, password: password });
            console.log(res);
            setUserData(res.data)
            navigateTo("/home");

        } catch (error) {
            console.log(error);
        }
    };
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    return (
        <div className="form" onSubmit={handleSubmit}>
            <form className="row" onSubmit={handleSubmit}>
                <div className="mx-auto">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="inputPassword4">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
