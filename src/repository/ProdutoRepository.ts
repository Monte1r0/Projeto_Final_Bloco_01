import { Produto } from "../model/Produtos";

export interface ProdutoRepository{

    // Métodos do CRUD

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(numero: number): void;
    procurarPorNome(titular: string): void,


    // Métodos Adicionais
    inserir(numero: number, valor: number): void
    retirar(numero: number, valor: number): void;  
}