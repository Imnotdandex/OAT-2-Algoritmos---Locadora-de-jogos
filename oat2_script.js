/* ==========================================================
   OAT2 - Algoritmos e Programação
   Aluno 1: Daniel Alonso dos Santos Guimarães.
   Aluno 2: Andrey dos Passos Alves.
   Aluno 3: Guilherme de Araújo Freitas.
   Tema escolhido: Tema 4 - Locadora de Jogos
   ========================================================== */

const locadora = 
[

      { titulo: "The Legend of Zelda: Breath of the Wild", plataforma: "Nintendo Switch", genero: "Aventura", preco: 15.00 },
      { titulo: "Elden Ring", plataforma: "PS5", genero: "RPG", preco: 18.00 },
      { titulo: "FIFA 23", plataforma: "Xbox Series X", genero: "Esporte", preco: 10.00 },
      { titulo: "God of War Ragnarok", plataforma: "PS5", genero: "Ação", preco: 20.00 },
      { titulo: "Minecraft", plataforma: "PC", genero: "Sandbox", preco: 8.00 }

];

let op;

do
{
   op = prompt
   (
      "SEJAM MUITO BEM VINDOS À LOCADORA\n"+
      "===== HOSPÍCIO DO SALAME =====\n\n"+
      "Pressione Enter para prosseguir: "
   );
        
   op = prompt
   (
      "===== LOCADORA DE JOGOS =====\n\n"+
      "[1] Cadastrar novo jogo\n"+
      "[2] Listar jogos\n"+
      "[3] Buscar jogo\n"+
      "[4] Sair\n\n"+
      "Escolha uma opção: "
   );

switch (op) {
   
   case "1":
    console.clear();
    console.log("===== CADASTRANDO NOVO JOGO =====");

    let novoTitulo = prompt("Digite o título do jogo:");
    let novaPlataforma = prompt("Digite a plataforma (ex: PlayStation, Xbox, PC, Switch):");
    let novoGenero = prompt("Digite o gênero do jogo:");
    let novoPreco = parseFloat(prompt("Digite o preço do aluguel (R$):"));

    if (novoTitulo && novaPlataforma && novoGenero && !isNaN(novoPreco)) {

        let novoJogo = {
            titulo: novoTitulo,
            plataforma: novaPlataforma,
            genero: novoGenero,
            preco: novoPreco
        };

        locadora.push(novoJogo);
        alert("Jogo cadastrado com sucesso!");
        console.log("Sucesso!" + novoJogo.titulo + " foi adicionado à locadora!");
    } else {
        alert("Erro ao cadastrar! Dados inválidos ou campos deixados em branco.");
        console.log("Erro: Falha ao cadastrar o novo jogo.");
    }
   break;

   case "2":
    console.clear();
    console.log("===== LISTA DE JOGOS =====");
    
    for (let i = 0; i < locadora.length; i++) {
        let jogo = locadora[i];

         console.log(
            (i + 1) +". Título: " + jogo.titulo + " | " +
            "Plataforma: " + jogo.plataforma + " | " +
            "Gênero: " + jogo.genero + " | " +
            "Preço: " + jogo.preco.toFixed(2) + " | "
        );
    }
    alert("A lista de jogos foi exibida no console (F12)!");
    break;
}
} while (op !== "4");
