const Logger = require('../index')

Logger.info('info message')
Logger.debug('debug message')
Logger.warning('warning message')
Logger.warn('warn alias')
Logger.error('error message')
Logger.success('success message')

Logger.debug({
  name: 'whatever',
  embedded: {
    id: 123,
    randomArray: ['12', 45, { s: 4 }]
  }
})

Logger.info('string', { name: 'object' }, 123, Number)

setTimeout(() => {
  Logger.debug('Delayed debug message')
}, 5000)
