// Utilizando agora IDs, faça o gerenciamento das seguintes entidades:

// Corretora:
//  nome

// Corretor:
//  nome
//  id_corretora: relacionar com corretora

// Imóvel
//  numero
//  rua
//  bairro
// id_corretora: relacionar com corretora

// Cliente:
//  nome

// Venda
//  id_imovel: relacionar com imóvel
//  id_cliente: relacionar com cliente
//  id_corretor: relacionar com corretor

const prompt = require("prompt-sync")();

let nextUserId = 1;
const corretoras = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalido = (idCorretora) => {
  return !corretoras.some((corretora) => corretora.idCorretora === idCorretora);
};

function listarcorretora() {
  if (corretoras.length === 0) {
    console.log("Nenhuma corretora cadastrada.");
  } else {
    corretoras.forEach((corretora) => {
      console.log(`ID: ${corretora.idCorretora} - Nome : ${corretora.nome} `);
    });
  }
}

const modelo = () => {
  let corretora = { idCorretora: nextUserId++ };

  while (true) {
    corretora.nome = prompt("Qual é o nome da da Corretora? ").trim();
    if (nomeInvalido(corretora.nome)) {
      console.log("A corretora não pode ser vazio");
    } else {
      break;
    }
  }
  return corretora;
};

const criar = () => {
  const corretora = modelo();
  corretoras.push(corretora);
  console.log("corretora criada com sucesso");
};

const atualizar = () => {
  while (true) {
    if (corretoras.length == 0) {
      console.log("Lista de corretoras está vazia");
      break;
    }

    listarcorretora();

    const idCorretora = lerIndice(
      "Qual é o ID da corretora que deseja atualizar? "
    );

    if (idInvalido(idCorretora)) {
      console.log("ID inválido");
    } else {
      const corretoraIndex = corretoras.findIndex(
        (corretora) => corretora.idCorretora === idCorretora
      );
      const corretoraAtualizado = modelo();
      corretoraAtualizado.idCorretora = idCorretora; // Mantém o mesmo ID
      corretoras[corretoraIndex] = corretoraAtualizado;
      console.log("corretora atualizada com sucesso");
      break;
    }
  }
};

const remover = () => {
  while (true) {
    if (corretoras.length == 0) {
      console.log("Lista de corretorasestá vazia");
      break;
    }

    listarcorretora();

    const idCorretora = lerIndice(
      "Qual é o ID da corretora que deseja remover? "
    );

    if (idInvalido(id)) {
      console.log("ID inválido");
    } else {
      const corretoraIndex = corretoras.findIndex(
        (corretora) => corretora.idCorretora === idCorretora
      );
      corretoras.splice(corretoraIndex, 1);
      console.log("corretora removida com sucesso");
      break;
    }
  }
};

module.exports = {
  criar,
  atualizar,
  remover,
  listarcorretora,
  idInvalido,
};
