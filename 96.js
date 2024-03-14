const print = () => {
    // 1 en la call Stack junto con la funcion en el parametro
    console.log(Math.pow(1,1)); 
    
    // asincrono, le pasamos un callback, aunque sea de cero tiene cierto delay, 
    // debera esperar a que termine de ejecutarse el codigo asincrono
    setTimeout(function() {console.log(2), 0});  // 4

    console.log(3); // 2

    // debe introducirse el callback en la cola cada 1000 ms
    var interval = setInterval(function() {
        console.log(4); // 5
        setTimeout(function(){
            console.log(5); // 7
        }, 500);
    }, 1000)

    setTimeout(function() {
        clearInterval(interval); // limpia el interval de arriba
        console.log(6); // 6
    }, 1100)

    console.log(7); // 3
}

// Try to think it first before running the code! 

console.log(print());
// 1 3 7 2 4 6 5