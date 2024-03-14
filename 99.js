const print = () => {
    const a = [1];
    const b = a; // Es una referencia al objeto "a", no una copia
    b.push(2); // modificará la referencia 
    console.log(a, b);
}



console.log(print()); // [ 1, 2 ] [ 1, 2 ]

console.log(context()); 