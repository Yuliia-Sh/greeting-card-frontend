import {serverService} from './serverService.js';

export const userService = {
    login,
    logout,
    getUser,
    registerUser
}

function login(login, password) {

    return serverService.sendRequest('/session', 'POST', {login, password})
        .then(response => {
            console.log(response);
            if (!response.ok) {
                return response.json();
            } else {
                localStorage.setItem('user', login);
                return null;
            }
        })
        .then(message => {
            if (message) {
                console.log('message=' + message);
                return message;
            }
            localStorage.setItem('user', login);
            return null;
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
    serverService.sendRequest('/user', 'POST', data);
}