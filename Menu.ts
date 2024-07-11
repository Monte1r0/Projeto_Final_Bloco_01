import readlinesync = require("readline-sync");
import { colors } from "./src/util/Color";

export function main() {

    let opcao, numero, id, tipo, preco, quantidade: number;
    let nomeProduto, descricaoProduto: string;

    while (true) {

        console.log(colors.bg.black, colors.fg.blue,
                    "=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log("                                                     ");
        console.log("          🎣 BEM-VINDO À PESCARIA SUPREME 🎣           ");
        console.log("                                                     ");
        console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log("                                                     ");
        console.log("            8️⃣  - Sair 🚪                             ");
        console.log("            7️⃣  - Retirar do Estoque 📉              ");
        console.log("            6️⃣  - Adicionar ao Estoque 📈             ");
        console.log("            5️⃣  - Remover Produto ❌                  ");
        console.log("            4️⃣  - Atualizar Produto ✏️               ");
        console.log("            3️⃣  - Buscar Produto Pelo ID 🔍           ");
        console.log("            2️⃣  - Ver Todos os Produtos 📋           ");
        console.log("            1️⃣  - Criar Produto 🎣                   ");
        console.log("                                                     ");
        console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log(colors.reset,
                    "                                                     ");

        console.log("Escolha uma opção: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 8) {
            console.log("\n💫 Pescaria Supreme - Onde a Aventura Começa no Anzol! 💫");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\n🚀 Vamos criar um novo produto! 🚀\n\n");
                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt("");

                console.log("Digite o Nome do Produto: ");
                nomeProduto = readlinesync.question("");

                console.log("Digite o Tipo: ");
                tipo = readlinesync.questionInt("");

                console.log("Digite o preço: ");
                preco = readlinesync.questionFloat("");

                console.log("Digite a Descrição do Produto: ");
                descricaoProduto = readlinesync.question("");
                break;
            case 2:
                console.log("\n\n📋 Aqui estão todos os produtos 📋\n\n");
                break;
            case 3:
                console.log("\n\n🔍 Procurando produto... 🔍\n\n");
                console.log("Digite o número do Produto: ");
                break;
            case 4:
                console.log("\n\n✏️ Atualize os dados do produto ✏️\n\n");
                console.log("Digite o número do Produto: ");
                break;
            case 5:
                console.log("\n\n❌ Removendo produto ❌\n\n");
                console.log("Digite o número do Produto: ");
                break;
            case 6:
                console.log("\n\n📈 Adicionando ao estoque 📈\n\n");
                console.log("Digite o número do Produto: ");
                numero = readlinesync.questionInt("");

                console.log("Digite a quantidade a ser adicionada: ");
                quantidade = readlinesync.questionInt("");
                break;
            case 7:
                console.log("\n\n📉 Retirando do estoque 📉\n\n");
                console.log("Digite o número do Produto: ");
                numero = readlinesync.questionInt("");

                console.log("Digite a quantidade a ser retirada: ");
                quantidade = readlinesync.questionInt("");
                break;
            default:
                console.log("\n⚠️ Opção inválida, tente novamente! ⚠️\n");
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n######### Projeto desenvolvido por: Samuel Monteiro #########");
    console.log("######### Generation Brasil - samuel.monteiro@genstudents.org #########");
    console.log("######### github.com/conteudoGeneration #########");
}

main();
