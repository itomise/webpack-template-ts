import './modules/importPug'
import '../styles/main.scss'

if (module.hot) {
  module.hot.accept(console.error)
  module.hot.dispose(() => {
    window.location.reload()
  })
}

const init = (): void => {
  // console.log('Main')
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})
