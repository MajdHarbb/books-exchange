import React from "react";
import { useEffect, useState } from "react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { getMyBooks } from "../../helpers/api";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

function Mybooks() {
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);
    const fetchBooks = async () => {
        try {
            const res = await getMyBooks({
                seller_id: JSON.parse(localStorage.getItem("user")).id,
            });
            console.log(res.data.books);
            setLoading(false);
            setBooks(res.data.books);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <div>
            <div className="mx-auto text-center my-3">
                <h2>Books List</h2>
            </div>
            {!loading ? (
                <div className="container-fluid">
                    <div className="row d-flex mx-5 mt-5 justify-content-between">
                        {books.map((book) => {
                            return (
                                <div
                                    key={book.book_id}
                                    className="card mt-3"
                                    style={{ width: "18rem" }}
                                >
                                    <img
                                        className="book-image card-img-top"
                                        src={`./assets/books/${book.picture}`}
                                        alt="Book image cap"
                                    />
                                    <div className="card-body">
                                        <span>
                                            <h5 className="card-title">
                                                {book.title}
                                                <span className="text-secondary">
                                                    - by {book.author}
                                                </span>
                                            </h5>
                                        </span>
                                        <p className="card-text text-capitalize text-secondary font-italic text-sm">
                                            <PersonPinCircleIcon />
                                            {`${book.district}, ${book.city}`}
                                        </p>
                                        <p className="card-text text-capitalize text-secondary font-italic text-sm">
                                            <PhoneIphoneIcon />
                                            {`${book.phone}`}
                                        </p>
                                        <p className="card-text text-capitalize text-secondary font-italic text-sm">
                                            <InfoIcon />
                                            {`${book.category}, School of ${book.school} - ${book.education_year}`}
                                        </p>
                                        {book.status == null ? (
                                            <p className="card-text text-capitalize text-secondary font-italic text-sm">
                                                Not sold yet
                                                <CloseIcon />
                                            </p>
                                        ) : (
                                            <p className="card-text text-capitalize text-secondary font-italic text-sm">
                                                Sold
                                                <CheckIcon />
                                            </p>
                                        )}
                                        {JSON.parse(
                                            localStorage.getItem("user")
                                        ).id == book.seller_id ? (
                                            <Link
                                                className="btn btn-primary"
                                                to={
                                                    `/purchase-book/` +
                                                    book.book_id
                                                }
                                            >
                                                View My Book
                                            </Link>
                                        ) : (
                                            <Link
                                                className="btn btn-primary"
                                                to={
                                                    `/purchase-book/` +
                                                    book.book_id
                                                }
                                            >
                                                Buy Book {`$${book.price}`}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Mybooks;
