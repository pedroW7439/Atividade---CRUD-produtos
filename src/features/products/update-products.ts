import { Produto } from "../../types";
import listaProdutos from "../../database";

function atualizarProduto({ id, nome, preco, categoria, quantidade, genero }: Produto): string | Produto {
    const indiceProdutoAntigo = listaProdutos.findIndex((produto) => produto.id === id);
    if (indiceProdutoAntigo === -1) {
        return "Produto não encontrado";
    }
    const produtoAtualizado = {
        id,
        nome,
        preco,
        categoria,
        quantidade,
        genero,
    };
    listaProdutos.splice(indiceProdutoAntigo, 1, produtoAtualizado);
    return produtoAtualizado;
}

export default atualizarProduto;
