const prompt = require("prompt-sync")();
const crudCorretora = require("./corretora.js");
let nextUserId = 1;
const corretores = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome.trim() === "";

const idInvalido = (id) => {
  return !corretores.some((corretor) => corretor.id === id);
};

function listarcorretor() {
  if (corretores.length === 0) {
    console.log("Nenhum corretor cadastrado.");
  } else {
    corretores.forEach((corretor) => {
      console.log(
        `ID: ${corretor.id} - Nome: ${corretor.nome} - ID Corretora: ${corretor.idCorretora}`
      );
    });
  }
}

const modelo = () => {
  let corretor = { id: nextUserId++ };

  while (true) {
    corretor.nome = prompt("Qual é o nome do Corretor? ").trim();
    if (nomeInvalido(corretor.nome)) {
      console.log("O nome do corretor não pode ser vazio.");
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
      corretor.idCorretora = idCorretora;
      break;
    }
  }

  return corretor;
};

const criarcorretor = () => {
  const corretor = modelo();
  corretores.push(corretor);
  console.log("Corretor criado com sucesso.");
};

const atualizarcorretor = () => {
  while (true) {
    if (corretores.length === 0) {
      console.log("Lista de corretores está vazia.");
      break;
    }

    listarcorretor();

    const id = lerIndice("Qual é o ID do corretor que deseja atualizar? ");

    if (idInvalido(id)) {
      console.log("ID inválido.");
    } else {
      const corretorIndex = corretores.findIndex(
        (corretor) => corretor.id === id
      );
      const corretorAtualizado = modelo();
      corretorAtualizado.id = id; // Mantém o mesmo ID
      corretores[corretorIndex] = corretorAtualizado;
      console.log("Corretor atualizado com sucesso.");
      break;
    }
  }
};

const removercorretor = () => {
  while (true) {
    if (corretores.length === 0) {
      console.log("Lista de corretores está vazia.");
      break;
    }

    listarcorretor();

    const id = lerIndice("Qual é o ID do corretor que deseja remover? ");

    if (idInvalido(id)) {
      console.log("ID inválido.");
    } else {
      const corretorIndex = corretores.findIndex(
        (corretor) => corretor.id === id
      );
      corretores.splice(corretorIndex, 1);
      console.log("Corretor removido com sucesso.");
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
