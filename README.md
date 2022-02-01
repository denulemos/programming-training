# Ejercicios Logica de Programacion

**Work in Progress**

**Give me a coffee!** https://cafecito.app/denolemon

En este repositorio encontrarás diversos ejercicios de logica resueltos con Javascript. Son ejercicios comunes de entrevistas tecnicas y pruebas tecnicas.

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

### Ejercio 15 (TODO)

Dado un String devolver el caracter mas usado.

* Input: `denuuu`
* Output: `u`