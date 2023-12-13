import { customAlphabet } from 'nanoid'

export const generateLongUUID = () => {
  const id = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 18)()
  return id
}
export const generateUUID = () => {
  const id = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 8)()
  return id
}

export const generateShortUUID = () => {
  const id = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10)()
  return id
}
export const generateSmallUUID = () => {
  const id = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6)()
  return id
}