import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                />
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                />
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        className="d-block w-100"
                        src="./4.jpeg"                        alt="First slide"
                    />
                    <div className="carousel-custom carousel-caption">
                        <h1 className="with-stroke">
                            Find your books fast and easy
                        </h1>
                        <Link
                            role="button"
                            className="btn btn-primary active mx-2"
                            to="/register"
                        >
                            Create Your Account
                        </Link>
                        <Link
                            role="button"
                            className="btn btn-primary active mx-2"
                            to="/login"
                        >
                            Login Now
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="http://hips.hearstapps.com/hmg-prod/images/minalima-wizarding-books-wallpaper-detail-1-1569411118.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-custom carousel-caption">
                        <h1 className="with-stroke">Sell and buy used books</h1>
                        <Link
                            role="button"
                            className="btn btn-primary active mx-2 mx-2"
                            to="/register"
                        >
                            Create Your Account
                        </Link>
                        <Link
                            role="button"
                            className="btn btn-primary active mx-2"
                            to="/login"
                        >
                            Login Now
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="d-block w-100"
                        src="./3.jpeg"                        alt="First slide"
                    />
                    <div className="carousel-custom carousel-caption">
                        <h1 className="with-stroke">Find Free Used Books</h1>
                        <Link
                            role="button"
                            className="btn btn-primary active mx-2"
                            to="/register"
                        >
                            Create Your Account
                        </Link>
                        <Link
                            role="button"
                            className="btn btn-primary active mx-2"
                            to="/login"
                        >
                            Login Now
                        </Link>
                    </div>
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
