class Desenvolvedor {
    constructor (nomeDev, idDesenvolvedor, idade, contato, plataforma) {
        this.nomeDev = nomeDev;
        this.idDesenvolvedor = idDesenvolvedor;
        this.idade = idade;
        this.contato = contato;
        this.plataforma = plataforma;
    }
    criarMissoes () {
        console.log(`Missão criada pelo ${this.nomeDev} com successo.`);
    }
    atualizarSistema () {
        console.log(`Sistema atualizado pelo ${this.nomeDev}.`);
    }
}