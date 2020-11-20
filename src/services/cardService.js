import {serverService} from "./serverService";
import cardUsers from "./testdata/cardUsers.json";

export const cardService = {
    getCards,
    getCard,
    createCard,
    deleteCard,
    finishCard,
    deleteUsers,
    addUser,
    getUsers
}

function getCards(type = 'all') {
    return serverService.getData(`/cards?type=${type}`);
}

function getCard(id) {
    return serverService.getData(`/card/${id}`);
}

function createCard(nameCard) {
    return serverService.sendRequest(`/card`, 'POST', {name: nameCard});
}

function deleteCard(id) {
    return serverService.sendRequest(`/card/${id}`, 'DELETE');
}

function finishCard(id) {
    serverService.sendRequest(`/card/${id}/status`, 'PUT');
}

function deleteUsers(cardId, listUserId) {
    console.log('cardService.deleteUsers ');
    console.log(cardId);
    console.log(listUserId);
    
    let listOfObj = listUserId.map((id) => {let obj={}; obj["id"] = id; return obj;});
    console.log(listOfObj);
    const makeServerRequest = new Promise((resolve, reject) => {
        let responseFromServer = true;
        if (responseFromServer) {
            resolve();
        }
    });
    return makeServerRequest;
   // serverService.sendRequest(`/card/${cardId}/users`, 'DELETE', listOfObj);
}

function addUser(cardId, login) {
    console.log('add user ');
    console.log(cardId);
    console.log(login);
    const makeServerRequest = new Promise((resolve, reject) => {
        let responseFromServer = true;
        if (responseFromServer) {
            resolve();
        }
    });

    return makeServerRequest;
    //return serverService.sendRequest(`/card/${cardId}/user`, 'POST', {login: login});
}
    
function getUsers(cardId) {
   console.log('getUsers ' + cardId);
   const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
    if (responseFromServer) {
        resolve(cardUsers);
    }
   });
   return makeServerRequest;
    //return serverService.getData(`/card/${cardId}/users`);
}
