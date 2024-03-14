function torresHanoi(n, origen, destino, auxiliar) {
    if (n === 1) {
        console.log(`Mover disco ${n} de ${origen} a ${destino}`);
    } else {
        torresHanoi(n - 1, origen, auxiliar, destino);
        console.log(`Mover disco ${n} de ${origen} a ${destino}`);
        torresHanoi(n - 1, auxiliar, destino, origen);
    }
}

// Llamada de ejemplo
torresHanoi(3, 'A', 'C', 'B');
