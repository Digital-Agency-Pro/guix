import { gsap } from "gsap";

function makeNavLinkActive (element) {
  const navLink = element.querySelector('.navLink')
  navLink.classList.add('navLink-active')
}


function toggleHoverState(event) {
  event.target.classList.toggle('on-hover');
}

export function effectHoverButton () {
  const listingLink = document.querySelectorAll('.header__nav-link')
  listingLink.forEach(element => {
    element.addEventListener('mouseenter', toggleHoverState);
    element.addEventListener('mouseleave', toggleHoverState);
    element.addEventListener('touchstart', toggleHoverState);
    element.addEventListener('touchend', toggleHoverState);
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


// document.addEventListener('click', function(event) {
//   const target = event.target;

//   if (target.matches('[data-hover]')) {
//     event.preventDefault();

//     const element = target;
//     const onHover = element.getAttribute('data-hover');
//     const linkHref = element.href;

//     if (linkHref && element.classList.contains(onHover)) {
//       location.href = linkHref;
//       return false;
//     }

//     element.classList.toggle(onHover);
//   }
// });

// document.addEventListener('mouseenter', 'mouseleave', 'li.menu__item', function(event) {
//   const hoverLink = this.querySelector('[data-hover]');

//   if (hoverLink !== null) {
//     const onHover = hoverLink.getAttribute('data-hover');
//     hoverLink.classList.toggle(onHover);
//   }
// });
