import React from "react";
import { createBook } from "../../helpers/api.js";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Sellbook() {
    const [bookTitle, setbookTitle] = useState("");
    const [authorName, setauthorName] = useState("");
    const [publisher, setPublisher] = useState("");
    const [educationYear, seteducationYear] = useState("First Year");
    const [school, setSchool] = useState("Engineering");
    const [className, setClassName] = useState("");
    const [category, setcategory] = useState("Education");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("Upload Book Image (PNG, JPEG, JPG)");
    const [imageBase, setImageBase] = useState("");
    const [sellingCompleted, setSellingCompleted] = useState(false)

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
            setSellingCompleted(true)
        } catch (error) {
            console.log(error);
        }
    };
    if(sellingCompleted){
        return <Navigate replace to="/my-books" />;
    }
    return (
        <div>
            <form className="row mt-5" onSubmit={handleSubmit}>
                <div className="col-md-6 col-lg-6 col-sm-8 col-xs-8 mx-auto">
                    <div className="mx-auto text-center">
                        <h2>Sell Your Books</h2>
                    </div>
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
                        <div className="form-group col-md-4">
                            <label htmlFor="eduction-year">Education Year</label>
                            <select
                                id="eduction-year"
                                required
                                className="form-control"
                                defaultValue="First Year"
                                onChange={(e) => seteducationYear(e.target.value)}
                            >
                                <option>First Year</option>
                                <option>Second Year</option>
                                <option>Third Year</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="school">School</label>
                            <select
                                id="school"
                                required
                                className="form-control"
                                defaultValue="First Year"
                                onChange={(e) => setSchool(e.target.value)}
                            >
                                <option>Engineering</option>
                                <option>Pharmacy</option>
                                <option>Education</option>
                                <option>Business</option>
                                <option>Arts and Science</option>

                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="class">Class</label>
                            <input
                                type="text"
                                className="form-control"
                                id="class"
                                onChange={(e) => setClassName(e.target.value)}
                                required
                            />
                        </div>
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
                                defaultValue="Education"
                                onChange={(e) => setcategory(e.target.value)}
                            >
                                <option>Education</option>
                                <option>Sci-Fi</option>
                                <option>Beqaa</option>
                                <option>Mount Lebanon</option>
                                <option>Nabatieh</option>
                                <option>North</option>
                                <option>South</option>
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
