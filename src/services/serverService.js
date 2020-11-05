import config from './config.js';

export const serverService = {
    sendRequest,
    getData
}

async function sendRequest(url, methodRequest, data = {}) {
    console.log('sendRequest ' + config.apiUrl + url + ' method: ' + methodRequest);
    try {
        const response = await fetch(config.apiUrl + url, {
            method: methodRequest,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok)
            console.log('Успех:' + url + ' method: ' + methodRequest);
        return response;
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}


async function getData(url) {
    console.log('getData ' + config.apiUrl + url);
    try {
        const response = await fetch(config.apiUrl + url);
        const jsonData = await response.json();
        console.log('Успех:', JSON.stringify(jsonData));
        return jsonData;
    } catch (error) {
        console.error('Ошибка:', error);
        throw error;
    }
}