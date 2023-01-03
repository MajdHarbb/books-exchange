import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link
                    role="button"
                    to="/" className="navbar-brand">
                    <img src='logo-nobg-cr.png' height="45" width="100" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link
                                role="button"
                                className="nav-link"
                                to="/"
                            >
                                Home<span className="sr-only"></span>
                            </Link>
                            {/* <a className="nav-link" href="#">
                                Home <span className="sr-only"></span>
                            </a> */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categories
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    Novels
                                </a>
                                <a className="dropdown-item" href="#">
                                    Classics
                                </a>
                                <a className="dropdown-item" href="#">
                                    Crime
                                </a>
                                <a className="dropdown-item" href="#">
                                    History
                                </a>
                                <a className="dropdown-item" href="#">
                                    Poetry
                                </a>
                            </div>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <div>
                            <Link
                                role="button"
                                className="btn btn-outline-primary mx-2 my-sm-0"
                                to="/register"
                            >
                                Register
                            </Link>
                            <Link
                                role="button"
                                className="btn btn-primary active"
                                to="/login"
                            >
                                Login
                            </Link>
                        </div>
                        {/* {
                            _.isNil(window.localStorage.getItem('user')) ? 
                            <div>
                                <Link role="button" className="btn btn-outline-primary mx-2 my-sm-0" to="register">Register</Link>
                                <Link role="button" className="btn btn-primary active" to="login">Login</Link>
                            </div> 
                            :
                            <button onClick={removeUser} className="btn btn-outline-primary mx-2 my-sm-0" to="register">Log out</button>

                        } */}
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
