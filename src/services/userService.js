import axios from 'axios';

export const getUserDetailsService = async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users/1');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};
