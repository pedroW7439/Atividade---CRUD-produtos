import listaProdutos from "../../database";
import { Produto } from "../../types";

function apagaProduto(id: string): string | Produto[] {
    const indice = listaProdutos.findIndex((produto) => produto.id === id);
    if (indice === -1) {
        return "Produto não encontrado";
    }
    listaProdutos.splice(indice, 1);
    return listaProdutos;
}

export default apagaProduto;
