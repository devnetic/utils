const test = require('ava')

const utils = require('../lib')

test('should returns the correct date', t => {
  const date = new Date('2020-04-24T08:12:02')

  t.is(utils.dateFormat(date, 'YYYY/MM/dd'), '2020/04/24')
  t.is(utils.dateFormat(date, 'YY/MM/dd'), '20/04/24')
  t.is(utils.dateFormat(date, 'YYYY MMMM dd'), '2020 April 24')
  t.is(utils.dateFormat(date, 'YYYY MMM dd'), '2020 Apr 24')
  t.is(utils.dateFormat(date, 'YYYY MMM dddd'), '2020 Apr Friday')
  t.is(utils.dateFormat(date, 'YYYY MMM ddd'), '2020 Apr Fri')
  t.is(utils.dateFormat(date, 'YYYY MMM ddd'), '2020 Apr Fri')
  t.is(utils.dateFormat(date, 'YYYYMMdd'), '20200424')
})

test('should returns the correct date with custom day and month names', t => {
  const date = new Date('2020-04-24T08:12:02')

  const dayNames = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ]

  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  t.is(utils.dateFormat(date, 'YYYY/MM/dd'), '2020/04/24')
  t.is(utils.dateFormat(date, 'YY/MM/dd'), '20/04/24')
  t.is(utils.dateFormat(date, 'YYYY MMMM dd', monthNames, dayNames), '2020 Abril 24')
  t.is(utils.dateFormat(date, 'YYYY MMM dd', monthNames, dayNames), '2020 Abr 24')
  t.is(utils.dateFormat(date, 'YYYY MMM dddd', monthNames, dayNames), '2020 Abr Viernes')
  t.is(utils.dateFormat(date, 'YYYY MMM ddd', monthNames, dayNames), '2020 Abr Vie')
  t.is(utils.dateFormat(date, 'YYYY MMM ddd', monthNames, dayNames), '2020 Abr Vie')
  t.is(utils.dateFormat(date, 'YYYYMMdd'), '20200424')
})

test('should returns the correct time', t => {
  const date = new Date('2020-04-24T18:02:04.512')

  t.is(utils.dateFormat(date, 'HH:mm:ss'), '18:02:04')
  t.is(utils.dateFormat(date, 'hh:mm:ss'), '06:02:04')
  t.is(utils.dateFormat(date, 'hh:m:ss'), '06:2:04')
  t.is(utils.dateFormat(date, 'hh:m:s'), '06:2:4')
  t.is(utils.dateFormat(date, 'hh:mm:ss a'), '06:02:04 pm')
  t.is(utils.dateFormat(date, 'hh:mm:ss A'), '06:02:04 PM')
  t.is(utils.dateFormat(date, 'hh:mm:ss.u'), '06:02:04.512')
})

test('should returns the correct time string', t => {
  const milliseconds = 1593830862000
  const expected = '02:47:42'

  t.is(utils.msToTime(milliseconds), expected)
})
