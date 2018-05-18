const ENV = process.env.NODE_ENV || 'dev'

function getTimestamp () {
  const now = new Date()
  const hours = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`
  const minutes = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`
  const seconds = now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`
  return `${hours}:${minutes}:${seconds}`
}

const levels = {
  error: (str) => {
    return `\u001b[31;1m[ERROR @ ${getTimestamp()}] ${str}\u001b[0m`
  },
  warning: (str) => {
    return `\u001b[33m[WARNING @ ${getTimestamp()}] ${str}\u001b[0m`
  },
  debug: (str) => {
    return `\u001b[34m[DEBUG @ ${getTimestamp()}] ${str}\u001b[0m`
  },
  info: (str) => {
    return `\u001b[96m[INFO @ ${getTimestamp()}] ${str}\u001b[0m`
  }
}

class Logger {
  static log (level, ...debugs) {
    Array.from(debugs).forEach(arg => {
      if (typeof arg !== 'string') {
        console.log(arg)
      } else {
        console.log(levels[level](arg))
      }
    })
  }

  static error () {
    Logger.log('error', ...arguments)
  }

  static warning () {
    if (ENV === 'test') { return }
    Logger.log('warning', ...arguments)
  }

  static info () {
    if (ENV === 'test') { return }
    Logger.log('info', ...arguments)
  }

  static debug () {
    if (ENV === 'test') { return }
    Logger.log('debug', ...arguments)
  }
}

module.exports = Logger
