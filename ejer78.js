// ------- Funcion a calcular (no es una funcion valida para ejecutar) --------------
function funChallenge(input) {
    let a = 10; // 0(1)
    a = 50 +3; // 0(1)

    for (let i = 0; i < input.length; i++) { // 0(n)
        anotherFunction(); // 0(n)
        let stranger = true; // 0(n)
        a++; // 0(n)
    }

    return a; // 0(n)
}

/*
No importa que haya dentro de la funcion anotherFunction(),
su complejidad es 0(n) ya que corre tantas veces dependiendo
del input

COMPLEJIDAD TOTAL DE LA FUNCION: 0(n)
Se toma siempre la peor posible
*/