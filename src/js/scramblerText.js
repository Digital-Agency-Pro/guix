
import { gsap } from "gsap";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);
import { TextPlugin } from "gsap/TextPlugin"
gsap.registerPlugin(TextPlugin)

let t1 = gsap.timeline({defaults: {duration: 1, ease: "power1.in"}});
// export function scramblerText() {
//   tl.to("#idBlockMaintext1", {duration: 1, scrambleText:{text:"Эксперт", chars:"XO", revealDelay:0.2}})
//   .to("#idBlockMaintext2", {duration: 1, scrambleText:{text:"в области", chars:"XO", revealDelay:0.2}})
//   .to("#idBlockMaintext3", {duration: 1, scrambleText:{text:"продуктового", chars:"XO", revealDelay:0.2}})
//   .to("#idBlockMaintext4", {duration: 1, scrambleText:{text:"и сервисного дизайна.", chars:"XO", revealDelay:0.2}})
// }
export function scramblerText() {
  t1.to("#idBlockMaintext1", {text: "Эксперт", duration: 1, yoyo: true})
  .to("#idBlockMaintext2", {text: "в области", duration: 1, yoyo: true})
  .to("#idBlockMaintext3", {text: "продуктового", duration: 1, yoyo: true})
  .to("#idBlockMaintext4", {text: "и сервисного дизайна.", duration: 1, yoyo: true})
}
