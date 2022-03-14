class Node {
    constructor(data) {
      this.data = data; // Data del nodo
      this.children = []; // Puede tener varios hijos como la memoria permita
    }
}

class SearchTree {
    constructor() {
      this.root = null; // Por defecto el arbol no tiene raiz
    }

    // inyectamos tantos nodos como queramos sin limite
    insertNode (node, data) {
        // creamos un nuevo nodo
        const newNode = new Node(data);
        // si el root no tiene hijos, este nodo pasará a serlo
        this.root === null ? this.root = newNode : node.children.push(newNode);
        // si no, lo agregamos al array de nodos hijos
        
    }

    getRoot (){
      return this.root;
    }

}

module.exports = {Node, SearchTree}