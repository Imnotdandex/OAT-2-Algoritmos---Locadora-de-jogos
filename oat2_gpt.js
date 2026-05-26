/* CHAT GPT /*

/* ==========================================================
   OAT2 - Algoritmos e Programação
   Nome completo do Aluno 1: [Nome Aqui]
   Nome completo do Aluno 2: [Nome Aqui]
   Nome completo do Aluno 3: [Nome Aqui]
   Tema escolhido: Tema 4 - Locadora de Jogos
   ========================================================== */

// 1. BANCO DE DADOS INICIAL (Mínimo 5 registros realistas - Critério 2)
const locadoraJogos = [
    { titulo: "The Legend of Zelda: Breath of the Wild", plataforma: "Nintendo Switch", genero: "Aventura", preco: 15.00 },
    { titulo: "Elden Ring", plataforma: "PS5", genero: "RPG", preco: 18.00 },
    { titulo: "FIFA 23", plataforma: "Xbox Series X", genero: "Esporte", preco: 10.00 },
    { titulo: "God of War Ragnarok", plataforma: "PS5", genero: "Ação", preco: 20.00 },
    { titulo: "Minecraft", plataforma: "PC", genero: "Sandbox", preco: 8.00 }
];

// Variável para armazenar a opção do menu
let opcao;

// 2. LOOP PRINCIPAL DO SISTEMA (do-while - Requisito obrigatório) - GUI
do {
    // Exibe o menu principal via prompt()
    opcao = prompt(
        "=== LOCADORA DE JOGOS ===\n" +
        "1. Cadastrar novo jogo\n" +
        "2. Listar todos os jogos\n" +
        "3. Buscar jogo\n" +
        "4. Sair\n\n" +
        "Escolha uma opção (1-4):"
    );

    // 3. DIRECIONAMENTO DAS OPÇÕES (switch - Requisito obrigatório) - GUI
    switch (opcao) {
        
        case "1": // CRITÉRIO 3 - CADASTRAR NOVO REGISTRO
            console.clear();
            console.log("--- CADASTRANDO NOVO JOGO ---");
            
            let novoTitulo = prompt("Digite o título do jogo:");
            let novaPlataforma = prompt("Digite a plataforma (ex: PS5, PC, Switch):");
            let novoGenero = prompt("Digite o gênero do jogo:");
            let novoPreco = parseFloat(prompt("Digite o preço do aluguel (R$):"));

            // Validação simples para evitar campos vazios ou preço inválido
            if (novoTitulo && novaPlataforma && novoGenero && !isNaN(novoPreco)) {
                // Cria o objeto do novo jogo
                let novoJogo = {
                    titulo: novoTitulo,
                    plataforma: novaPlataforma,
                    genero: novoGenero,
                    preco: novoPreco
                };
                // Adiciona o objeto ao array (Requisito obrigatório)
                locadoraJogos.push(novoJogo);
                alert("Jogo cadastrado com sucesso!");
                console.log(`Sucesso: "${novoTitulo}" foi adicionado à locadora.`);
            } else {
                alert("Erro ao cadastrar! Dados inválidos ou campos deixados em branco.");
                console.log("Erro: Falha ao cadastrar novo jogo devido a dados inválidos.");
            }
            break;

        case "2": // CRITÉRIO 3 - LISTAR TODOS OS REGISTROS - GUI
            console.clear();
            console.log("--- LISTA DE JOGOS CADASTRADOS ---");
            
            // Percorre o array usando o laço 'for' (Requisito obrigatório)
            for (let i = 0; i < locadoraJogos.length; i++) {
                let jogo = locadoraJogos[i];
                // Exibe os itens numerados iniciando em 1 (i + 1)
                console.log(
                    `${i + 1}. Título: ${jogo.titulo} | ` +
                    `Plataforma: ${jogo.plataforma} | ` +
                    `Gênero: ${jogo.genero} | ` +
                    `Preço: R$ ${jogo.preco.toFixed(2)}`
                );
            }
            alert("A lista de jogos foi exibida no Console (F12)!");
            break;

        case "3": // CRITÉRIO 4 - BUSCAR REGISTRO
            console.clear();
            console.log("--- BUSCAR JOGO ---");
            
            let termoBusca = prompt("Digite o título ou parte do nome do jogo que deseja buscar:");
            
            if (termoBusca) {
                // Transforma em minúsculo para a busca não diferenciar maiúsculas/minúsculas
                let termoMinusculo = termoBusca.toLowerCase();
                let encotrouResultado = false;

                console.log(`Resultados para a busca por: "${termoBusca}"`);
                
                // Percorre o array comparando com 'if' (Requisito obrigatório)
                for (let i = 0; i < locadoraJogos.length; i++) {
                    let jogo = locadoraJogos[i];
                    
                    // Verifica se o título do jogo contém o termo digitado
                    if (jogo.titulo.toLowerCase().includes(termoMinusculo)) {
                        console.log(
                            `- Título: ${jogo.titulo} | Plat: ${jogo.plataforma} | Gênero: ${jogo.genero} | Aluguel: R$ ${jogo.preco.toFixed(2)}`
                        );
                        encotrouResultado = true;
                    }
                }

                if (!encotrouResultado) {
                    console.log("Nenhum jogo encontrado com esse termo.");
                    alert("Nenhum jogo encontrado.");
                } else {
                    alert("Resultados da busca exibidos no Console (F12)!");
                }
            } else {
                alert("Busca cancelada ou termo em branco.");
            }
            break;

        case "4": // OPÇÃO DE SAIR
            console.clear();
            alert("Sistema encerrado com sucesso. Obrigado!");
            console.log("Sistema finalizado pelo usuário.");
            break;

        default: // TRATAMENTO DE OPÇÃO INVÁLIDA
            alert("Opção inválida! Digite um número de 1 a 4.");
            break;
    }

} while (opcao !== "4"); // Condição de saída do do-while
