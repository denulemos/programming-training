class Node {
  constructor(data) {
    this.data = data; // Data del nodo
    this.left = null; 
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(data) {
    this.root = null; // Por defecto el arbol no tiene raiz
  }

  // Insertar datos en el arbol
  insert(data) {
    // Creamos el nodo
    let newNode = new Node(data);

    if (this.root === null) {
      // Si no tenemos aun un root, establecemos este nodo como raiz
      this.root = newNode;

    } else {
      // A partir del root, buscarle un lugar al nodo
      this.insertNode(this.root, newNode);
    }
  }

  insertNode (node, newNode) {
     // Si el dato del nodo es menor que el dato del nodo actual, entonces insertamos en el lado izquierdo
    if (newNode.data < node.data) {
      if (node.left === null) { // ¿Es un nodo hoja (sin hijos)?
        node.left = newNode; // Si lo es, insertamos el nodo nuevo 
      } else {
        // Recursion
        this.insertNode(node.left, newNode); // Se va a buscar lugar usando como base el nodo evaluado
      }
    } else {
      // Si el dato del nodo es mayor que el dato del nodo actual, entonces insertamos en el lado derecho
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Devuelve los elementos en orden de menor a mayor a partir de un nodo
  inOrder(node, fn) { // Traversal
    // Mientras el nodo no sea nulo
    if (node !== null) {
      this.inOrder(node.left, fn);
      // llamamos a la funcion que nos llega por param mandando al nodo
      fn.call(null, node);
      this.inOrder(node.right, fn);
    }
  }

  // es lo MISMO que inOrder pero ejecutamos la funcion en otro lado
  preOrder(node, fn) { // Traversal
    // Realiza un recorrido inverso al inOrder
    if (node !== null) {
      fn.call(null, node);
      this.inOrder(node.left, fn);
      this.inOrder(node.right, fn);
    }
  }

    // Ejecuta el orden al final
    postOrder(node, fn) { // Traversal
      if (node !== null) {
        this.inOrder(node.left, fn);
        this.inOrder(node.right, fn);
        fn.call(null, node);
      }
    }
  
  // Buscar un nodo en el arbol
  searchNode(nodeToStart, nodeToFind) { // recibe desde cual nodo se empieza a buscar, y cual hay que buscar
    // No existe el nodo
    if (nodeToStart == null) return null;

    // Si el nodo a buscar es menor al nodo desde donde se comienza
    if (nodeToFind < nodeToStart.data ) {
      // Buscamos a la izquierda
      this.searchNode(nodeToStart.left, nodeToFind);
    }
    else {
      // Si el nodo a buscar es mayor al nodo desde donde se comienza
      if (nodeToFind > nodeToStart.data) {
        // Buscamos a la derecha
        this.searchNode(nodeToStart.right, nodeToFind);
      }
      // Cae en este else si son iguales
      else {
        return nodeToStart;
      }
    }
  }

  // getter de root
  getRootNode(){
    return this.root;
  }
}

module.exports = {Node, BinarySearchTree}