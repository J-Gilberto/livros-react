/* (2° )Codifique o controlador de livros, no arquivo
ControleLivros.ts:
a) Importar a classe Livro

b) Definir a variável livros, como Array<Livro>, contendo
ao menos três elementos, no formato JSON

c) Criar a classe ControleLivro, contendo os métodos
obterLivros, incluir e excluir

d) Implementar o método obterLivros, com o retorno do
vetor livros

e) Implementar o método incluir, recebendo um objeto do
tipo Livro, que terá o código trocado pelo código mais alto
do vetor, incrementado de um, e depois será adicionado ao
vetor

f) Implementar o método excluir, recebendo um código
numérico, que irá encontrar o índice do livro com o código
fornecido, através de findIndex, e removê-lo com o uso de
splice */


import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
    new Livro(1, 1, 'Livro A', 'Resumo A', ['Autor A']),
    new Livro(2, 2, 'Livro B', 'Resumo B', ['Autor B']),
    new Livro(3, 3, 'Livro C', 'Resumo C', ['Autor C'])
];

class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(novoLivro: Livro): void {
        const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
    // De inicio estava dando um erro no retorno, tenho que observa onde estou errando.
export default ControleLivro;