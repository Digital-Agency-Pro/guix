import { el, setChildren, setAttr, text } from 'redom'

import inFile1 from '../assets/video/testimonials/5.mp4'
import inFile2 from '../assets/video/testimonials/3.mp4'
import inFile3 from '../assets/video/testimonials/1.mp4'
import inFile4 from '../assets/video/testimonials/2.mp4'
import inFile5 from '../assets/video/testimonials/4.mp4'

const containerTestimonials = document.getElementById('idTestimonials')

export function createBlockTestimonials () {

  const sectionTestimonials = el('div', {
    class: 'container section-testimonials'
  })

  const sectionTestimonialsTitle = el('h4', {
    class: 'section-testimonials__title',
    textContent: 'Живые отзывы'
  })

  const sectionTestimonialsVideo = el('div', {
    class: 'section-testimonials__video',
  })

  const sectionTestimonialsWraper = el('div', {
    class: 'section-testimonials__video-wraper'
  })

  function createCardBox(inFile) {
    const cardBox = el('video', {
      class: 'section-testimonials__card-box',
      controls: true
    })

    const video = el('source', {
      class: 'section-testimonials__mp4',
      src: inFile,
      type: 'video/mp4'
    });

    setChildren(cardBox, video)

    return cardBox
  }

  const card1 = createCardBox(inFile1)
  const card2 = createCardBox(inFile2)
  const card3 = createCardBox(inFile3)
  const card4 = createCardBox(inFile4)
  const card5 = createCardBox(inFile5)

  setChildren(sectionTestimonialsVideo, sectionTestimonialsWraper)

  setChildren(sectionTestimonialsWraper, [
    card1,
    card2,
    card3,
    card4,
    card5
  ])

  setChildren(sectionTestimonials, [
    sectionTestimonialsTitle,
    sectionTestimonialsVideo
  ])

  setChildren(containerTestimonials, sectionTestimonials)
}
