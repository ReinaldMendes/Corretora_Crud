const prompt = require("prompt-sync")();
const crudImovel = require("./imovel.js");
const crudCliente = require("./cliente.js");
const crudCorretor = require("./corretor.js");
let nextVendaId = 1;
const vendas = [];
const clientes = [
  { idCliente: 1, nome: "Cliente 1" },
  { idCliente: 2, nome: "Cliente 2" },
  // outros clientes
];

const listarCliente = () => {
  clientes.forEach((cliente) => {
    console.log(`ID: ${cliente.idCliente} - Nome: ${cliente.nome}`);
  });
};

const idInvalido = (idCliente) => {
  return !clientes.some((cliente) => cliente.idCliente === idCliente);
};

module.exports = {
  listarCliente,
  idInvalido,
};
const lerIndice = (mensagem) => {
  const valor = prompt(mensagem);
  const numero = parseInt(valor);
  if (isNaN(numero)) {
    console.log("Valor inválido. Por favor, insira um número.");
    return lerIndice(mensagem);
  }
  return numero;
};

const idInvalido = (idvendas) => {
  return !vendas.some((venda) => venda.idvendas === idvendas);
};

function listarVenda() {
  if (vendas.length === 0) {
    console.log("Nenhuma venda cadastrada.");
  } else {
    vendas.forEach((venda) => {
      console.log(
        `ID: ${venda.idvendas} - ID Imóvel: ${venda.idImovel} - ID Cliente: ${venda.idCliente} - ID Corretor: ${venda.idCorretor}`
      );
    });
  }
}

const modeloVenda = () => {
  let venda = { idvendas: nextVendaId++ };

  while (true) {
    crudImovel.listarImovel();
    const idImovel = lerIndice("Qual é o ID do Imóvel? ");
    if (crudImovel.idInvalido(idImovel)) {
      console.log("ID de imóvel inválido.");
    } else {
      venda.idImovel = idImovel;
      break;
    }
  }

  while (true) {
    crudCliente.listarCliente();
    const idCliente = lerIndice("Qual é o ID do Cliente? ");
    if (crudCliente.idInvalido(idCliente)) {
      console.log("ID de cliente inválido.");
    } else {
      venda.idCliente = idCliente;
      break;
    }
  }

  while (true) {
    crudCorretor.listarCorretor();
    const idCorretor = lerIndice("Qual é o ID do Corretor? ");
    if (crudCorretor.idInvalido(idCorretor)) {
      console.log("ID de corretor inválido.");
    } else {
      venda.idCorretor = idCorretor;
      break;
    }
  }

  return venda;
};

const criarVenda = () => {
  const venda = modeloVenda();
  vendas.push(venda);
  console.log("Venda criada com sucesso.");
};

const atualizarVenda = () => {
  while (true) {
    if (vendas.length === 0) {
      console.log("Lista de vendas está vazia.");
      break;
    }

    listarVenda();

    const idvendas = lerIndice("Qual é o ID da venda que deseja atualizar? ");

    if (idInvalido(idvendas)) {
      console.log("ID inválido.");
    } else {
      const vendaIndex = vendas.findIndex(
        (venda) => venda.idvendas === idvendas
      );
      const vendaAtualizada = modeloVenda();
      vendaAtualizada.idvendas = idvendas; // Mantém o mesmo ID
      vendas[vendaIndex] = vendaAtualizada;
      console.log("Venda atualizada com sucesso.");
      break;
    }
  }
};

const removerVenda = () => {
  while (true) {
    if (vendas.length === 0) {
      console.log("Lista de vendas está vazia.");
      break;
    }

    listarVenda();

    const idvendas = lerIndice("Qual é o ID da venda que deseja remover? ");

    if (idInvalido(idvendas)) {
      console.log("ID inválido.");
    } else {
      const vendaIndex = vendas.findIndex(
        (venda) => venda.idvendas === idvendas
      );
      vendas.splice(vendaIndex, 1);
      console.log("Venda removida com sucesso.");
      break;
    }
  }
};

module.exports = {
  criarVenda,
  atualizarVenda,
  removerVenda,
  listarVenda,
};
