import { el, setChildren, setAttr, text } from 'redom'
import slider1 from '../assets/video/portfolio/bike.mp4'
import slider2 from '../assets/video/portfolio/roud.mp4'
import slider3 from '../assets/video/portfolio/sunset.mp4'
import { createButSleder } from '../js/butSlider'

const containerPortfolio = document.getElementById('idPortfolio')

export function createBlockPortfolio () {
  const sectionPortfolio = el('div', {
    class: 'container section-portfolio'
  })

  const portfolioHeader = el('div', {
    class: 'section-portfolio__header'
  })

  const portfolioHeaderTitle = el('h4', {
    class: 'section-portfolio__header-title',
    textContent: 'Последние проекты'
  })

  const portfolioWraperButton = el('h4', {
    class: 'section-portfolio__wraper-button',
  })

  const portfolioButton = el('button', {
    class: 'button-telegram',
    textContent: 'Пиши в телегу',
    href: '/telegram',
    id: 'idButtonTelegram'
  })


  setChildren(portfolioWraperButton, portfolioButton)

  setChildren(portfolioHeader, [
    portfolioHeaderTitle,
    portfolioWraperButton
  ])

  //--------------------------------------

  const sectionPortfolioSlider = el('div', {
    class: 'section-portfolio__slider'
  })

  const portfolioSlider = el('div', {
    class: 'portfolio-slider'
  })

  const portfolioSliderWraper = el('div', {
    class: 'portfolio-slider__wrapper'
  })

  setChildren(portfolioSlider, portfolioSliderWraper)

  function createCardSlider(inFile, inText) {

    const cardWraper = el('div', {
      class: 'portfolio-slider__card-box-wraper'
    })

    const cardVideo = el('video', {
      class: 'portfolio-slider__card-box',
      autoplay: true,
      loop: true,
    })
    const cardSource = el('source', {
      class: 'portfolio-slider__source',
      src: inFile,
      type: 'video/mp4',
    })

    const cardWraperTextBut = el('div', {
      class: 'portfolio-slider__card-container-but-text'
    })

    const cardText = el('h3', {
      class: 'portfolio-slider__card-text',
      textContent: inText
    })


    const cardButImg = el('span', {
      class: 'portfolio-slider__card-but-img'
    })

    setChildren(cardWraperTextBut, [
      cardText,
      cardButImg
    ])

    setChildren(cardVideo, [
      cardSource,
    ])

    setChildren(cardWraper, [
      cardWraperTextBut,
      cardVideo
    ])

    return cardWraper
  }

  const card1 = createCardSlider(slider1, 'PlayEstate')
  const card2 = createCardSlider(slider2, 'RUSAL')
  const card3 = createCardSlider(slider3, 'RUSAL2')

  setChildren(portfolioSliderWraper, [
    card1,
    card2,
    card3
  ])

  setChildren(sectionPortfolioSlider, portfolioSlider)
  //-------------- button slider ------------------------
  const wraperButton = el('div', {
    class: 'portfolio-slider__wraper-button'
  })

  let button = createButSleder()

  setChildren(wraperButton, button)
  // --------------------------------------------------------

  setChildren(sectionPortfolio, [
    portfolioHeader,
    sectionPortfolioSlider,
    wraperButton
  ])

  setChildren(containerPortfolio, sectionPortfolio)
}
