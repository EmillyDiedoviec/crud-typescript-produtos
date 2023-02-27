import { listaProdutos } from "../database/produto";

function listarTodosProdutos(categoriaNome: string) {
    const novaLista = listaProdutos.filter((item) => item.categoria.nome.toUpperCase() === categoriaNome.toUpperCase())

    const mostrarNovaLista = novaLista.map(({nome, quantidade}) => {
        return{
            nome,
            quantidade
        }
    })

    console.log(mostrarNovaLista);
}

export {listarTodosProdutos}