import { el, setChildren, setAttr } from 'redom'
import imgButtonSound from '../assets/img/showreel/volume-high.svg'
import { createButTelega } from '../js/butTelega'
import inFileBackground from '../assets/video/showreel/1.mp4'

const containerShowreel = document.getElementById('idShowreel')

export function createBlockShowreel () {

  const divSectionShowreel = el('div', {
    class: 'container section-showreel',
  })

  const divSectionShowreelVideo = el('video', {
    class: 'section-showreel__video',
    autoplay: true,
    loop: true,
  })

  const divSectionShowreelSource = el('source', {
    class: 'section-showreel__source',
    src: inFileBackground,
    type: 'video/mp4',
  })


  //--------------------------------------------------
  const divUpContainerShowreel = el('div', {
    class: 'section-showreel__up'
  })

  const contentUp = el('div', {
    class: 'section-showreel__up-content',
  })

  const contantUpFirstText = el('span', {
    class: 'section-showreel__up-content-first',
    textContent: '2023'
  })

  const contantUpSecondText = el('span', {
    class: 'section-showreel__up-content-second',
    textContent: 'SHOWREEL'
  })

  setChildren(contentUp, [
    contantUpFirstText,
    contantUpSecondText
  ])

  const butSound = el('button', {
    class: 'section-showreel__butSound',
  })

  const butSoundImg = el('img', {
    class: 'section-showreel__butSound-img',
    src: imgButtonSound
  })

  setChildren(butSound, butSoundImg)

  setChildren(divUpContainerShowreel, [
    contentUp,
    butSound
  ])
//----------------------------------------------------

  const divDownContainerShowreel = el('div', {
    class: 'section-showreel__down'
  })

  const contentDown = el('div', {
    class: 'section-showreel__down-content'
  })

  const contentDownFirstText = el('span', {
    class: 'section-showreel__down-content-first-text',
    textContent: '250+'
  })

  const contentDownSecondText = el('span', {
    class: 'section-showreel__down-content-second-text',
    textContent: 'проектов выполнено'
  })

  const contentDownThirdText = el('span', {
    class: 'section-showreel__down-content-third-text',
    textContent: 'за все время'
  })

  setChildren(contentDown, [
    contentDownFirstText,
    contentDownSecondText,
    contentDownThirdText
  ])

  const buttonTelegram = createButTelega()

  setChildren(divDownContainerShowreel, [
    contentDown,
    buttonTelegram
  ])
  //-----------------

  setChildren(divSectionShowreelVideo, divSectionShowreelSource)

  setChildren(divSectionShowreel, [
    divUpContainerShowreel,
    divDownContainerShowreel,
    divSectionShowreelVideo
  ])

  setChildren(containerShowreel, divSectionShowreel)

//   <span id="volume">
//     <svg id="dynamic" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
// 	 width="16px" height="16px" viewBox="0 0 95.465 95.465">
//         <g >
//             <polygon points="39.323,20.517 22.705,37.134 0,37.134 0,62.865 22.705,62.865 39.323,79.486 "/>
//             <path d="M52.287,77.218c14.751-15.316,14.751-39.116,0-54.436c-2.909-3.02-7.493,1.577-4.59,4.59
//                         c12.285,12.757,12.285,32.498,0,45.254C44.794,75.645,49.378,80.241,52.287,77.218L52.287,77.218z"/>
//             <path d="M62.619,89.682c21.551-22.103,21.551-57.258,0-79.36c-2.927-3.001-7.515,1.592-4.592,4.59
//                         c19.08,19.57,19.08,50.608,0,70.179C55.104,88.089,59.692,92.683,62.619,89.682L62.619,89.682z"/>
//             <path d="M75.48,99.025c26.646-27.192,26.646-70.855,0-98.051c-2.936-2.996-7.524,1.601-4.592,4.59
//                         c24.174,24.674,24.174,64.2,0,88.871C67.956,97.428,72.545,102.021,75.48,99.025L75.48,99.025z"/>
//         </g>
//         </svg>
// </span>

//   #dynamic {
//     fill:#333;
//     padding:0 5px;
// }

//   #dynamic.off {
//       fill:#ccc;
//   }

  // controls.dynamic.click(function() {
  //   var classes = this.getAttribute("class");

  //   if (new RegExp('\\boff\\b').test(classes)) {
  //       classes = classes.replace(" off", "");
  //   } else {
  //       classes = classes + " off";
  //   }

  //   this.setAttribute("class", classes);

  //   video.muted = !video.muted;
  // });
}
