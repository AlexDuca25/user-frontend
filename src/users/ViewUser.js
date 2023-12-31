import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        age:"",
        username: "",
        email: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/users_list/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>User Detils</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of user id {user.user_id}:
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name: </b>
                                    {user.user_name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Name: </b>
                                    {user.user_age}
                                </li>
                                <li className='list-group-item'>
                                    <b>UserName: </b>
                                    {user.user_username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email: </b>
                                    {user.user_email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
