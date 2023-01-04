import React from "react";
import { activity } from "../../helpers/api";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import NoNotifications from "../../components/NoNotifications";

function Activity() {
    const [notifications, setNotifications] = useState();
    const [loading, setLoading] = useState(true);
    const fetchNotifications = async () => {
        try {
            const res = await activity({
                user_id: JSON.parse(localStorage.getItem("user")).id,
            });
            console.log(res.data.notifications);
            setLoading(false);
            setNotifications(res.data.notifications);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchNotifications();
    }, []);
    return (
        <div>
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
                                Users activity - Buy and sell log
                            </span>
                        </nav>
                    </div>
                </div>
            </div>
            {loading ? (
                <Loading />
            ) : (
                <div className="container-fluid col-md-11 mx-auto">
                    {notifications.length > 0 ? (
                        <table className="table table-striped mx-auto">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Notification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notifications.map((notification) => {
                                    return (
                                        <tr key={notification.id}>
                                            <th scope="row">
                                                {notification.id}
                                            </th>
                                            <td>{notification.title}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <NoNotifications/>
                    )}
                </div>
            )}
        </div>
    );
}

export default Activity;
