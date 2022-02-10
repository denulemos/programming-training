const propertyExists = (object, propToSearch) => {
    return typeof object[propToSearch] !== 'undefined';
}

module.exports = propertyExists;