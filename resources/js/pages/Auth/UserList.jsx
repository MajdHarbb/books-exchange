import React from "react";
import { allUsers, deleteUser } from "../../helpers/api";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import NoUsers from "../../components/NoUsers";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from "../../components/AlertDialog";

function UserList() {
    const [usersList, setUsersList] = useState();
    const [tempUsers, setTempUsers] = useState();
    const [loading, setLoading] = useState(true);
    const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
    const openDialog = () => setDialogIsOpen(true);
    const closeDialog = () => setDialogIsOpen(false);
    const [text, setText] = useState();
    const [title, setTitle] = useState();
    const fetchUsers = async () => {
        try {
            const res = await allUsers({
                user_id: JSON.parse(localStorage.getItem("user")).id,
            });
            console.log(res.data);
            setLoading(false);
            // setNotifications(res.data.notifications);
            setUsersList(res.data.user);
            setTempUsers(res.data.user);
        } catch (error) {
            console.log(error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const res = await deleteUser({
                id: id,
            });
            console.log(res.data);
            setText("User has been successfully deleted");
            setTitle("Account deleted");
            fetchUsers();
            openDialog();
        } catch (error) {
            console.log(error);
        }
    };
    const search = (e) => {
        setTempUsers(
            usersList.filter(
                (user) =>
                    user.first_name.toLowerCase().includes(e.toLowerCase()) ||
                    user.last_name.toLowerCase().includes(e.toLowerCase()) ||
                    user.city.toLowerCase().includes(e.toLowerCase()) ||
                    user.district.toLowerCase().includes(e.toLowerCase()) ||
                    user.username.toLowerCase().includes(e.toLowerCase()) ||
                    user.email.toLowerCase().includes(e.toLowerCase())
            )
        );
    };
    useEffect(() => {
        fetchUsers();
    }, []);
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
                                Users List - All Users
                            </span>
                        </nav>
                    </div>
                </div>
            </div>

            {loading ? (
                <Loading />
            ) : (
                <div className="container-fluid col-md-11 mx-auto">
                    <main>
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback">
                                <SearchIcon />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => search(e.target.value)}
                                placeholder="Search users here"
                            />
                        </div>
                    </main>
                    {tempUsers.length > 0 ? (
                        <table className="table table-striped mx-auto">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">District</th>
                                    <th scope="col">City</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tempUsers.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td>
                                                {user.first_name}{" "}
                                                {user.last_name}
                                            </td>
                                            <td>{user.phone}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>{user.district}</td>
                                            <td>{user.city}</td>
                                            <td>
                                                <DeleteIcon
                                                    style={{ color: "red" }}
                                                    onClick={() =>
                                                        handleDelete(user.id)
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <NoUsers />
                    )}
                </div>
            )}
        </div>
    );
}

export default UserList;
