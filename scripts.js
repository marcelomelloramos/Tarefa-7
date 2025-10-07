class Parquimetro {
    constructor(valorInserido) {
        this.valorInserido = valorInserido;
        this.troco = 0;
        this.tempo = 0;
    }

    calcularTempo() {
        if (this.valorInserido < 1) {
            return "Valor insuficiente (mínimo R$ 1,00)";
        }

        if (this.valorInserido >= 1 && this.valorInserido < 1.75) {
            this.tempo = 30;
            this.troco = this.valorInserido - 1;
        } else if (this.valorInserido >= 1.75 && this.valorInserido < 3) {
            this.tempo = 60;
            this.troco = this.valorInserido - 1.75;
        } else {
            this.tempo = 120;
            this.troco = this.valorInserido - 3;
        }

        return `Tempo de permanência: ${this.tempo} minutos. Troco: R$ ${this.troco.toFixed(2)}`;
    }
}

// Quando o botão é clicado
document.getElementById("btnCalcular").addEventListener("click", function() {
    const valor = parseFloat(document.getElementById("valor").value);
    const parquimetro = new Parquimetro(valor);
    const resultado = parquimetro.calcularTempo();

    document.getElementById("mensagem").textContent = resultado;
});
