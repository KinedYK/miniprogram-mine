const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 函数防抖
 */
const debounce = (context, fn, delay, text) => {
  clearTimeout(fn.timeoutId)
  fn.timeoutId = setTimeout(() => {
    fn.call(context, text);
  }, delay)
}

/**
 * 函数节流
 */
const throttle = (context, fn, delay = 1000) => {
  return function () {
    var args = arguments
    console.log(fn.timer)
    if (fn.timer) return
    fn.apply(context, args) // 先触发
    fn.timer = setTimeout(() => {
      fn.timer = null
    }, delay)
  }()
}

module.exports = {
  debounce: debounce,
  throttle: throttle,
  formatTime: formatTime
}