// Classe abstrata Package
class Package {
    constructor(module, token) {
        if (new.target === Package) {
            throw new Error("Classe abstrata 'Package' não pode ser instanciada diretamente.");
        }
        this.module = module;      // Público
        this._token = token;       // "Protegido" por convenção
    }

    // Método "protegido" por convenção
    _useModule() {
        console.log(`Usando módulo ${this.module} com token ${this._token}`);
    }
}

// Subclasse Server
class Server extends Package {
    constructor(module, token) {
        super(module, token);
    }

    iniciarServidor() {
        console.log("Iniciando servidor...");
        this._useModule();
    }
}

// Testes
const servidor = new Server("HTTP", "abc123");
servidor.iniciarServidor(); // Funciona e chama o método _useModule()

// Não é recomendado, mas tecnicamente possível:
servidor._useModule(); // Ainda é acessível, mas deve ser evitado externamente
