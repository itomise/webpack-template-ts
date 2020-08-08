import '../styles/another.scss'

if (module.hot) {
  module.hot.accept(console.error)
  module.hot.dispose(() => {
    window.location.reload()
  })
}

const init = (): void => {
  // console.log('Another')
}

document.addEventListener('DOMContentLoaded', (): void => {
  init()
})
