"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTag = void 0;
const produto_1 = require("../database/produto");
function addTag(id, tags) {
    const index = produto_1.listaProdutos.findIndex((item) => item.id === id);
    if (index === -1) {
        console.log('Produto não encontrado');
        return;
    }
    const { categoria } = produto_1.listaProdutos[index];
    tags.forEach((item) => {
        if (categoria.tag.includes(item)) {
            console.log(`Tag ${item} já cadastrada`);
        }
        else {
            categoria.tag.push(item);
        }
    });
}
exports.addTag = addTag;
