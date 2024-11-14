
import { el, setChildren, setAttr } from 'redom'
import logo from '../assets/img/header/logo.svg'
import { createButTelega } from '../js/butTelega'
import imgTitle1 from '../assets/img/header/headerTitleImg1.svg'
import imgTitle2 from '../assets/img/header/headerTitleImg2.svg'
import { gsap } from 'gsap'
import imgSlide1 from '../assets/img/header/slider/1.svg'
import imgSlide2 from '../assets/img/header/slider/2.svg'
import imgSlide3 from '../assets/img/header/slider/3.svg'
import imgSlide4 from '../assets/img/header/slider/4.svg'
import imgSlide5 from '../assets/img/header/slider/5.svg'
import imgSlide6 from '../assets/img/header/slider/6.svg'
import imgSlide7 from '../assets/img/header/slider/7.svg'
import imgSlide8 from '../assets/img/header/slider/8.svg'
import imgSlide9 from '../assets/img/header/slider/9.svg'
import imgSlide10 from '../assets/img/header/slider/10.svg'
import imgSlide11 from '../assets/img/header/slider/11.svg'
import imgSlide12 from '../assets/img/header/slider/12.svg'



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


export function createBlockMain () {
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


  const mainHeaderWraper = createMainBlockHeader ()
  setChildren(containerHeader, header)
  setChildren(header, [
    headerDiv,
    mainHeaderWraper
  ])

  setChildren(headerDivBlok1, [
    headerImgLogo,
    headerUl,
  ])

  setChildren(headerDivBlok2, headerButtonTelega)

  setChildren(headerDiv, [
    headerDivBlok1,
    headerDivBlok2
  ])
}

function createItemSlider (imgSlide) {
  const itemDiv = el('div', {
    class: 'header__slider-div',
  })

  const itemSlide = el('img', {
    class: 'header__slider',
    src: imgSlide,
  })

  setChildren(itemDiv, itemSlide)

  return itemDiv
}

function createHtmlSlider () {
  const containerSlider = el('div', {
    class: 'header__sliders-container'
  })

  const divSliderWraper = el('div', {
    class: 'header__slider-wraper'
  })

  const slide1 = createItemSlider(imgSlide1)
  const slide2 = createItemSlider(imgSlide2)
  const slide3 = createItemSlider(imgSlide3)
  const slide4 = createItemSlider(imgSlide4)
  const slide5 = createItemSlider(imgSlide5)
  const slide6 = createItemSlider(imgSlide6)
  const slide7 = createItemSlider(imgSlide7)
  const slide8 = createItemSlider(imgSlide8)
  const slide9 = createItemSlider(imgSlide9)
  const slide10 = createItemSlider(imgSlide10)
  const slide11 = createItemSlider(imgSlide11)
  const slide12 = createItemSlider(imgSlide12)

  setChildren(divSliderWraper , [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12
  ])

  setChildren(containerSlider, divSliderWraper)

  return containerSlider
}

function createMainBlockHeader () {
  const divHeaderTitleWraper = el('div', {
    class: 'container header-title-wraper'
  })

  const divHeaderTitleBlok1 = el('div', {
    class: 'header-title-blok1'
  })

  const divHeaderTitle = el('div', {
    class: 'header-title'
  })

  const wriperTitleText = el('div', {
    class: 'header-title__wriper-text',
  })

  const titleText1 = el('p', {
    class: 'header-title__text1',
    textContent: "Эксперт"
  })

  const wriperText2AndText3 = el('div', {
    class: 'header-title__wriper-text2-and-text3'
  })
  const titleText2 = el('p', {
    class: 'header-title__text1',
    textContent: "в области"
  })

  const titleText3 = el('p', {
    class: 'header-title__text2',
    textContent: "продуктового"
  })

  const titleText4 = el('p', {
    class: 'header-title__text2',
    textContent: "и сервисного дизайна"
  })

  setChildren(wriperText2AndText3, [
    titleText2,
    titleText3,
    titleText4
  ])

  setChildren(wriperTitleText, [
    titleText1,
    wriperText2AndText3
  ])

  const headerImgTitle1= el('img', {
    class: 'header-title__img',
    src: imgTitle1
  })

  const headerImgTitle2= el('img', {
    class: 'header-title__img',
    src: imgTitle2
  })

  const elemImages = el('div', {
    class: 'header-title__wriper-img'
  })

  setChildren(elemImages, [
    headerImgTitle1,
    headerImgTitle2
  ])

  setChildren(divHeaderTitle, [
    wriperTitleText,
    elemImages,
  ])

  const headerDescriptionWriperText = el('div', {
    class: 'header-desctiption_wriper'
  })

  const wriperText1AndText2 = el('div', {
    class: 'header-desctiption_wriper-text1-text2',
  })

  const headerDescriptionText1 = el('p', {
    class: 'header-desctiption_text1',
    textContent: "Оптимизация"
  })

  const headerDescriptionText2 = el('p', {
    class: 'header-desctiption_text2',
    textContent: "дизайн-команд"
  })

  setChildren(wriperText1AndText2, [
    headerDescriptionText1,
    headerDescriptionText2
  ])

  const headerDescriptionText3 = el('p', {
    class: 'header-desctiption_text2',
    textContent: "и процессов в компаниях, аудиты, исследования, юзабилити-тестирование и не только..."
  })

  setChildren(headerDescriptionWriperText, [
    wriperText1AndText2,
    headerDescriptionText3
  ])

  setChildren(divHeaderTitleBlok1, [
    divHeaderTitle,
    headerDescriptionWriperText,
  ])

  const sliderWraper = createHtmlSlider()

  setChildren(divHeaderTitleWraper , [
    divHeaderTitleBlok1,
    sliderWraper
  ])

  return divHeaderTitleWraper
}

function makeNavLinkActive (element) {
  const navLink = element.querySelector('.navLink')
  navLink.classList.add('navLink-active')
}

function effectHover (element) {
  gsap.to(element , {
    duration:1
  })
}


export function effectHoverButton () {
  const element = document.querySelector('.button-telegram')
  element.addEventListener('mouseenter', e => {
    e.preventDefault()
    effectHover(e)
  })
  element.addEventListener('mouseleave', e => {
    e.preventDefault()
  })
}

function pushButtonExit () {
  const elements = document.querySelectorAll('.navItem')
  for (let i = 0, l = elements.length; i < l; ++i) {
    elements[i].addEventListener('click', e => {
      e.preventDefault()
      const nameButton = elements[i].innerText

      if (nameButton === 'Выйти') {
        localStorage.removeItem('token')
        localStorage.removeItem('saveDataScors')
        localStorage.removeItem('saveScore')
      }
    })
  }
}
