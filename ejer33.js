
// --- ESTA SOLUCION NO ES VALIDA PERO ES CORRECTA. SE ESTA USANDO EL OBJETO DATE MAS DE UNA VEZ ---

const fastClockNotCorrectSolution = () => {
    // Es una funcion que nos permite, mediante un callback, ejecutar una función
    setInterval(() => {
        const date = new Date();

        // Obtenemos horas minutos y segundos desde el objeto Date
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${hour}:${minutes}:${seconds}`;

    }, 1000); // Que se ejecute cada 1000 milisegundos (1 segundo)
}

// --- SOLUCION CORRECTA ---

// Creamos una clase

class clock {

    // Lo primero que se ejecuta al instanciar la clase
    constructor(){
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }

    update (seconds) {
        this.seconds += seconds;

        // actualizar segundos, si son mayor a 60, actualizar minutos y pasar a cero
        if (this.seconds >= 60) {
            this.minutes += 1;
            this.seconds = 0;
        }

        // actualizar minutos
        if (this.minutes >= 60) {
            this.hour += 1;
            this.minutes = 0;
        }

        // actualizar horas
        if (this.hour >= 24) {
            this.hour = 0;
        }
    }

    showTime() {
        this.update(1); // Actualizamos de a 1 segundo
        console.log(`${this.hour}:${this.minutes}:${this.seconds}`); // Lo mostramos
    }

    turnOn(){
        setInterval(() => {
            this.showTime(); // Mostramos la hora cada 1 segundo
        }, 1000);
    }

}

// Creamos el objeto
const myClock = new clock();
// Lo prendemos
myClock.turnOn();
