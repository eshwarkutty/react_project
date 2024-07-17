import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../actions/authActions';
import { getUserDetailsService } from '../services/userService';
import './style.css'; 

const Dashboard = () => {
    const { username, userDetails } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userDetails) {
            getUserDetailsService().then((data) => {
                dispatch(setUserDetails(data));
            }).catch(error => {
                console.error('Error fetching user details:', error);
            });
        }
    }, [userDetails, dispatch]);

    return (
        <div className="login-container">
            <h2>Profile</h2>
            <p>Username: {username}</p>
            {userDetails && (
                <div>
                    <p>Email: {userDetails.email}</p>
                    <p>First Name: {userDetails.first_name}</p>
                    <p>Last Name: {userDetails.last_name}</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
