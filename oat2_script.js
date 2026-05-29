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

op = prompt
(
   "SEJAM MUITO BEM VINDOS À LOCADORA\n"+
   "===== HOSPÍCIO DO SALAME =====\n\n"+
   "Pressione Enter para prosseguir: "
);

do
{
        
   op = prompt
   (
      "===== LOCADORA DE JOGOS =====\n\n"+
      "[1] Cadastrar novo jogo\n"+
      "[2] Listar jogos\n"+
      "[3] Buscar jogo\n"+
      "[4] Remover jogo\n" +
      "[5] Sair\n\n"+
      "Escolha uma opção: "
   );

    switch (op)
    {
   
        case "1":

            console.clear();
            console.log("===== CADASTRANDO NOVO JOGO =====");

            let novotitulo = prompt("Digite o título do jogo:");
            let novaplataforma = prompt("Digite a plataforma (ex: PlayStation, Xbox, PC, Switch):");
            let novogenero = prompt("Digite o gênero do jogo:");
            let novopreco = parseFloat(prompt("Digite o preço do aluguel (R$):"));

            if (novotitulo && novaplataforma && novogenero && !isNaN(novopreco))
            {

                let novoJogo =
                {
                    titulo: novotitulo,
                    plataforma: novaplataforma,
                    genero: novogenero,
                    preco: novopreco
                };

                locadora.push(novoJogo);
                alert("Jogo cadastrado com sucesso!");
                console.log("\nSucesso! " + novoJogo.titulo + " foi adicionado à locadora!");

            } 
            else
            {

                alert("Erro no cadastro! Dados inválidos ou em branco.");
                console.log("Erro: Falha ao cadastrar o novo jogo.");

            }

        break;

        case "2":

            console.clear();
            console.log("===== LISTA DE JOGOS =====\n");
        
            for (let i = 0; i < locadora.length; i++)
            {

                let jogo = locadora[i];

                console.log
                (

                    (i + 1) +". Título: " + jogo.titulo + "\n" +
                    "Plataforma: " + jogo.plataforma + "\n" +
                    "Gênero: " + jogo.genero + "\n" +
                    "Preço: " + jogo.preco.toFixed(2) + "\n"

                );

            }

            alert("A lista de jogos foi exibida no console.");

        break;

        case "3":

            console.clear();
            console.log("===== Buscando Jogo =====\n");
            let busca = prompt("Digite o título ou parte do nome do Jogo que deseja buscar: ");

            if (busca) 
            {

                let buscaminusculo = busca.toLowerCase();
                let resultado = false;

                console.log("Resultados para a busca: " + busca + ".\n")

                for (let i = 0; i < locadora.length; i++)
                {

                    let jogo = locadora[i];

                    if (jogo.titulo.toLowerCase().includes(buscaminusculo))
                    {

                        console.log("Título: " + jogo.titulo + "\n" + "Plataforma: " + jogo.plataforma + "\n" + "Gênero: " + jogo.genero + "\n" + "Preço: " + jogo.preco.toFixed(2) + "\n")
                        resultado = true;

                    }

                }

            

                if (!resultado)
                {

                    console.log("Jogo não encontrado com esse termo.");
                    alert("Nenhum jogo encontrado");

                }
                else
                {

                    alert("Resultados da busca foram exibidos no Console.");

                }
            } 
            else
            {

                alert("Busca cancelada ou termo em branco.");

            }

        break;

        case "4":

            console.clear();
            console.log("===== REMOVER JOGO =====")

            let removerjogo = prompt("Digite o nome do jogo que deseja remover: ");

            if (removerjogo)
            {

                let removerjogominusculo = removerjogo.toLowerCase();
                let resulted = false

                console.log("\nResultados para a busca: " + removerjogominusculo + ".\n")
                

                for (let i = 0; i < locadora.length; i++)
                {

                    let jogo = locadora[i];

                    if(jogo.titulo.toLowerCase().includes(removerjogominusculo))
                    {

                        console.log("ID: " + (i + 1) + "\nTítulo: " + jogo.titulo + "\n" + "Plataforma: " + jogo.plataforma + "\n" + "Gênero: " + jogo.genero + "\n" + "Preço: " + jogo.preco.toFixed(2) + "\n")
                        resulted = true;

                    }

                }

                if(resulted)
                {

                    alert("Os jogos encontrados foram listados com seus respectivos IDs");
                    let idescolhido = parseInt(prompt("Digite o ID do jogo no qual deseja remover definitivamente: "));

                    if(!isNaN(idescolhido))
                    {

                        let idreal = idescolhido - 1;
                        let jogoremovido = locadora[idreal].titulo;
                        locadora.splice(idreal, 1);

                        alert("O jogo " + jogoremovido + " foi removido com sucesso da locadora.");
                        console.log("Jogo removido com sucesso.")

                    }
                    else
                    {

                        alert("ID inválido! Operação cancelada.")
                        console.log("Erro: ID digitado não corresponde a nenhum jogo.")

                    }

                }
                else
                {

                    alert("Nenhum jogo foi encontrado com o termo: " + removerjogo + ".");
                    console.log("Erro: O termo de busca não retornou resultados.")

                }

            }
            else
            {

                alert("Operaçao cancelada ou termo em branco.");

            }

        break;

        case "5":

            console.clear();
            alert("Assim a história de Dragon Ball chega ao FIM!\n\nSistema finalizado com sucesso.")
            
            console.log
            (
        
                "Muito obrigado pela sua atenção.\n\n" +
                "OBS: Uso do GEMINI apenas para correção de problemas no código,\nde resto tudo foi unicamente feito pelas mãos de seus alunos dandex , ayzz, guililiu." +
                "\n\nAtenciosamente,\n\n" +
                "====================\n Estudantes da Rede UniFTC\n===================="
        
            );

        break;

		default: 

            alert("Opção inválida. Escolha entre as opções de [1] a [5].");

        break;
            
            
            
    }
} while (op !== "5");
    
