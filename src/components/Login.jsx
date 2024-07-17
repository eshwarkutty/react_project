import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'; 
import { loginSuccess } from '../actions/authActions';
import { loginService, registerService } from '../services/authService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginService({ email: username, password });
            if (response.token) {
                dispatch(loginSuccess(response.token, username));
                toast.success('Login Successful');
                navigate('/dashboard');
            } else {
                toast.error('Login Failed');
            }
        } catch (error) {
            toast.error('Login Failed');
        }
    };

    const handleRegister = async () => {
        try {
            const response = await registerService({ email: username, password });
            if (response.id) {
                toast.success('Registration Successful');
                const loginResponse = await loginService({ email: username, password });
                if (loginResponse.token) {
                    dispatch(loginSuccess(loginResponse.token, username));
                    navigate('/dashboard');
                }
            } else {
                toast.error('Registration Failed');
            }
        } catch (error) {
            toast.error('Registration Failed');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
            <div className="register-link">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
