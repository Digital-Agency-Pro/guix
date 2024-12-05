import { el, setChildren, setAttr, text } from 'redom'
import imgSlider1 from '../assets/img/portfolio/img1.jpg'
import imgSlider2 from '../assets/img/portfolio/img2.jpg'
import imgSlider3 from '../assets/img/portfolio/img3.jpg'
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
      class: 'portfolio-slider__card-box'
    })
    const cardImage = el('img', {
      class: 'card__image',
      src: inFile
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

    setChildren(cardWraper, [
      cardImage,
      cardWraperTextBut
    ])

    return cardWraper
  }

  const card1 = createCardSlider(imgSlider1, 'PlayEstate')
  const card2 = createCardSlider(imgSlider2, 'RUSAL')
  const card3 = createCardSlider(imgSlider3, 'RUSAL2')

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
