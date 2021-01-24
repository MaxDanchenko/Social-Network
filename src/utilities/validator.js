export const requiredField = (value) => {
  if (value) return undefined
  return 'Required field'
}
export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `Max length is ${maxLength} symbols`
  return undefined
}
export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength)
    return `Min length is ${minLength} symbols`
  return undefined
}
