import { listaProdutos } from "../database/produto";
import { Tag } from "../types";

function listagemProdutosTag(tagNome: Tag) {
    const novaLista = listaProdutos.filter((item) => {
        const existe = item.categoria.tag.some((tag) => tag === tagNome)
        return existe
    })

    const somaTotal = novaLista.reduce((memo, item) => memo += (item.preco * item.quantidade), 0)

    console.log(novaLista.map(({nome, quantidade}) => ({nome, quantidade})));
    console.log(somaTotal);
}

export {listagemProdutosTag}