/* ==========================================================
   OAT2 - Algoritmos
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



} while (op !== "4");
