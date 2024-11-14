class Desenvolvedor {
    constructor (nome, idDesenvolvedor, idade, contato, plataforma) {
        this.nome = nome;
        this.idDesenvolvedor = idDesenvolvedor;
        this.idade = idade;
        this.contato = contato;
        this.plataforma = plataforma;
    }
}

class Aluno {
    constructor (nome, idPlayer, idade, online, impostor) {
        this.nome = nome;
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