import axios from 'axios';
const URL = 'http://192.168.139.45:8080';

export const makeNewAccount_API_CALL = async dataBundle => {
  try {
    return await axios.post(`${URL}/signup`, dataBundle);
  } catch (error) {
    console.log('ERROR WHILE REGISTER NEW ACCOUNT => ', error);
  }
};

export const signinAccount_API_CALL = async dataBundle => {
  try {
    return await axios.post(`${URL}/signin`, dataBundle);
  } catch (error) {
    console.log('ERROR WHILE SIGNIN ACCOUNT => ', error);
  }
};