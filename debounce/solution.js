/*
Write a custom debounce function.
*/
const debounce = (callback, delay, immediate = false) => {
  this.timer = undefined
  this.executing_immediate = undefined
  return((...args) => {
    if (immediate) {
      if (Date.now() <= this.executing_immediate) return
      else {
        this.executing_immediate = Date.now() + delay
        return callback.call(this, ...args)
      }
    }
    clearTimeout(this.timer)
    this.timer = setTimeout(() => callback.call(this, ...args), delay)
    return this.timer
  })
}

const c = (w1, w2) => console.log(w1, w2)

const debounced = debounce(c, 1000, true)
debounced('foo', 'bar')
debounced('j', 'k')
