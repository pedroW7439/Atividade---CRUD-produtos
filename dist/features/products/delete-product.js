"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
function apagaProduto(id) {
    const indice = database_1.default.findIndex((produto) => produto.id === id);
    if (indice === -1) {
        return "Produto não encontrado";
    }
    database_1.default.splice(indice, 1);
    return database_1.default;
}
exports.default = apagaProduto;
