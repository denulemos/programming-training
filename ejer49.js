const propertyExists = (object, propToSearch) => {
    return typeof object[propToSearch] !== 'undefined';
}

console.log(propertyExists({name: 'denu'}, 'name')); // true