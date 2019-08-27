
/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num: any) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(value: any) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

// export function removeSpecialChar(value:any) 

export const removeSpecialChar = (value: any) => {
  return value.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, "")
}