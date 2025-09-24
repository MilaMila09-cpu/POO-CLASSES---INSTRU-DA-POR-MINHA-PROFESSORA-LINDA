class Administrador {
    nome;
    #senha;

    constructor(nome, senhaInicial) {
        this.nome = nome;
        this.#senha = senhaInicial;
    }

    // Método privado
    #alterarSenha(novaSenha) {
        this.#senha = novaSenha;
        console.log("Senha alterada com sucesso.");
    }

    // Método público
    mudarSenha(novaSenha) {
        this.#alterarSenha(novaSenha);
    }
}

// Testes
const admin = new Administrador("João", "1234");

// Acesso direto proibido
// console.log(admin.#senha); // Erro de sintaxe
// admin.#alterarSenha("novaSenha"); // Erro de sintaxe

// Acesso correto
admin.mudarSenha("novaSenha123"); // Senha alterada com sucesso
