const citiesList = [
    'buenos aires',
    'italy',
    'cordoba',
    'santa fe',
    'saraza',
    'buenos aires',
    'santiago',
    'saraza',
    'buenos aires',
    'buenos aires',
    'santa fe',
    'buenos aires',
    'saraza',
    'buenos aires',
    'italy',
    'cordoba',
    'saraza',
    'santa fe',
    'santa fe',
    'santa fe',
    'italy',
    'santa fe',
    'saraza',
    'santa fe',
    'saraza',
    'milan',
    'italy',
    'milan',
    'milan',
    'cordoba',
    'cordoba',
    'italy',
    'cordoba',
    'buenos aires',
]

const mostOcurCities = () => {
    const cities = {};
    citiesList.forEach(city => {
        // si no esta en el objeto, lo agregamos, si esta, sumamos su valor
        cities[city] = !cities[city] ? 1 : cities[city] + 1;
    })

    // convertimos el objeto a array para ordenarlo 
    return Object.keys(cities).map(city => ({name: city, count: cities[city]})).sort((a, b) => b.count - a.count).slice(0, 4);
}

console.log(mostOcurCities());