import React from "react";
import { useState, useEffect } from "react";
import { getSingleBook, buyBook } from "../../helpers/api";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";

function PurchaseBook() {
    const [book, setBook] = useState();
    const [loading, setLoading] = useState(true);
    const [purchasedCompleted, setPurchasedCompleted] = useState(false);
    let { bookId } = useParams();
    const fetchBooks = async () => {
        try {
            const res = await getSingleBook({
                book_id: bookId,
            });
            console.log(res.data.book);
            setLoading(false);
            setBook(res.data.book[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const purchase = async () => {
        try {
            const res = await buyBook({
                book_id: bookId,
                seller_id: book.id,
                buyer_id: JSON.parse(localStorage.getItem("user")).id,
            });
            console.log(res.data);
            // fetchBooks();
            setPurchasedCompleted(true);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        console.log(bookId);
        window.localStorage.removeItem("book_id");
        fetchBooks();
    }, []);
    if (purchasedCompleted) {
        return <Navigate replace to="/purchased" />;
    }
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="container-fluid pb-5">
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
                                    Purchase Book
                                </span>
                            </nav>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="mx-auto">
                            <h2 className="mx-auto">Purchase Book</h2>
                        </div>
                    </div> */}
                    <div className="row px-xl-5 mt-2">
                        <div className="col-lg-5 mb-30">
                            <div>
                                <img
                                    className="book-image w-100"
                                    height="300"
                                    src={`/assets/books/${book.picture}`}
                                    alt="Image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 h-auto mb-30">
                            <div className="h-100 p-30">
                                <h3 className="text-capitalize">
                                    {book.title}
                                    <span className="text-secondary">
                                        - by {book.author}
                                    </span>
                                </h3>
                                <h3 className="font-weight-semi-bold mb-4">
                                    ${book.price}
                                </h3>
                                <p className="card-text text-capitalize text-secondary font-italic text-sm mb-1">
                                    <PersonIcon />
                                    {`${book.first_name} ${book.last_name}`}
                                </p>
                                <p className="card-text text-capitalize text-secondary font-italic text-sm mb-1">
                                    <PersonPinCircleIcon />
                                    {`${book.district}, ${book.city}`}
                                </p>
                                <p className="card-text text-capitalize text-secondary font-italic text-sm mb-1">
                                    <PhoneIphoneIcon />
                                    {`${book.phone}`}
                                </p>
                                <p className="card-text text-capitalize text-secondary font-italic text-sm mb-1">
                                    <InfoIcon />
                                    {`${book.category}, School of ${book.school} - ${book.education_year}`}
                                </p>
                                {/* <p className="card-text text-capitalize text-secondary font-italic text-sm mb-1">
                                    <InfoIcon />
                                    {`${book.class}`}
                                </p> */}
                                {JSON.parse(localStorage.getItem("user")).id !=
                                book.seller_id ? (
                                    book.status == null ? (
                                        <div className="d-flex align-items-center mb-4 pt-2">
                                            <button
                                                className="btn btn-primary px-3"
                                                onClick={purchase}
                                            >
                                                <i className="fa fa-shopping-cart mr-1" />
                                                Purchase Book
                                            </button>
                                        </div>
                                    ) : 
                                    <div className="d-flex align-items-center mb-4 pt-2">
                                            <button
                                                className="btn btn-primary px-3"
                                                disabled={true}
                                            >
                                                <i className="fa fa-shopping-cart mr-1" />
                                                Already Owned
                                            </button>
                                        </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PurchaseBook;
