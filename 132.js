/*
Se tiene un objeto con nombres y cantidad de llamadas. 
Devolver un objecto con la cantidad de llamadas acumuladas y por nombre.

* Input: [{name: "denu", numOfCalls: 7}, {name: "pedro", numOfCalls: 3}, {name: "denu", numOfCalls: 2}]
* Output: {denu: 9, pedro: 3}
*/

const calls = [
    {name: "denu", numOfCalls: 6},
    {name: "juan", numOfCalls: 4},
    {name: "pedro", numOfCalls: 7},
    {name: "denu", numOfCalls: 4},
    {name: "laura", numOfCalls: 4},
    {name: "pou", numOfCalls: 9},
    {name: "leo", numOfCalls: 17},
]

const orderByCall = (listToOrder) => {
    let sortedArray = [];

    // Convierto el objeto a Array
    for (const name in listToOrder) {
        sortedArray.push({name: name, numOfCalls: listToOrder[name]});
    }

    // Ordenamos
    sortedArray = sortedArray.sort((a, b) => b.numOfCalls - a.numOfCalls);
    return sortedArray;
}

const makeObject = (calls) => {
    const totalCallsPerPerson = calls.reduce((callsByName, item) => {
        const currentName = item.name;
        // Si el objeto posee currentName como property, sumamos
        if (callsByName.hasOwnProperty(currentName)) {
            callsByName[currentName] = callsByName[currentName] + item.numOfCalls;
        }
        // Si no, agregamos
        else {
            callsByName[currentName] = item.numOfCalls;
        }

        // Devuelve el acumulador donde estoy haciendo el proceso, y lo asigno a totalCallsPerPerson
        return callsByName;
    }, {})

    // ordenar
    const result = orderByCall(totalCallsPerPerson);

    return result;
}

console.log(makeObject(calls)); // { denu: 10, juan: 4, pedro: 7, laura: 4, pou: 9, leo: 10 }