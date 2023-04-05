import listaProdutos from "../../database";

function listarPorTag(filtroTag: string) {
    const listaFiltrada = listaProdutos.filter((produto) => produto.categoria.tags.some((tag) => tag === filtroTag));
    let quantidadeTotal: number = 0;
    listaFiltrada.forEach((produto) => (quantidadeTotal += produto.quantidade));
    listaFiltrada.forEach((produto) =>
        console.log({
            nome: produto.nome,
            quantidade: produto.quantidade,
        })
    );
    console.log(`A quantidade total de produtos com esta tag é de ${quantidadeTotal}`);
}

export default listarPorTag;
