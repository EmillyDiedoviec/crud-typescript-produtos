import { listaProdutos } from "../database/produto";

function listagemProdutosPreco(valorMinimo: number, valorMaximo: number) {
    const novaListaPreco = listaProdutos.filter((item) => item.preco >= valorMinimo && item.preco <= valorMaximo).map((item) => {
        return {
            nome: item.nome,
            preco: item.preco
        }
    })
    console.log(novaListaPreco);
}

export {listagemProdutosPreco}