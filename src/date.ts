export interface DateExtract {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
  millisecond: number
}

export const dateExtract = (date: Date): DateExtract => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  }
}

export const dateFormat = (time: Date, format: string, monthNames: string[] = [], dayNames: string[] = []): string => {
  // a global month names array
  monthNames = monthNames.length === 0
    ? [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    : monthNames

  // a global day names array
  dayNames = dayNames.length === 0
    ? [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    : dayNames

  const formatRegex = /(YYYY|YY|MMMM|MMM|MM|dddd|ddd|dd|hh|HH|mm|m|ss|s|a|A|u)/gi

  const matches: Record<string, string> = {
    YYYY: time.getFullYear().toString(),
    YY: time.getFullYear().toString().slice(2),
    MMMM: monthNames[time.getMonth()],
    MMM: monthNames[time.getMonth()].substr(0, 3),
    MM: String(time.getMonth() + 1).padStart(2, '0'),
    dddd: dayNames[time.getDay()],
    ddd: dayNames[time.getDay()].substr(0, 3),
    dd: String(time.getDate()).padStart(2, '0'),
    hh: (() => {
      const hour = time.getUTCHours() - (time.getTimezoneOffset() / 60)
      return String(hour > 12 ? hour - 12 : hour).padStart(2, '0')
    })(),
    HH: (() => {
      let hours = time.getUTCHours()
      hours = (hours < 12 ? 24 + hours : hours) - (time.getTimezoneOffset() / 60)

      return String(hours > 24 ? hours - 24 : hours).padStart(2, '0')
    })(),
    mm: String(time.getMinutes()).padStart(2, '0'),
    m: String(time.getMinutes()),
    ss: String(time.getSeconds()).padStart(2, '0'),
    s: String(time.getSeconds()),
    a: time.getHours() < 12 ? 'am' : 'pm',
    A: time.getHours() < 12 ? 'AM' : 'PM',
    u: String(time.getMilliseconds())
  }

  return format.replace(formatRegex, (match) => matches[match])
}

export const dayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24

  return Math.floor(diff / oneDay)
}

export const daysDiff = (startDate: Date, endDate: Date): number => {
  return Math.ceil(Math.abs(startDate.valueOf() - endDate.valueOf()) / (1000 * 60 * 60 * 24))
}

export const daysInMonth = (month: number, year: number): number => {
  return new Date(year, month, 0).getDate()
}

export const daysInYear = (year: number): number => {
  return new Date(year, 1, 29).getDate() === 29 ? 366 : 365
}

export const firstDateOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

export const formatSeconds = (seconds: number): string => {
  return (new Date(seconds * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/) as string[])[0]
}

export const getQuarter = (date: Date): number => {
  return Math.ceil((date.getMonth() + 1) / 3)
}

export const getTimezone = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

export const getWeekday = (date: Date): string => {
  return dateFormat(date, 'dddd')
}

export const lastDateOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
}

export const monthDiff = (startDate: Date, endDate: Date): number => {
  return Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth())
}

export const msToTime = (duration: number): string => {
  const milliseconds = parseInt(String((duration % 1000) / 100))
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  const hoursFormated = (hours < 10) ? `0${hours}` : hours
  const minutesFormated = (minutes < 10) ? `0${minutes}` : minutes
  const secondsFormated = (seconds < 10) ? `0${seconds}` : seconds

  return `${hoursFormated}:${minutesFormated}:${secondsFormated}.${milliseconds}`
}

export const suffixDate = (hour: number): string => {
  return `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'am' : 'pm'}`
}

export const tomorrow = (date: Date): Date => {
  return new Date(date.setDate(date.getDate() + 1))
}

export const yesterday = (date: Date): Date => {
  return new Date(date.setDate(date.getDate() - 1))
}
