import listaProdutos from "../../database";
import { Tag, Produto } from "../../types";

function adicionarTag(id: string, novaTag: Tag): Produto | string {
    const indice: number = listaProdutos.findIndex((produto) => produto.id === id);
    const tagsDoProduto: Tag[] = listaProdutos[indice].categoria.tags;
    if (tagsDoProduto.some((tag) => tag === novaTag)) {
        return "Produto já possui tag informada";
    }
    tagsDoProduto.push(novaTag);
    return listaProdutos[indice];
}

export default adicionarTag;
