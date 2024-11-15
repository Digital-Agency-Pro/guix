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

  const containerLeftDecsription = el('p', {
    class: 'section-services__left-description-span',
    textContent: 'Специализируюсь'
  })

  const containerLeftDecsription2 = el('p', {
    class: 'section-services__left-description-p',
    textContent: 'на '
  })

  const containerLeftDecsription3 = el('p', {
    class: 'section-services__left-description-p',
    textContent: 'нескольких'
  })

  const containerLeftDecsription4 = el('p', {
    class: 'section-services__left-description-p',
    textContent: 'направлениях в'
  })

  const containerLeftDecsription5 = el('p', {
    class: 'section-services__left-description-p',
    textContent: 'области UI/UX и'
  })

  const containerLeftDecsription6 = el('p', {
    class: 'section-services__left-description-p',
    textContent: 'сервисного'
  })

  const containerLeftDecsription7 = el('p', {
    class: 'section-services__left-description-p',
    textContent: 'дизайна'
  })

  setChildren(containerLeftDecsriptionWriper, [
    containerLeftDecsription,
    containerLeftDecsription2,
    containerLeftDecsription3,
    containerLeftDecsription4,
    containerLeftDecsription5,
    containerLeftDecsription6,
    containerLeftDecsription7
  ])



  const buttonTelegram = createButTelega()

  const containerbuttonTelegram = el('div', {
    class: 'section-services__but-telegram',
  })

  setChildren(containerbuttonTelegram, buttonTelegram)

  setChildren(containerLeft, [
    containerLeftTitle,
    containerLeftDecsriptionWriper,
    containerbuttonTelegram
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
