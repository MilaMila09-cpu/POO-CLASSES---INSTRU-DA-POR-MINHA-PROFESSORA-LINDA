// Classe base: Message
class Message {
    constructor() {
        if (new.target === Message) {
            throw new Error("A classe 'Message' é abstrata e não pode ser instanciada diretamente.");
        }
    }

    // Método "protegido" por convenção
    _send(message) {
        throw new Error("O método '_send' deve ser sobrescrito pela subclasse.");
    }

    // Método público que pode ser chamado pelas subclasses
    send(message) {
        this._send(message); // chama o método protegido sobrescrito
    }
}

// Subclasse: TextMessage
class TextMessage extends Message {
    _send(message) {
        console.log(`Enviando mensagem de texto: "${message}"`);
    }
}

// Subclasse: NotificationMessage
class NotificationMessage extends Message {
    _send(message) {
        console.log(`Enviando notificação: "${message}"`);
    }
}

// === Testes ===

// const msg = new Message(); // ERRO: Classe abstrata não pode ser instanciada

const mensagemTexto = new TextMessage();
mensagemTexto.send("Olá, tudo bem?"); 
// Saída: Enviando mensagem de texto: "Olá, tudo bem?"

const mensagemNotificacao = new NotificationMessage();
mensagemNotificacao.send("Você tem um nova mensagem, venha conferir!");
// Saída: Enviando notificação: "Você tem uma nova atualização!"

// mensagemTexto._send("Teste"); // Não recomendado: método "protegido"
