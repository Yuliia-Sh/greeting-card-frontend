import {serverService} from "./serverService";

export const blockService = {
    deleteBlock,
    createBlock
}

function deleteBlock(id) {
    return serverService.sendRequest('/congratulation/' + id, 'DELETE');
}

function createBlock(blockData) {
    let formData = new FormData();
    for (let i = 0; i < blockData.imageFilesToAdd.length; i++) {
        formData.append("files_image", blockData.imageFilesToAdd[i], blockData.imageFilesToAdd[i].filename);
    }
    for (let i = 0; i < blockData.audioFilesToAdd.length; i++) {
        formData.append("files_audio", blockData.audioFilesToAdd[i], blockData.audioFilesToAdd[i].filename);
    }
    const block = { card_id: blockData.card_id,
                message: blockData.message,
                youtube: blockData.youtube};
    formData.append("json", JSON.stringify(block));            
    return serverService.sendFormData('/congratulation', 'POST', formData);
}
