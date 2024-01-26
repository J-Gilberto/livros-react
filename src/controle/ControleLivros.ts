import Livro from "../modelo/Livro";

const livros:  Array<Livro> = [
    new Livro(1, 1, 'Livro A', 'Resumo A', ['Autor A']),
    new Livro(2, 2, 'Livro B', 'Resumo B', ['Autor B']),
    new Livro(3, 3, 'Livro C', 'Resumo 3', ['Autor C'])
];
class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }
    incluir(novoLivro: Livro): void {
        const novoCodigo = Math.max(...livros.map(1 => 1.codigo)) +1;
        
    }
}