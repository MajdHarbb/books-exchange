import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

function AuthNav() {
    const [auth, setAuth] = useState(true);
    const removeUser = () => {
            window.localStorage.clear();
            setAuth(false)
    }
    if (!auth) {
        return <Navigate replace to="/login" />;
    }
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    Books Exchange
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-list-8"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbar-list-8"
                >
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <Link className="nav-link" to="home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="sell-books">Sell Books <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="my-books">My Books <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/purchased">Purchased <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <div className="right-side d-flex">
                        <form className="form-inline">
                            <label className="white-text">Hello {window.localStorage.getItem("first_name")}</label>
                        </form>
                        
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                    
                                <Link className="nav-link" to="notifications"><NotificationsIcon /> <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <SettingsIcon />
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <a className="dropdown-item" href="#">
                                        Dashboard
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Edit Profile
                                    </a>
                                    <a className="dropdown-item" href="#" onClick={removeUser}>
                                        Log Out
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AuthNav;
