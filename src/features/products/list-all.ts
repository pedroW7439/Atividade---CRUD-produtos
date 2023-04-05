import listaProdutos from "../../database";

function listarTodos() {
    listaProdutos.forEach((produto) =>
        console.log({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: produto.quantidade,
            valorEstoque: produto.preco * produto.quantidade,
        })
    );
}

export default listarTodos;
