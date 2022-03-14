const merge = (arr1, arr2) => {
    let results = [];

    // mientras ambos array sigan teniendo items
    while (arr1.length && arr2.length) {
        // Comparamos de a primeros elementos
        if (arr1[0] < arr2[0]) {
            results.push(arr1.shift());
        } else {
            results.push(arr2.shift());
        }
    }

    // Si algun array todavia tiene elementos lo agregamos al resultado
    return [...results, ...arr1, ...arr2] // combinamos todo
}

const mergeSort = (arr) => {
    // Si el array ya es lo suficientemente chico lo devolvemos
     if (arr.length == 1) {
         return arr;
     }

    // Dividimos el array en dos mitades
    let mid = Math.floor(arr.length / 2); // divimos el largo del array en dos

    // creamos array con cada mitad
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);

    // recursion con ambos array resultantes al merge
    return merge(mergeSort(arr1), mergeSort(arr2));

}