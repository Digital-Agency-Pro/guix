import { el, setChildren, setAttr } from 'redom'
import logo from '../assets/img/header/logo.svg'

import { createButTelega } from '../js/butTelega'


const containerHeader = document.getElementById('idHeader')

function createHeaderLi (text, inId, myHref, nameClass) {
  const li = el('li', {
    class: nameClass
  })
  const a = el('a', {
    class: 'header__nav-link',
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

function createBurgerLi () {
  const span = el('span', {
    class: 'nav-burger__toggle'
  })
  return span
}


export function createBlockHeader () {
  const header = el('div', {
    class: 'header'
  })
  const headerDiv = el('div', {
    class: 'container header-wraper'
  })

  const headerDivBlok1 = el('div', {
    class: 'header__container'
  })

  const headerDivBlok2 = el('div', {
    class: 'header__wraper-btn-telega'
  })

  const headerImgLogo = el('img', {
    class: 'header__logo',
    src: logo,
    alt: 'logo'
  })

  const headerButtonTelega = createButTelega()

  const headerNav = el('nav', {
    class: 'header__nav-container'
  })

  const headerUl = el('ul', {
    class: 'header__nav-list'
  })

  const headerLi1 = createHeaderLi('Проекты', 'idProekt', '/proekts', 'header__nav-item')
  const headerLi2 = createHeaderLi('Услуги', 'idScors', '/services', 'header__nav-item')
  const headerLi3 = createHeaderLi('Обо мне', 'idAboutMe', '/about', 'header__nav-item')

  setChildren(headerUl, [
    headerLi1,
    headerLi2,
    headerLi3,
  ])

  //------------- burger menu ---------------------------

  const burgerMenuNav = el('nav', {
    class: 'nav-burger__nav-container'
  })

  const burgerUl = el('ul', {
    class: 'nav-burger__nav-list'
  })

  const burgerLi1 = createHeaderLi('Проекты', 'idProekt', '/proekts', 'nav-burger__nav-item')
  const burgerLi2 = createHeaderLi('Услуги', 'idScors', '/services', 'nav-burger__nav-item')
  const burgerLi3 = createHeaderLi('Обо мне', 'idAboutMe', '/about', 'nav-burger__nav-item')

  setChildren(burgerUl, [
    burgerLi1,
    burgerLi2,
    burgerLi3,
  ])

  setChildren(burgerMenuNav, burgerUl)

  //-----------------burger----------------------

  const navBurger = el('div', {
    class: 'nav-burger__wpaper'
  })

  const span1 = createBurgerLi()
  const span2 = createBurgerLi()
  const span3 = createBurgerLi()

  setChildren(navBurger, [
    span1,
    span2,
    span3
  ])

  //--------------------------------------------
  setChildren(headerNav, headerUl)

  setChildren(containerHeader, header)
  setChildren(header, headerDiv)


  setChildren(headerDivBlok1, [
    headerImgLogo,
    headerNav,
    burgerMenuNav,
    navBurger

  ])

  setChildren(headerDivBlok2, headerButtonTelega)

  setChildren(headerDiv, [
    headerDivBlok1,
    headerDivBlok2
  ])
}
