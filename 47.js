// Objeto mock
const users = [
    {name: 'denu', hobbie: ['cine', 'musica', 'bordado']},
    {name: 'deno', hobbie: ['surf', 'cocina', 'tecnologia']},
    {name: 'denu', hobbie: ['cine', 'musica', 'tecnologia']},
    {name: 'denu', hobbie: ['cocina', 'surf', 'tecnologia']},
    {name: 'denu', hobbie: ['cine', 'bordado', 'cocina']},
    {name: 'denu', hobbie: ['cine', 'musica', 'tecnologia']},
    {name: 'denu', hobbie: ['surf', 'cocina', 'bordado']},
    {name: 'denu', hobbie: ['bordado', 'musica', 'cocina']},
];

const getHobbiesCount = (users) => {
    let hobbiesMap = {};

    for (object of users){
        for (hobbie of object.hobbie){
            hobbiesMap[hobbie] = (hobbiesMap[hobbie] || 0) + 1;
        }
    }

    return hobbiesMap;
}

module.exports = getHobbiesCount;