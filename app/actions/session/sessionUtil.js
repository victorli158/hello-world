import axios from 'axios';

export const signUp = (user) => (
  axios.post('/signup', user)
)

export const signOut = () => (
  axios.delete('/session')
)

export const signIn = (user) => (
  axios.post('/session')
)
