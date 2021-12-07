// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.



const wrapperBlock = document.createElement('div')
const btn = document.createElement('button')
btn.textContent='Click'


const firstFormBlockWrapper = document.createElement('div')
const firstFormBlock = document.createElement('form')
firstFormBlock.id='first-form'
const firtstinputBlock = document.createElement('input')
firtstinputBlock.type='text'
firstFormBlock.append(firtstinputBlock)
firstFormBlockWrapper.append(firstFormBlock)

const secondFormBlockWrapper = document.createElement('div')
const secondFormBlock = document.createElement('form')
secondFormBlock.id='second-form'
const secondInputBlock = document.createElement('input')
secondInputBlock.type='text'
secondFormBlock.append(secondInputBlock)
secondFormBlockWrapper.append(secondFormBlock)

wrapperBlock.append(firstFormBlockWrapper,secondFormBlockWrapper,btn)
document.body.append(wrapperBlock)

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    for(let item of document.forms){
        for(let elm of item.elements){
            console.log(elm.value)
        }
    }
})

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку





// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
