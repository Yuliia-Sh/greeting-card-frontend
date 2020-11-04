import {serverService} from "./serverService";

export const cardService = {
    getCards,
    getCard,
    createCard,
    deleteCard,
    finishCard
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