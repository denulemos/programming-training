const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i ++) {
        // asumimos que el elemento i es el menor de todo el array
        let indexMin = 1;

        // recorremos el array desde el elemento i hasta el final para probar esto
        for (let j = i + 1; j < arr.length; j++) {
            // si el elemento j es menor que el elemento i, lo guardamos en indexMin
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }

        // si indexMin no termino teniendo el mismo valor que el i que guardamos al principio
        if (indexMin !== i) {
            // auxiliar
            let lower = arr[indexMin];

            // los damos vuelta
            arr[indexMin] = arr[i];
            arr[i] = lower;
        }
    }

    return arr;
}

module.exports = selectionSort;