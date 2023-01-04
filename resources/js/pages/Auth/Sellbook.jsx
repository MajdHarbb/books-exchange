import React from "react";
import { createBook } from "../../helpers/api.js";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import AlertDialog from "../../components/AlertDialog.jsx";
function Sellbook() {
    const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
    const openDialog = () => setDialogIsOpen(true);
    const closeDialog = () => setDialogIsOpen(false);
    const [text, setText] = useState("Your book is ready for sale!");
    const [title, setTitle] = useState("Book posted successfully");

    const [bookTitle, setbookTitle] = useState("");
    const [authorName, setauthorName] = useState("");
    const [publisher, setPublisher] = useState("");
    const [educationYear, seteducationYear] = useState("Grade One");
    const [school, setSchool] = useState("Engineering");
    const [className, setClassName] = useState("class");
    const [category, setcategory] = useState("Mathematics");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("Upload Book Image (PNG, JPEG, JPG)");
    const [imageBase, setImageBase] = useState("");
    const [sellingCompleted, setSellingCompleted] = useState(false);

    const handleImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        console.log(base64);
        setImageBase(base64);
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("image").files[0]);
        oFReader.onload = function (oFREvent) {
            setImage(e.target.value.split("fakepath")[1]);
        };
    };
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleSubmit = async (event) => {
        // Prevent page reload
        event.preventDefault();
        try {
            const res = await createBook({
                seller_id: JSON.parse(localStorage.getItem("user")).id,
                title: bookTitle,
                author: authorName,
                publisher: publisher,
                user_address:
                    JSON.parse(localStorage.getItem("user")).district +
                    ", " +
                    JSON.parse(localStorage.getItem("user")).city,
                image: imageBase,
                price: price,
                educationYear: educationYear,
                category: category,
                school: school,
                class: className,
                status: "",
            });
            console.log(res);
            // setSellingCompleted(true);
            openDialog()
        } catch (error) {
            console.log(error);
        }
    };
    if (sellingCompleted) {
        return <Navigate replace to="/my-books" />;
    }
    return (
        <div>
            <AlertDialog
                open={dialogIsOpen}
                onClose={closeDialog}
                text={text}
                title={title}
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
                                Sell Book
                            </span>
                        </nav>
                    </div>
                </div>
            </div>
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-12 col-lg-11 col-sm-8 col-xs-8 mx-auto">
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="book-name">Book Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="book-title"
                                onChange={(e) => setbookTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="author-name">Author Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author-name"
                                onChange={(e) => setauthorName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="publisher">Pulisher</label>
                            <input
                                type="text"
                                className="form-control"
                                id="publisher"
                                onChange={(e) => setPublisher(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="eduction-year">
                                Education Year
                            </label>
                            <select
                                id="eduction-year"
                                required
                                className="form-control"
                                defaultValue="First Year"
                                onChange={(e) =>
                                    seteducationYear(e.target.value)
                                }
                            >
                                <option>Grade One</option>
                                <option>Grade Two</option>
                                <option>Grade Three</option>
                                <option>Grade Four</option>
                                <option>Grade Five</option>
                                <option>Grade Six</option>
                                <option>Grade Seven</option>
                                <option>Grade Eight</option>
                                <option>Grade Nine</option>
                                <option>Grade Ten</option>
                                <option>Grade Eleven</option>
                                <option>Grade Twelve</option>
                                <option>University First Year</option>
                                <option>University Second Year</option>
                                <option>University Third Year</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="school">School</label>
                            <input
                                type="text"
                                className="form-control"
                                id="school"
                                onChange={(e) => setSchool(e.target.value)}
                                required
                            />
                        </div>
                        {/* <div className="form-group col-md-4">
                            <label htmlFor="class">Class</label>
                            <input
                                type="text"
                                className="form-control"
                                id="class"
                                onChange={(e) => setClassName(e.target.value)}
                                required
                            />
                        </div> */}
                    </div>
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="image"
                            onChange={(e) => handleImage(e)}
                            required
                        />
                        <label className="custom-file-label" htmlFor="image">
                            {image}
                        </label>
                    </div>
                    <div className="form-row mt-2">
                        <div className="form-group col-md-6">
                            <label htmlFor="gategory">Category</label>
                            <select
                                id="gategory"
                                required
                                className="form-control"
                                defaultValue="Mathematics"
                                onChange={(e) => setcategory(e.target.value)}
                            >
                                <option>Mathematics</option>
                                <option>Physics</option>
                                <option>Chemistry</option>
                                <option>Biology</option>
                                <option>History</option>
                                <option>Geography</option>
                                <option>Philosophy</option>
                                <option>Sociology</option>
                                <option>Emonomics</option>
                                <option>Arabic</option>
                                <option>English</option>
                                <option>Computer</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="price">Price in USD</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Post Book for Sell
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Sellbook;
