/**
 * @description
 * @param path
 * @returns {boolean} boolean
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isPassword(value: string | any[]) {
  return value.length >= 6
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isNumber(value: string) {
  const reg = /^[0-9]*$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isName(value: string) {
  const reg = /^[\u4E00-\u9FA5a-zA-Z0-9]+$/
  return reg.test(value)
}

/**
 * @description
 * @param ip
 * @returns {boolean} boolean
 */
export function isIP(ip: string) {
  const reg
    = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(ip)
}

/**
 * @description
 * @param url
 * @returns {boolean} boolean
 */
export function isUrl(url: string) {
  const reg
    = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isLowerCase(value: string) {
  const reg = /^[a-z]+$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isUpperCase(value: string) {
  const reg = /^[A-Z]+$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isAlphabets(value: string) {
  const reg = /^[A-Za-z]+$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isString(value: any) {
  return typeof value === 'string' || value instanceof String
}

/**
 * @description
 * @param arg {boolean} boolean
 */
export function isArray(arg: any) {
  if (typeof Array.isArray === 'undefined')
    return Object.prototype.toString.call(arg) === '[object Array]'

  return Array.isArray(arg)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isPort(value: string) {
  const reg
    = /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isPhone(value: string) {
  const reg = /^1\d{10}$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isIdCard(value: string) {
  const reg
    = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isEmail(value: string) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isChina(value: string) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isIncludeChina(value: string) {
  const reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isBlank(value: string | null) {
  return (
    value == null
    || false
    || value === ''
    || value.trim() === ''
    || value.toLocaleLowerCase().trim() === 'null'
  )
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isTel(value: string) {
  const reg
    = /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$/
  return reg.test(value)
}

/**
 * @description
 * @param value
 * @returns {boolean} boolean
 */
export function isNum(value: string) {
  const reg = /^\d+(\.\d{1,2})?$/
  return reg.test(value)
}

/**
 * @description json
 * @param value
 * @returns {boolean} boolean
 */
export function isJson(value: string) {
  if (typeof value == 'string') {
    try {
      const obj = JSON.parse(value)
      return !!(typeof obj == 'object' && obj)
    }
    catch (e) {
      return false
    }
  }
  return false
}
