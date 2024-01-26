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
