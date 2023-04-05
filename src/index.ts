import { criarProduto, atualizarProduto, apagaProduto, listarTodos, listarPorCategoria, listarPorFaixaDePreco, listarPorTag, adicionarTag } from "./features/products";
import { Produto } from "./types";
import listaProdutos from "./database";

const teclado: Produto = {
    id: "9",
    nome: "Teclado Red Dragon",
    preco: 189.9,
    categoria: {
        nome: "Periféricos",
        tags: ["NOVOS"],
    },
    quantidade: 23,
    genero: "ELETRONICOS",
};

const monitor: Produto = {
    id: "8",
    nome: "Monitor Acer",
    preco: 500.0,
    categoria: {
        nome: "Periféricos",
        tags: ["USADOS"],
    },
    quantidade: 3,
    genero: "GAMER",
};

const mouse: Produto = {
    id: "7",
    nome: "Mouse Logitech",
    preco: 70.0,
    categoria: {
        nome: "Periféricos",
        tags: ["BLACKFRIDAY"],
    },
    quantidade: 40,
    genero: "GAMER",
};

const produtoAtualizado: Produto = {
    id: "7",
    nome: "Mouse Logitech dual",
    preco: 80.0,
    categoria: {
        nome: "Mouse",
        tags: ["USADOS"],
    },
    quantidade: 50,
    genero: "GAMER",
};

criarProduto(teclado);
criarProduto(mouse);
criarProduto(monitor);
// atualizarProduto(produtoAtualizado);
// adicionarTag("9", "USADOS");
// apagaProduto("10");
// listarPorTag("USADOS");
// listarPorCategoria("Periféricos");
// listarPorFaixaDePreco(10, 400);

listarTodos();
