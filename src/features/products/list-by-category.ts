import listaProdutos from "../../database";

function listarPorCategoria(categoria: string) {
    const listaFiltrada = listaProdutos.filter((produto) => produto.categoria.nome === categoria);
    return listaFiltrada.forEach((produto) =>
        console.log({
            nome: produto.nome,
            quantidade: produto.quantidade,
        })
    );
}

export default listarPorCategoria;
