function load<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = (): void => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(new Error(`${xhr.status}`))
      }
    }
    xhr.onerror = (): void => {
      reject(new Error(`${xhr.status}`))
    }
    xhr.send(null)
  })
}

export default load
