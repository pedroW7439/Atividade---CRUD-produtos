"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function adicionarTag(id, novaTag) {
    const indice = database_1.default.findIndex((produto) => produto.id === id);
    const tagsDoProduto = database_1.default[indice].categoria.tags;
    if (tagsDoProduto.some((tag) => tag === novaTag)) {
        return "Produto já possui tag informada";
    }
    tagsDoProduto.push(novaTag);
    return database_1.default[indice];
}
exports.default = adicionarTag;
