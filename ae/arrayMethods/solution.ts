/*
  * This file complements solution.js as practice in Typescript

  Write three functions:
    - myMap(), which should mimic Array.prototype.map(),
    - myFilter(), which should mimic Array.prototype.filter(), and
    - myReduce(), which should mimic Array.prototype.reduce()
*/

interface Array<T> {
  /* myMap takes a callback function with three possible params -- value, i, and array -- and
  returns a brand new array of same length with each index modified accordingly by the callback */
  myMap<U>(callbackfn: (value: number, i: number, array: T[]) => U, thisArg?: any): T[]

  /* myFilter */
}

// * test array
const arr: number[] = [1, 2, 3, 4, 5]

/**
 * A function that mimics the native Array.prototype.map.
 * @param {Function(number, number, T[])} callback The callback function to be applied on the array elements.
 * @returns {Array<T>} A new array containing the values at each index of the original array transformed by the callback function.
*/
Array.prototype.myMap = function(callback) {
  const newArr: any[] = []
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i], i, this)
  }

  return newArr
}

console.log(arr.myMap((i: number): boolean => i == 2))