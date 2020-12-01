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
                console.log(response.json());
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
    return serverService.getData('/user');
}
    
function updateProfile(formData) {
   return serverService.sendFormData('/user', 'PUT', formData);
}
    
function updatePassword(oldPassword, newPassword) {
    console.log('update password ');  
}