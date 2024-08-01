/**
 * @description 
 * @param text
 */
export function copyTextToClipboard(text: string): void {
  const textArea = document.createElement('textarea')
  textArea.value = text

  //  textarea  DOM 
  textArea.style.position = 'fixed'
  document.body.appendChild(textArea)

  //
  textArea.select()
  document.execCommand('copy')

  // textarea
  document.body.removeChild(textArea)
}
