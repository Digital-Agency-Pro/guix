import { el, setChildren, setAttr } from 'redom'


export function createButSleder() {
  const wraperButton = el('div', {
    class: 'slider__wraper-button'
  })

  const btnLeft = el('div', {
    class: 'slider__btn-left  btn'
  })

  const btnWand = el('div', {
    class: 'slider__btn-wand'
  })

  const btnRight = el('div', {
    class: 'slider__btn-right  btn'
  })

  setChildren(wraperButton, [
    btnLeft,
    btnWand,
    btnRight
  ])

  return wraperButton
}
