import { el, setChildren, setAttr, text } from 'redom'
import { createButTelega } from '../js/butTelega'

const containerServices = document.getElementById('idServices')

export function createBlockServices() {
  const container = el('div', {
    class: 'container section-services'
  })
  //---------------left --------------------

  const containerLeft = el('div', {
    class: 'section-services__left'
  })

  const containerLeftTitle = el('h4', {
    class: 'section-services__left-title',
    textContent: 'cпециализация'
  })

  const containerLeftDecsriptionWriper = el('div', {
    class: 'section-services__left-description-wriper',
  })

  const containerLeftDecsriptionSpan = el('span', {
    class: 'section-services__left-description-span',
    textContent: 'Специализируюсь'
  })

  const containerLeftDecsriptionSpan2 = el('span', {
    class: 'section-services__left-description-p',
    textContent: 'на нескольких'
  })

  const containerLeftDecsriptionP = el('p', {
    class: 'section-services__left-description-p',
    textContent: 'направлениях в области UI/UX и сервисного дизайна'
  })

  setChildren(containerLeftDecsriptionWriper, [
    containerLeftDecsriptionSpan,
    containerLeftDecsriptionSpan2,
    containerLeftDecsriptionP
  ])

  const buttonTelegram = createButTelega()

  setChildren(containerLeft, [
    containerLeftTitle,
    containerLeftDecsriptionWriper,
    buttonTelegram
  ])

  //------------------ right -------------------

  function createItemList (number, nameItem) {
    const wriperItem = el('li', {
      class: 'section-services__right-list-item',
    })

    const numberItem = el('span', {
      class: 'section-services__right-list-item-number',
      textContent: number
    })

    const textItem = el('a', {
      class: 'section-services__right-list-item-text',
      textContent: nameItem,
      href: '#'
    })

    setChildren(wriperItem, [
      numberItem,
      textItem
    ])

    return wriperItem
  }

  const containerRight = el('div', {
    class: 'section-services__right'
  })

  const containerRightTitle = el('h4', {
    class: 'section-services__right-title',
    textContent: 'услуги'
  })

  const containerRightWriperList = el('ul', {
    class: 'section-services__right-wriper-list',
  })

  const listItem1 = createItemList('01', 'UI дизайн')
  const listItem2 = createItemList('02','Прототипирование')
  const listItem3 = createItemList('03', 'UX дизайн')
  const listItem4 = createItemList('04', 'Разработка дизайн систем')
  const listItem5 = createItemList('05', 'Аудит сайтов и сложных систем')
  const listItem6 = createItemList('06', 'Юзабилити тестирование')
  const listItem7 = createItemList('07', 'Формировании дизайн команд')

  setChildren(containerRightWriperList, [
    listItem1,
    listItem2,
    listItem3,
    listItem4,
    listItem5,
    listItem6,
    listItem7
  ])

  setChildren(containerRight, [
    containerRightTitle,
    containerRightWriperList
  ])

  // --------------------------------------------
  setChildren(container, [
    containerLeft,
    containerRight
  ])

  setChildren(containerServices, container)
}
