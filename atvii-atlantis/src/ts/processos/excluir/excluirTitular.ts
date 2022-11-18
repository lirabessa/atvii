"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../../abstracoes/processo"));
const armazem_1 = __importDefault(require("../../dominio/armazem"));
class ExcluirTitular extends processo_1.default {
    constructor() {
        super();
        this.listaTitular = armazem_1.default.InstanciaUnica.Clientes;
    }
    processar() {
        console.log('Iniciando exclusão de um Titular');
        let numero = this.entrada.receberTexto('Qual número do documento do Titular');
        let indexTitular = this.listaTitular.findIndex(titular => titular.Documentos.find(documento => documento.Numero == numero));
        if (indexTitular) {
            let nome = this.listaTitular[indexTitular].Nome;
            this.listaTitular = this.listaTitular.splice(indexTitular, 1);
            console.log(`O cliente ${nome} foi deletado(a)!`);
        }
        else {
            console.log("Cliente não encontrado");
        }
    }
}
exports.default = ExcluirTitular;
