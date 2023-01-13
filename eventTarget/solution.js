/*
  Create a class EventTarget that mimics the EventTarget interface on the DOM, and 3 of its methods:
    - addEventListener -- add a callback to a given element
    - removeEventListener -- remove a callback from a given element
    - dispatchEvent -- execute the callbacks assigned to a given element
*/

class EventTarget {

  addEventListener(name, callback) {
    if (!this[name]) this[name] = []

    for (let c of this[name]) {
      if (callback === c) return
    }

    this[name].push(callback)
  }

  removeEventListener(name, callback) {
    for (let c of this[name]) {
      if (callback === c) this[name].shift(c)
    }
  }

  dispatchEvent(name) {
    if (!this[name]) return
    const callbacks = this[name]
    for (let callback of callbacks) callback()
  }

}

const target = new EventTarget()
const logName = () => console.log("Matt")
const logHello = () => console.log("Hello")

target.addEventListener('n', logName)
target.addEventListener('n', logHello)
target.dispatchEvent('n')
// target.addEventListener('n', logName)
target.removeEventListener('n', logName)
target.dispatchEvent('n')