import { listaProdutos } from "../database/produto";
import { Tag } from "../types";

function addTag  (id: string, tags: Tag[]) {
    const index = listaProdutos.findIndex((item) => item.id === id)

    if(index === -1) {
        console.log('Produto não encontrado');
        return
    }

    const {categoria} = listaProdutos[index]

    tags.forEach((item) => {
        if(categoria.tag.includes(item)) {
            console.log(`Tag ${item} já cadastrada`);
        } else {
            categoria.tag.push(item)
        }
    })
}

export {addTag}