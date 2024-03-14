const mergeArrays = (arr1, arr2) => {
    const merged = [];

    // tomamos como referencia el primer item del primer array
    let i = 0, j = 0;
    let arr1Item = arr1[i], arr2Item = arr2[j];
    

    // comparamos los items del primer array con el segundo
    while (arr1Item && arr2Item) {
        if (arr1Item < arr2Item) {
            merged.push(arr1Item);
            i++;
            arr1Item = arr1[i];
            
        } 
        else if (arr1Item == arr2Item) {
            merged.push(arr1Item);
            i++;
            j++;
            arr1Item = arr1[i];
            arr2Item = arr2[j];
        }
        else {
            merged.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        }

    }

    // agregamos los items restantes
    if (arr1Item) {
        while ( i < arr1.length) {
            merged.push(arr1Item);
            i++;
            arr1Item = arr1[i];
        }
    }
    if (arr2Item) {
        while ( j < arr2.length) {
            merged.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        }
    }

    return merged;
}

console.log(mergeArrays([1, 3, 6, 8], [2, 3, 5, 8, 9, 10]));