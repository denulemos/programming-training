/*
Dado un arbol, devolver una lista enlazada de los nodos de cada nivel. Si el arbol tiene N niveles se devuelven N listas enlazadas

* Input:  3
        /   \
       9     20
            /  \
           15   7

* Output: 3 
          9>20
          15>7
*/

// Definición de la clase TreeNode para un árbol binario
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Definición de la clase ListNode para una lista enlazada
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Función para recorrer el árbol por niveles y devolver una lista enlazada de nodos para cada nivel
function levelLinkedList(root) {
    if (!root) return [];

    // Resultado: una lista de listas enlazadas para cada nivel
    const result = [];

    // Cola para realizar el recorrido por niveles
    const queue = [root];

    while (queue.length > 0) {
        // Tamaño actual de la cola (número de nodos en el nivel actual)
        const levelSize = queue.length;
        // Nodo sentinela para la lista enlazada del nivel actual
        const dummy = new ListNode(null);
        // Puntero para recorrer la lista enlazada del nivel actual
        let current = dummy;

        for (let i = 0; i < levelSize; i++) {
            // Extraer el primer nodo de la cola
            const node = queue.shift();

            // Agregar el valor del nodo a la lista enlazada del nivel actual
            current.next = new ListNode(node.value);
            current = current.next;

            // Agregar los hijos del nodo a la cola para continuar el recorrido
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Agregar la lista enlazada del nivel actual al resultado
        result.push(dummy.next);
    }

    return result;
}

// Crear un árbol binario de ejemplo
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Ejemplo de uso
const lists = levelLinkedList(root);
console.log(lists);
