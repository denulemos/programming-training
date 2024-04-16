/*
Dado un array de listas enlazadas, cada una de ellas ordenada de forma ascendente, combinarlas para devolver una unica lista enlazada ordenada.

* Input: 1>4>5 1>3>4 2>6
* Output: 1>1>2>3>4>4>5>6
*/

// Definición de la clase ListNode para un nodo de lista enlazada
// Definición de la clase ListNode para un nodo de lista enlazada
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Función para combinar dos listas enlazadas ordenadas
function mergeTwoLists(l1, l2) {
    // Crear un nodo falso como cabeza de la lista combinada
    const dummyHead = new ListNode(-1);
    let current = dummyHead;

    // Mientras haya elementos en ambas listas
    while (l1 !== null && l2 !== null) {
        // Seleccionar el próximo nodo de la lista combinada basado en los valores de l1 y l2
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Agregar los nodos restantes de la lista l1, si los hay
    if (l1 !== null) {
        current.next = l1;
    }

    // Agregar los nodos restantes de la lista l2, si los hay
    if (l2 !== null) {
        current.next = l2;
    }

    // Retornar la cabeza de la lista combinada (ignorando el nodo falso)
    return dummyHead.next;
}

// Función para combinar múltiples listas enlazadas ordenadas
function mergeKLists(lists) {
    // Caso base: si no hay listas, retornar null
    if (lists.length === 0) {
        return null;
    }

    // Aplicar mergeTwoLists de manera recursiva para combinar las listas en grupos de dos
    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = lists[i + 1] || null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }

    // Al final, solo quedará una lista enlazada combinada
    return lists[0];
}

// Ejemplo de uso
const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const list3 = new ListNode(2);
list3.next = new ListNode(6);

const inputLists = [list1, list2, list3];
const mergedList = mergeKLists(inputLists);

// Imprimir la lista enlazada resultante
let result = "";
let current = mergedList;
while (current !== null) {
    result += current.value + (current.next ? " > " : "");
    current = current.next;
}
console.log("Output:", result); // Output: 1 > 1 > 2 > 3 > 4 > 4 > 5 > 6

// ------------------ SIN RECURSION

class ListNode {
    constructor(value) {
        this.value = value; // Valor del nodo
        this.next = null;   // Puntero al siguiente nodo
    }
}

// Función para combinar dos listas enlazadas ordenadas
function mergeTwoLists(l1, l2) {
    // Creamos un nodo falso como cabeza de la lista combinada
    const dummyHead = new ListNode(-1);
    let current = dummyHead; // Nodo actual para recorrer la lista combinada

    // Mientras haya elementos en ambas listas
    while (l1 !== null && l2 !== null) {
        // Seleccionamos el próximo nodo de la lista combinada basado en los valores de l1 y l2
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Agregamos los nodos restantes de la lista l1, si los hay
    if (l1 !== null) {
        current.next = l1;
    }

    // Agregamos los nodos restantes de la lista l2, si los hay
    if (l2 !== null) {
        current.next = l2;
    }

    // Retornamos la cabeza de la lista combinada (ignorando el nodo falso)
    return dummyHead.next;
}

// Función para combinar múltiples listas enlazadas ordenadas
function mergeKLists(lists) {
    // Caso base: si no hay listas, retornar null
    if (lists.length === 0) {
        return null;
    }

    // Iteramos hasta que solo quede una lista enlazada combinada
    while (lists.length > 1) {
        const mergedLists = []; // Array para almacenar las listas combinadas en esta iteración

        // Combinamos las listas en grupos de dos y almacenamos el resultado en mergedLists
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = lists[i + 1] || null; // Si solo hay una lista en el grupo, l2 es null
            mergedLists.push(mergeTwoLists(l1, l2)); // Combinamos las listas y agregamos el resultado a mergedLists
        }

        lists = mergedLists; // Actualizamos la lista de listas para la próxima iteración
    }

    // Retornamos la lista enlazada combinada final
    return lists[0];
}

// Ejemplo de uso
const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const list3 = new ListNode(2);
list3.next = new ListNode(6);

const inputLists = [list1, list2, list3];
const mergedList = mergeKLists(inputLists);

// Imprimimos la lista enlazada resultante
let result = "";
let current = mergedList;
while (current !== null) {
    result += current.value + (current.next ? " > " : ""); // Construimos la representación de la lista enlazada como una cadena
    current = current.next; // Pasamos al siguiente nodo
}
console.log("Output:", result); // Output: 1 > 1 > 2 > 3 > 4 > 4 > 5 > 6
