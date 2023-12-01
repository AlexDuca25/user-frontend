import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users_list/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/users_list/deleteUser/${id}`)
        loadUsers()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Password</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.user_name}</td>
                                    <td>{user.user_age}</td>
                                    <td>{user.user_username}</td>
                                    <td>{user.user_password}</td>
                                    <td>{user.user_email}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2"
                                        to={`viewuser/${user.user_id}`}
                                        >View</Link>
                                        <Link className="btn btn-outline-primary mx-2"
                                            to={`/edituser/${user.user_id}`}
                                        >Edit</Link>
                                        <button className="btn btn-danger mx-2"
                                            onClick={() => deleteUser(user.user_id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
