'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  //180
  //
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  /*
  1. debemos guardar nuestros factores en un arreglo, el arreglo debería iniciar en 1
  2. Iniciar una variable en 2 --> divisor
  3. Necesitamos descomponer nuestro número recibido por parámetro
  4. cómo lo hacemos? while...
  5. caso base o caso de corte --> num > 1 o num !== 1
  6. Qué hacemos dentro del while?
    - nuestra división sea exacta
    - si es exacta, pusheamos divisores
    - dividimos nuestro número por el divisor.
    - si no es exacta --> divisor++
  */
  let factores = [1];
  let divisor = 2; //3--> 4  --> 5
  while (num > 1) {
    //180 --> 90 -->45 -->15 --> 5
    if (num % divisor === 0) {
      //180/2-->0? --- 90/2-->0? --45/2-->0? -- 45/3-->0? -->15/3 = 0 --- 15/3-->0?
      factores.push(divisor); //factores = [1,2,2,3,3,5]
      num /= divisor; //90 --> 45 --> 15 --> 5 --> 1
      //num = num / divisor
    } else {
      divisor++; //2 + 1 = 3 --> 3 + 1 = 4 --> 4 + 1 = 5
    }
  }
  return factores; //[1,2,2,3,3,5]
}
//O(nlogn)
// console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  1. va comparando de a dos los valores (i --> i + 1)
  2. si el que está en la posición i es más grande que i + 1 --> intercambiamos
  3. Deberíamos guardar el valor en una variable auxilar antes de sobreescribirlo
  4. Si detecta que el arreglo terminó debemos cortar.
  */

  let bandera = true;
  while (bandera) {
    bandera = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        bandera = true;
      }
    }
  }
  return array;
}
// console.log(bubbleSort([5, 1, 4, 2, 8]));
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  Va "sacando" los valores de mi arreglo y vamos comparando con los de atrás
  Cuando entrego este valor que saqué? cuando llegue a una posición cero o cuando llegue a un valor menor o más chico.
  Tener dos punteros en el que i va a iniciar en el índice 1 y j va a iniciar en el índice cero.
  */
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}

// console.log(insertionSort([5, 1, 4, 2, 8]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  Debemos ir buscando el valor mínimo o más pequeño de nuestro arreglo
  para ubicarlo de izq a derecha o al principio de nuestro arreglo
  
  Necesitamos dos punteros, una variable --> me va a guardar el valor mínimo, sin olvidarnos de la variable aux
  */
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
