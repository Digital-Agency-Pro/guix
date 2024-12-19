
import { gsap } from "gsap";

export function burgerNav() {
  const burgerWrapper = document.querySelector(".nav-burger__wpaper");
  const btnBurgerFirst = document.querySelectorAll(".nav-burger__toggle:first-child");
  const btnBurgerLast = document.querySelectorAll(".nav-burger__toggle:last-child");
  const btnBurgerMiddle = document.querySelectorAll(".nav-burger__toggle:nth-child(2)");

  const navBody = document.querySelector(".nav-burger__nav-list");
  const navBodyItems = document.querySelectorAll(".nav-burger__nav-item");

  const tlBurger = gsap.timeline({ duration: 0.3, paused: true});
  tlBurger
      .to(btnBurgerFirst, {
          rotation: 45,
          transformOrigin: "50% 50%",
          x: -10,
          y: 14,
          backgroundColor: "rgba(122, 122, 122, 1)"
      })
      .to(
        btnBurgerLast,
          {
              rotation: -45,
              transformOrigin: "-50% 50%",
              x: 4,
              y: 40,
              backgroundColor: "rgba(122, 122, 122, 1)"
          },
           "<"
      )
      .to(btnBurgerMiddle, { x: -100, opacity: 0 }, "<");



  const tlNav = gsap.from(navBody, {paused: true, duration: 0.3, opacity: 0 });

  const tNavItems = gsap.from(navBodyItems, {duration: 0.3, opacity: 1, stagger: 0.2, x: 300});


  burgerWrapper.addEventListener("click", () => {
    tlBurger.reversed() ? tlBurger.play() : tlBurger.reverse();
    tlNav.reversed() ? tlNav.play() : tlNav.reverse();
    tNavItems.reversed() ? tNavItems.play() : tNavItems.reverse();
  })
}

