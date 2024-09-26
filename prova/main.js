"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const controle_1 = require("./controle"); 
const teclado = (0, prompt_sync_1.default)();
let option = 0;
const controle = new controle_1.Controle(); 
while (option !== 9) {
    console.log(`============== Menu =============`);
    console.log(' 1. Definir velocidade permitida   ');
    console.log(' 2.turbo           ');
    console.log(' 9. Sair                          ');
    console.log('==============================');
    option = +teclado('Escolha uma ação: ');
    switch (option) {
        case 1:
            let valor = +teclado('Digite a velocidade permitida: ');
            controle.velocidadePermitida = valor;
            console.log(`Velocidade permitida definida para: ${controle.velocidadePermitida.toFixed(2)} km/h`);
            break;
        case 2:
            controle.turbo();
            break;
        case 9:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
            break;
    }
}
