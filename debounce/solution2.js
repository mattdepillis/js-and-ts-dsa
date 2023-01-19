/*
Write a custom debounce function.
*/
function debounce(callback, delay, immediate = false) {
  let timer

  return function (...args) {
    clearTimeout(timer)
    
    if (immediate && timer == null) callback.call(this, ...args)
    
    timer = setTimeout(() => {
      if (!immediate) callback.call(this, ...args)
      timer = null
    }, delay)
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