import { el, setChildren, setAttr } from 'redom'
import imgTelega from '../assets/img/button-telega.svg'

export function createButTelega () {
  const containerBut = el('div', {
    class: 'container-but-telega'
  })

  const butTelega = el('a', {
    class: 'button-telegram',
    href: '/telegram',
    textContent: 'Пиши в телегу',
    id: 'idButtonTelegram',
  })

  const butLogoTelegram = el('img', {
    class: 'button-telegram__img',
    src: imgTelega,
    href: '/telegram',
    alt: 'button telegram'
  })

  setChildren(containerBut, [
    butTelega,
    butLogoTelegram
  ])

  return  containerBut
}
