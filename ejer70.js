const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // si el elemento en este index es mayor que el elemento siguiente
            if (arr[j] > arr[j + 1]) {
                // los volteamos de lugar
                let lower = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = lower;
            }
        }
    }

    return arr;
}

module.exports = bubbleSort;