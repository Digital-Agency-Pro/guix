import { gsap } from "gsap";


function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};

  let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
          repeat: config.repeat, onUpdate: onChange && function () {
              let i = tl.closestIndex();
              if (lastIndex !== i) {
                  lastIndex = i;
                  onChange(items[i], i);
              }
          }, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      }),

      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      timeOffset = 0,
      container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,

      getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0),

      populateWidths = () => {
          let b1 = container.getBoundingClientRect(), b2;
          items.forEach((el, i) => {
              widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
              xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
              b2 = el.getBoundingClientRect();
              spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
              b1 = b2;
          });
          gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
              xPercent: i => xPercents[i]
          });

          totalWidth = getTotalWidth();


      },
      timeWrap,

      populateOffsets = () => {
          timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
          center && times.forEach((t, i) => {
              times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
          });
      },

      getClosest = (values, value, wrap) => {
          let i = values.length,
              closest = 1e10,
              index = 0, d;
          while (i--) {
              d = Math.abs(values[i] - value);
              if (d > wrap / 2) {
                  d = wrap - d;
              }
              if (d < closest) {
                  closest = d;
                  index = i;
              }
          }
          return index;
      },
      populateTimeline = () => {
          let i, item, curX, distanceToStart, distanceToLoop;
          tl.clear();
          for (i = 0; i < length; i++) {
              item = items[i];
              curX = xPercents[i] / 100 * widths[i];
              distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
              distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
              tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                  .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                  .add("label" + i, distanceToStart / pixelsPerSecond);

              times[i] = distanceToStart / pixelsPerSecond;

          }

          timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      refresh = (deep) => {
          let progress = tl.progress();
          tl.progress(0, true);
          populateWidths();
          deep && populateTimeline();
          populateOffsets();
          deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
      },
      proxy;
  gsap.set(items, { x: 0 });
  populateWidths();
  populateTimeline();
  populateOffsets();
  window.addEventListener("resize", () => refresh(true));

  function toIndex(index, vars) {
      vars = vars || {};
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
          time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
          vars.modifiers = { time: timeWrap };
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);

      return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
  }

  tl.toIndex = (index, vars) => toIndex(index, vars);

  tl.closestIndex = setCurrent => {
      let index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
          curIndex = index;
          indexIsDirty = false;
      }
      return index;
  };

  tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
  tl.next = vars => toIndex(tl.current() + 1, vars);
  tl.previous = vars => toIndex(tl.current() - 1, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance

  if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
  }

  if (config.draggable && typeof (Draggable) === "function") {
      proxy = document.createElement("div")
      let wrap = gsap.utils.wrap(0, 1),
          ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX,
          align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
          syncIndex = () => tl.closestIndex(true);
      typeof (InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
      draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: "x",
          onPressInit() {
              let x = this.x;
              gsap.killTweensOf(tl);
              startProgress = tl.progress();
              refresh();
              ratio = 1 / totalWidth;
              initChangeX = (startProgress / -ratio) - x;
              gsap.set(proxy, { x: startProgress / -ratio });
          },
          onDrag: align,
          onThrowUpdate: align,
          overshootTolerance: 0,
          inertia: true,
          snap(value) {
              //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
              if (Math.abs(startProgress / -ratio - this.x) < 10) {
                  return lastSnap + initChangeX
              }
              let time = -(value * ratio) * tl.duration(),
                  wrappedTime = timeWrap(time),
                  snapTime = times[getClosest(times, wrappedTime, tl.duration())],
                  dif = snapTime - wrappedTime;
              Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
              lastSnap = (time + dif) / tl.duration() / -ratio;
              return lastSnap;
          },
          onRelease() {
              syncIndex();
              draggable.isThrowing && (indexIsDirty = true);
          },
          onThrowComplete: syncIndex
      })[0];
      tl.draggable = draggable;
  }

  tl.closestIndex(true);
  lastIndex = curIndex;
  onChange && onChange(items[curIndex], curIndex);

  return tl;
}

function startScaleBoxReduce(boxes, number, widthCards) {
  if (number > widthCards - 1) {
    number = 0
  }
  gsap.to(boxes[number], {
    duration: 1,
  });
  boxes[number].classList.add("prev-card")
  boxes[number].classList.remove("current-card")
}

function srartScaleBoxIncrease(boxes, number, widthCards) {
  if (number > widthCards - 1) {
    number = 0
  }
  gsap.to(boxes[number], {
   duration: 1,
 });
 boxes[number].classList.add("current-card")
 boxes[number].classList.remove("prev-card")
}


function searchIndexCurrentCard() {
  let sliders = document.querySelectorAll(".portfolio-slider__card-box-wraper");
  for (let i = 0; i < sliders.length; i++) {
    let checkCurrentCard = sliders[i].classList.contains('current-card')
    if (checkCurrentCard) {
      return i
    }
  }
}

export function createSliderBlockPortfolio () {
  const boxes = gsap.utils.toArray(".portfolio-slider__card-box-wraper");
  let widthCards = boxes.length
  const loop = horizontalLoop(boxes, { paused: true, paddingRight: 0, draggable: true });
  srartScaleBoxIncrease(boxes, 0, widthCards)
  for (var i = 1; i < widthCards; i++) {
    startScaleBoxReduce(boxes, i, widthCards)
  }

  document.querySelector(".slider__btn-left").addEventListener("click", () => {
    let indexCurrentCard = searchIndexCurrentCard()
    loop.next({ duration: 1,  ease: "power1.Out" })

    let checkCurrentCard = document.querySelector(".current-card")
    if (checkCurrentCard) {
      checkCurrentCard.classList.remove("current-card")
      checkCurrentCard.classList.add("prev-card")
    }
    let checkPrevCard = document.querySelectorAll(".prev-card")
    if (checkPrevCard) {
      if (indexCurrentCard >= widthCards - 1) {
        indexCurrentCard = 0
        checkPrevCard[indexCurrentCard].classList.remove("prev-card")
        checkPrevCard[indexCurrentCard].classList.add("current-card")
      } else {
        checkPrevCard[indexCurrentCard + 1].classList.remove("prev-card")
        checkPrevCard[indexCurrentCard + 1].classList.add("current-card")
      }
    }
  });

  document.querySelector(".slider__btn-right").addEventListener("click", () => {
    let indexCurrentCard = searchIndexCurrentCard()
    loop.previous({ duration: 1,  ease: "power1.Out" })
    let checkCurrentCard = document.querySelector(".current-card")
    if (checkCurrentCard) {
      checkCurrentCard.classList.remove("current-card")
      checkCurrentCard.classList.add("prev-card")
    }
    let checkPrevCard = document.querySelectorAll(".prev-card")
    if (checkPrevCard) {
      if (indexCurrentCard <= 0) {
        indexCurrentCard = widthCards - 1
        checkPrevCard[indexCurrentCard].classList.remove("prev-card")
        checkPrevCard[indexCurrentCard].classList.add("current-card")
      } else {
        checkPrevCard[indexCurrentCard - 1].classList.remove("prev-card")
        checkPrevCard[indexCurrentCard - 1].classList.add("current-card")
      }
    }
  });



  function applyStyles(element, styles) {
    Object.assign(element.style, styles);
  }

  const availableScreenWidth = window.screen.availWidth
  if ( availableScreenWidth < 767.9) {
    const listingPrevCard = document.querySelectorAll(".prev-card")
    const listingCurrentCard = document.querySelectorAll(".current-card")

    listingPrevCard.forEach( prev => {
      prev.classList.remove("prev-card")
    })

    listingCurrentCard.forEach( current => {
      current.classList.add("current-card")
    })


    const cardTextHover = document.querySelector('.portfolio-slider__card-text')
    const elemCardWraperHover = document.querySelector('.portfolio-slider__card-box-wraper')

    function handleCancel(evt) {
      evt.preventDefault()
      loop.paused()
    }

    function handleEnd(evt) {
      evt.preventDefault()
      loop.paused()
    }

    function process_touchstart(evt) {
      evt.preventDefault()
      if (evt.type === 'touchstart') {
        loop.next({ duration: 3, ease: "power3.Out" })
      }
    }

    boxes.forEach(box => {
      box.classList.add("current-card")

      box.addEventListener('mouseenter', process_touchstart, false);
      box.addEventListener('mouseleave', process_touchstart, false);
      box.addEventListener('touchstart', process_touchstart, false);
      box.addEventListener('touchend', handleEnd, false);
      box.addEventListener('touchcancel', handleCancel, false);
      box.addEventListener("touchmove", process_touchstart, false);
    })
  }

//   boxes.forEach((box, i) => box.addEventListener("mouseover", () => gsap.to(box, { duration: 0.6, scale: 1.02, opacity: 1 })));
//   boxes.forEach((box, i) => box.addEventListener("mouseout", () => gsap.to(box, { duration: 1, scale: 1, opacity: 1 })));
}


