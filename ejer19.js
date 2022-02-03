// Creamos datos de prueba
const moviesMock = [
    {title: "El señor de los anillos",
    directedBy: "Deno Lemon",
    seen: true},
    {title: "El señor de los anillos 2",
    directedBy: "Deno Lemon",
    seen: true},
    {title: "El señor de los anillos 3",
    directedBy: "Deno Lemon",
    seen: false},
    {title: "High School Musical",
    directedBy: "Deno Lemon",
    seen: false},
]

const myMovies = (movies) => {
    let returnString = ""
    for (movie of movies) {

        const {seen, title, directedBy} = movie; // Destructuramos los datos

        // Mucho de este codigo fue cortesia de Github Copilot
        if (seen) {
            returnString += `I have seen "${title}" directed by ${directedBy} \n`
        } else {
            returnString += `I have not seen "${title}" directed by ${directedBy} \n`
        }
    }

    return returnString;
}

console.log(myMovies(moviesMock));

