const isSameTree = (treeOne, treeTwo) => {

    //  Si el arbol uno y el arbol 2 son nulos
    if (treeOne === null && treeTwo === null) {
        return true;
    }
    // si alguno de los dos termina siendo null
    if (treeOne === null || treeTwo === null) {
        return false;
    }
    // si los valores en donde estamos apuntando ahora NO son iguales
    if (treeOne.val !== treeTwo.val) {
        return false;
    }
    // recursion, llamar a la misma funcion con los hijos de cada arbol
    return isSameTree(treeOne.left, treeTwo.left) && isSameTree(treeOne.right, treeTwo.right);
}

// T = 0(min(treeOne, treeTwo))
