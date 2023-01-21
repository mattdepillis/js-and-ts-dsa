/* Differences between regular and arrow functions in js -- Regular */


/* 4 ways to invoke a regular function */

/*
 * 1. Simple Invocation
  * this = the global context (would be = window in the browser)
*/
function fn() {
  console.log(this)
}
// fn() // logs the global context variable

/*
 * 2. Method Invocation
  * this = the object owning the method
*/
const obj = {
  method: function () { console.log(this) }
}
// obj.method() // logs obj ({ method: [Function: method] })

/*
 * 3. Indirect Invocation
  * this = the thisContext passed to the indirect invocation
*/
const newContext = { value: "Z" }
// fn.apply(newContext) // logs newContext ( { value: "Z" } )
// fn.call(newContext) // logs newContext ( { value: "Z" } )


/*
 * 4. Constructor Invocation
  * this = a new instance of the constructor
*/
function Fn() {
  console.log(this)
}
// new Fn() // Fn {}



function test() {
  console.log('here', this)
  t = function nested() {
    console.log('t', this)
  }
  t()
}
// test()
const newObj = { num: 1 }
test.apply(newObj)