import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/register';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Home/>} />
                </Routes>
                <ToastContainer />
            </Router>
        </Provider>
    );
};

export default App;
