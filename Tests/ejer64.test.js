const {BinarySearchTree} = require('../ejer64.js');

test("BinarySearchTree should be defined", () => {
    expect(new BinarySearchTree(10)).toBeDefined();
});

test("BinarySearchTree should work", () => {
const BST = new BinarySearchTree();

// Insertamos algunos nodos
BST.insert(9);
BST.insert(4);
BST.insert(6);
BST.insert(20);
BST.insert(170);
BST.insert(15);
BST.insert(1);

const expected = {"data": 9, "left": {"data": 4, "left": {"data": 1, "left": null, "right": null}, "right": {"data": 6, "left": null, "right": null}}, "right": {"data": 20, "left": {"data": 15, "left": null, "right": null}, "right": {"data": 170, "left": null, "right": null}}};

expect(BST.root).toEqual(expected);

/*
BinarySearchTree {                                                       
    root: Node {                                                           
        data: 9,                                                             
        left: Node { data: 4, left: [Node], right: [Node] },                 
        right: Node { data: 20, left: [Node], right: [Node] }                
    }                                                                      
}  
*/


});

test("BinarySearchTree inOrder should work", () => {
    const BST = new BinarySearchTree();
    
    // Insertamos algunos nodos
    BST.insert(9);
    BST.insert(4);
    BST.insert(6);
    BST.insert(20);
    BST.insert(170);
    BST.insert(15);
    BST.insert(1);
    
    // inicializamos el array donde guardar el resultado
    let arrayResult = [];

    // Obtenemos el root 
    const root = BST.getRootNode()
    
    // iteramos el arbol con nuestro inOrder en donde usamos una funcion anonima para guardar el nodo
    // en el array creado anteriormente
    BST.inOrder(root, (node) => arrayResult.push(node.data));

    expect(arrayResult).toEqual([1,4,6,9,15,20,170]);
});

test("BinarySearchTree preOrder should work", () => {
    const BST = new BinarySearchTree();
    
    // Insertamos algunos nodos
    BST.insert(9);
    BST.insert(4);
    BST.insert(6);
    BST.insert(20);
    BST.insert(170);
    BST.insert(15);
    BST.insert(1);
    
    let arrayResult = [];

    const root = BST.getRootNode()
    
    BST.preOrder(root, (node) => arrayResult.push(node.data));

    expect(arrayResult).toEqual([9,1,4,6,15,20,170]);
});

test("BinarySearchTree postOrder should work", () => {
    const BST = new BinarySearchTree();
    
    // Insertamos algunos nodos
    BST.insert(9);
    BST.insert(4);
    BST.insert(6);
    BST.insert(20);
    BST.insert(170);
    BST.insert(15);
    BST.insert(1);
    
    let arrayResult = [];

    const root = BST.getRootNode()
    
    BST.postOrder(root, (node) => arrayResult.push(node.data));

    expect(arrayResult).toEqual([1,4,6,15,20,170,9]);
});
