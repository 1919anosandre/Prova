import promptSync from 'prompt-sync';
import { Controle } from './controle'; // Ajuste o caminho conforme necessário

const teclado = promptSync(); 
let option = 0; 
const controle = new Controle(); // Muda para "Controle" com C maiúsculo

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
            controle.turbo()
            break; 
        case 9: 
            console.log('Saindo...'); 
            break; 
        default: 
            console.log('Opção inválida! Tente novamente.'); 
            break; 
    } 
}