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

function anotherFunChallenge(input) {
    let a = 5; // 0(1)
    let b = 10; // 0(1)
    let c = 50; // 0(1)
    for (let i = 0; i < input; i++) { //0(n)
      let x = i + 1; //0(n)
      let y = i + 2; //0(n)
      let z = i + 3; //0(n)
  
    }
    for (let j = 0; j < input; j++) { //0(n)
      let p = j * 2; //0(n)
      let q = j * 2; //0(n)
    }
    let whoAmI = "I don't know"; //0(n)
}

/*

COMPLEJIDAD TOTAL DE LA FUNCION: 0(n)
BIG 0 (4 + 5n)
Se toma siempre la peor posible
*/

