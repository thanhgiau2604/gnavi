export function removeFontFamily(stringRaw: string) {
  return stringRaw.replace(`font-family: Noto Sans JP", sans-serif;`, '')
}
