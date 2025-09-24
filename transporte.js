// Classe abstrata Transporte
class Transporte {
    constructor() {
        if (new.target === Transporte) {
            throw new Error("Classe abstrata 'Transporte' não pode ser instanciada diretamente.");
        }
    }

    mover() {
        throw new Error("Método abstrato 'mover()' deve ser implementado.");
    }
}

// Subclasse Carro
class Carro extends Transporte {
    mover() {
        console.log("O carro está se movendo pelas ruas.");
    }
}

// Subclasse Avião
class Aviao extends Transporte {
    mover() {
        console.log("O avião está voando pelos céus.");
    }
}

// Testes
const carro = new Carro();
carro.mover(); // O carro está se movendo pelas ruas.

const aviao = new Aviao();
aviao.mover(); // O avião está voando pelos céus.

// const transporte = new Transporte(); // Erro: não pode instanciar classe abstrata
