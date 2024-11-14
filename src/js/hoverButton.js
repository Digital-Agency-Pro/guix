function makeNavLinkActive (element) {
  const navLink = element.querySelector('.navLink')
  navLink.classList.add('navLink-active')
}

function effectHover (element) {
  gsap.to(element , {
    duration:1
  })
}


export function effectHoverButton () {
  const element = document.querySelector('.button-telegram')
  element.addEventListener('mouseenter', e => {
    e.preventDefault()
    effectHover(e)
  })
  element.addEventListener('mouseleave', e => {
    e.preventDefault()
  })
}

// function pushButtonExit () {
//   const elements = document.querySelectorAll('.navItem')
//   for (let i = 0, l = elements.length; i < l; ++i) {
//     elements[i].addEventListener('click', e => {
//       e.preventDefault()
//       const nameButton = elements[i].innerText

//       if (nameButton === 'Выйти') {
//         localStorage.removeItem('token')
//         localStorage.removeItem('saveDataScors')
//         localStorage.removeItem('saveScore')
//       }
//     })
//   }
// }
