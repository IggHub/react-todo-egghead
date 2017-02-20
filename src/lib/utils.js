export const partial = (fn, ...args) => fn.bind(null, ...args)

const _pipe = (fn1, fn2) => (...args) => {
  return fn2(fn1(...args))
}

export const pipe = (...fns) => {
  return fns.reduce(_pipe)
}
