# Date Functions

## dateExtract(date: Date): DateExtract

Extract year, month, day, hour, minute, second and millisecond from a date.

```js
const date = new Date('2020-04-24T18:02:04.512')

utils.dateExtract(date), {
  year: 2020,
  month: 4,
  day: 24,
  hour: 18,
  minute: 2,
  second: 4,
  millisecond: 512
}
```

---

## dateFormat(time: Date, format: string, monthNames: string[] = [], dayNames: string[] = []): string

Returns a date formatted according to given format.

### Year, month, and day tokens (*Tokens are case-sensitive*).

| Input       | Example          | Description |
| ----------- | ---------------- | ----------- |
| `YYYY`      | `2014`           | 4 or 2 digit year |
| `YY`        | `14`             | 2 digit year |
| `M MM`      | `1..12`          | Month number |
| `MMM MMMM`  | `Jan..December`  | Month name in default English locale or set by function parameter |
| `DD`        | `01..31`         | Day of month |

### Hour, minute, second, millisecond, and offset tokens. (*Tokens are case-sensitive*).

| Input          | Example  | Description |
| -------------- | -------- | ----------- |
| `H HH`         | `0..23`  | Hours (24 hour time) |
| `h hh`         | `1..12`  | Hours (12 hour time used with `a A`.) |
| `a A`          | `am PM`  | Post or ante meridiem |
| `m mm`         | `0..59`  | Minutes |
| `s ss`         | `0..59`  | Seconds |
| `u`            | `436`    | Fractional seconds |

```javascript
const date = new Date('2020-04-24T18:12:02.432')

utils.dateFormat(date, 'HH:mm:ss') // 18:12:02
utils.dateFormat(date, 'hh:mm:ss a') // 06:12:02 pm
```

---

## daysInMonth(month: number, year: number): number

Get the number of days in given month.

```js
utils.daysInMonth(4, 2022)  // 30
utils.daysInMonth(2, 2022)  // 28
utils.daysInMonth(2, 2020)  // 29
utils.daysInMonth(1, 2020)  // 31
utils.daysInMonth(6, 2020)  // 30
utils.daysInMonth(7, 2020)  // 31
utils.daysInMonth(9, 2020)  // 30
utils.daysInMonth(12, 2020)  // 31
```

---

## daysDiff(startDate: Date, endDate: Date): number

Calculate the number of difference days between two dates.

```js
const initial = new Date('2014-12-19')
const final = new Date('2020-01-01')

utils.daysDiff(initial, final)  // 1839
```

---

## daysInYear(year: number): number

Get the total number of days in a year

```js
utils.daysInYear(2020)  // 366
utils.daysInYear(2021)  // 365
```

---

## firstDateOfMonth(date): Date

Get the first date in the month of a date

```js
const date = new Date('2020-04-24T18:02:04.512')

utils.firstDateOfMonth(date)  // '2020-04-01T00:00:00'
```

---

## formatSeconds(seconds: number): string

Convert seconds to hh:mm:ss format

```js
utils.formatSeconds(200)  // '00:03:20'
utils.formatSeconds(500)  // '00:08:20'
```

---

## getQuarter(date): number

Get the current quarter of a date.

```js
const date = new Date('2020-04-24T18:02:04.512')

utils.getQuarter(date), 2
```

---

## getTimezone = (): string

Get the timezone string.

```js
getTimezone(); // 'Europe/Berlin'
```

---

## getWeekday(date: Date): string

Get the weekday of a date.

```js
const date = new Date('2022-02-26T18:02:04.512')

utils.getWeekday(date)  // 'Saturday'
```

---

## lastDateOfMonth(date): Date

Get the last date in the month of a date.

```js
const date = new Date('2020-04-24T18:02:04.512')

utils.lastDateOfMonth(date)  // '2020-04-30T23:59:59.999'
```

---

## monthDiff(date: Date, otherDate: Date): number

Calculate the number of difference days between two dates.

```js
const initial = new Date('2020-01-01')
const final = new Date('2021-01-01')

utils.monthDiff(initial, final)  // 12
```

---

## msToTime(milliseconds: number): string

Transform a duration in milliseconds to human readable 'HH:mm:ss.m' format

```javascript
const date = new Date('2020-04-24T18:12:02.432')

const HOUR = 60 * 60 * 1000
const MINUTE = 60 * 1000
const SECOND = 1000

utils.msToTime((22 * HOUR) + (26 * MINUTE) + (43 * SECOND)) // 22:26:43.0
utils.msToTime((10 * HOUR) + (26 * MINUTE) + (43 * SECOND)) // 10:26:43.0
utils.msToTime(MINUTE + (25 * SECOND)) // 00:01:25.0
utils.msToTime(MINUTE + 500) // '00:01:00.5'
```

---

## suffixDate(hour: number): string

Add AM PM suffix to an hour.

```js
utils.suffixDate(0)  // '12am'
utils.suffixDate(5)  // '5am'
utils.suffixDate(12)  // '12pm'
utils.suffixDate(15)  // '3pm'
utils.suffixDate(23)  // '11pm'
```

---

## tomorrow(date: Date): Date

Get the tomorrow date.

```js
const date = new Date('2020-04-24T18:02:04.512')

utils.tomorrow(date)  // 2020-04-25T18:02:04.512
```

---

## yesterday(date: Date): Date

Get the yesterday date.

```js
const date = new Date('2020-04-24T18:02:04.512')

utils.yesterday(date) // '2020-04-23T18:02:04.512'
```
