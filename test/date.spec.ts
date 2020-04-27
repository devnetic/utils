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
  const milliseconds = 1587871603551
  const expected = '22:26:43'

  t.is(utils.msToTime(milliseconds), expected)
})
