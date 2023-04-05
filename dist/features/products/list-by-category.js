"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function listarPorCategoria(categoria) {
    const listaFiltrada = database_1.default.filter((produto) => produto.categoria.nome === categoria);
    return listaFiltrada.forEach((produto) => console.log({
        nome: produto.nome,
        quantidade: produto.quantidade,
    }));
}
exports.default = listarPorCategoria;
