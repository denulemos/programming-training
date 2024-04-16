/* Implementacion de un arbol binario en Javascript en conjunto con sus busquedas */

class Node {
    constructor(data) {
        this.value = data;
        this.left = null; // Node
        this.right = null; // Node
    }
}

class BinaryTreeTraversals {
    // Rama izquierda del nodo, a continuación el propio nodo y después la rama derecha. Se empieza por la raiz
    inOrderTraversal(node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Primero el nodo padre, despues izquierda y luego derecha
    preOrderTraversal(node) {
        if (node) {
            console.log(node.value);
            preOrderTraversal(node.left);
            preOrderTraversal(node.right);
        }
    }

    // Primero la rama izquierda, luego la derecha y luego el padre
    postOrderTraversal(node) {

        // Por cada llamada recursiva se debe identificar si el nodo no es nulo, ya que seria el ultimo nivel.
        if (node) {
            postOrderTraversal(node.left);
            postOrderTraversal(node.right);
            console.log(node.value);
        }
    }
}