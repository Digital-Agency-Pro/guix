import { gsap } from "gsap";

import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Draggable, InertiaPlugin, Observer);

export function createSliderBlockMain() {
    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        //создает временную шкалу GSAP с параметрами repeat, paused, defaults и onReverseComplete.
        let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: 'none' },
            onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
            //Внутри временной шкалы вычисляются различные параметры, такие как length (длина массива), startX (начальное смещение первого элемента), widths (ширина элементов),
            //xPercents (процентные значения для анимации), curIndex (текущий индекс), pixelsPerSecond (скорость анимации), snap (функция для округления значений),
            //totalWidth (общая ширина элементов), curX (текущее смещение элемента), distanceToStart (расстояние до начала анимации), distanceToLoop (расстояние до конца анимации),
            // item (текущий элемент), и i (индекс текущего элемента).
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            // если config.speed установлен, используется его значение для расчета скорости анимации в пикселях в секунду. Если config.speed не установлен, используется значение по умолчанию 100 пикселей в секунду.
            pixelsPerSecond = (config.speed || 1) * 100, //Сначала проверяется, установлен ли параметр config.speed. Если он не установлен, используется значение по умолчанию 1.
            //код определяет функцию snap
            snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // Сначала проверяется, установлен ли параметр config.snap в false. Если да, то функция snap просто возвращает переданное значение без округления. Если config.snap не установлен в false, то используется функция gsap.utils.snap для округления значения. Значение config.snap по умолчанию равно 1, если оно не указано явно.
            totalWidth,
            curX,
            distanceToStart,
            distanceToLoop,
            item,
            i;
        //Устанавливает свойства для всех элементов в массиве items.
        //Этот код позволяет установить процентное значение x для каждого элемента в массиве items, учитывая его ширину и текущее положение по оси x.
        gsap.set(items, {
            //Создает функцию, которая будет использоваться для установки свойства xPercent для каждого элемента.
            xPercent: (i, el) => {
                let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'))); // Вычисляет ширину элемента widths[i] путем получения значения свойства width в пикселях.
                //Устанавливает значение xPercent для элемента, используя функцию snap для округления значения.
                //Значение вычисляется как отношение текущего положения элемента по оси x к его ширине, умноженное на 100, плюс текущее значение xPercent.
                xPercents[i] = snap(
                    (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
                    gsap.getProperty(el, 'xPercent')
                );
                // Возвращает значение xPercent для текущего элемента
                return xPercents[i];
            },
        });

        gsap.set(items, { x: 0 }); // Устанавливает начальное положение всех элементов в массиве items по оси x на 0.

        //Вычисляет общую ширину всех элементов, учитывая их начальные позиции, ширины, масштабирование и отступы.
        totalWidth =
            items[length - 1].offsetLeft +
            (xPercents[length - 1] / 100) * widths[length - 1] -
            startX +
            items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], 'scaleX') +
            (parseFloat(config.paddingRight) || 0);
        //Запускает цикл для каждого элемента в массиве items.
        for (i = 0; i < length; i++) {
            item = items[i]; //Инициализирует текущий элемент.
            curX = (xPercents[i] / 100) * widths[i]; //Вычисляет текущее значение x для элемента, учитывая его процентное значение и ширину.
            distanceToStart = item.offsetLeft + curX - startX; //Вычисляет расстояние от начала анимации до текущего элемента.
            distanceToLoop =
                distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX'); //Вычисляет расстояние до конца анимации для текущего элемента, учитывая его масштабирование.
            //Выполняет анимацию элемента, перемещая его от текущего положения к концу анимации с заданной скоростью
            tl.to(
                item,
                {
                    xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                    duration: distanceToLoop / pixelsPerSecond,
                },
                0
            )
                //Выполняет вторую анимацию, перемещая элемент от текущего положения до его конечного положения с заданной скоростью.
                .fromTo(
                    item,
                    {
                        xPercent: snap(
                            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                        ),
                    },
                    {
                        xPercent: xPercents[i],
                        duration:
                            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                        immediateRender: false,
                    },
                    distanceToLoop / pixelsPerSecond
                )
                //Добавляет метку для каждого элемента, чтобы можно было легко управлять анимацией.
                .add('label' + i, distanceToStart / pixelsPerSecond);

            //Сохраняет время, необходимое для достижения текущего элемента, в массив times.
            times[i] = distanceToStart / pixelsPerSecond;
        }
        //Функция toIndex позволяет переходить к определенному индексу в анимации.
        function toIndex(index, vars) {
            vars = vars || {};
            Math.abs(index - curIndex) > length / 2 &&
                (index += index > curIndex ? -length : length); //
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex) {
                //
                vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(time, vars);
        }

        tl.next = (vars) => toIndex(curIndex + 1, vars);
        tl.previous = (vars) => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true); //
        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }
        return tl;
    }


    const loop = horizontalLoop('.header__slider-div', {
        repeat: -1,
        speed: 1,
        paddingRight: 30,
    });


    let tl;
    const speed = 1;


    //Этот код создает анимацию, которая масштабирует время в зависимости от направления прокрутки колеса мыши. При прокрутке вверх или вниз анимация будет ускоряться или замедляться соответственно.
    Observer.create({
        target: window, // указывает, что наблюдатель будет следить за событиями прокрутки колеса мыши на окне.
        type: 'wheel', //указывает тип события, которое будет отслеживаться

        // будет вызываться при каждом изменении события прокрутки колеса мыши.
        onChangeY: (self) => {
            tl && tl.kill(); //если временная шкала tl существует, она уничтожается.
            const factor = self.deltaY > 0 ? 1 : -1; //вычисляется коэффициент масштабирования времени анимации в зависимости от направления прокрутки (вверх или вниз).
            //создается новая временная шкала GSAP и выполняется анимация с масштабированием времени и длительностью
            tl = gsap
                .timeline()
                .to(loop, { timeScale: speed * factor, duration: 0.25 })
                .to(loop, { timeScale: 1 * factor, duration: 1 });
        },
    });

}

// export function createSliderBlockMain () {

//   // Получаем слайдер и его содержимое
//   const slider = document.querySelector('.header-title__slides-container');
//   const sliderContent = slider.querySelector('.slider-content');

//   // Определяем длительность анимации
//   const duration = 100;

//   // Создаем анимацию с GSAP
//   const tween = gsap.fromTo(sliderContent, {
//       x: 0,
//       // xPercent: 0
//       ease: "none"
//   }, {
//       x: -sliderContent.offsetWidth, //Элемент .slider-content перемещается на -sliderContent.offsetWidth пикселей от левого края контейнера
//       // xPercent: -100,
//       duration: duration,
//       delay: 0.15,
//       ease: "none", //линейное перемещение элемента без изменений скорости.
//       repeat: -1, // бесконечно
//       yoyo: false,
//       // stagger: 0,
//       // complete: () => {
//       //   sliderContent.style.transform = 'translateX(0)';
//       // }
//   });
// }
