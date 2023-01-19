/*
Implement methods on the Function prototype:
  - myCall (replicates native Function.prototype.call)
  - myApply (replicates native Function.prototype.apply)
  - myBind (replicates native Function.prototype.bind)
*/

Function.prototype.myCall = function(thisContext, ...args) {
  // const s = Symbol()
  // thisContext[s] = this
  // val = thisContext[s](...args)
  // delete thisContext[s]
  // return val
}

// * starting with Function.prototype.myBind
Function.prototype.myBind = function(thisContext, ...args) {
  const s = Symbol()
  thisContext[s] = this
  initArgs = args
  return (...args) => thisContext[s](...(initArgs + args))
}


const obj = { num: 0, c: function () { console.log(this) } }

function logNums(x, y) { console.log(`x: ${x}, y: ${y}`) }
function callback() {
  console.log('tt', this)
  return Object.keys(this).length
}


const anotherBound = callback.myBind(obj)
b = anotherBound()
console.log(b)

const bound = logNums.myBind(obj, 1)
bound(2)


// console.log(callback.myCall(obj))