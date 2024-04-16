// Implementar en Javascript un Heap con todos sus metodos correspondientes

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Función para obtener el índice del padre de un nodo en el heap
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Función para obtener el índice del hijo izquierdo de un nodo en el heap
    leftChildIndex(index) {
        return index * 2 + 1;
    }

    // Función para obtener el índice del hijo derecho de un nodo en el heap
    rightChildIndex(index) {
        return index * 2 + 2;
    }

    // Función para intercambiar dos elementos en el heap
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Función para insertar un nuevo elemento en el heap
    insert(value) {
        // Agregar el nuevo elemento al final del heap
        this.heap.push(value);
        // Reajustar el heap para mantener la propiedad de heap
        this.heapifyUp();
    }

    // Función para reajustar el heap hacia arriba (hacia la raíz)
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = this.parentIndex(currentIndex);
            // Si el valor del nodo actual es menor que el valor del padre, intercambiamos los nodos
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break; // Si el valor del nodo actual es mayor o igual al valor del padre, el heap está en orden
            }
        }
    }

    // Función para extraer el elemento mínimo (raíz) del heap
    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const minValue = this.heap[0];
        // Reemplazar la raíz con el último elemento del heap
        this.heap[0] = this.heap.pop();
        // Reajustar el heap para mantener la propiedad de heap
        this.heapifyDown();
        return minValue;
    }

    // Función para reajustar el heap hacia abajo (hacia las hojas)
    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            const leftChildIndex = this.leftChildIndex(currentIndex);
            const rightChildIndex = this.rightChildIndex(currentIndex);
            let smallestIndex = currentIndex;

            // Encontrar el índice del hijo con el valor más pequeño
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            // Si el valor del nodo actual es mayor o igual que los valores de los hijos, el heap está en orden
            if (smallestIndex === currentIndex) {
                break;
            }

            // Si el valor del nodo actual es mayor que el valor del hijo más pequeño, intercambiamos los nodos
            this.swap(currentIndex, smallestIndex);
            currentIndex = smallestIndex;
        }
    }
}

// Ejemplo de uso de MinHeap
const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(1);
minHeap.insert(5);
minHeap.insert(4);
console.log(minHeap.heap); // Output: [1, 2, 3, 5, 4]

console.log(minHeap.extractMin()); // Output: 1
console.log(minHeap.heap); // Output: [2, 4, 3, 5]
