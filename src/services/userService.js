import {serverService} from './serverService.js';

export const userService = {
    login,
    logout,
    getUser,
    registerUser,
    getProfile,
    updateProfile,
    updatePassword
}

function login(login, password) {

    return serverService.sendRequest('/session', 'POST', {login, password})
        .then(response => {
            console.log(response);
            if (!response.ok) {
                console.log('response not ok')
                return response.json();
            } else {
                localStorage.setItem('user', login);
                return null;
            }
        });
}

function logout() {
    serverService.sendRequest('/session', 'DELETE')
        .then(() => localStorage.removeItem('user'));
}

function getUser() {
    return localStorage.getItem('user');
}


function registerUser(data) {
    return serverService.sendRequest('/user', 'POST', data);
}

function getProfile() {
    /*const user = {
        id: 1,
        login:'Yuliya',
        firstName:'Юлия',
        lastName:'Шинкаренко',
        pathToPhoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7M3H7qt0xHKizkXMJSp9b8PeWqv0avJ9iqg&usqp=CAU'
    }
    return user;*/
    return serverService.getData('/user');
}
    
function updateProfile(formData) {
   return serverService.sendFormData('/user', 'PUT', formData);
}
    
function updatePassword(oldPassword, newPassword) {
    console.log('update password ');
    
}