/*
  * This file complements solution.js as practice in Typescript

  Write three functions:
    - myMap(), which should mimic Array.prototype.map(),
    - myFilter(), which should mimic Array.prototype.filter(), and
    - myReduce(), which should mimic Array.prototype.reduce()
*/

interface Array<T> {
  myMap(callback: T): Array<T>;
}

// * test array
const arr: number[] = [1, 2, 3, 4, 5]

/**
 * A function that mimics the native Array.prototype.map.
 * @param {Function} callback The callback function to be applied on the array elements.
 * @returns {Array} A new array containing the values at each index of the original array transformed by the callback function.
*/
Array.prototype.myMap = function(callback) {
  const newArr: number[] = []
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i], i, this)
  }

  return newArr
}

const c = (i: number): number => { return i + 2 }

console.log(arr.map(c))