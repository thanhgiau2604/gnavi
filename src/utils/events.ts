export const showModal = (setState: React.Dispatch<React.SetStateAction<boolean>>) => setState(true)
export const hideModal = (setState: React.Dispatch<React.SetStateAction<boolean>>) =>
  setState(false)
export const fileReader = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
export const multiFilesReader = async (files: File[]) => {
  const results = await Promise.all(
    files.map(async (file: File) => {
      const fileContents = await fileReader(file)
      return fileContents
    })
  )
  return results
}
