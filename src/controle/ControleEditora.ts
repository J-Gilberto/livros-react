/* (2°) Codifique o controlador de editoras, no arquivo
ControleEditora.ts: 

a) Importar a classe Editora

b) Definir a variável editoras, como Array<Editora>,
contendo ao menos três elementos, no formato JSON

c) Criar a classe ControleEditora, contendo os métodos
getNomeEditora e getEditoras

d) Implementar o método getEditoras, com o retorno do
vetor editoras

e) Implementar o método getNomeEditora, recebendo
codEditora, do tipo numérico, e retornando o nome da
editora, através de uma operação filter sobre o vetor
editoras */


import Editora from "../modelo/Editora";

class ControleEditora {
    private editoras: Array<Editora>;
    constructor() {
        this.editoras = [
            new Editora(1, 'Editora X'),
            new Editora(2, 'Editora Y'),
            new Editora(3, 'Editora Z')
        ];
    }
    getEditoras(): Array<Editora> {
        return this.editoras;
    }
    getNomeEditora(codEditora:number): string | undefined {
        const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora)
        return editoraEncontrada ? editoraEncontrada.nome : undefined;    
    }

}
export default ControleEditora;
