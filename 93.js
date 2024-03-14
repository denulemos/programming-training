let analyzeBST = (root, minPossibleVal, maxPossibleVal) => {
    // si llega hasta el final, es valido
    if (!root) {
      return true;
    }
  
    // si el valor del nodo es mayor que el maximo posible, no es valido
    if (root.data < minPossibleVal || root.data > maxPossibleVal) {
      return false;
    }
  
    // recursion
    return analyzeBST(root.left, minPossibleVal, root.data) && analyzeBST(root.right, root.data, maxPossibleVal);
  };

  // Esto devuelve si es valido o no (true o false)
const isValidBST = (root) => {
    return analyzeBST(root, -Number.MAX_VALUE - 1, Number.MAX_VALUE);
};