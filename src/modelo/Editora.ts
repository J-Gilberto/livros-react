/* 1° Codifique as entidades do sistema (Editora e Livro):

a) No arquivo Editora.ts, criar a classe Editora, com os
campos codEditora, numérico, e nome, do tipo texto*/

class Editora {
    public codEditora: number;
    public nome: string
    constructor(codEditora: number, nome: string) {
        this.codEditora = codEditora;
        this.nome = nome;
    }
}
/* Talvez use ou não a função "export defaut" */
export default Editora;