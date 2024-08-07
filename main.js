const prompt = require("prompt-sync")();

const corretora = require("./corretora.js");
const cliente = require("./cliente.js");
const corretor = require("./corretor.js");
const imovel = require("./imovel.js");
const venda = require("./venda.js");

const menuPrincipal = () => {
  console.log(`
        GERENCIAMENTO DE CORRETORA DE IMÓVEIS
        `);

  while (true) {
    console.log(`
                  ESCOLHA O MÓDULO QUE QUER GERENCIAR:
                  
                  1 - CORRETORA
                  2 - CORRETOR
                  3 - IMOVEL
                  4 - CLIENTE
                  5 - VENDA
                  6 - SAIR
                  `);

    const opcaoModulo = parseInt(prompt(": "));

    switch (opcaoModulo) {
      case 1:
        menuCorretora();
        break;
      case 2:
        menuCorretor();
        break;
      case 3:
        menuImovel();
        break;
      case 4:
        menuCliente();
        break;
      case 5:
        menuVenda();
        break;
      case 6:
        process.exit();
        break;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuCliente = () => {
  console.log("GERENCIAMENTO DE CLIENTE");
  while (true) {
    console.log(`
                1 - CADASTRAR CLIENTE
                2 - LISTAR CLIENTES
                3 - ATUALIZAR CLIENTE
                4 - EXCLUIR CLIENTE
                5 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        cliente.criarCliente();
        break;
      case 2:
        cliente.listarCliente();
        break;
      case 3:
        cliente.atualizarCliente();
        break;
      case 4:
        cliente.removerCliente();
        break;

      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuCorretor = () => {
  console.log("GERENCIAMENTO DE CORRETOR");
  while (true) {
    console.log(`
                1 - CADASTRAR CORRETOR
                2 - LISTAR CORRETORES
                3 - ATUALIZAR CORRETOR
                4 - EXCLUIR CORRETOR
                5 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        corretor.criarcorretor();
        break;
      case 2:
        corretor.listarcorretor();
        break;
      case 3:
        corretor.atualizarcorretor();
        break;
      case 4:
        corretor.removercorretor();
        break;

      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};

const menuCorretora = () => {
  console.log("GERENCIAMENTO DE CORRETORA");
  while (true) {
    console.log(`
              1 - CADASTRAR CORRETORA
              2 - LISTAR CORRETORAS
              3 - ATUALIZAR CORRETORA
              4 - EXCLUIR CORRETORA
              5 - SAIR
              `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        corretora.criar();
        break;
      case 2:
        corretora.listarcorretora();
        break;
      case 3:
        corretora.atualizar();
        break;
      case 4:
        corretora.remover();
        break;

      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};
const menuImovel = () => {
  console.log("GERENCIAMENTO DE IMOVEL");
  while (true) {
    console.log(`
                1 - CADASTRAR IMOVEL
                2 - LISTAR IMOVEL
                3 - ATUALIZAR IMOVEL
                4 - EXCLUIR IMOVEL
                5 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        imovel.criarImovel();
        break;
      case 2:
        imovel.listarImovel();
        break;
      case 3:
        imovel.atualizarImovel();
        break;
      case 4:
        imovel.removerImovel();
        break;

      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};
const menuVenda = () => {
  console.log("GERENCIAMENTO DE VENDA");
  while (true) {
    console.log(`
                  1 - CADASTRAR VENDA
                  2 - LISTAR VENDA
                  3 - ATUALIZAR VENDA
                  4 - EXCLUIR VENDA
                  5 - SAIR
                  `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        venda.criarVenda();
        break;
      case 2:
        venda.listarVenda();
        break;
      case 3:
        venda.atualizarVenda();
        break;
      case 4:
        venda.removerVenda();
        break;
      case 5:
        return;
      default:
        console.log("OPCAO INVALIDA");
        break;
    }
  }
};
menuPrincipal();
