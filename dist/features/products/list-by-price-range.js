"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function listarPorFaixaDePreco(valor1, valor2) {
    const listaPorPreco = database_1.default.filter((produto) => produto.preco >= valor1 && produto.preco <= valor2);
    return listaPorPreco.forEach((produto) => console.log({
        nome: produto.nome,
        preco: produto.preco,
    }));
}
exports.default = listarPorFaixaDePreco;
