class Desenvolvedor {
    constructor (nomeDev, idDesenvolvedor, idade, contato, plataforma) {
        this.nomeDev = nomeDev;
        this.idDesenvolvedor = idDesenvolvedor;
        this.idade = idade;
        this.contato = contato;
        this.plataforma = plataforma;
    }
}

class Aluno {
    constructor (nomeAluno, idPlayer, idade, online, impostor) {
        this.nomeAluno = nomeAluno;
        this.idPlayer = idPlayer;
        this.idade = idade;
        this.online = online;
        this.impostor = impostor;
    }
}

class Missoes {
    constructor (nomeMissao, idMissao, explicacao, pontuacao) {
        this.nomeMissao = nomeMissao;
        this.idMissao = idMissao;
        this.explicacao = explicacao;
        this.pontuacao = pontuacao;
    }
}

class Sala {
    constructor (nomeSala, idSala,capacidadeMax) {
        this.nomeSala = nomeSala;
        this.idSala = idSala;
        this.capacidadeMax = capacidadeMax;
    }
}