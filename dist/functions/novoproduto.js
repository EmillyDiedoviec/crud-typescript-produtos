"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.novoProduto = void 0;
const produto_1 = require("../database/produto");
function novoProduto(produto) {
    let existe = produto_1.listaProdutos.some((item => item.nome === produto.nome));
    if (existe) {
        console.log('Esse produto já existe');
        return;
    }
    produto_1.listaProdutos.push(produto);
}
exports.novoProduto = novoProduto;
