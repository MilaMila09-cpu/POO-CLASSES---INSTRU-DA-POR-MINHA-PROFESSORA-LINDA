// Classe Base: Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirDados() {
        return `Nome: ${this.nome}, Salário: R$ ${this.salario}`;
    }
}

// Subclasse: Gerente
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario); // Chama o construtor da classe base
        this.departamento = departamento;
    }

    // Sobrescreve o método da classe base
    exibirDados() {
        return `Nome: ${this.nome}, Salário: R$ ${this.salario}, Departamento: ${this.departamento}`;
    }
}

// Testes

// Instância de Funcionario
const funcionario = new Funcionario("Cyndy", 12000);
console.log(funcionario.exibirDados()); 
// Saída: Nome: João, Salário: R$ 3000

// Instância de Gerente
const gerente = new Gerente("Mario", 50, "Penitenciário");
console.log(gerente.exibirDados()); 
// Saída: Nome: Maria, Salário: R$ 5000, Departamento: Vendas
