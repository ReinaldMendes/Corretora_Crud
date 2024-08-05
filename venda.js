const prompt = require("prompt-sync")();
const crudImovel = require("./imovel.js");
const crudCliente = require("./cliente.js");
const crudCorretor = require("./corretor.js");
let nextVendaId = 1;
const vendas = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const idInvalido = (id, lista) => {
  return !lista.some((item) => item.id === id);
};

function listarVenda() {
  if (vendas.length === 0) {
    console.log("Nenhuma venda cadastrada.");
  } else {
    vendas.forEach((venda) => {
      console.log(
        `ID: ${venda.id} - ID Imóvel: ${venda.idImovel} - ID Cliente: ${venda.idCliente} - ID Corretor: ${venda.idCorretor}`
      );
    });
  }
}

const modeloVenda = () => {
  let venda = { id: nextVendaId++ };

  while (true) {
    crudImovel.listarImovel();
    const idImovel = lerIndice("Qual é o ID do Imóvel? ");
    if (idInvalido(idImovel, crudImovel.imoveis)) {
      console.log("ID de imóvel inválido.");
    } else {
      venda.idImovel = idImovel;
      break;
    }
  }

  while (true) {
    crudCliente.listarCliente();
    const idCliente = lerIndice("Qual é o ID do Cliente? ");
    if (idInvalido(idCliente, crudCliente.clientes)) {
      console.log("ID de cliente inválido.");
    } else {
      venda.idCliente = idCliente;
      break;
    }
  }

  while (true) {
    crudCorretor.listarcorretor();
    const idCorretor = lerIndice("Qual é o ID do Corretor? ");
    if (idInvalido(idCorretor, crudCorretor.corretores)) {
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

    const id = lerIndice("Qual é o ID da venda que deseja atualizar? ");

    if (idInvalido(id, vendas)) {
      console.log("ID inválido.");
    } else {
      const vendaIndex = vendas.findIndex((venda) => venda.id === id);
      const vendaAtualizada = modeloVenda();
      vendaAtualizada.id = id; // Mantém o mesmo ID
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

    const id = lerIndice("Qual é o ID da venda que deseja remover? ");

    if (idInvalido(id, vendas)) {
      console.log("ID inválido.");
    } else {
      const vendaIndex = vendas.findIndex((venda) => venda.id === id);
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
