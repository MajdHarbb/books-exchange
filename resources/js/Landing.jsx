import React from "react";
import Books from "./components/Books";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function Landing() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Books />
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-lg-12">
                        <div className="d-flex">
                            <div className="col-lg-6 m-2">
                                <img
                                    className="d-block w-100"
                                    src="./4.jpeg"
                                    alt="First slide"
                                    width="500"
                                />
                            </div>
                            <div className="mt-2" id="about-us">
                                <h1> About Us</h1>
                                <p className="text-justify">
                                    Hello beloved users in this website we are
                                    helping you all to exchange your school old
                                    books with each other to benefit your self
                                    and other people who is need for these
                                    books. This website was designed also to
                                    reduce paper waste that old school books are
                                    resulting. However you will save money and
                                    get your needed books in low prices with
                                    good quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" id="contact-us">
                <div className="row p-5">
                    <div className="col-lg-12">
                        <div className="d-flex">
                            <div className="col-lg-6 mt-2">
                                <h1> Contact us</h1>
                                <p className="text-justify">
                                    For any recommendations please contact us on
                                    our gmail(ziad@gmail.com), or call us on the
                                    following number (0096171400433). Thanks for
                                    using our website.Regardless!
                                </p>
                            </div>

                            <div className="col-lg-6 m-2">
                                <img
                                    className="d-block w-100"
                                    src="./1.jpeg"
                                    alt="First slide"
                                    width="500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
