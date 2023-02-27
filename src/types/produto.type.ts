import { Categoria } from "./category.type";
import { Genero } from "./genero.type";

interface Produto {
    id: string;
    nome: string;
    preco: number;
    categoria: Categoria;
    quantidade: number;
    genero: Genero;
}

export {Produto}