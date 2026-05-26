// ============================================================
//   LOCADORA DE JOGOS — Sistema de Gerenciamento
//   Cole este código no Console do navegador (F12) e execute
// ============================================================


// ─── ARRAY COM DADOS PRÉ-CADASTRADOS ───────────────────────
// Um array é uma lista de itens. Aqui cada item é um "objeto"
// (as chaves { } ), que funciona como uma ficha com campos:
// titulo, plataforma, genero e preco.
// Const significa que a variável "jogos" não pode ser
// substituída por outra, mas podemos adicionar itens nela.
const jogos = [
  { titulo: "The Last of Us Part II",                      plataforma: "PS4",              genero: "Ação/Aventura",  preco: 18.00 },
  { titulo: "Elden Ring",                                   plataforma: "PS5",              genero: "RPG/Souls",      preco: 22.00 },
  { titulo: "Halo Infinite",                                plataforma: "Xbox Series X",    genero: "FPS",            preco: 16.00 },
  { titulo: "The Legend of Zelda: Tears of the Kingdom",   plataforma: "Nintendo Switch",  genero: "Aventura/RPG",   preco: 20.00 },
  { titulo: "FIFA 24",                                      plataforma: "PS5",              genero: "Esporte",        preco: 15.00 },
  { titulo: "Cyberpunk 2077",                               plataforma: "PC",               genero: "RPG/Ação",       preco: 19.00 },
  { titulo: "God of War Ragnarök",                          plataforma: "PS5",              genero: "Ação/Aventura",  preco: 23.00 },
];


// ─── FUNÇÃO: EXIBIR MENU ────────────────────────────────────
// Uma função é um bloco de código com nome, que só roda
// quando você a "chama" pelo nome (ex: exibirMenu()).
// Essa aqui só imprime o menu visual no console.
function exibirMenu() {
  console.log("\n╔══════════════════════════════════════════════╗");
  console.log("║       🎮  LOCADORA DE JOGOS — SISTEMA        ║");
  console.log("╠══════════════════════════════════════════════╣");
  console.log("║  [1]  Cadastrar novo jogo                    ║");
  console.log("║  [2]  Listar todos os jogos                  ║");
  console.log("║  [3]  Buscar jogo                            ║");
  console.log("║  [4]  Sair                                   ║");
  console.log("╚══════════════════════════════════════════════╝");
}


// ─── FUNÇÃO: CADASTRAR JOGO ─────────────────────────────────
function cadastrarJogo() {
  console.log("\n── CADASTRAR NOVO JOGO ──────────────────────────");

  // prompt() abre uma caixinha no navegador pedindo que o
  // usuário digite algo. O que ele digitar fica guardado
  // na variável (titulo, plataforma, etc.).
  const titulo     = prompt("Título do jogo:");
  const plataforma = prompt("Plataforma (ex: PS5, Xbox, PC, Switch):");
  const genero     = prompt("Gênero (ex: Ação, RPG, Esporte):");
  const precoStr   = prompt("Preço de aluguel por dia (R$):");

  // Validação: o ! na frente significa "não". Então !titulo
  // significa "se titulo estiver vazio ou nulo".
  // O || significa OU — se QUALQUER campo estiver vazio, cancela.
  if (!titulo || !plataforma || !genero || !precoStr) {
    console.log("⚠ Cadastro cancelado: nenhum campo pode ficar em branco.");
    return; // return dentro de uma função faz ela parar aqui
  }

  // O usuário pode digitar "15,00" com vírgula (padrão BR),
  // então trocamos a vírgula por ponto antes de converter.
  // parseFloat() transforma texto em número decimal.
  // Ex: "18,50" → "18.50" → 18.5
  const preco = parseFloat(precoStr.replace(",", "."));

  // isNaN = "is Not a Number" (é não-número?).
  // Se o usuário digitou letras, parseFloat retorna NaN.
  // Também verificamos se o preço não é zero ou negativo.
  if (isNaN(preco) || preco <= 0) {
    console.log("⚠ Preço inválido. Cadastro cancelado.");
    return;
  }

  // push() adiciona um novo item ao final do array.
  // As chaves { } criam um objeto com os dados digitados.
  // Escrevemos só "titulo" ao invés de "titulo: titulo"
  // porque o JavaScript entende que são iguais (atalho ES6).
  jogos.push({ titulo, plataforma, genero, preco });

  // Template literal: usamos crase (`) ao invés de aspas
  // para poder colocar variáveis dentro do texto com ${}.
  // toFixed(2) formata o número com sempre 2 casas decimais.
  // Ex: 18 → "18.00"
  console.log(`\n✅ Jogo cadastrado com sucesso!`);
  console.log(`   → ${titulo} (${plataforma}) — R$ ${preco.toFixed(2)}/dia`);
}


// ─── FUNÇÃO: LISTAR JOGOS ───────────────────────────────────
function listarJogos() {
  console.log("\n── ACERVO COMPLETO DE JOGOS ─────────────────────");

  // .length retorna quantos itens existem no array.
  // Se for 0, o array está vazio.
  if (jogos.length === 0) {
    console.log("   Nenhum jogo cadastrado.");
    return;
  }

  // Laço for: i começa em 0 (arrays começam no índice 0),
  // roda enquanto i for menor que o total de jogos,
  // e aumenta 1 a cada volta (i++).
  for (let i = 0; i < jogos.length; i++) {

    // jogos[i] acessa o item na posição i do array.
    // Guardamos numa variável j para escrever menos.
    const j = jogos[i];

    // String(i + 1) transforma o número em texto para usar
    // o .padStart(2, "0") que adiciona zero à esquerda
    // quando o número tem só 1 dígito. Ex: 1 → "01"
    console.log(`\n  [${String(i + 1).padStart(2, "0")}] ${j.titulo}`);
    console.log(`       Plataforma : ${j.plataforma}`);
    console.log(`       Gênero     : ${j.genero}`);
    console.log(`       Aluguel    : R$ ${j.preco.toFixed(2)}/dia`);
  }

  console.log(`\n  Total: ${jogos.length} jogo(s) no acervo.`);
}


// ─── FUNÇÃO: BUSCAR JOGO ────────────────────────────────────
function buscarJogo() {
  const termo = prompt("Digite o termo de busca (título, plataforma ou gênero):");

  // .trim() remove espaços em branco do início e fim do texto.
  // Ex: "  ps5  " → "ps5"
  // Verificamos tanto se o termo é nulo (usuário cancelou)
  // quanto se está vazio após remover os espaços.
  if (!termo || !termo.trim()) {
    console.log("⚠ Nenhum termo digitado. Busca cancelada.");
    return;
  }

  // toLowerCase() converte tudo para minúsculas.
  // Assim a busca não diferencia maiúsculas de minúsculas.
  // Ex: "PS5" e "ps5" e "Ps5" vão encontrar a mesma coisa.
  const t = termo.toLowerCase().trim();
  console.log(`\n── RESULTADOS PARA: "${termo}" ─────────────────────`);

  // Contador de quantos jogos foram encontrados na busca.
  let encontrados = 0;

  // Percorremos todos os jogos um por um com o laço for.
  for (let i = 0; i < jogos.length; i++) {
    const j = jogos[i];

    // .includes(t) verifica se o texto contém o termo buscado.
    // Comparamos com título, plataforma E gênero.
    // O || (OU) faz com que baste um dos três ter o termo
    // para o jogo aparecer no resultado.
    if (
      j.titulo.toLowerCase().includes(t) ||
      j.plataforma.toLowerCase().includes(t) ||
      j.genero.toLowerCase().includes(t)
    ) {
      encontrados++; // mesmo que: encontrados = encontrados + 1
      console.log(`\n  [${encontrados}] ${j.titulo}`);
      console.log(`      Plataforma : ${j.plataforma}`);
      console.log(`      Gênero     : ${j.genero}`);
      console.log(`      Aluguel    : R$ ${j.preco.toFixed(2)}/dia`);
    }
  }

  // Após o laço, verificamos se encontrou algo ou não.
  if (encontrados === 0) {
    console.log("   Nenhum jogo encontrado com esse termo.");
  } else {
    console.log(`\n  ${encontrados} resultado(s) encontrado(s).`);
  }
}


// ─── FUNÇÃO PRINCIPAL: MENU COM DO-WHILE ────────────────────
// Esta é a função que controla tudo. Ela chama as outras.
function iniciarSistema() {
  console.clear(); // Limpa o console antes de começar

  console.log("\n  Inicializando sistema...");
  console.log(`  ${jogos.length} jogos carregados no acervo.`);

  // Declaramos "opcao" sem valor ainda (undefined),
  // pois ela só vai receber um valor dentro do do-while.
  let opcao;

  // Do-while: executa o bloco { } PRIMEIRO e só depois
  // verifica a condição. Ou seja, o menu sempre aparece
  // pelo menos uma vez antes de checar se deve parar.
  do {
    exibirMenu(); // mostra o menu toda vez que o laço rodar

    // Pede a opção ao usuário. prompt() sempre retorna texto
    // (string), por isso comparamos com "1", "2", etc. (com aspas).
    opcao = prompt("Escolha uma opção (1, 2, 3 ou 4):");

    // Switch testa o valor de "opcao" contra cada case.
    // É como vários if/else, mas mais organizado para menus.
    // O break no final de cada case impede que o código
    // "caia" para o próximo case automaticamente.
    switch (opcao) {
      case "1":
        cadastrarJogo(); // chama a função de cadastro
        break;

      case "2":
        listarJogos(); // chama a função de listagem
        break;

      case "3":
        buscarJogo(); // chama a função de busca
        break;

      case "4":
        console.log("\n👋 Sistema encerrado. Até logo!\n");
        break; // o while vai verificar e parar o laço

      // Default roda quando nenhum case anterior for verdadeiro.
      // Ou seja, quando o usuário digitou algo diferente de 1~4.
      default:
        // opcao === null acontece quando o usuário clica em
        // "Cancelar" no prompt. Nesse caso encerramos também.
        if (opcao !== null) {
          console.log("⚠ Opção inválida. Escolha entre 1, 2, 3 ou 4.");
        } else {
          console.log("\n👋 Sistema encerrado. Até logo!\n");
          opcao = "4"; // forçamos "4" para o while parar
        }
    }

  // O laço continua enquanto a opção for diferente de "4".
  // Quando opcao for "4", o while para e o programa termina.
  } while (opcao !== "4");
}


// ─── INICIAR O SISTEMA ──────────────────────────────────────
// Esta linha chama a função principal e coloca tudo em marcha.
// Sem ela, as funções estariam definidas mas nada aconteceria.
iniciarSistema();
