import {serverService} from "./serverService";

export const blockService = {
    deleteBlock,
    createBlock
}

function deleteBlock(id) {
    return serverService.sendRequest('/congratulation/' + id, 'DELETE');
}

function createBlock(blockData) {
    return serverService.sendRequest('/congratulation', 'POST', blockData);
}