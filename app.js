//app.js
import './api.js'
import './utils.js'
App({
  onLaunch: function () {
  },
  watch: function (ctx, obj) {
    Object.keys(obj).forEach(key => {
      this.observer(ctx.data, key, ctx.data[key], (value) => {
        obj[key].call(ctx, value)
      })
    })
  },
  observer: function (data, key, val, fn) {
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: () => {return val},
      set: (newVal) => {
        fn && fn(newVal)
        val = newVal
      },
    })
  },
  globalData: {}
})