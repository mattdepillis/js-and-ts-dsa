/*
Implement methods on the Function prototype:
  - myCall (replicates native Function.prototype.call)
  - myApply (replicates native Function.prototype.apply)
  - myBind (replicates native Function.prototype.bind)
*/

/**
 * Binds a function to a passed-through thisContext.
 * @param {Function} thisContext the item to be bound as the return function's `this` keyword
 * @param {any} args the remaining arguments to be passed down to the callback
 * @returns {Function} a new function that calls the original function with thisContext bound to the function's `this keyword
*/
Function.prototype.myBind = function(thisContext, ...args) {
  /* We use an arrow function here because it inherits the this context of the callback function
    - a regular function would inherit `this` of the global execution context
  */
  return (...extraArgs) => {
    const s = Symbol()
    thisContext[s] = this
    const rv = thisContext[s](...args, ...extraArgs)
    delete thisContext[s]
    return rv
  }
}

/**
 * Applies an object as a thisContext and additional arguments to the callback function. Args are applied by passing through an array of arguments.
 * @param {Function} thisContext the item to be bound as the return function's `this` keyword
 * @param {any} args the remaining arguments to be passed down to the callback
 * @returns {any} the return value of the callback function, given thisContext and args
*/
Function.prototype.myApply = function(thisContext, args = []) {
  return this.myBind(thisContext, ...args)()
}

/**
 * Applies an object as a thisContext and additional arguments to the callback function. Args are supplied argument by argument, separated by comma.
 * @param {Function} thisContext the item to be bound as the return function's `this` keyword
 * @param {any} args the remaining arguments to be passed down to the callback
 * @returns {any} the return value of the callback function, given thisContext and args
*/
Function.prototype.myCall = function(thisContext, ...args) {
  return this.myBind(thisContext, ...args)()
}

// test object for this binding
const obj = { num: 0, c: function () { console.log(this) } }

// functions for method testing
function logNums(x, y) {
  console.log(`this.num: ${this.num}, x: ${x}, y: ${y}`)
}
function callback() {
  console.log('tt', this)
  return Object.keys(this).length
}

// testing methods
logNums.myApply(obj, [3, 4])
logNums.myCall(obj, 5, 6)
const c = callback.apply(obj)
console.log(c)