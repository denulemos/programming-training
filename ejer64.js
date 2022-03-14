class binaryTree {
    constructor(){
      this.root = treeNode; // raiz del arbol
    }
  }
  
  class treeNode {
    constructor(value){
      this.value = value; // valor del nodo
      // representan ambos hijos que puede tener un nodo en un arbol binario
      this.hijo1 = null; // si ambos son nulos es un nodo hoja
      this.hijo2 = null;
    } 
  }



// -- Testeo --
let arbol = new binaryTree(); // creamos el arbol
let nodoInformacion = new treeNode("Informacion"); // creamos el nodo
arbol.root = nodoInformacion; // conectamos la raiz con el nodo

let nodoInformacionHijo = new treeNode("InformacionHijo"); // creamos el nodo hijo
arbol.root.hijo1 = nodoInformacionHijo; // conectamos el nodo con el nodo hijo

let nodoInformacionHijo2 = new treeNode("InformacionHijo2"); // creamos el nodo hijo 2
arbol.root.hijo2 = nodoInformacionHijo2; // conectamos el nodo con el nodo hijo 2

let nodoInformacionNieto = new treeNode("InformacionNieto"); // creamos el nodo nieto
arbol.root.hijo2.hijo1 = nodoInformacionNieto; // conectamos el nodo con el hijo1 del hijo2 del nodo root



