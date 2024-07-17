import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerService } from '../services/authService';
import './style.css'; 

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerService({ email: username, password });
            if (response.id) {
                toast.success('Registration Successful');

                navigate('/login');
            } else {
                toast.error('Registration Failed');
            }
        } catch (error) {
            toast.error('Registration Failed');
        }
    };

    return (
        <div className="login-container">
            <h2>Register</h2>
             <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
