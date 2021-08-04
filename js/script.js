//---------1 вариант
// const divs = document.querySelectorAll('.wrapper div')
// const colors = ['red', 'green', 'yellow', 'dark']
// const text = ['Mozhet byt', 'Budet vsegda', 'Velikiy', 'Preuspevshiy']
//
//
//
// divs.forEach(item => {
// item.addEventListener('click', () =>{ //Событие клика
//     divs.forEach((el => el.removeAttribute('class'))) // (перебрать каждый el, у каждого el удалить АТРИБУТ класс)
//   const randomNumber = Math.floor(Math.random() * colors.length)
//     item.classList.add(colors[randomNumber])
//     item.innerText.add(text[randomNumber])
// })
// } )

//---------2 вариант
const divs = document.querySelectorAll('.wrapper div')
const wrapper = document.querySelector('.wrapper')
const colors = ['red','ali', 'green', 'yellow', 'dark', 'darkslateblue','alim', 'crimson',
    'aqua', 'cornflowerblue', 'hotpink', 'chartreuse', 'indigo', 'deeppink', 'purple', 'orange']
const text = ['АИ-СТ', 'АР-БУЗ', 'АН-НА', 'АНЯ', 'АЛ-ИМ', 'ЩЕ-НОК', 'ЩУ-КА', 'ЩЁТ-КА', 'УТ-КА', 'УТ-РО',
    'ОС-ЕНЬ', 'ОК-НО', 'ОЛ-ЕНЬ', 'ЁЖ-ИК', 'ЁЛ-КА', 'ЕН-ОТ', 'МА-МА', 'МУ-ХА', 'ВО-ИН', 'ДЫ-РА', 'ТУ-ЧА',
    'ЖА-БА', 'ВЕ-ЕР', 'ЗА-ЯЦ', 'БУ-РЯ','ОЧ-КИ','МО-РЕ', 'ЗУ-БЫ']



divs.forEach((item, idx) => {
    item.addEventListener('click',(event) => {
        divs.forEach(el => {
            el.removeAttribute('class')
            el.innerText = ''
        })
        const randomNumber = Math.floor(Math.random() * colors.length)
        if (idx === divs.length -1) {
            idx = -1
        }
        divs[idx + 1].classList.add(colors[randomNumber])
        divs[idx + 1].innerText = text[randomNumber]


    })
})


wrapper.addEventListener('click',(event) => {
    if (event.target.classList[0] !== 'wrapper')
    divs.forEach((el => {
        el.removeAttribute('class') // удалить в каждом эл атрибут класс
        el.innerText = '' //
    }))
    const randomNumber = Math.floor(Math.random() * colors.length)
    event.target.classList.add(colors[randomNumber])
    event.target.innerText = text[randomNumber]
})















//square1.addEventListener('click', (ev) => {
    // return ev.target.classList.add('black') === 'square'
    // if (ev.target.classList.add('black') === 'square') {
    //     ev.target.parentNode.classList.toggle('black')
    // }
//})


//deleteButtons.forEach((btn, idx)



//forEach(addEventListener())





//if (event.target.classList[0] === "done") {
//         event.target.parentNode.classList.toggle("line-through")
//     }