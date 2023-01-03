import React from "react";
import Books from "../../components/Books";

function Home() {
    return (
        <div>
            {/* <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-lg-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <span className="breadcrumb-item text-dark" href="#">
                                Home
                            </span>
                            <span className="breadcrumb-item active">
                                Books
                            </span>
                        </nav>
                    </div>
                </div>
            </div> */}

            {/* <h1>Hello {window.localStorage.getItem("first_name")}</h1> */}
            <Books />
        </div>
    );
}

export default Home;
