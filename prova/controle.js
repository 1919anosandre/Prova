"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controle = void 0;
class Controle {
    constructor(_velocidadeAtual = 0, 
    _velocidadePermitida = 0 
    ) {
        this._velocidadeAtual = _velocidadeAtual;
        this._velocidadePermitida = _velocidadePermitida;
        this._multa = 0;
    }
    get velocidadeAtual() {
        return this._velocidadeAtual;
    }
    set velocidadeAtual(velocidadeAtual) {
        this._velocidadeAtual = velocidadeAtual;
    }
    get velocidadePermitida() {
        return this._velocidadePermitida;
    }
    set velocidadePermitida(velocidadePermitida) {
        this._velocidadePermitida = velocidadePermitida;
    }
    verificarVelocidade() {
        if (this._velocidadeAtual > this._velocidadePermitida) {
            this.calcularMulta();
            return `excesso de velocidade! 🚨 Multa: R$ ${this._multa.toFixed(2)};;`;
        }
        return "Velocidade dentro do limite.";
    }
    calcularMulta() {
        const excesso = this._velocidadeAtual - this._velocidadePermitida;
        this._multa = excesso * 10; 
    }
    acelerar(incremento) {
        this._velocidadeAtual += incremento;
    }
    status() {
        return (`Velocidade Atual: ${this._velocidadeAtual.toFixed(2)} km/h\n` +
            `Velocidade Permitida: ${this._velocidadePermitida.toFixed(2)} km/h\n` +
            `Multa: R$ ${this._multa.toFixed(2)};`);
    }
}
exports.Controle = Controle;
