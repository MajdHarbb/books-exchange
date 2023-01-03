import React from "react";
import { register } from "../../helpers/api.js";
import { useState, useEffect } from "react";
import { setUserData } from "../../helpers/functions.jsx";
import { Navigate } from "react-router-dom";
import { editUserInfo } from "../../helpers/api"
import AlertDialog from "../../components/AlertDialog.jsx";
function EditProfile() {
    const [firstName, setFirstName] = useState(JSON.parse(localStorage.getItem("user")).first_name);
    const [lastName, setLastName] = useState(JSON.parse(localStorage.getItem("user")).last_name);
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem("user")).email);
    const [username, setUsername] = useState(JSON.parse(localStorage.getItem("user")).district);
    const [district, setDistrict] = useState(JSON.parse(localStorage.getItem("user")).city);
    const [city, setCity] = useState(JSON.parse(localStorage.getItem("user")).city);
    const [phone, setPhone] = useState(JSON.parse(localStorage.getItem("user")).phone);
    const [user, setUser] = useState();

    const [dialogIsOpen, setDialogIsOpen] = React.useState(false)
    const openDialog = () => setDialogIsOpen(true)
    const closeDialog = () => setDialogIsOpen(false)

    const handleSubmit = async (event) => {
        // Prevent page reload
        event.preventDefault();
        try {
            const res = await editUserInfo({
                user_id: JSON.parse(localStorage.getItem("user")).id,
                first_name: firstName,
                last_name: lastName,
                email: email,
                username: username,
                phone: phone,
                district: district,
                city: city,
            });
            setUserData(res.data);
            
            console.log(res);
            openDialog()
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem("user")))
      console.log(user)
    }, [])
    
    return (
        <div>
            <AlertDialog open={dialogIsOpen} onClose={closeDialog} text="Your information has been updated" title= "Success"/>
            <div className="container-fluid">
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
                                Edit Profile
                            </span>
                        </nav>
                    </div>
                </div>
            </div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="mx-auto">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="first-name">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first-name"
                                defaultValue={(JSON.parse(localStorage.getItem("user")).first_name)}
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
                                defaultValue={(JSON.parse(localStorage.getItem("user")).last_name)}
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
                                defaultValue={(JSON.parse(localStorage.getItem("user")).email)}
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
                                defaultValue={(JSON.parse(localStorage.getItem("user")).phone)}
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
                                defaultValue={(JSON.parse(localStorage.getItem("user")).username)}
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
                                defaultValue={(JSON.parse(localStorage.getItem("user")).district)}
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
                                defaultValue={(JSON.parse(localStorage.getItem("user")).city)}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update Info
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;
