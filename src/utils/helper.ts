export function removeFontFamily(stringRaw: string) {
  // react-draft-wysiwyg if input width japan language will add font-family but func parser (lib html-react-parser) not support
  return stringRaw.replace(`font-family: Noto Sans JP", sans-serif;`, '')
}
