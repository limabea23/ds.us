class Aluno {
    constructor (nomeAluno, idPlayer, idade, online, impostor) {
        this.nomeAluno = nomeAluno;
        this.idPlayer = idPlayer;
        this.idade = idade;
        this.online = online;
        this.impostor = impostor;
    }
    mudarNome(novoNome) {
        this.nomeAluno = novoNome;
        console.log(`Nome alterado para ${this.novoNome}`);
    }
    verPontos() {
        console.log(`Seus pontos são...`) 
    }
    votarImpostor() {
        console.log(`Você votou que impostor é:`)
    }
}