class Missoes {
    constructor (nomeMissao, idMissao, explicacao, pontuacao) {
        this.nomeMissao = nomeMissao;
        this.idMissao = idMissao;
        this.explicacao = explicacao;
        this.pontuacao = pontuacao;
    }
    inicar() {
        console.log(`A missão ${this.nomeMissao} foi iniciada.`);
    }
    finalizar () {
        console.log(`A missão ${this.nomeMissao} foi finalizada.`)
    }
}