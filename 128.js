/*
Es el Día de Año Nuevo y la gente está en fila para el viaje en la montaña rusa de Wonderland. 
Cada persona lleva una pegatina que indica su posición inicial en la cola, desde 1 hasta n. 
Cualquier persona puede sobornar a la persona directamente delante de ellos para intercambiar posiciones, 
pero todavía llevan su pegatina original. Una persona puede sobornar a lo sumo a otras dos.
Determina el número mínimo de sobornos que tuvieron lugar para llegar a un orden de cola dado. 
Imprime el número de sobornos, o, si alguien ha sobornado a más de dos personas, imprime "Too chaotic".
*/

function minimumBribes(q) {
    let bribes = 0;

    for (let i = q.length - 1; i >= 0; i--) {
        // Verificamos si la persona en la posición i ha sobrepasado el límite de 2 posiciones
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }

        // Contamos el número de sobrepasos que ha tenido la persona en la posición i
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }

    console.log(bribes);
}

// Ejemplo de uso
const queue = [2, 1, 5, 3, 4];
minimumBribes(queue);
