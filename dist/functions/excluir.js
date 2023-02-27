"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluir = void 0;
const produto_1 = require("../database/produto");
function excluir(id) {
    const indexProduto = produto_1.listaProdutos.findIndex((item) => item.id === id);
    if (indexProduto === -1) {
        console.log('Produto não encontrado');
        return;
    }
    const [produtoDeletado] = produto_1.listaProdutos.splice(indexProduto, 1);
    console.log('Item excluido com sucesso');
    console.log(produtoDeletado);
}
exports.excluir = excluir;
