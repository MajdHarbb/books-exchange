import React from "react";
import { register } from "../../helpers/api.js";
import { useState, useEffect } from "react";
import { setUserData } from "../../helpers/functions.jsx";
import { Navigate } from "react-router-dom";
import { editPassword } from "../../helpers/api";
import AlertDialog from "../../components/AlertDialog.jsx";
function EditPassword() {
    const [password, setPassword] = useState();
    const [newpassword, setNewPassword] = useState();
    const [passwordConfirm, setNewPasswordConfirm] = useState();
    const [alertText, setAlertText] = useState("Something went wrong");
    const [title, setTitle] = useState("Something went wrong");
    const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
    const openDialog = () => setDialogIsOpen(true);
    const closeDialog = () => setDialogIsOpen(false);

    const handleSubmit = async (event) => {
        // Prevent page reload
        event.preventDefault();
        if (newpassword != passwordConfirm) {
            setAlertText(
                "New passwords don't match, please be carefull when entering your passwords."
            );
            setTitle("Operation Failed");
            openDialog();
        } else if (newpassword.length < 6 || passwordConfirm.length < 6) {
            setAlertText(
                "The password should be 6 characters at least."
            );
            setTitle("Operation Failed");
            openDialog();
        } else {
            try {
                const res = await editPassword({
                    user_id: JSON.parse(localStorage.getItem("user")).id,
                    password: password,
                    new_password: newpassword,
                    passwordConfirm: passwordConfirm,
                });
                console.log(res);
                setAlertText("Your password has been updated successfully");
                setTitle("Operation Succeeded");
                openDialog();
            } catch (error) {
                console.log(error);
                setAlertText(
                    "Old password doesn't match the record, please try again."
                );
                setTitle("Operation Failed");
                openDialog();
            }
        }
    };

    return (
        <div>
            <AlertDialog
                open={dialogIsOpen}
                onClose={closeDialog}
                text={alertText}
                title={title}
            />
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
                                Change Password
                            </span>
                        </nav>
                    </div>
                </div>
            </div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="mx-auto">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="password">Old Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="newpassword">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="newpassword"
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="newpasswordcon">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="newpasswordcon"
                                onChange={(e) =>
                                    setNewPasswordConfirm(e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditPassword;
