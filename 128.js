/*
Es el Día de Año Nuevo y la gente está en fila para el viaje en la montaña rusa de Wonderland. 
Cada persona lleva una pegatina que indica su posición inicial en la cola, desde 1 hasta n. 
Cualquier persona puede sobornar a la persona directamente delante de ellos para intercambiar posiciones, 
pero todavía llevan su pegatina original. Una persona puede sobornar a lo sumo a otras dos.
Determina el número mínimo de sobornos que tuvieron lugar para llegar a un orden de cola dado. 
Imprime el número de sobornos, o, si alguien ha sobornado a más de dos personas, imprime "Too chaotic".
*/

// Incompleto
// ir odenando a medida que voy chequeando 
// loop que siga hasta que ambas listas esten ordenadas
function minimumBribes(q) {
    let bribes = 0;
    const sorted = [...q];
    sorted.sort((a, b) => a - b);
    const array = [];

//
   for(let i = 0; i < q.length; i ++) {
       array.push(q[i] - sorted[i]);
   }
   
   bribes = array.filter(element => element > 0).sort((a, b) => a - b);
   
   if (bribes[bribes.length - 1] > 2) {
       console.log("Too chaotic");
       return;
   }
   
   
   console.log(bribes.reduce((acc, element) => acc + element));
   return;
}

// Ejemplo de uso
const queue = [2, 1, 5, 3, 4];
minimumBribes(queue);
