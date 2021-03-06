/**
* Returns date formatted according to given format
*
* @param {Date} time
* @param {string} format
* @param {string[]} [monthNames]
* @param {string[]} [dayNames]
* @returns {string}
*/
export const dateFormat = (time: Date, format: string, monthNames: string[] = [], dayNames: string[] = []): string => {
  // a global month names array
  monthNames = monthNames.length === 0 ? [
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
  ] : monthNames

  // a global day names array
  dayNames = dayNames.length === 0 ? [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ] : dayNames

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

/**
 * Transform a duration in milliseconds to human readable 'HH:mm:ss.m' format
 *
 * @param {number} duration
 * @returns {string}
 */
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
