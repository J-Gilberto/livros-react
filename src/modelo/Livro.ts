/* 1° Codifique as entidades do sistema (Editora e Livro):

b) No arquivo Livro.ts, criar a classe Livro, composta dos
campos: codigo e codEditora, numéricos, título e resumo,
ambos do tipo texto, e autores, como um vetor de texto*/

class Livro {
    public codigo: number;
    public codEditora: number;
    public titulo: string;
    public resumo: string;
    public autores: string[];
    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }    
}
/** Talvez use ou não a função "export defaut" */
export default Livro;