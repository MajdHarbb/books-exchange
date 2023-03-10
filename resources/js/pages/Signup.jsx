import React from "react";
import { register } from "../helpers/api.js";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { setUserData } from "../helpers/functions.jsx";
import { Navigate } from "react-router-dom";
import AlertDialog from "../components/AlertDialog.jsx";
function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [district, setDistrict] = useState("Beirut");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [auth, setAuth] = useState(false);
    
    const [error, setError] = useState("Failed to register")
    const [dialogIsOpen, setDialogIsOpen] = React.useState(false)
    const openDialog = () => setDialogIsOpen(true)
    const closeDialog = () => setDialogIsOpen(false)

    const handleSubmit = async (event) => {
        // Prevent page reload
        event.preventDefault();
        try {
            const res = await register({
                first_name: firstName,
                last_name: lastName,
                email: email,
                username: username,
                phone: phone,
                password: password,
                password_confirm: passwordConfirm,
                district: district,
                city: city,
            });
            setUserData(res.data);
            setAuth(true);
            // console.log(res);
        } catch (error) {
            console.log(Object.values(error.response.data.errors)[0][0]);
            setError(Object.values(error.response.data.errors)[0][0])
            openDialog()
        }
    };
    if (auth) {
        return <Navigate replace to="/home" />;
    }
    return (
        <div>
            <Navbar />
            <AlertDialog open={dialogIsOpen} onClose={closeDialog} text={error} title= "Registration Failed"/>
            <div className="row p-5">
                <div className="col-lg-12">
                    <nav className="breadcrumb bg-light">
                        <span className="breadcrumb-item text-dark" href="#">
                            Home
                        </span>
                        {/* <a className="breadcrumb-item text-dark" href="#">
                                Shop
                            </a> */}
                        <span className="breadcrumb-item active">
                            Sign Up - Create A New Account
                        </span>
                    </nav>
                </div>
            </div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="mx-auto p-5 bg-light">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first-name"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="first-name">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="last-name"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
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
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="phone"
                                className="form-control"
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="user-name">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="user-name"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputState">State</label>
                            <select
                                id="inputState"
                                required
                                className="form-control"
                                defaultValue="Beirut"
                                onChange={(e) => setDistrict(e.target.value)}
                            >
                                <option>Beirut</option>
                                <option>Baalbek</option>
                                <option>Beqaa</option>
                                <option>Mount Lebanon</option>
                                <option>Nabatieh</option>
                                <option>North</option>
                                <option>South</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirm-password"
                                onChange={(e) =>
                                    setPasswordConfirm(e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
