// authReducer.js

const initialState = {
    token: null,
    username: null,
    userDetails: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.username,
            };
        case 'SET_USER_DETAILS':
            return {
                ...state,
                userDetails: action.payload,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer; // No need for default export here
