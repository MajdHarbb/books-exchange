import React from "react";
import { useState } from "react";
import { login } from "../helpers/api.js";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = async (e) => {
        try {
            const { data } = await login({
                email: "majd@mail.com",
                password: "password",
            });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <form>
                <div>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your user name"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" onClick={login}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
