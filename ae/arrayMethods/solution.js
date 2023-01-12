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
 * @param
 * @returns
*/
Array.prototype.myFilter = function(callback) {
  newArr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArr.push(this[i])
  }
  return newArr
}

// console.log(array.myMap(i => i + 1))
console.log(array.myFilter(i => i % 2 == 0))