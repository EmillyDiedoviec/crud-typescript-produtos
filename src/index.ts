import {Tag, Produto, Categoria, Genero} from './types'
import {v4} from 'uuid'
import { listaProdutos } from './database/produto'
import {addTag, atualizarProduto, excluir, listagemProdutosPreco, listagemProdutosTag, listarTodosProdutos, listarTudo, novoProduto} from './functions'

novoProduto({
    id: '1',
    nome: 'Camisa da Growdev',
    categoria: {
        nome: 'Vestuário',
        tag: ['ADULTO', 'PROMOÇÃO', 'LIQUIDAÇÃO']
    },
    genero: 'F',
    preco: 100,
    quantidade: 1
})


novoProduto({
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

novoProduto({
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

console.log(listaProdutos);
