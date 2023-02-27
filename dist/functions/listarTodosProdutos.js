"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarTodosProdutos = void 0;
const produto_1 = require("../database/produto");
function listarTodosProdutos(categoriaNome) {
    const novaLista = produto_1.listaProdutos.filter((item) => item.categoria.nome.toUpperCase() === categoriaNome.toUpperCase());
    const mostrarNovaLista = novaLista.map(({ nome, quantidade }) => {
        return {
            nome,
            quantidade
        };
    });
    console.log(mostrarNovaLista);
}
exports.listarTodosProdutos = listarTodosProdutos;
