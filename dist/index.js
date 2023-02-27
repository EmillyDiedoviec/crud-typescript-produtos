"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("./database/produto");
const functions_1 = require("./functions");
(0, functions_1.novoProduto)({
    id: '1',
    nome: 'Camisa da Growdev',
    categoria: {
        nome: 'Vestuário',
        tag: ['ADULTO', 'PROMOÇÃO', 'LIQUIDAÇÃO']
    },
    genero: 'F',
    preco: 100,
    quantidade: 1
});
(0, functions_1.novoProduto)({
    id: '2',
    nome: 'Tenis da Growdev 2',
    categoria: {
        nome: 'Calçados',
        tag: ['LIQUIDAÇÃO'],
    },
    genero: 'F',
    preco: 500,
    quantidade: 2,
});
(0, functions_1.novoProduto)({
    id: '3',
    nome: 'Tenis da Growdev 3',
    categoria: {
        nome: 'Calçados',
        tag: ['ADULTO', 'LIQUIDAÇÃO'],
    },
    genero: 'F',
    preco: 1500,
    quantidade: 2,
});
console.log(produto_1.listaProdutos);
