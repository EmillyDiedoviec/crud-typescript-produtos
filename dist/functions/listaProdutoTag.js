"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listagemProdutosTag = void 0;
const produto_1 = require("../database/produto");
function listagemProdutosTag(tagNome) {
    const novaLista = produto_1.listaProdutos.filter((item) => {
        const existe = item.categoria.tag.some((tag) => tag === tagNome);
        return existe;
    });
    const somaTotal = novaLista.reduce((memo, item) => memo += (item.preco * item.quantidade), 0);
    console.log(novaLista.map(({ nome, quantidade }) => ({ nome, quantidade })));
    console.log(somaTotal);
}
exports.listagemProdutosTag = listagemProdutosTag;
