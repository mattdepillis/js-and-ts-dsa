/* Differences between regular and arrow functions in js -- Arrow */

/* Arrow functions don't define their own execution context,
meaning they simply inherit `this` from the outer function context.

This means that if an arrow function isn't nested, it'll essentially 
have an "empty" this value {} */

const testGlobal = () => console.log(this)
testGlobal() // {}

const obj = {
  testObj: () => console.log(this), // {}
  method: function() { console.log(this) }, // obj
  anotherMethod: function () {
    const fn = () => console.log(this) // inherits anotherMethod's this context
    fn()
  }
}
obj.testObj()
obj.method()
obj.anotherMethod()