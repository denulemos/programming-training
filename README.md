# Ejercicios Logica de Programacion

**Work in Progress** 👷

**Give me a coffee!** <https://cafecito.app/denolemon> ☕ ☕

En este repositorio encontrarás diversos ejercicios de logica resueltos con Javascript. Son ejercicios comunes de entrevistas tecnicas y pruebas tecnicas.

¿Alguna duda? Me podés encontrar en Twitter como `@DenoKennedy`

## Testing

Instrucciones para Tests dentro de la carpeta `Tests`

## Ejercicios

El orden no tiene ninguna razon en especifico.

### Ejercicio 1

Dado un numero devolver su tabla de multiplicar completa. Por ejemplo:

* Input: `5`
* Output:

```javascript
Tabla del 5
5 x 1 = 5
5 x 2 = 10
(...)
```

### Ejercicio 2

Dado un String comprobar si es un palindromo o no (se leen igual del derecho y del revés), por ejemplo Bob, Pop, etc...
No tener en cuenta espacios ni simbolos.

* Input: `"otto"`
* Output: `true`

Posee dos soluciones. Una validada con metodos de JS y otro con manejos de datos.

Pueden venir strings con todo tipo de caracteres y espacios. Un caso de uso quedo sin funcionar, a corregir.

### Ejercicio 3

Dado un String y una frase decir cuantas veces se repite la palabra en esa frase dada.

* Input: `("Hola", "Hola cómo andas?")`
* Output: `1`

### Ejercicio 4

Dado un String, darle la vuelta, invertir el orden de sus caracteres. No se pueden usar metodos del lenguaje, solo estructuras de control.

Hay dos soluciones. La primera sin el uso de pila y la segunda con, dependiendo de que tipo de solucion estamos buscando.

* Input: `"hola"`
* Output: `aloh`

### Ejercicio 5

Sacar el porcentaje de un numero. Mandamos tanto el porcentaje como el numero por parametros.

* Input: `(20, 100)` -- El 20% de 100
* Output: `20`

### Ejercicio 6

Dibujar un cuadrado hueco con astericos en consola con el tamaño de lados que definamos nosotros

* Input: `4`
* Output:
  
```javascript
  * ** *
  *    *
  *    * 
  *    * 
  * ** * 
```

### Ejercicio 7

Dados dos numeros, devolver cuantos numeros impares hay ENTRE ellos

* Input: `(1, 100)`
* Output: `49`

### Ejercicio 8

Con un numero entero, invertirlo y devolverlo dado vuelta.

* Input: `56`
* Output: `65`

### Ejercicio 9

Dados dos array devolver un array con los elementos comunes entre ambos sin duplicados

* Input: `([1,2,3], [3,2,5,6])`
* Output: `[2,3]`

### Ejercicio 10

Dado un numero mostrar una escalera con escalones de guiones usando el numero para los niveles de la escalera.

* Input: `4`
* Output:
  
```javascript
  [-]
  [-][-]
  [-][-][-]
  [-][-][-][-]
```

### Ejercicio 11

Dado un String y una busqueda, censurar las coincidencias de la busqueda en el String con [-CENSURADO-]
Si ambos llegan vacios, devolver un "No se puede leer el texto y la busqueda". Y si llega un solo parametro, devolver "No se puede hacer la busqueda"

* Input: `('holi como va', 'holi)` -- Frase y palabra a censurar
* Output: `[-CENSURADO-] como va`

### Ejercicio 12

Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones y cada numero debe empezar por "n"

* Input: `100`
* Output:

```javascript
-n 100
-n 92
-n 84
etc..
```

### Ejercicio 13

Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamaño.

* Input: `([1,2,3,4], 2)` -- Array y tamaño de divisiones
* Output: `([1,2], [3,4])`

### Ejercicio 14

Dado un String y un numero, repetir el String las veces que diga el numero

* Input: `('denu', 2)` -- Palabra y veces que se debe repetir
* Output: `'denu' 'denu'`

### Ejercicio 15

Dado un String devolver el caracter mas usado.

* Input: `denuuu`
* Output: `u`

### Ejercicio 16

Dado una cadena de texto, devolver cuantas vocales tiene la misma.

* Input: `denu`
* Output: `2`

### Ejercicio 17

Dado un numero, mostrar los numeros de 1 hasta el numero. Para multiplos de tres, escribir "denu" en lugar del numero, para los multiplos de cinco, "lemon", y si es multiplo de tres y cinco, "denolemon"

* Input: `6`
* Output: `1 2 denu 4 lemon denu`

### Ejercicio 18

Dado un numero, mostrar sus divisores (hasta el número)

* Input: `5`
* Output: `1 5`

### Ejercicio 19

Dado un array de objetos de peliculas (titulo, director y si fue vista), mostrar todas las peliculas indicando si la viste o no.

* Input: `[{"el señor de los anillos", "denu lemon", true}, {"avatar", "denu lemon", false}]`
* Output: `I have seen "El señor de los anillos 2" directed by Deno Lemon
I have not seen "El señor de los anillos 3" directed by Deno Lemon"`

### Ejercicio 20

Dados dos String crear un algoritmo que compruebe si son anagramas entre si (Si ambos usan los mismos caracteres en una misma cantidad)

* Input: `(Riesgo, Sergio)`
* Output: `true`

### Ejercicio 21

Dada un String y un numero, cortar el string mostrando X cantidad de caracteres dependiendo del numero enviado.

* Input: `(Denu, 2)`
* Output: `De`

### Ejercicio 22

Dados dos numeros indicar cual es mayor y cual es menor.

* Input: `(2, 5)`
* Output: `2 is less than 5`

### Ejercicio 23

Dado un String poner en mayuscula la primera letra de cada palabra en la cadena y devolverla.

* Input: `hola soy denu lemon`
* Output: `Hola Soy Denu Lemon`

### Ejercicio 24

Dado un array de enteros y un numero, detectar si esa lista de numeros es una permutacion del 1 al numero aportado.

Permutacion: Secuencia de numeros en orden sin que falte ninguno entre ellos

* Input: `([1,2,3,4,5], 5)`
* Output: `true`

### Ejercicio 25

Dado un String, si hay mas mayusculas, pasar todo a mayuscula, y viceversa.

* Input: `"DENu"`
* Output: `DENU`

### Ejercicio 26

Dado un numero mostrar la serie de fibonacci y el resultado de la misma

* Input: `10`
* Output: `Serie completa: 0,1,1,2,3,5,8,13,21,34,55) Resultado: 55`

### Ejercicio 27

Dado un numero mostrar a cuantos años, meses y dias equivale.

* Input: `920`
* Output: `2 años, 6 meses y 2 dias`

### Ejercicio 28

Dado un numero devolver su factorial (La multiplifacion de todos los numeros hasta llegar a el)

* Input: `3`
* Output: `6 (1x2x3)`

### Ejercicio 29

Dado un numero indicar si es capicua o no (se leen igual de izquierda a derecha y viceversa)

* Input: `2002`
* Output: `true`

### Ejercicio 30

Dado un array de numeros, devolver el array sin elementos duplicados. Lo mismo si hay algun String, debemos borrarlo

* Input: `[1,1,2,2,3,3,'denu']`
* Output: `[1,2,3]`

### Ejercicio 31

Dado un numero, indicar que tipo de angulo es (recto, agudo, obtuso, etc..)

**Referencia**

* Agudos < 90
* Recto == 90
* Obtuso > 90
* Llano == 180
* Completo == 360
* Mayor a 180 < 180

* Input: `90`
* Output: `Angulo Recto`

### Ejercicio 32

Dado un array de numeros, devolver el mismo con sus numeros elevados al cuadrado, y se debe eliminar cualquier contenido que no sea numerico

* Input: `[5,6,7,"denu"]`
* Output: `[25,36,49]`

### Ejercicio 33

Hacer un reloj que en tiempo real vaya mostrando la hora a cada segundo. Solo se puede usar Date para conseguir la hora una vez, pero no para actualizarla

* Input:

  ```javascript
  const myClock = new Clock();
  myClock.turnOn();
  ```

* Output: `14:20:16` -- Actualizar en tiempo real HH:MM:SS

### Ejercicio 34

Dados dos numeros, devolver los resultados de las operaciones basicas entre ellos (suma, resta, multiplicacion, division)

* Input: `(2,2)`
* Output:

```javascript
2 + 2 = 4
2 - 2 = 0
2 * 2 = 4
2 / 2 = 1
```

### Ejercicio 35

Dado un array, crear otro array con el primer y ultimo elemento del array original

* Input: `[100,200,500,600]`
* Output: `[100,600]`

### Ejercicio 36

Dado un String, devolver cuantas consonantes y vocales tiene.

* Input: `denu`
* Output: `Consonantes: 2 Vocales: 2`

### Ejercicio 37

Dado un Array o Texto devolver el elemento o palabras que mas aparecen dentro de estos.

* Input: `[denu, denu, lemon]`
* Output: `denu`

### Ejercicio 38

Dado un numero mostrar una lista de los cuadrados de todos los numeros naturales hasta llegar al mismo.

* Input: `5`
* Output: `[ 0, 1, 4, 9, 16 ]`

### Ejercicio 39

Dado un texto comprobar que sea un email valido

* Input: `denu@gmail.com`
* Output: `true`

### Ejercicio 40

Dado un array de numeros devolver el valor mas bajo y el valor mas alto

* Input: `[1,2,3,4,5]`
* Output: `Bajo: 1 Alto:5`

### Ejercicio 41

Dado un numero, mostrar un triangulo de astericos con ese numero de filas, un arbolito de X filas.

* Input: `4`
* Output:

```javascript
   *
  ***
 *****
*******
```

### Ejercicio 42

Dado dos numeros, sacar un numero random entre ellos

* Input: `1,100`
* Output: `46` -- Random

### Ejercicio 43

Dado un array de numeros, sacar la media de todos (la suma de todos los numeros dividido por la cantidad de elementos, el promedio)

* Input: `[1,2,3]`
* Output: `3`

### Ejercicio 44

Dado un array de Strings, devolver otro con los valores que esten formados por mas de dos palabras

* Input: `["hola denu", "pastel", "rosa"]`
* Output: `["hola denu"]`

### Ejercicio 45

Dado un array de alumnos, con su nombre y su calificacion, mostrar cuantos aprobaron y cuantos no. (Aprobás con 6)

* Input: `[["Denu", 4], ["Jorge", 2], ["Mafalda", 10]]`
* Output: `2 suspensos y 1 aprobado`

### Ejercicio 46

Dado un String devolver los posibles substrings

* Input: `hola`
* Output: `['h','o','l','a','ho','la','hol','ola','hola]`

### Ejercicio 47

Dado un array de objetos devolver cuales son las aficiones mas comunes de los usuarios

* Input: `{aficiones de usuarios}`
* Output: `{informatica: 6, futbol: 4, cine: 3}`

### Ejercicio 48

Dado un string devolver las letras que se repiten solo una vez y cual es la primera

* Input: `Denu es Genial`
* Output: `[[D, U, G, I, L], D]`

### Ejercicio 49

Dado un objeto, ver si existe una propiedad en concreto o no

* Input: `(objeto, "nombre")`
* Output: `true` -- existe la prop nombre en objeto

### Ejercicio 50

Dado un numero, devolver cuantos bucles tiene. Se tiene uno cuando tiene un circulo cerrado, por ejemplo, 6 tiene un bucle, 8 tiene dos, 1 tiene cero.

* Input: `(288661)`
* Output: `6`

### Ejercicio 51

Dado un array con numeros devolver dos array, uno con los pares y otro con impares

* Input: `[2,4,5,6,7,8]`
* Output: `Pares [2,4,6,8] Impares [5,7]`

### Ejercicio 52

Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos.

Calculo hipotenusa

`√CatA^2 + CatB^2`

* Input: `(8, 10)`
* Output: `12,81`

### Ejercicio 53

Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil, expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.

`1km/h => 0,28 m/s`

* Input: `100`
* Output: `27,78`

### Ejercicio 54

Se dan dos array del mismo tamaño de numeros, y un numero como parametros. Iterando al primer array de izquierda a derecha y al segundo array de derecha a izquierda, devolver cuantas veces se obtiene un numero con los pares de numeros que son menores al tercer parametro.

* Input: `[1, 2, 3] [1, 2, 3] 31`
* Output: `2` (Porque 31 no es menor a 31, 22 es menor a 31 y 13 es menor a 31)

### Ejercicio 55

Encontrar el tamaño de la ultima palabra. Si esta vacio, devolverá 0. Si es una sola palabra, se toma el tamaño de esa sola palabra.

* Input: `Hola Mundo`
* Output: `5`

### Ejercicio 56

De un array de String, se debe devolver el prefijo mas grande que se encuentre entre las cadenas.

* Input: `["flower", "flow", "flight"]`
* Output: `fl`

Resultado si no existe prefijo

* Input: `["dog", "raccoon", "car"]`
* Output: `""`

### Ejercicio 57

De una cadena de numeros y caracteres, crear una cuenta, recibimos el Infix, creamos el Postfix y devolvemos el Prefix. La conversion seria asi:

* Input: `["2", "1", "+", "3", "*"] => ((2+1)*3) => 9`

Otro ejemplo es:

* Input: `["4", "13", "5", "/", "+"] => (4 + (13/5)) => 6`

Tenemos 3 tipos de notaciones: (Asi funcionan las calculadoras)

* Infix = (2 + 1) + 3
* Postfix = Es la expresion del Infix evaluada, tambien se le dice "Reverse Polish notation"
* Prefix = Es la respuesta de la cuenta

Hay ciertas reglas para resolver las expresiones Postfix. Para eso debemos utilizar una pila. Por ejemplo, tenemos el siguiente Infix `[2, 1, +, 3, *]`, cuando nos encontramos con numeros, los agregamos a la pila HASTA encontrarnos con un operador. Es decir, hasta el signo `+`, nuestra pila tiene dos numeros, `2, 1`, entonces, cuando llegamos al operador, realizamos la cuenta, es decir, `2 + 1`.
Luego, ese resultado lo agregamos a la pila, y seguimos. En este caso, agregamos 3, y luego nos chocamos con la multiplicacion, asi que ahi, hacemos `(2 + 1) * 3`, dando como resultado 9.

### Ejercicio 58

Dado el titulo de la columna, averiguar el numero de la columna. Estará en mayuscula.

* Input: `B`
* Output: `2` // Por su orden en el abecedario

Tambien puede venir doble, es decir

* Input: `AA`
* Output: `27` // La operacion seria 26 * 1 + 1

* Input: `AAA`
* Output: `703` // (26 *26* 1) + (26 * 1) + 1

* Input: `ZY`
* Output: `701` // (26 * 26) + 25

y asi sucesivamente...

### Ejercicio 59

Dado un string que no puede ser vacio, se podrá eliminar de el, como mucho, un solo caracter, para volverlo un palindromo valido. Tambien valida si es palindromo o no sin necesidad de quitar nada.

* Input: `abca`
* Output: `True` // Se elimina la letra C

* Input: `aba`
* Output: `True` // No se elimina nada pero es palindromo

* Input: `abcd`
* Output: `False` // No es palindromo ni eliminando ninguno

### Ejercicio 60

Diseñar un algoritmo recursivo e iterativo que devuelva la suma de los primeros N
enteros

* Input: `3`
* Output: `6` (1 + 2 + 3)

### Ejercicio 61

Diseñar un algoritmo recursivo que encuentre la suma de los enteros positivos pares
desde N hasta 2. Si N es impar imprimir un mensaje de error.

* Input: `10`
* Output: `28` (10 + 8 + 6 + 4 + 2)

### Ejercicio 62 (TODO Test)

Dados dos números enteros, A y B, calcular su potencia (AB) en forma iterativa y recursiva.

* Input: `2 2`
* Output: `4`

### Ejercicio 63 (TODO Test)

Cargar una mahuktriz de nxn elementos enteros. Mostrarla. Calcular la suma de los elementos de la diagonal principal en forma iterativa y recursiva.

* Input:

```
222
222
222
```

* Output: `6` (2 + 2 +2)  

### Ejercicio 64

¿Como se implementa un BST (Binary Search Tree) en el lenguaje en donde estas actualmente programando? Tanto su estructura como sus funciones correspondientes

### Ejercicio 65

¿Como se implementa un arbol común en el lenguaje en donde estas actualmente programando?

### Ejercicio 66

Remover todos los duplicados adyacentes de un String, de forma continuada hasta que ya no queden mas para eliminar, es decir, si de un String eliminamos los duplicados, y el resultado sigue teniendo duplicados, los seguimos eliminando.

* Input:
`aab, aaabccddd, aa, baab, Mississippi, abbaca`

* Output:
`b, abd, "", "", M, ca`

Intentar solucionarlo con el uso de una Pila o con la ayuda de un Hash.
Si el resultado es vacio, devolver "Empty String"

### Ejercicio 67

Remover todos los duplicados adyacentes de un String, de forma continuada hasta que ya no queden mas para eliminar, es decir, si de un String eliminamos los duplicados, y el resultado sigue teniendo duplicados, los seguimos eliminando.

La diferencia entre este y el ejercicio 66, es que ahora recibimos por parametros cuantos consecutivos iguales queremos eliminar.

* Input:
`(aab, 3), (aaabccddd, 3), (aa, 2), (baab,2), (Mississippi, 2), (abbaca, 2)`

* Output:
`aab, b, "", "", M, ca`

Intentar solucionarlo con el uso de una Pila o con la ayuda de un Hash.
Si el resultado es vacio, devolver "Empty String"

### Ejercicio 68

Implementar Merge y MergeSort en tu lenguaje de programacion preferido, utilizarlo con un array, ambos.

* Input:
`[100,-40,500,-124,0,21,7]`

* Output:
`[-124, -40, 0, 7, 21, 100, 500]`

### Ejercicio 69

Implementar el algoritmo de selectionSort en tu lenguaje de programacion preferido.

* Input:
`[100,-40,500,-124,0,21,7]`

* Output:
`[-124, -40, 0, 7, 21, 100, 500]`

### Ejercicio 70

Implementar el algoritmo de bubbleSort en tu lenguaje de programacion preferido.

* Input:
`[100,-40,500,-124,0,21,7]`

* Output:
`[-124, -40, 0, 7, 21, 100, 500]`

### Ejercicio 71 (TODO Test)

Implementar el algoritmo de bubbleSort en tu lenguaje de programacion preferido.

* Input:
`[100,-40,500,-124,0,21,7]`

* Output:
`[-124, -40, 0, 7, 21, 100, 500]`

### Ejercicio 71

Implementar LinkedLists y sus respectivas funciones en tu lenguaje de programacion preferido.

### Ejercicio 72

Implementar hashtables (o diccionarios) con tu lenguaje preferido.

### Ejercicio 73

Se recibe un texto y se debe devolver cuantas apariciones posee cada palabra del mismo. El mismo puede tener caracteres especiales

Se recomienda solucionar con HashTables para no complejizar su solucion (No iterar palabra por palabra)

* Input:
`hola, como estas? hola`
* Output:
`[{hola, 2}, {como, 1}, {estas, 1}]`

### Ejercicio 74 (TODO Test)

Se nos da un array de numeros positivos, desde 1 a n. Todos los numeros estan presentes menos uno, y ese numero faltante es el que debemos encontrar.
El array NO esta ordenado. NO sirve la solucion que recorre todo el array buscando el numero faltante.

* Input:
`[3,7,1,2,8,4,5]`
* Output:
`6`

### Ejercicio 75 (TODO Test)

Se nos da un array de numeros y un valor. Determinar si la suma de dos numeros del mismo dan ese valor. Si existe, devolver true, si no, false

* Input:
`[3,7,1,2,8,4,5], 9`
* Output:
`true` (5 + 4) (8 + 1) (7 + 2)

### Ejercicio 76

Se nos dan dos listas enlazadas ya ordenadas. Se debe devolver otra lista enlazada con los elementos de ambas listas pero ordenadas.

* Input:

`4 => 8 => 15 => 19 || 7 => 9 => 10 => 16`

* Output:

`4 => 7 => 8 => 9 => 10 => 15 => 16 => 19`

### Ejercicio 77 (Sin codigo, analisis)

Dada una funcion, calcular la complejidad de sus lineas y su complejidad total.

Si no tenés idea de que trata, recomiendo leer mi articulo:

<https://medium.com/@denu.a.lemos/notacion-big-0-qu%C3%A9-es-y-porque-es-tan-importante-f3f359fc0ff1?source=user_profile---------1>-------------------------------

```javascript
function funChallenge(input) {
    let a = 10; 
    a = 50 +3; 

    for (let i = 0; i < input.length; i++) { 
        anotherFunction();
        let stranger = true; 
        a++; 
    }

    return a; 
}

function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}

```

### Ejercicio 78 (Sin codigo, analisis)

Calcular la complejidad ESPACIAL de las siguientes dos funciones.

```javascript
function test(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('test');
  }
}

function arrayTimes(n) {
  let array = []
  for (let i = 0; i < n.length; i++){
    array[i] = "hola"
  }
  return array;
}
```

### Ejercicio 79 (TODO Test)

Dados dos array, devolver true o false si comparten items en común

* Input: `[1,2,3,4] [4,5,6,7]`
* Output: `true`

Tratar de NO usar los metodos nativos de JS que facilitan esto.

### Ejercicio 80 (TODO Test)

Implementar las funciones basicas (y nativas, agregar, quitar, etc..) de un Array en tu lenguaje preferido de programacion.
Tambien con clases.

### Ejercicio 81 (TODO Test)

Se nos dan dos listas ya ordenadas. Se debe devolver otra lista con los elementos de ambas listas pero ordenadas.

* Input:

`[4,6,8,9] || [3,8,10,11]`

* Output:

`[3,4,6,8,9,10,11]`

### Ejercicio 82 (TODO Test)

Dado un array, devolver el elemento que mas se repite (y si ninguno se repite, devolver undefined)

* Input:

`[2,5,2,2,2,1]`

* Output:

`2`

### Ejercicio 83 (TODO Test)

Implementar un Double Linked List en tu lenguaje favorito (Double es porque posee dos punteros, uno al siguiente nodo y otro al anterior)

### Ejercicio 84 (TODO Test)

Voltear un LinkedList

* Input: `[1 => 2 => 3]`
* Output: `[3 => 2 => 1]`

### Ejercicio 85 (TODO Test)

Encontrar el numero de fibonacci de un numero dado usando ahora recursion.

* Input: `3`
* Output: `2` 0 + 1 + 1 = 2

### Ejercicio 86 (TODO Test)

Imprimir una serie de numeros hasta el numero pasado por parametro pero usando recursion.

### Ejercicio 87 (TODO Test)

Contar los digitos de un numero usando recursion.

* Input: `33`
* Output: `2`

### Ejercicio 88 (TODO Test)

Sumar todos los digitos del numero pasado por parametro usando recursion.

* Input: `323`
* Output: `8` (3 + 2 + 3)

### Ejercicio 89

Sumar el primer numero por parametros n veces por si mismo. Resolver con recursion.

* Input: `(8, 4)`
* Output: `8` 32

### Ejercicio 90 (TODO Test)

Dados 2 Binary Tree, chequear si son iguales

* Input: `(8, 4)`
* Output: `8` 32

### Ejercicio 91 (TODO Test)

Implementar una cola en tu lenguaje de programacion preferido

### Ejercicio 92

Dado un array de numeros y un numero, devolver true si la suma de alguno de los numeros del array dan como resultado ese numero

* Input: `[5,7,1,2,8,4,3]`
* Output: `true` => 7 + 3 y 2 + 8

### Ejercicio 93 (TODO Test)

Dado un Binary Tree, resolver si es un Binary Search Tree Valido (para que lo sea, se debe cumplir la regla de que a la derecha debe ser mayor y la izquierda menor)

Se debe usar Recursion y un Inorder Transversal para resolver esto.

### Ejercicio 94

Dada una palabra y un diccionario de palabras, definir si esta palabra se puede separar en dos para formar dos palabras del diccionario.

Se recomienda usar recursion.

* Input: `"holadenu", ["hola", "denu", "ho", "la]`
* Output: "Este String puede ser segmentado"

### Ejercicio 95 (TODO Test)

Dado un String de varias palabras, voltearlas.

* Input: `Hola Mundo`
* Output: `Mundo Hola`

### Ejercicio 96

¿En que orden se va a ejecutar el codigo escrito? (Ver ejer96.js para ver la respuesta y el código)

Con SetIntervals y setTimeouts

### Ejercicio 97

¿En que orden se va a ejecutar el codigo escrito? (Ver ejer97.js para ver la respuesta y el código)

Con llamadas a servicios.

### Ejercicio 98

¿En que orden se va a ejecutar el codigo escrito? (Ver ejer98.js para ver la respuesta y el código)

Con promises, perfecto para Micro y macrotasks examples. 

### Ejercicio 99

¿Que se va a imprimir en ese codigo? (Ver ejer99.js para ver la respuesta y el codigo)

Perfecto para entender objetos.

### Ejercicio 100

Escribir una funcion que, dada una lista de ciudades, imprima las primeras 5 ciudades mas repetidas por orden de repeticiones

* Input: `['italy', 'bs as', 'denu', 'italy', 'italy', 'bs as']`
* Output: `Italy, bs as, denu` // With more cities  

# Creditos / Agradecimientos / Fuentes

* Los problemas los saqué en su mayoria del curso de Udemy "Master en Logica de Programacion" de Victor Robles. Recomendadisimo curso y explicacion.
* Algunos problemas los tenia guardados entre repositorios y otros salieron de Hackerrank, excelente plataforma para practicar
* Algunas resoluciones se hicieron basadas en el libro Clean Code de Robert C. Martin, excepto la parte de TDD.
* <https://pastranamoreno.files.wordpress.com/2012/05/ejercicios-resueltos.pdf>
