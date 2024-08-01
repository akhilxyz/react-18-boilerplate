/**
 * @description 
 */
export function loginOut() {
  window.localStorage.clear()
  window.location.reload()
  window.location.href = `${window.location.origin}/login`
}
