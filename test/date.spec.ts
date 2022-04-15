import test from 'ava'

import * as utils from './../src'

test('should extract year, month, day, hour, minute and second from a date', t => {
  const date = new Date('2020-04-24T18:02:04.512')

  t.deepEqual(utils.dateExtract(date), {
    year: 2020,
    month: 4,
    day: 24,
    hour: 18,
    minute: 2,
    second: 4,
    millisecond: 512
  })
})

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

test('should returns the correct diff days', t => {
  const initial = new Date('2014-12-19')
  const final = new Date('2020-01-01')

  t.is(utils.daysDiff(initial, final), 1839)
})

test('should returns sthe days in given month', t => {
  t.is(utils.daysInMonth(4, 2022), 30)
  t.is(utils.daysInMonth(2, 2022), 28)
  t.is(utils.daysInMonth(2, 2020), 29)
  t.is(utils.daysInMonth(1, 2020), 31)
  t.is(utils.daysInMonth(6, 2020), 30)
  t.is(utils.daysInMonth(7, 2020), 31)
  t.is(utils.daysInMonth(9, 2020), 30)
  t.is(utils.daysInMonth(12, 2020), 31)
})

test('should returns the number of days in a year', t => {
  t.is(utils.daysInYear(2020), 366)
  t.is(utils.daysInYear(2021), 365)
})

test('should returns the day of year', t => {
  const date = new Date('2020-05-16T18:02:04.512')

  t.is(utils.dayOfYear(date), 137)
})

test('should returns the first date of the month', t => {
  const date = new Date('2020-04-24T18:02:04.512')
  const firstDate = new Date('2020-04-01T00:00:00')

  t.is(utils.firstDateOfMonth(date).getTime(), firstDate.getTime())
})

test('should format seconds to human readable format', t => {
  t.is(utils.formatSeconds(200), '00:03:20')
  t.is(utils.formatSeconds(500), '00:08:20')
})

test('should returns the date quarter', t => {
  const date = new Date('2020-04-24T18:02:04.512')

  t.is(utils.getQuarter(date), 2)
})

test('should returns the timezone string', t => {
  const timezone = utils.getTimezone()

  t.true(typeof timezone === 'string')
  t.true(timezone.length > 0)
})

test('should returns the weekday of a date', t => {
  const date = new Date('2022-02-26T18:02:04.512')

  t.is(utils.getWeekday(date), 'Saturday')
})

test('should returns the las date of the month', t => {
  const date = new Date('2020-04-24T18:02:04.512')
  const lastDate = new Date('2020-04-30T23:59:59.999')

  t.deepEqual(utils.lastDateOfMonth(date), lastDate)
})

test('should returns the correct diff months', t => {
  const initial = new Date('2020-01-01')
  const final = new Date('2021-01-01')

  t.is(utils.monthDiff(initial, final), 12)
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

test('should returns tomorrow date', t => {
  const date = new Date('2020-04-24T18:02:04.512')
  const tomorrow = new Date('2020-04-25T18:02:04.512')

  t.deepEqual(utils.tomorrow(date), tomorrow)
})

test('should returns yesterday date', t => {
  const date = new Date('2020-04-24T18:02:04.512')
  const yesterday = new Date('2020-04-23T18:02:04.512')

  t.deepEqual(utils.yesterday(date), yesterday)
})
