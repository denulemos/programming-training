const calls = () => {
    console.log(1);

    const promise = new Promise((resolve) => {
        console.log(2);
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then ((response) => {
                console.log('response');
                resolve(response);
            })
        console.log(3)
    })
    promise.then(() => console.log('promise'))
    console.log(4);
}

console.log(calls()); // 1,2,3,4, response, promise

// Primero resuelve el codigo sincrono y luego ejecuta el codigo asincrono y sus dependencias como then