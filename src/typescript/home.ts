import './modules/importPug'
import '../styles/home.scss'

import load from './modules/load'

if (module.hot) {
  module.hot.accept(console.error)
  module.hot.dispose(() => {
    window.location.reload()
  })
}

const init = (): void => {
  const element = document.querySelector('.test__image') as HTMLInputElement
  let number = 0
  element.textContent = `${number}`
  // console.log('Home')

  element.addEventListener('click', () => {
    number++
    element.textContent = `${number}`
  })

  load<{
    testTitle: string
  }>(`${process.env.PUBLIC_URL}/json/test.json`).then((data) => {
    const element = document.querySelector('.test__title')!
    element.textContent = data.testTitle
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})
