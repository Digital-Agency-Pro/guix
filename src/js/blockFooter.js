import { el, setChildren, setAttr, text } from 'redom'
import { createButTelega } from '../js/butTelega'
import imgMail from '../assets/img/footer/email.svg'
import imgTelegram from '../assets/img/footer/telegram.svg'
import logoFooter from '../assets/img/footer/logoFooter.svg'

const containerFooter = document.getElementById('idFooter')

export function createBlockFooter () {

  const sectionFooter = el('div', {
    class: 'container section-footer'
  })

  const sectionFooterWraper = el('div', {
    class: 'section-footer__wriper'
  })

  //------------- block left -------------------------
  const sectionFooterBlockLeft = el('div', {
    class: 'section-footer__block-left'
  })

  const sectionFooterBlockLeftTitle = el('h4', {
    class: 'section-footer__block-left-title',
    textContent: 'Guseinov  UIX'
  })

  const sectionFooterBlockLeftDescription = el('p', {
    class: 'section-footer__block-left-Description',
    textContent: 'Разработка премиальных, инновационных, прибыльных дизайнерских решений.'
  })

  const buttonTelegram = createButTelega()

  setChildren(sectionFooterBlockLeft, [
    sectionFooterBlockLeftTitle,
    sectionFooterBlockLeftDescription,
    buttonTelegram
  ])
  // --------------- block Center ------------------------------
  function createItemList (nameItem) {
    const itemLi = el('li', {
      class: 'section-footer__block-center-list-item',
    })

    const itemRef = el('a', {
      class: 'section-footer__block-center-list-item-ref',
      textContent: nameItem,
      href: '/#',
    })

    setChildren(itemLi, itemRef)
    return itemLi
  }

  const sectionFooterBlockCenter = el('div', {
    class: 'section-footer__block-center'
  })

  const sectionFooterBlockCenterWriperList = el('ul', {
    class: 'section-footer__block-center-wriper-list'
  })

  const item1 = createItemList('Обо мне')
  const item2 = createItemList('Продукты')
  const item3 = createItemList('Проекты')
  const item4 = createItemList('Услуги')

  setChildren(sectionFooterBlockCenterWriperList, [
    item1,
    item2,
    item3,
    item4
  ])

  setChildren(sectionFooterBlockCenter, sectionFooterBlockCenterWriperList)

  // ---------------- block right ------------------------------
  const sectionFooterBlockRight = el('div', {
    class: 'section-footer__block-right'
  })

  const sectionFooterBlockRightMail = el('img', {
    class: 'section-footer__block-right-mail',
    href: '#',
    src: imgMail
  })

  const sectionFooterBlockRightTelegram = el('img', {
    class: 'section-footer__block-right-telegram',
    href: '#',
    src: imgTelegram
  })

  setChildren(sectionFooterBlockRight, [
    sectionFooterBlockRightMail,
    sectionFooterBlockRightTelegram
  ])

  // ------------------ block last ------------------------------
  const sectionFooterBlockLast = el('div', {
    class: 'section-footer__block-last'
  })

  const sectionFooterBlockLastLeft = el('h4', {
    class: 'section-footer__block-last-left-content',
    textContent: '© 2023 GUIX. Все права защищены.'
  })

  const sectionFooterBlockLastRightWraper = el('div', {
    class: 'section-footer__block-last-left-wraper',
  })

  const sectionFooterBlockLastRightImg = el('img', {
    class: 'section-footer__block-last-right-img',
    src: logoFooter
  })

  const sectionFooterBlockLastRight = el('h4', {
    class: 'section-footer__block-last-right-content',
    textContent: 'Разработано:'
  })

  setChildren(sectionFooterBlockLastRightWraper, [
    sectionFooterBlockLastRightImg,
    sectionFooterBlockLastRight
  ])

  setChildren(sectionFooterBlockLast, [
    sectionFooterBlockLastLeft,
    sectionFooterBlockLastRightWraper
  ])

  // ------------------------------------------------------------
  setChildren(sectionFooterWraper, [
    sectionFooterBlockLeft,
    sectionFooterBlockCenter,
    sectionFooterBlockRight
  ])

  setChildren(sectionFooter, [
    sectionFooterWraper,
    sectionFooterBlockLast
  ])

  setChildren(containerFooter, sectionFooter)
}
