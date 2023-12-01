import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        user_name: "",
        user_age: "",
        user_username: "",
        user_password:"",
        user_email: ""
    });

    const { user_name, user_age, user_username, user_password, user_email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loaUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/users_list/user/${id}`, user);
        navigate("/");
    };

    const loaUser = async () => {
        const result = await axios.get(`http://localhost:8080/users_list/user/${id}`)
        setUser(result.data);
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text-center m-4'>Edit user</h2>

                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-3'>
                                <label htmlFor='user_name' className='form-label'>Name</label>
                                <input
                                    type={"text"}
                                    className='form-control'
                                    placeholder='Enter your name'
                                    name='user_name'
                                    value={user_name}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='user_age' className='form-label'>Age</label>
                                <input
                                    type={"number"}
                                    className='form-control'
                                    placeholder='Enter your age'
                                    name='user_age'
                                    value={user_age}
                                    onChange={(e) => onInputChange(e)}
                                />
                                </div>
                            <div className='mb-3'>
                                <label htmlFor='user_username' className='form-label'>Username</label>
                                <input
                                    type={"text"}
                                    className='form-control'
                                    placeholder='Enter your username'
                                    name='user_username'
                                    value={user_username}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='user_password' className='form-label'>Password</label>
                                <input
                                    type={"password"}
                                    className='form-control'
                                    placeholder='Enter your password'
                                    name='user_password'
                                    value={user_password}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='user_email' className='form-label'>E-mail</label>
                                <input
                                    type={"email"}
                                    className='form-control'
                                    placeholder='Enter your e-mail address'
                                    name='user_email'
                                    value={user_email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type='submit' className='btn btn-outline-primary'>Submit</button>
                            <Link className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
