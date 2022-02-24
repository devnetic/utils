import test from 'ava'

import * as utils from './../src'

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
  const HOUR = 60 * 60 * 1000
  const MINUTE = 60 * 1000
  const SECOND = 1000

  t.is(utils.msToTime((2 * HOUR) + (47 * MINUTE) + (42 * SECOND)), '02:47:42.0')
  t.is(utils.msToTime(SECOND), '00:00:01.0')
  t.is(utils.msToTime(MINUTE + 500), '00:01:00.5')
  t.is(utils.msToTime(MINUTE + SECOND), '00:01:01.0')
  t.is(utils.msToTime(MINUTE + (25 * SECOND)), '00:01:25.0')
  t.is(utils.msToTime(HOUR), '01:00:00.0')
  t.is(utils.msToTime((21 * HOUR) + (MINUTE) + (25 * SECOND)), '21:01:25.0')
  t.is(utils.msToTime((22 * HOUR) + (26 * MINUTE) + (43 * SECOND)), '22:26:43.0')
})

test('should add the correct suffix to the date', t => {
  t.is(utils.suffixDate(0), '12am')
  t.is(utils.suffixDate(5), '5am')
  t.is(utils.suffixDate(12), '12pm')
  t.is(utils.suffixDate(15), '3pm')
  t.is(utils.suffixDate(23), '11pm')
})
