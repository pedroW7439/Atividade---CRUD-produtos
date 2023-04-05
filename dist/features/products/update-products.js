"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function atualizarProduto({ id, nome, preco, categoria, quantidade, genero }) {
    const indiceProdutoAntigo = database_1.default.findIndex((produto) => produto.id === id);
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
    database_1.default.splice(indiceProdutoAntigo, 1, produtoAtualizado);
    return produtoAtualizado;
}
exports.default = atualizarProduto;
