# Ejercicios Logica de Programacion

**Work in Progress** 👷

**Give me a coffee!** <https://cafecito.app/denolemon> ☕ ☕

En este repositorio encontrarás diversos ejercicios de logica resueltos con Javascript. Son ejercicios comunes de entrevistas tecnicas y pruebas tecnicas.

## Testing

Se usará Jest para testear.

**Work in Progress** 👷
## Ejercicios

El orden no tiene ninguna razon en especifico. Para ejecutar cada ejercicio se debe hacer `node ejercicioX` en la terminal.

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

### Ejercicio 3

Dado un String y una frase decir cuantas veces se repite la palabra en esa frase dada.

* Input: `("Hola", "Hola cómo andas?")`
* Output: `1`

### Ejercicio 4

Dado un String, darle la vuelta, invertir el orden de sus caracteres. No se pueden usar metodos del lenguaje, solo estructuras de control.

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

### Ejercio 12

Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones y cada numero debe empezar por "n"

* Input: `100`
* Output:

```javascript
-n 100
-n 92
-n 84
etc..
```

### Ejercio 13

Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamaño.

* Input: `([1,2,3,4], 2)` -- Array y tamaño de divisiones
* Output: `([1,2], [3,4])`

### Ejercio 14

Dado un String y un numero, repetir el String las veces que diga el numero

* Input: `('denu', 2)` -- Palabra y veces que se debe repetir
* Output: `'denu' 'denu'`

### Ejercio 15

Dado un String devolver el caracter mas usado.

* Input: `denuuu`
* Output: `u`

### Ejercio 16

Dado una cadena de texto, devolver cuantas vocales tiene la misma.

* Input: `denu`
* Output: `2`

### Ejercio 17

Dado un numero, mostrar los numeros de 1 hasta el numero. Para multiplos de tres, escribir "denu" en lugar del numero, para los multiplos de cinco, "lemon", y si es multiplo de tres y cinco, "denolemon"

* Input: `6`
* Output: `1 2 denu 4 lemon denu`

### Ejercio 18

Dado un numero, mostrar sus divisores (hasta el número)

* Input: `5`
* Output: `1 5`

### Ejercio 19

Dado un array de objetos de peliculas (titulo, director y si fue vista), mostrar todas las peliculas indicando si la viste o no.

* Input: `[{"el señor de los anillos", "denu lemon", true}, {"avatar", "denu lemon", false}]`
* Output: `I have seen "El señor de los anillos 2" directed by Deno Lemon
I have not seen "El señor de los anillos 3" directed by Deno Lemon"`

### Ejercio 20

Dados dos String crear un algoritmo que compruebe si son anagramas entre si (Si ambos usan los mismos caracteres en una misma cantidad)

* Input: `(Riesgo, Sergio)`
* Output: `true`

### Ejercio 21

Dada un String y un numero, cortar el string mostrando X cantidad de caracteres dependiendo del numero enviado.

* Input: `(Denu, 2)`
* Output: `De`

### Ejercio 22

Dados dos numeros indicar cual es mayor y cual es menor.

* Input: `(2, 5)`
* Output: `2 is less than 5`

### Ejercio 23

Dado un String poner en mayuscula la primera letra de cada palabra en la cadena y devolverla.

* Input: `hola soy denu lemon`
* Output: `Hola Soy Denu Lemon`

### Ejercio 24

Dado un array de enteros y un numero, detectar si esa lista de numeros es una permutacion del 1 al numero aportado.

Permutacion: Secuencia de numeros en orden sin que falte ninguno entre ellos

* Input: `([1,2,3,4,5], 5)`
* Output: `true`

### Ejercio 25

Dado un String, si hay mas mayusculas, pasar todo a mayuscula, y viceversa.

* Input: `"DENu"`
* Output: `DENU`

### Ejercio 26

Dado un numero mostrar la serie de fibonacci y el resultado de la misma

* Input: `10`
* Output: `Serie completa: 0,1,1,2,3,5,8,13,21,34,55) Resultado: 55`

### Ejercio 27

Dado un numero mostrar a cuantos años, meses y dias equivale.

* Input: `920`
* Output: `2 años, 6 meses y 2 dias`

### Ejercio 28

Dado un numero devolver su factorial (La multiplifacion de todos los numeros hasta llegar a el)

* Input: `3`
* Output: `6 (1x2x3)`

### Ejercio 29

Dado un numero indicar si es capicua o no (se leen igual de izquierda a derecha y viceversa)

* Input: `2002`
* Output: `true`

### Ejercio 30

Dado un array de numeros, devolver el array sin elementos duplicados. Lo mismo si hay algun String, debemos borrarlo

* Input: `[1,1,2,2,3,3,'denu']`
* Output: `[1,2,3]`

### Ejercio 31

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

### Ejercio 32

Dado un array de numeros, devolver el mismo con sus numeros elevados al cuadrado, y se debe eliminar cualquier contenido que no sea numerico

* Input: `[5,6,7,"denu"]`
* Output: `[25,36,49]`

### Ejercio 33

Hacer un reloj que en tiempo real vaya mostrando la hora a cada segundo. Solo se puede usar Date para conseguir la hora una vez, pero no para actualizarla

* Input:

  ```javascript
  const myClock = new Clock();
  myClock.turnOn();
  ```

* Output: `14:20:16` -- Actualizar en tiempo real HH:MM:SS

### Ejercio 34

Dados dos numeros, devolver los resultados de las operaciones basicas entre ellos (suma, resta, multiplicacion, division)

* Input: `(2,2)`
* Output:

```javascript
2 + 2 = 4
2 - 2 = 0
2 * 2 = 4
2 / 2 = 1
```

### Ejercio 35

Dado un array, crear otro array con el primer y ultimo elemento del array original

* Input: `[100,200,500,600]`
* Output: `[100,600]`


## Creditos / Agradecimientos

* Los problemas los saqué en su mayoria del curso de Udemy "Master en Logica de Programacion" de Victor Robles. Recomendadisimo curso y explicacion.
* Algunos problemas los tenia guardados entre repositorios y otros salieron de Hackerrank, excelente plataforma para practicar
* Algunas resoluciones se hicieron basadas en el libro Clean Code de Robert C. Martin, excepto la parte de TDD.