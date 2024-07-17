export const loginSuccess = (token, username) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token, username },
});

export const setUserDetails = (userDetails) => ({
    type: 'SET_USER_DETAILS',
    payload: userDetails,
});

export const logout = () => ({
    type: 'LOGOUT',
});
