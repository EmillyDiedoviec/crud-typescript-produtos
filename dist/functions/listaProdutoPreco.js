"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listagemProdutosPreco = void 0;
const produto_1 = require("../database/produto");
function listagemProdutosPreco(valorMinimo, valorMaximo) {
    const novaListaPreco = produto_1.listaProdutos.filter((item) => item.preco >= valorMinimo && item.preco <= valorMaximo).map((item) => {
        return {
            nome: item.nome,
            preco: item.preco
        };
    });
    console.log(novaListaPreco);
}
exports.listagemProdutosPreco = listagemProdutosPreco;
