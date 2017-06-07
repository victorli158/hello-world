import * as APIUtil from './sessionUtil';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = () => ({
  type: REMOVE_USER
});

export const signIn = (user) => (dispatch) => (
  APIUtil.signIn(user)
    .then((current_user) => dispatch(receiveUser(current_user)))
)

export const signOut = () => (dispatch) => (
  APIUtil.signOut()
    .then(() => dispatch(removeUser))
)

export const signUp = (user) => (dispatch) => (
  APIUtil.signUp(user)
    .then((current_user) => dispatch(receiveUser(current_user)))
)
