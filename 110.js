/* Se recibe un String con una hora en particular en formato AM/PM, 
devolver un String con esa misma hora convertida a 24hs, teniendo en 
cuenta que 12 AM son 00 en el formato de 24 hs.

Formato test copiado y pegado directo de Hackerrank
*/

const timeConversion = (s) => {
    // Separo en un array 
    const array = s.split(":");
    
    if (s.includes("AM") ) {
        // Me deshago del AM del String
        array[2] = array[2].replace("AM", '');

        // Reemplazo del 12 por cero de ser necesario
        if (array[0] == '12') {
            array[0] = '00'
        }
    }
    else {
        // Le sumo 12 horas a la hora de PM para simular el 24 hs
        if (array[0] != 12) {
            array[0] = (Number(array[0]) + 12).toString();
       }
        array[2] = array[2].replace("PM", '');
    }

    // Vuelvo a unir todo en un solo string separado por :
    return array.join(':');
}