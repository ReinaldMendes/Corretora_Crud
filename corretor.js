const prompt = require("prompt-sync")();
const crud = require("./corretora.js");
let nextUserId = 1;
const corretores = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalido = (id) => {
  return !corretores.some((corretor) => corretor.id === id);
};

function listarcorretor() {
  if (corretores.length === 0) {
    console.log("Nenhuma corretor cadastrada.");
  } else {
    corretores.forEach((corretor) => {
      console.log(
        `ID: ${corretor.id} Corretora: ${corretor.corretora.idCorretora} - Nome : ${corretor.nome} `
      );
    });
  }
}

const modelo = () => {
  let corretor = { id: nextUserId++ };

  while (true) {
    corretor.nome = prompt("Qual é o nome do Corretor? ").trim();
    if (nomeInvalido(corretor.nome)) {
      console.log("A corretor não pode ser vazio");
    } else {
      break;
    }
  }

  crud.listarcorretora;
  const idCorretora = lerIndice("Qual é o id da Corretora deseja atualizar? ");
  while (true) {
    idCorretora = lerIndice("Qual é o id da Corretora deseja atualizar? ") - 1;
    if (idInvalido(id)) {
      console.log("Índice de corretora inválido");
    } else {
      break;
    }
  }
  corretor.corretora = corretores[idCorretora];

  return corretor;
};

const criarcorretor = () => {
  const corretor = modelo();
  corretores.push(corretor);
  console.log("corretor criada com sucesso");
};

const atualizarcorretor = () => {
  while (true) {
    if (corretores.length == 0) {
      console.log("Lista de corretores está vazia");
      break;
    }

    listarcorretor();

    const id = lerIndice("Qual é o ID da corretor que deseja atualizar? ");

    if (idInvalido(id)) {
      console.log("ID inválido");
    } else {
      const corretorIndex = corretores.findIndex(
        (corretor) => corretor.id === id
      );
      const corretorAtualizado = modelo();
      corretorAtualizado.id = id; // Mantém o mesmo ID
      corretores[corretorIndex] = corretorAtualizado;
      console.log("corretor atualizada com sucesso");
      break;
    }
  }
};

const removercorretor = () => {
  while (true) {
    if (corretores.length == 0) {
      console.log("Lista de corretoresestá vazia");
      break;
    }

    listarcorretor();

    const id = lerIndice("Qual é o ID da corretor que deseja remover? ");

    if (idInvalido(id)) {
      console.log("ID inválido");
    } else {
      const corretorIndex = corretores.findIndex(
        (corretor) => corretor.id === id
      );
      corretores.splice(corretorIndex, 1);
      console.log("corretor removida com sucesso");
      break;
    }
  }
};

module.exports = {
  criarcorretor,
  atualizarcorretor,
  removercorretor,
  listarcorretor,
};
