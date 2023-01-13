/*
  Create a class EventTarget that mimics the EventTarget interface on the DOM, and 3 of its methods:
    - addEventListener -- add a callback to a given element
    - removeEventListener -- remove a callback from a given element
    - dispatchEvent -- execute the callbacks assigned to a given element
*/

class mkEventTarget {
  [key: string]: any

  addEventListener(name: string, callback: Function) {
    if (!this[name]) this[name] = []

    for (let c of this[name]) {
      if (callback === c) return
    }

    this[name].push(callback)
  }

  removeEventListener(name: string, callback: Function) {
    for (let c of this[name]) {
      if (callback === c) this[name].shift(c)
    }
  }

  dispatchEvent(name: string) {
    if (!this[name]) return
    const callbacks = this[name]
    for (let callback of callbacks) callback()
  }

}

const t: mkEventTarget = new mkEventTarget()
const mklogName = () => console.log("Matt")
const mklogHello = () => console.log("Hello")

t.addEventListener('n', mklogName)
t.addEventListener('n', mklogHello)
t.dispatchEvent('n')
// t.addEventListener('n', logName)
t.removeEventListener('n', mklogName)
t.dispatchEvent('n')