"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Escribir un algoritmo para eliminar los elementos duplicados de una lista enlazada

* Input: 1>2>2>3>4>1
* Output: 1>2>3>4
*/
// ----- IMPLEMENTACION LINKEDLISTS -------
var Node = function Node(data, nextNode) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = nextNode;
};

var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.size = 0;
  } // agregar info al final de la lista


  _createClass(LinkedList, [{
    key: "add",
    value: function add(data) {
      var newNode = new Node(data, null);

      if (!this.head) {
        // Si head esta vacio, asignamos al nodo como cabeza
        this.head = newNode;
      } else {
        // al momento de agregar un nuevo nodo, se debe iterar en toda la lista
        // hasta encontrar un nodo cuya referencia al siguiente sea nula
        var current = this.head;

        while (current.next) {
          // iteramos al siguiente elemento y a su next
          current = current.next;
        } // al encontrar un current sin un nodo siguiente, lo asignamos


        current.next = newNode;
      } // aumentamos el tamaño de la lista


      this.size++;
    } // Ingresar info a la lista en un indice especifico

  }, {
    key: "insertAt",
    value: function insertAt(data, index) {
      // revisamos que el indice sea valido
      if (index < 0 || index > this.size) return null;
      var newNode = new Node(data);
      var current = this.head; // creamos una variable anterior 

      var previous; // Si se quiere agregar el nuevo nodo a la cabeza

      if (index === 0) {
        // apuntamos el head del nuevo nodo al viejo nodo en head
        newNode.next = current;
        this.head = newNode;
      } else {
        // iteramos hasta el indice
        for (var i = 0; i < index; i++) {
          // guardamos el nodo anterior
          previous = current; // iteramos al siguiente elemento

          current = current.next;
        } // al encontrar el indice, apuntamos el nodo anterior al nuevo nodo


        previous.next = newNode; // apuntamos el nuevo nodo al nodo siguiente del actual

        newNode.next = current;
      }
    } // imprime la lista enlazada

  }, {
    key: "print",
    value: function print() {
      // si esta vacia devolvemos vacio
      if (this.size === 0) return 'Empty list';
      var current = this.head;
      var result = '';

      while (current) {
        // recorremos
        result += "".concat(current.data, " => ");
        current = current.next;
      }

      result += "X";
      return result;
    }
  }, {
    key: "removeData",
    value: function removeData(dataToRemove) {
      var current = this.head;
      var previous = null; //siempre y cuando current no sea nulo

      while (current) {
        if (current.data == dataToRemove) {
          // si no tiene valor anterior, es el head
          if (!previous) {
            this.head = current.next;
          } else {
            // el sig valor del anterior será igual al sig valor del actual
            previous.next = current.next;
          }

          this.size--;
          return current.data; // devuelve lo eliminado
        } // si no lo encontramos


        previous = current;
        current = current.next;
      }

      return null;
    } // eliminar basado en el indice y no en su valor

  }, {
    key: "removeFrom",
    value: function removeFrom(index) {
      if (index < 0 || index > this.size) return null;
      var current = this.head;
      var previous = null; // si se quiere eliminar el primer valor de la lista (head)

      if (index === 0) {
        // asignamos una nueva head
        this.head = current.next;
      } else {
        for (var i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      this.size--; // la lista disminuira su tamaño

      return current.data; // devuelve lo eliminado
    } // la lista esta vacia? 

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      if (this.size === 0) return true;
      return false;
    } // obtener tamaño

  }, {
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }]);

  return LinkedList;
}();

var linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(1); // ----- IMPLEMENTACION LINKEDLISTS -------

var findRepeat = function findRepeat(list) {
  // VAmos a ir poniendo los valores en un hashset a medida
  // que recorremos, si el mismo ya existe en este hash, lo sacamos
  var foundValues = new Set(); // agregamos el primer valor

  var current = list.head; // Type Node

  foundValues.add(current.value);

  while (current != null && current.next !== null) {
    // add devuelve true si se puedo aniadir, si no, devuelve false
    // entonces como no admite repetidos, si esta repetido, arroja false
    if (foundValues.add(curent.next.value)) {
      current.next = current.next.next;
    }

    current = (_readOnlyError("current"), current.next);
  }
};

console.log(findRepeat(linkedList));