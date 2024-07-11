import readlinesync = require("readline-sync");
import { colors } from "./src/util/Color";
import { Produto } from "./src/model/Produtos";
import { Varas } from "./src/model/Varas";
import { AnzolBoiaChumbo } from "./src/model/AnzolBoiaChumbo";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {

    let quantidade = 0;
    let opcao, numero, id, tipo, preco, peso, capacidadeKg, grama, preferencia: number;
    let nomeProduto, descricaoProduto, fabricante, material, modelo, lugar, item: string;
    const tipoProdutos = ['Varas', 'AnzolBoiaChumbo'];

    const produtos: ProdutoController = new ProdutoController();

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
        console.log("            3️⃣  - Buscar Produto 🔍           ");
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

                console.log("Digite o Tipo do Produto: ");
                tipo = readlinesync.keyInSelect(tipoProdutos, "", { cancel : false}) + 1;

                console.log("Digite o preço: ");
                preco = readlinesync.questionFloat("");

                console.log("Digite a Descrição do Produto: ");
                descricaoProduto = readlinesync.question("");

                console.log("Digite a quantidadedo Produto: ");
                quantidade = readlinesync.questionInt("");
                switch (tipo){
                    case 1:
                
                        console.log("Digite o Peso da Vara em Quilo Gramas: ");   
                        peso = readlinesync.questionFloat("");

                        console.log("Digite o Fabricante da Vara: ");   
                        fabricante = readlinesync.question("");

                        console.log("Digite o Material da Vara: ");   
                        material = readlinesync.question("");

                        console.log("Digite o Peso que o Produto aguenta: ");   
                        capacidadeKg = readlinesync.questionFloat("");

                        produtos.cadastrar(
                            new Varas(produtos.gerarNumero(), preco, id, tipo, nomeProduto, quantidade, descricaoProduto, peso, fabricante, material, capacidadeKg)
                        )
                        break;
                    case 2:

                        console.log("Digite o Modelo:  ");
                        modelo = readlinesync.question("");

                        console.log("Digite em qual lugar é para usar:  ");
                        lugar = readlinesync.question("");

                        console.log("Digite quantas granmas tem o produto:  ");
                        grama = readlinesync.questionInt("");

                        produtos.cadastrar(
                            new AnzolBoiaChumbo(produtos.gerarNumero(), preco, id, tipo, nomeProduto, quantidade, descricaoProduto, modelo, lugar, grama )
                        )
                        break;
                }
                break;
            case 2:
                console.log("\n\n📋 Aqui estão todos os produtos 📋\n\n");
                    produtos.listarTodas();
                break;
            case 3:
                console.log("\n\n🔍 Procurando produto... 🔍\n\n");
                console.log("\n\nVoce tem Preferencia em Buscar pelo Nome do Produto digite (1)  Buscar pelo numero do Produto Digite (2)")
                preferencia = readlinesync.questionInt("")
                switch(preferencia){
                    case 1:
                        console.log("Digite o nome da produto: ");
                        item = readlinesync.question("");

                        produtos.procurarPorNome(item);
                    break
                    case 2:
                        console.log("Digite o numero do Produto: ")
                        numero = readlinesync.questionInt("")
        
                        produtos.procurarPorNumero(numero);
                    break;

                }
                break;
            case 4:
                console.log("\n\n✏️ Atualize os dados do produto ✏️\n\n");
                console.log("Digite o número do Produto: ");
                numero = readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(numero);

                if (produto){

                    console.log("Digite o ID do Produto: ");
                    id = readlinesync.questionInt("");
    
                    console.log("Digite o Nome do Produto: ");
                    nomeProduto = readlinesync.question("");
                
                    console.log("Digite o preço: ");
                    preco = readlinesync.questionFloat("");
    
                    console.log("Digite a Descrição do Produto: ");
                    descricaoProduto = readlinesync.question("");
    
                    console.log("Digite a quantidadedo Produto: ");
                    quantidade = readlinesync.questionInt("");

                    switch (tipo){
                        case 1:
                    
                        console.log("Digite o Peso da Vara em Quilo Gramas: ");   
                        peso = readlinesync.questionFloat("");

                        console.log("Digite o Fabricante da Vara: ");   
                        fabricante = readlinesync.question("");

                        console.log("Digite o Material da Vara: ");   
                        material = readlinesync.question("");

                        console.log("Digite o Peso que o Produto aguenta: ");   
                        capacidadeKg = readlinesync.questionFloat("");

                        produtos.atualizar(
                            new Varas(produtos.gerarNumero(), preco, id, tipo, nomeProduto, quantidade, descricaoProduto, peso, fabricante, material, capacidadeKg)
                        )
                        break;
                        case 2:
    
                        console.log("Digite o Modelo:  ");
                        modelo = readlinesync.question("");

                        console.log("Digite em qual lugar é para usar:  ");
                        lugar = readlinesync.question("");

                        console.log("Digite quantas granmas tem o produto:  ");
                        grama = readlinesync.questionInt("");

                        produtos.atualizar(
                            new AnzolBoiaChumbo(produtos.gerarNumero(), preco, id, tipo, nomeProduto, quantidade, descricaoProduto, modelo, lugar, grama )
                        )
                        break;
                    }
                }else{
                    console.log(`\n A Produto numero ${produto} não existe`)
                }

                break;
            case 5:
                console.log("\n\n❌ Removendo produto ❌\n\n");
                console.log("Digite o número do Produto: ");
                numero = readlinesync.questionInt("")

                produtos.deletar(numero);
                break;
            case 6:
                console.log("\n\n📈 Adicionando ao estoque 📈\n\n");
                console.log("Digite o número do Produto: ");
                numero = readlinesync.questionInt("");

                console.log("Digite a quantidade a ser adicionada: ");
                quantidade = readlinesync.questionInt("");

                produtos.inserir(numero, quantidade);
                break;
            case 7:
                console.log("\n\n📉 Retirando do estoque 📉\n\n");
                console.log("Digite o número do Produto: ");
                numero = readlinesync.questionInt("");

                console.log("Digite a quantidade a ser retirada: ");
                quantidade = readlinesync.questionInt("");
                produtos.retirar(numero, quantidade);
                break;
            default:
                console.log("\n⚠️ Opção inválida, tente novamente! ⚠️\n");
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n=+=+=+=+=+ Projeto desenvolvido por: Samuel Monteiro =+=+=+=+=+");
    console.log("=+=+=+=+=+ Generation Brasil - samuel.monteiro@genstudents.org =+=+=+=+=+");
    console.log("=+=+=+=+=+ github.com/conteudoGeneration =+=+=+=+=+");
}

main();
