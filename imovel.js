const prompt = require("prompt-sync")();
const crudCorretora = require("./corretora.js");
let nextImovelId = 1;
const imoveis = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const campoInvalido = (campo) => campo.trim() === "";

const idInvalido = (idImovel) => {
  return !imoveis.some((imovel) => imovel.idImovel === idImovel);
};

function listarImovel() {
  if (imoveis.length === 0) {
    console.log("Nenhum imóvel cadastrado.");
  } else {
    imoveis.forEach((imovel) => {
      console.log(
        `ID: ${imovel.idImovel} - Número: ${imovel.numero} - Rua: ${imovel.rua} - Bairro: ${imovel.bairro} - ID Corretora: ${imovel.idCorretora}`
      );
    });
  }
}

const modeloImovel = () => {
  let imovel = { idImovel: nextImovelId++ };

  while (true) {
    imovel.numero = prompt("Qual é o número do Imóvel? ").trim();
    if (campoInvalido(imovel.numero)) {
      console.log("O número do imóvel não pode ser vazio.");
    } else {
      break;
    }
  }

  while (true) {
    imovel.rua = prompt("Qual é a rua do Imóvel? ").trim();
    if (campoInvalido(imovel.rua)) {
      console.log("A rua do imóvel não pode ser vazia.");
    } else {
      break;
    }
  }

  while (true) {
    imovel.bairro = prompt("Qual é o bairro do Imóvel? ").trim();
    if (campoInvalido(imovel.bairro)) {
      console.log("O bairro do imóvel não pode ser vazio.");
    } else {
      break;
    }
  }

  while (true) {
    crudCorretora.listarcorretora();
    const idCorretora = lerIndice("Qual é o ID da Corretora? ");
    if (crudCorretora.idInvalido(idCorretora)) {
      console.log("ID de corretora inválido.");
    } else {
      imovel.idCorretora = idCorretora;
      break;
    }
  }

  return imovel;
};

const criarImovel = () => {
  const imovel = modeloImovel();
  imoveis.push(imovel);
  console.log("Imóvel criado com sucesso.");
};

const atualizarImovel = () => {
  while (true) {
    if (imoveis.length === 0) {
      console.log("Lista de imóveis está vazia.");
      break;
    }

    listarImovel();

    const idImovel = lerIndice("Qual é o ID do imóvel que deseja atualizar? ");

    if (idInvalido(idImovel)) {
      console.log("ID inválido.");
    } else {
      const imovelIndex = imoveis.findIndex(
        (imovel) => imovel.idImovel === idImovel
      );
      const imovelAtualizado = modeloImovel();
      imovelAtualizado.idImovel = idImovel; // Mantém o mesmo ID
      imoveis[imovelIndex] = imovelAtualizado;
      console.log("Imóvel atualizado com sucesso.");
      break;
    }
  }
};

const removerImovel = () => {
  while (true) {
    if (imoveis.length === 0) {
      console.log("Lista de imóveis está vazia.");
      break;
    }

    listarImovel();

    const id = lerIndice("Qual é o ID do imóvel que deseja remover? ");

    if (idInvalido(idImovel)) {
      console.log("ID inválido.");
    } else {
      const imovelIndex = imoveis.findIndex(
        (imovel) => imovel.idImovel === idImovel
      );
      imoveis.splice(imovelIndex, 1);
      console.log("Imóvel removido com sucesso.");
      break;
    }
  }
};

module.exports = {
  criarImovel,
  atualizarImovel,
  removerImovel,
  listarImovel,
  idInvalido,
};
