import { el, setChildren, setAttr, text } from 'redom'
import imgSlider1 from '../assets/img/portfolio/img1.jpg'
import imgSlider2 from '../assets/img/portfolio/img2.jpg'
import imgSlider3 from '../assets/img/portfolio/img4.jpg'
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

  const portfolioHeaderButton = el('a', {
    class: 'button-telegram',
    textContent: 'Пиши в телегу',
    href: '/telegram',
    id: 'idButtonTelegram'
  })

  setChildren(portfolioHeader, [
    portfolioHeaderTitle,
    portfolioHeaderButton
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

  function createCardSlider(inFile) {
    const cardWraper = el('div', {
      class: 'portfolio-slider__card-box'
    })
    const cardImage = el('img', {
      class: 'card__image',
      src: inFile
    })

    setChildren(cardWraper, cardImage)

    return cardWraper
  }

  const card1 = createCardSlider(imgSlider1)
  const card2 = createCardSlider(imgSlider2)
  const card3 = createCardSlider(imgSlider3)

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
