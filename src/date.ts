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

  return format.replace(formatRegex, (match: string): string => {
    // A full numeric representation of a year, 4 digits. 1999 or 2003
    if (match === 'YYYY') {
      return time.getFullYear().toString()
    }

    if (match === 'YY') {
      return time.getFullYear().toString().slice(2)
    }

    // A full textual representation of a month, such as January or March. January through December
    if (match === 'MMMM') {
      return monthNames[time.getMonth()]
    }

    if (match === 'MMM') {
      return monthNames[time.getMonth()].substr(0, 3)
    }

    if (match === 'MM') {
      return String(time.getMonth() + 1).padStart(2, '0')
    }

    // ISO-8601 numeric representation of the day of the week. 1 (for Monday) through 7 (for Sunday)
    if (match === 'dddd') {
      return dayNames[time.getDay()]
    }

    if (match === 'ddd') {
      return dayNames[time.getDay()].substr(0, 3)
    }

    if (match === 'dd') {
      return String(time.getDate()).padStart(2, '0')
    }

    // 12-hour format of an hour with leading zeros. 01 through 12
    if (match === 'hh') {
      const hour = time.getUTCHours() - (time.getTimezoneOffset() / 60)

      return String(hour > 12 ? hour - 12 : hour).padStart(2, '0')
    }

    // 24-hour format of an hour with leading zeros. 00 through 23
    if (match === 'HH') {
      const hours = time.getUTCHours()

      return String((hours < 12 ? 24 + hours : hours) - (time.getTimezoneOffset() / 60)).padStart(2, '0')
    }

    if (match === 'mm') {
      return String(time.getMinutes()).padStart(2, '0')
    }

    if (match === 'm') {
      return String(time.getMinutes())
    }

    // Seconds, with leading zeros. 00 through 59
    if (match === 'ss') {
      return String(time.getSeconds()).padStart(2, '0')
    }

    if (match === 's') {
      return String(time.getSeconds())
    }

    // Lowercase Ante meridiem and Post meridiem. am or pm
    if (match === 'a') {
      return time.getHours() < 12 ? 'am' : 'pm'
    }

    // Uppercase Ante meridiem and Post meridiem. AM or PM
    if (match === 'A') {
      return time.getHours() < 12 ? 'AM' : 'PM'
    }

    if (match === 'u') {
      return String(time.getMilliseconds())
    }

    return match
  })
}

/**
 * Transform a duration in milliseconds to human readable 'HH:mm:ss.m' format
 *
 * @param {number} duration
 * @returns {string}
 */
export const msToTime = (milliseconds: number, format = 'HH:mm:ss'): string => {
  return dateFormat(new Date(milliseconds), format)
}
