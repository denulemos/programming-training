class Node {
    constructor(data) {
      this.data = data; // Data del nodo
      this.children = []; // Puede tener varios hijos como la memoria permita
    }
}

class SearchTree {
    constructor(data) {
      this.root = null; // Por defecto el arbol no tiene raiz
    }

    // inyectamos tantos nodos como queramos sin limite
    insertNode (node, data) {
        // creamos un nuevo nodo
        const newNode = new Node(data);
        // si el root no tiene hijos, este nodo pasará a serlo
        if (this.root === null) this.root = newNode;
        // si no, lo agregamos al array de nodos hijos
        node.children.push(newNode);
    }

    
}

module.exports = {Node, SearchTree}