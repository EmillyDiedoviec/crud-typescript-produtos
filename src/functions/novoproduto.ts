import {Produto} from "../types"
import { listaProdutos } from "../database/produto"

function novoProduto(produto: Produto) {
    let existe = listaProdutos.some((item => item.nome === produto.nome))

    if(existe) {
        console.log('Esse produto já existe');
        return
    }
    listaProdutos.push(produto)
}

export {novoProduto}