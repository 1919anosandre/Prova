import promptSync from 'prompt-sync';

export class Controle {
    private _multa: number = 0;
    private _turbo: boolean = false; // Add a turbo flag

    constructor(
        private _velocidadeAtual: number = 0, // Inicializa com 0
        private _velocidadePermitida: number = 0 // Inicializa com 0
    ) { }

    public get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    public set velocidadeAtual(velocidadeAtual: number) {
        this._velocidadeAtual = velocidadeAtual;
    }

    public get velocidadePermitida(): number {
        return this._velocidadePermitida;
    }

    public set velocidadePermitida(velocidadePermitida: number) {
        this._velocidadePermitida = velocidadePermitida;
    }

    public verificarVelocidade(): string {
        if (this._velocidadeAtual > this._velocidadePermitida) {
            this.calcularMulta();
            return `excesso de velocidade! 🚨 Multa: R$ ${this._multa.toFixed(2)};;`
        }
        return "Velocidade dentro do limite.";
    }

    private calcularMulta(): void {
        const excesso = this._velocidadeAtual - this._velocidadePermitida;
        this._multa = excesso * 10; // Exemplo: R$ 10 por km/h acima do limite
    }

    public acelerar(incremento: number): void {
        if (this._turbo) {
            incremento *= 2; // If turbo is enabled, double the acceleration
        }
        this._velocidadeAtual += incremento;
    }

    public turbo(): void {
        this._turbo = true;
        console.log("Turbo ativado! 🚀");
    }

    public desativarTurbo(): void {
        this._turbo = false;
        console.log("Turbo desativado.");
    }

    public status(): string {
        return (`Velocidade Atual: ${this._velocidadeAtual.toFixed(2)} km/h\n` +
                `Velocidade Permitida: ${this._velocidadePermitida.toFixed(2)} km/h\n` +
                `Multa: R$ ${this._multa.toFixed(2)};\n` +
                `Turbo: ${this._turbo ? "Ativado" : "Desativado"}`);
    }
}