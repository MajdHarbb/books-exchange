import React from "react";
import { useState } from "react";
import { signin } from "../helpers/api.js";
import { setUserData } from "../helpers/functions.jsx";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import AlertDialog from "../components/AlertDialog.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(false);
    const [authWithBook, setAuthWithBook] = useState(false);
    const [error, setError] = useState("Invalid Credentails");

    const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
    const openDialog = () => setDialogIsOpen(true);
    const closeDialog = () => setDialogIsOpen(false);

    const handleSubmit = async (event) => {
        // Prevent page reload
        event.preventDefault();
        try {
            const res = await signin({ email: email, password: password });
            // console.log(res);
            setUserData(res.data);
            if(localStorage.getItem("book_id") != null){
                setAuthWithBook(true)
            } else {
                setAuth(true);
            }
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message);
            openDialog();
        }
    };

    if (auth) {
        return <Navigate replace to="/home" />;
    }
    if (authWithBook) {
        return <Navigate replace to={`/purchase-book/` + localStorage.getItem("book_id")} />;
    }
    return (
        <div>
            <Navbar />
            <div className="form" onSubmit={handleSubmit}>
                <AlertDialog
                    open={dialogIsOpen}
                    onClose={closeDialog}
                    text={error}
                    title="Login Failed"
                />
                <div className="row p-5">
                    <div className="col-lg-12">
                        <nav className="breadcrumb bg-light">
                            <span
                                className="breadcrumb-item text-dark"
                                href="#"
                            >
                                Home
                            </span>
                            {/* <a className="breadcrumb-item text-dark" href="#">
                                Shop
                            </a> */}
                            <span className="breadcrumb-item active">
                                Log In - Log in into your account
                            </span>
                        </nav>
                    </div>
                </div>
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
