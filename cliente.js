const prompt = require("prompt-sync")();
let nextClienteId = 1;
const clientes = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalido = (idCliente) => {
  return !clientes.some((cliente) => cliente.idCliente === idCliente);
};

function listarCliente() {
  if (clientes.length === 0) {
    console.log("Nenhum cliente cadastrado.");
  } else {
    clientes.forEach((cliente) => {
      console.log(`ID: ${cliente.idCliente} - Nome: ${cliente.nome}`);
    });
  }
}

const modeloCliente = () => {
  let cliente = { idCliente: nextClienteId++ };

  while (true) {
    cliente.nome = prompt("Qual é o nome do Cliente? ").trim();
    if (nomeInvalido(cliente.nome)) {
      console.log("O nome do cliente não pode ser vazio.");
    } else {
      break;
    }
  }

  return cliente;
};

const criarCliente = () => {
  const cliente = modeloCliente();
  clientes.push(cliente);
  console.log("Cliente criado com sucesso.");
};

const atualizarCliente = () => {
  while (true) {
    if (clientes.length === 0) {
      console.log("Lista de clientes está vazia.");
      break;
    }

    listarCliente();

    const idCliente = lerIndice(
      "Qual é o ID do cliente que deseja atualizar? "
    );

    if (idInvalido(idCliente)) {
      console.log("ID inválido.");
    } else {
      const clienteIndex = clientes.findIndex(
        (cliente) => cliente.idCliente === idCliente
      );
      const clienteAtualizado = modeloCliente();
      clienteAtualizado.idCliente = idCliente; // Mantém o mesmo ID
      clientes[clienteIndex] = clienteAtualizado;
      console.log("Cliente atualizado com sucesso.");
      break;
    }
  }
};

const removerCliente = () => {
  while (true) {
    if (clientes.length === 0) {
      console.log("Lista de clientes está vazia.");
      break;
    }

    listarCliente();

    const idCliente = lerIndice("Qual é o ID do cliente que deseja remover? ");

    if (idInvalido(idCliente)) {
      console.log("ID inválido.");
    } else {
      const clienteIndex = clientes.findIndex(
        (cliente) => cliente.idCliente === idCliente
      );
      clientes.splice(clienteIndex, 1);
      console.log("Cliente removido com sucesso.");
      break;
    }
  }
};

module.exports = {
  criarCliente,
  atualizarCliente,
  removerCliente,
  listarCliente,
  idInvalido,
};
