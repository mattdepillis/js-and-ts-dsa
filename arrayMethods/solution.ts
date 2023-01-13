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
  myFilter<U>(callbackfn: (value: number, i: number, array: T[]) => U, thisArg?: any): T[]

  /* myReduce */
  myReduce<U>(callbackfn: (acc: any, value: any, i: number, array: T[]) => U, thisArg?: any): any
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


/**
 * A function that mimics the native Array.prototype.filter.
 * @param {Function(number, number, T[])} callback The callback function to be applied on the array elements.
 * @returns {Array<T>} A new array containing the values at each index of the original array transformed by the callback function.
*/
Array.prototype.myFilter = function (callback) {
  const newArr: any[] = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) newArr.push(this[i])
  }
  return newArr
}

/**
 * A function that mimics the native Array.prototype.reduce.
 * @param {Function} callback The callback function to be applied on the array elements.
 * @param {any} initialValue the initial value of the accumulator
 * @returns {any} The accumulated value of the accumulator initialValue.
*/
Array.prototype.myReduce = function(callback, initialValue) {
  let start: number = (initialValue === undefined) ? 1 : 0
  if (!initialValue && this.length > 0) initialValue = 0

  for (let i = start; i < this.length; i++) initialValue = callback(initialValue, this[i], i, this)
  return initialValue
}

console.log(arr.myMap((i: number): boolean => i == 2))
console.log(arr.myFilter((i: number): boolean => i % 2 == 0))
console.log(arr.myReduce((acc: number, value: number): number => acc + value, 0)) // 14