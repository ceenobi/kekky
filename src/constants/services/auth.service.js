import axios from 'axios';
const API_URL = 'https://kiekky.com/endpoints/public/api';

const login = async (username, password) => {
  const response = await axios.post(API_URL + '/v2/login', {
    username,
    password,
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    grant_type: process.env.REACT_APP_GRANT_TYPE,
  });
  if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = { login, logout };

export default authService;
