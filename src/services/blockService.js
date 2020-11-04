import {serverService} from "./serverService";

export const blockService = {
    deleteBlock,
    createBlock
}

function deleteBlock(id) {
    console.log('delete ' + id);
    return serverService.sendRequest('/congratulation/' + id, 'DELETE');
}

function createBlock(blockData) {
    console.log('createBlock ', blockData);
    return serverService.sendRequest('/congratulation', 'POST', blockData);
}