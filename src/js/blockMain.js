
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
    class: 'block-main__slider-div',
  })

  const itemSlide = el('img', {
    class: 'block-main__slider',
    src: imgSlide,
  })
  setChildren(itemDiv, itemSlide)

  return itemDiv
}

function createHtmlSlider () {
  const containerSlider = el('div', {
    class: 'block-main__sliders-container'
  })

  const divSliderWraper = el('div', {
    class: 'block-main__slider-wraper'
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
    class: 'container block-main__content-wraper'
  })

  const divHeaderTitleBlok1 = el('div', {
    class: 'block-main__text-content'
  })

  const divHeaderTitle = el('div', {
    class: 'block-main__title'
  })

  const wriperTitleText = el('div', {
    class: 'block-main__wraper-text',
  })

  const titleText1 = el('h1', {
    class: 'block-main__title-text1',
    id: "idBlockMaintext1"
  })

  const wriperText2AndText3 = el('div', {
    class: 'block-main__title-wriper-text2-and-text3'
  })

  const titleText2 = el('h1', {
    class: 'block-main__title-text1',
    id: "idBlockMaintext2"
  })

  const titleText3 = el('h1', {
    class: 'block-main__title-text2',
    id: "idBlockMaintext3"
  })

  const titleText4 = el('h1', {
    class: 'block-main__title-text2',
    id: "idBlockMaintext4"
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
    class: 'block-main__title-img',
    src: imgTitle1
  })

  const headerImgTitle2= el('img', {
    class: 'block-main__title-img',
    src: imgTitle2
  })

  const elemImages = el('div', {
    class: 'block-main__title-wraper-img'
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
    class: 'block-main__desctiption_wraper'
  })

  const wriperText1AndText2 = el('div', {
    class: 'block-main__desctiption_wraper-text1-text2',
  })

  const headerDescriptionText1 = el('p', {
    class: 'block-main__desctiption-text1',
    textContent: "Оптимизация"
  })

  const headerDescriptionText2 = el('p', {
    class: 'block-main__desctiption-text2',
    textContent: "дизайн-команд"
  })

  setChildren(wriperText1AndText2, [
    headerDescriptionText1,
    headerDescriptionText2
  ])

  const headerDescriptionText3 = el('p', {
    class: 'block-main__desctiption-text2',
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


