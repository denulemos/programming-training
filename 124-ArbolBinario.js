/*
Dada la raiz de un arbol binario, devolver el arbol invertido.

* Input:  4
        /   \
       2     7
      / \   / \
     1   3 6   9

* Output: 4
        /   \
       7     2
      / \   / \
    9   6 3    1
*/

const invertTree = (root) => {
    if (root == null) return null;
    
    let temporal = root.left;

    // Guardamos en el subarbol izquierdo el derecho invertido
    root.left = invertTree(root.right);
    // Guardamos en el subarbol derecho el izquierdo invertido
    root.right = invertTree(temporal);

    return root;
}