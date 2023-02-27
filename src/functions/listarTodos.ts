import { listaProdutos } from "../database/produto";

function listarTudo() {
    const estoque = listaProdutos.map((item) => {
        return {
            id: item.id,
            nome: item.nome,
            preco: item.preco,
            quantidade: item.quantidade
        }
    })

    const soma = estoque.reduce((somaEstoque, item) => somaEstoque += (item.preco * item.quantidade), 0)

    console.log(estoque);
    console.log(`O valor total em estoque é de ${soma}`);
}

export {listarTudo}