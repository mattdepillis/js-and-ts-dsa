/*
Write a custom debounce function.
*/
function debounce(callback, delay, immediate = false) {
  this.timer = undefined
  this.executingImmediate = undefined
  return function (...args) {
    if (immediate) {
      const time_diff = this.executingImmediate - Date.now()
      if (time_diff > 0) {
        this.executingImmediate += delay - time_diff
        return
      }
      else {
        this.executingImmediate = Date.now() + delay
        return callback.apply(this, args)
      }
    } else {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => callback.apply(this, args), delay)
    }
    return this.timer
  }
}

// const c = (w1, w2) => { console.log('called'); console.log(w1, w2); }

function spy () { return () => console.log('spy there!') }

// const debounced = debounce(c, 1000, true)
// debounced('foo', 'bar')
// debounced('j', 'k')
// debounced('l', 'm')

const obj = {spy: spy()}
function c() { this.spy() }

obj.debounced = debounce(c, 1000)
// obj.immDebounced = debounce(c, 1000, true)
obj.debounced()
// obj.immDebounced()
