/* 
  Write three functions:
    - myMap(), which should mimic Array.prototype.map(),
    - myFilter(), which should mimic Array.prototype.filter(), and
    - myReduce(), which should mimic Array.prototype.reduce()
*/

// * test array
const array = [1, 2, 3, 4, 5]


/**
 * A function that mimics the native Array.prototype.map.
 * @param {Function} callback The callback function to be applied on the array elements.
 * @returns {Array} A new array containing the values at each index of the original array transformed by the callback function.
*/
Array.prototype.myMap = function(callback) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i], i, this)
  }
  return newArr
}

/**
 * A function that mimics the native Array.prototype.filter.
 * @param {Function} callback The callback function to be applied on the array elements.
 * @returns {Array} A new array containing the values at each index of the original array transformed by the callback function.
*/
Array.prototype.myFilter = function(callback) {
  const newArr = []
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
  let start = (initialValue === undefined) ? 1 : 0
  if (!initialValue && this.length > 0) initialValue = 0

  for (let i = start; i < this.length; i++) initialValue = callback(initialValue, this[i], i, this)
  return initialValue
}

// console.log(array.myMap(i => i + 1))
// console.log(array.myFilter(i => i % 2 == 0))
console.log(array.myReduce((acc, val) => acc + val, 0))