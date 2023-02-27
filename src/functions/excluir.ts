import { listaProdutos } from "../database/produto";

function excluir(id: string) {
    const indexProduto = listaProdutos.findIndex((item) => item.id === id)

    if(indexProduto === -1){
        console.log('Produto não encontrado');
        return
    }

    const [produtoDeletado] = listaProdutos.splice(indexProduto, 1)

    console.log('Item excluido com sucesso');
    console.log(produtoDeletado);
}

export {excluir}