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
                        src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/d7519-library-in-chennai.jpg?fit=1000%2C618&ssl=1"
                        alt="First slide"
                    />
                    <div className="carousel-custom carousel-caption">
                        <h1 className="with-stroke">Find your books fast and easy</h1>
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
                        src="https://hips.hearstapps.com/hmg-prod/images/minalima-wizarding-books-wallpaper-detail-1-1569411118.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-custom carousel-caption">
                        <h1 className="with-stroke">Sell and buy books</h1>
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
                        src="https://static01.nyt.com/images/2017/05/11/t-magazine/bookstore-slide-2MCD/bookstore-slide-2MCD-superJumbo.jpg"
                        alt="First slide"
                    />
                    <div className="carousel-custom carousel-caption">
                        <h1 className="with-stroke">Find Free Books</h1>
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
