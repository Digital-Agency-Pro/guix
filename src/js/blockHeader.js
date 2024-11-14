import { el, setChildren, setAttr } from 'redom'
import logo from '../assets/img/header/logo.svg'
import { createButTelega } from '../js/butTelega'


const containerHeader = document.getElementById('idHeader')

function createHeaderLi (text, inId, myHref) {
  const li = el('li', {
    class: 'navItem'
  })
  const a = el('a', {
    class: 'navLink',
    textContent: text,
    href: myHref,
    id: inId
  })

  setAttr(a, {
    'data-navigo': true
  })

  setChildren(li, a)
  return li
}


export function createBlockHeader () {
  const header = el('div', {
    class: 'header'
  })
  const headerDiv = el('div', {
    class: 'container header-wraper'
  })

  const headerDivBlok1 = el('div', {
    class: 'header-wraper__blok1'
  })

  const headerDivBlok2 = el('div', {
    class: 'header-wraper__blok2'
  })

  const headerImgLogo = el('img', {
    class: 'header__logo',
    src: logo,
    alt: 'logo'
  })

  const headerButtonTelega = createButTelega()

  const headerNav = el('nav', {
    class: 'navContainer'
  })

  const headerUl = el('ul', {
    class: 'navList'
  })

  const headerLi1 = createHeaderLi('Проекты', 'idProekt', '/proekts')
  const headerLi2 = createHeaderLi('Услуги', 'idScors', '/services')
  const headerLi3 = createHeaderLi('Обо мне', 'idAboutMe', '/about')

  setChildren(headerUl, [
    headerLi1,
    headerLi2,
    headerLi3,
  ])

  setChildren(headerNav, headerUl)

  setChildren(containerHeader, header)
  setChildren(header, headerDiv)


  setChildren(headerDivBlok1, [
    headerImgLogo,
    headerNav,
  ])

  setChildren(headerDivBlok2, headerButtonTelega)

  setChildren(headerDiv, [
    headerDivBlok1,
    headerDivBlok2
  ])
}
