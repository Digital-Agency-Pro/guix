
import { el, setChildren, setAttr } from 'redom'

import imgTitle1 from '../assets/img/header/headerTitleImg1.svg'
import imgTitle2 from '../assets/img/header/headerTitleImg2.svg'

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

import { createButTelega } from '../js/butTelega'

const containerBlockMain = document.getElementById('idBlockMain')

export function createBlockMain () {
  const mainWraper = createMainBlockHeader ()
  setChildren(containerBlockMain, mainWraper)

}

function createItemSlider (imgSlide) {
  const itemDiv = el('div', {
    class: 'blockMain__slider-div',
  })

  const itemSlide = el('img', {
    class: 'blockMain__slider',
    src: imgSlide,
  })
  setChildren(itemDiv, itemSlide)

  return itemDiv
}

function createHtmlSlider () {
  const containerSlider = el('div', {
    class: 'blockMain__sliders-container'
  })

  const divSliderWraper = el('div', {
    class: 'blockMain__slider-wraper'
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
    class: 'container blockMain__content-wraper'
  })

  const divHeaderTitleBlok1 = el('div', {
    class: 'blockMain__text-content'
  })

  const divHeaderTitle = el('div', {
    class: 'blockMain__title'
  })

  const wriperTitleText = el('div', {
    class: 'blockMain__wraper-text',
  })

  const titleText1 = el('h1', {
    class: 'blockMain__title-text1',
    textContent: "Эксперт"
  })

  const wriperText2AndText3 = el('div', {
    class: 'blockMain__title-wriper-text2-and-text3'
  })

  const titleText2 = el('h1', {
    class: 'blockMain__title-text1',
    textContent: "в области"
  })

  const titleText3 = el('h1', {
    class: 'blockMain__title-text2',
    textContent: "продуктового"
  })

  const titleText4 = el('h1', {
    class: 'blockMain__title-text2',
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
    class: 'blockMain__title-img',
    src: imgTitle1
  })

  const headerImgTitle2= el('img', {
    class: 'blockMain__title-img',
    src: imgTitle2
  })

  const elemImages = el('div', {
    class: 'blockMain__title-wraper-img'
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
    class: 'blockMain__desctiption_wraper'
  })

  const wriperText1AndText2 = el('div', {
    class: 'blockMain__desctiption_wraper-text1-text2',
  })

  const headerDescriptionText1 = el('p', {
    class: 'blockMain__desctiption-text1',
    textContent: "Оптимизация"
  })

  const headerDescriptionText2 = el('p', {
    class: 'blockMain__desctiption-text2',
    textContent: "дизайн-команд"
  })

  setChildren(wriperText1AndText2, [
    headerDescriptionText1,
    headerDescriptionText2
  ])

  const headerDescriptionText3 = el('p', {
    class: 'blockMain__desctiption-text2',
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


