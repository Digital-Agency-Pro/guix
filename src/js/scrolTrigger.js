import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import 'lenis/dist/lenis.css'
gsap.registerPlugin(ScrollTrigger)
// import Lenis from 'lenis'

// const lenis = new Lenis();
// lenis.on('scroll', ScrollTrigger.update);

// lenis.on('scroll', () => {
//   console.log('Прокрутка произошла!');
// })

export const scrollTrigger = new ScrollTrigger({
  trigger: "#idHeader", // Элемент, при достижении которого будет запущена анимация
  start: "top 10%", // Начальная позиция, с которой начнется анимация
  onEnter: () => {
    const tl = gsap.timeline({
      ease: "power2.easeOut"
    });


    tl.to("#idHeader", {
      opacity: 0,
      y: 0,
      duration: 0,
      ease: "power2.easeOut",
      onComplete: () => {
        tl.to("#idHeader", {
          opacity: 1,
          y: 100,
          duration: 0.5,
          ease: "power2.easeOut"
        });
      }
    });

    tl.to("#idShowreel", {
      opacity: 0.1,
      y: 0, // Начинается с позиции y: 100 (100 пикселей от верхней части экрана).
      duration: 0,
      ease: "power2.easeOut",
      onComplete: () => {
        tl.to("#idShowreel", {
          opacity: 1,
          y: 100,
          duration: 0.5,
          ease: "power2.easeOut"
        });
      }
    });
    tl.to("#idServices", {
      opacity: 0,
      y: 100,
      duration: 0,
      ease: "power2.easeOut",
      onComplete: () => {
        tl.to("#idServices", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.easeOut"
        });
      }
    });
    tl.to("#idPortfolio", {
      opacity: 0,
      y: 100,
      duration: 0,
      ease: "power2.easeOut",
      onComplete: () => {
        tl.to("#idPortfolio", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.easeOut"
        });
      }
    });
    tl.to("#idTestimonials", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.easeOut",
      onComplete: () => {
        tl.to("#idTestimonials", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.easeOut"
        });
      }
    });
    tl.to("#idFooter", {
      opacity: 0,
      y: 100,
      duration: 0.5,
      ease: "power2.easeOut",
      onComplete: () => {
        tl.to("#idFooter", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.easeOut"
        });
      }
    });
  }
});
