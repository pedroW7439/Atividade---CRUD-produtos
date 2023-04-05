"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function listarPorTag(filtroTag) {
    const listaFiltrada = database_1.default.filter((produto) => produto.categoria.tags.some((tag) => tag === filtroTag));
    let quantidadeTotal = 0;
    listaFiltrada.forEach((produto) => (quantidadeTotal += produto.quantidade));
    listaFiltrada.forEach((produto) => console.log({
        nome: produto.nome,
        quantidade: produto.quantidade,
    }));
    console.log(`A quantidade total de produtos com esta tag é de ${quantidadeTotal}`);
}
exports.default = listarPorTag;
