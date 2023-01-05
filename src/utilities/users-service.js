import * as usersAPI  from './users-api';

export async function signUp(userData) {
  // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {

  const token = await usersAPI.login(credentials)

  localStorage.setItem("token", token)
  return getUser()
}

export function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;

  // const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds

const payload = JSON.parse(atob(token.split('.')[1]));


// A JWT's expiration is expressed in seconds, not miliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token')
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}


// export function checkToken() {
//   // Just so that you don't forget how to use .then
//   return usersAPI.checkToken()
//     // checkToken returns a string, but let's
//     // make it a Date object for more flexibility
//     .then(dateStr => new Date(dateStr));
// }