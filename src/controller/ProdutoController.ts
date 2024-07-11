import { Produto } from "../model/Produtos";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

    // Coleção Array que vai armazenar os objetos Produto
    private listaprodutos: Array<Produto> = new Array<Produto>();

    public numero: number = 0;


    procurarPorNumero(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null )
            buscaProduto.visualizar();
        else
            console.log("\nA Produto não foi encontrado");
    }
    listarTodas(): void {
        for(let produto of this.listaprodutos){
            produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void {
        this.listaprodutos.push(produto);
        console.log("\nO produto foi cadastrada com sucesso! ")
    }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.numero);

        if (buscaProduto != null ){
            this.listaprodutos[(this.listaprodutos.indexOf(buscaProduto))] = produto;
            console.log("\nO Produto foi Atualizado com Sucesso!")
        }else
            console.log("\no Produto não foi encontrado")
    }
    deletar(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null ){
            this.listaprodutos.splice(this.listaprodutos.indexOf(buscaProduto), 1);
            console.log("\nO Produto foi Deletado com Sucesso!")
        }else
            console.log("\nO Produto não foi encontrado")
    }
    procurarPorNome(nome: string): void {
        let buscaPorNome = this.listaprodutos.filter( c =>
            c.nomeProduto.includes(nome)
       );

       buscaPorNome.forEach( produto => produto.visualizar());
    }
    inserir(numero: number, valor: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto !== null ){
            buscaProduto.depositar(valor)
                console.log("\nO Produto foi adicionado no estoque com sucesso!")
            
        }else{
            console.log("\nA Conta não foi encontrada")
        }
    }
    retirar(numero: number, valor: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto !== null ){
            if(buscaProduto.retirar(valor) === true)
                console.log("\nA Retirada foi efetuada com sucesso!")
            
            }else
            console.log("\nO Produto não foi encontrado")
    }
   
    // Métodos Auxiliares

    public gerarNumero(): number{
        return ++ this.numero;

    }

    //Buscar no Array
    public buscarNoArray(numero: number): Produto | null{
        for (let produto of this.listaprodutos){
            if (produto.numero === numero)
                return produto;
        }

        return null;

    }
} 
