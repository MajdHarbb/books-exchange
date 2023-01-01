import React from "react";
import { useState } from "react";
import { signin } from "../helpers/api.js";
import { setUserData } from "../helpers/functions.jsx";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(false);
    const handleSubmit = async (event) => {
        // Prevent page reload
        event.preventDefault();
        try {
            const res = await signin({ email: email, password: password });
            // console.log(res);
            setUserData(res.data);
            setAuth(true);
        } catch (error) {
            console.log(error);
        }
    };

    if (auth) {
        return <Navigate replace to="/home" />;
    }
    return (
        <div>
            <Navbar/>
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
        </div>
    );
}

export default Login;
