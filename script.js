const sky = document.querySelector('.sky'),
    wave = document.querySelectorAll('.wave'),
    birds = document.querySelector('.birds'),
    sunlight = document.querySelector('.sunlight'),
    sun = document.querySelector('.sun'),
    clouds = document.querySelectorAll('.clouds');


window.addEventListener('scroll', () => {
    // let x = window.scrollX
    let y = window.scrollY

    // console.log(y)


    birds.style.transform = `translate(${y}px, ${-y}px)`
    birds.style.transition = `0.5s`
        // console.log(birds)
    sun.style.transform = `translate(${y/3}px, ${-y/3}px)`
    sun.style.transition = `1s`
    sunlight.style.transform = `translate(${y/3}px, ${-y/3}px)`

    //translate(${y/3}px, ${-y/3}px): Это функция трансформации translate, которая перемещает элемент по горизонтальной и вертикальной осям.   
    //${y/3}px - это значение смещения по горизонтали, которое зависит от переменной y (разделенной на 3),
    //а ${-y/3}px - это значение смещения по вертикали, также зависящее от переменной y (разделенной на 3).
    //Знак “-” перед y/3 инвертирует направление смещения по вертикали.


    sunlight.style.transition = `1s`




    clouds.forEach(el => {
        // console.log(el)
        let speed = el.getAttribute('speed')
        el.style.transform = `translateX(${y * speed}px)`
        el.style.transition = `1s`
    });
    wave.forEach(element => {
        let speed = element.getAttribute('speed')
        element.style.transform = `translateX(${y * speed}px)`
            //translateX(${y * speed}px): Это функция трансформации,   
            //перемещающая элемент по горизонтальной оси. ${y * speed}px - это значение смещения,
            //которое зависит от переменной y и коэффициента speed.

        element.style.transition = `0.5s`
            //свойство transition элемент чтобы сделать анимацию плавной

    })


})