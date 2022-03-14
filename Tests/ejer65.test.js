const {SearchTree, Node} = require('../ejer65.js');

test("SearchTree should be defined", () => {
    expect(new SearchTree()).toBeDefined();
});

test("SearchTree should work", () => {
const BST = new SearchTree();
const newNode = new Node(9);
const newNodeAux = new Node(4);

// Insertamos algunos nodos
BST.insertNode(newNode, 9);
BST.insertNode(BST.getRoot(),4);

const expected = { "children": [{"children": [], "data": 4}], "data": 9};

expect(BST.getRoot()).toEqual(expected);


});





