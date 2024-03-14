function test(n) { // 0(1)
    for (let i = 0; i < n.length; i++) {
      console.log('test');
    }
}
  
  function arrayTimes(n) { // 0(n)
    let array = [] // Estamos creando una nueva data structure
    for (let i = 0; i < n.length; i++){
      array[i] = "hola"
    }
    return array;
}
