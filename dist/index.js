"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./features/products");
const teclado = {
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
const monitor = {
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
const mouse = {
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
const produtoAtualizado = {
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
(0, products_1.criarProduto)(teclado);
(0, products_1.criarProduto)(mouse);
(0, products_1.criarProduto)(monitor);
// atualizarProduto(produtoAtualizado);
// adicionarTag("9", "USADOS");
// apagaProduto("10");
// listarPorTag("USADOS");
// listarPorCategoria("Periféricos");
// listarPorFaixaDePreco(10, 400);
// listarTodos();
