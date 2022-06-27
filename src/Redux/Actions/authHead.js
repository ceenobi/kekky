import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../constants/actionTypes';
import authService from '../../constants/services/authService';

export const registerUser =
  (full_name, username, email, phone, country, password) => dispatch => {
    return authService
      .registerUser(full_name, username, email, phone, country, password)
      .then(
        response => {
          dispatch({
            type: REGISTER_SUCCESS,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });
          return Promise.resolve();
        },
        error => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          dispatch({
            type: REGISTER_FAIL,
          });
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
          return Promise.reject();
        }
      )
      .catch(error => {
        console.log(error);
      });
  };

export const login = (email, password) => dispatch => {
  return authService
    .login(email, password)
    .then(
      data => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve();
      },
      error => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    )
    .catch(error => {
      console.log(error);
    });
};

export const logout = () => dispatch => {
  authService.logout();
  dispatch({
    type: LOGOUT,
  });
};
