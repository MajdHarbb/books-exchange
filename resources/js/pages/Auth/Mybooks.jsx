import React from "react";
import { useEffect, useState } from "react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { getMyBooks, deleteBook } from "../../helpers/api";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import AlertDialog from "../../components/AlertDialog";
import NoBooks from "../../components/NoBooks";
import SearchIcon from "@mui/icons-material/Search";

function Mybooks() {
    const [books, setBooks] = useState();
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("Failed to register");
    const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
    const openDialog = () => setDialogIsOpen(true);
    const closeDialog = () => setDialogIsOpen(false);

    const [filteredBooks, setFilteredBooks] = useState();

    const hadnledelete = async (ibookId) => {
        try {
            console.log("deleteing", ibookId);
            const res = await deleteBook({
                id: ibookId,
            });
            console.log(res.data);
            openDialog();
            fetchBooks();
        } catch (error) {
            console.log(error);
        }
    };
    const fetchBooks = async () => {
        try {
            const res = await getMyBooks({
                seller_id: JSON.parse(localStorage.getItem("user")).id,
            });
            console.log(res.data.books);
            setLoading(false);
            setBooks(res.data.books);
            setFilteredBooks(res.data.books);
        } catch (error) {
            console.log(error);
        }
    };
    const search = (e) => {
        setFilteredBooks(
            books.filter((book) =>
                book.title.toLowerCase().includes(e.toLowerCase())
            )
        );
    };
    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <div>
            <AlertDialog
                open={dialogIsOpen}
                onClose={closeDialog}
                text="Book deleted successfully"
                title="Operation succeeded"
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
                                {
                                    JSON.parse(localStorage.getItem("user"))
                                        .first_name
                                }
                                's Books
                            </span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <div className="mx-auto text-center my-3">
                <h2>Books List</h2>
            </div> */}
            <main>
                <div className="form-group mx-5 has-search">
                    <span className="fa fa-search form-control-feedback">
                        <SearchIcon />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => search(e.target.value)}
                        placeholder="Search books here"
                    />
                </div>
            </main>
            {!loading ? (
                <div className="container-fluid">
                    <div className="row d-flex mx-5 justify-content-between">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => {
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
                                                <div className="d-flex justify-content-between">
                                                    <Link
                                                        className="btn btn-primary"
                                                        to={
                                                            `/purchase-book/` +
                                                            book.book_id
                                                        }
                                                    >
                                                        View My Book
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => {
                                                            hadnledelete(
                                                                book.book_id
                                                            );
                                                        }}
                                                        disabled={
                                                            book.status ==
                                                            "purchased"
                                                        }
                                                    >
                                                        {book.status ==
                                                        "purchased"
                                                            ? "Item Sold"
                                                            : "Delete Item"}
                                                    </button>
                                                </div>
                                            ) : book.price == 0 ? (
                                                <Link
                                                    className="btn btn-primary"
                                                    to={
                                                        `/purchase-book/` +
                                                        book.id
                                                    }
                                                >
                                                    Get For Free
                                                </Link>
                                            ) : (
                                                <Link
                                                    className="btn btn-primary"
                                                    to={
                                                        `/purchase-book/` +
                                                        book.id
                                                    }
                                                >
                                                    Buy Book {`$${book.price}`}
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <NoBooks />
                        )}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Mybooks;
