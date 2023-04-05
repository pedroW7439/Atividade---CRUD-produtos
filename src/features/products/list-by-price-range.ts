import listaProdutos from "../../database";

function listarPorFaixaDePreco(valor1: number, valor2: number) {
    const listaPorPreco = listaProdutos.filter((produto) => produto.preco >= valor1 && produto.preco <= valor2);
    return listaPorPreco.forEach((produto) =>
        console.log({
            nome: produto.nome,
            preco: produto.preco,
        })
    );
}

export default listarPorFaixaDePreco;
