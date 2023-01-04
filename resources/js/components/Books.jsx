import React from "react";
import { getBooks } from "../helpers/api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import AlertDialog from "./AlertDialog";
import SearchIcon from "@mui/icons-material/Search";
function Books() {
    const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
    const openDialog = () => setDialogIsOpen(true);
    const closeDialog = () => setDialogIsOpen(false);
    const [text, setText] = useState();
    const [title, setTitle] = useState();

    const [books, setBooks] = useState();
    const [filteredBooks, setFilteredBooks] = useState();
    const [loading, setLoading] = useState(true);
    const fetchBooks = async () => {
        try {
            const res = await getBooks();
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
            {/* <div className="mx-auto text-center my-3">
                <h2>Books List</h2>
            </div> */}
            {!loading ? (
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
                                    Books
                                </span>
                            </nav>
                        </div>
                    </div>
                    <AlertDialog
                        open={dialogIsOpen}
                        onClose={closeDialog}
                        text="dialog test"
                        title=""
                    />
                    {/* search */}
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

                    <div
                        className="row d-flex mx-5"
                        style={{
                            justifyContent: "flex-start",
                            columnGap: "1.4rem",
                        }}
                    >
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
                                            {localStorage.getItem("user") !=
                                                null &&
                                            JSON.parse(
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
                                            ) : localStorage.getItem("user") !=
                                            null ? (
                                                <Link
                                                    className="btn btn-primary"
                                                    onClick={() => console.log("hey")}
                                                    to={
                                                        `/purchase-book/` +
                                                        book.book_id
                                                    }
                                                >
                                                    Buy Book {`$${book.price}`}
                                                </Link>
                                            ) : 
                                                <Link
                                                    className="btn btn-primary"
                                                    onClick={() => localStorage.setItem("book_id", book.book_id)}
                                                    to={
                                                        `/login`
                                                    }
                                                >
                                                    Login to buy {`$${book.price}`}
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                                <div className="col-lg-12">
                                    <nav className="breadcrumb bg-light" style={{minHeight: "200px"}}>
                                        <div className="mx-auto my-auto">
                                            <h3>Sorry, no books available</h3>
                                        </div>
                                    </nav>
                                </div>
                        )}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Books;
