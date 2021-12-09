// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


//
// const wrapperBlock = document.createElement('div')
// const btn = document.createElement('button')
// btn.textContent='Click'
//
//
// const firstFormBlockWrapper = document.createElement('div')
// const firstFormBlock = document.createElement('form')
// firstFormBlock.id='first-form'
// const firtstinputBlock = document.createElement('input')
// firtstinputBlock.type='text'
// firstFormBlock.append(firtstinputBlock)
// firstFormBlockWrapper.append(firstFormBlock)
//
// const secondFormBlockWrapper = document.createElement('div')
// const secondFormBlock = document.createElement('form')
// secondFormBlock.id='second-form'
// const secondInputBlock = document.createElement('input')
// secondInputBlock.type='text'
// secondFormBlock.append(secondInputBlock)
// secondFormBlockWrapper.append(secondFormBlock)
//
// wrapperBlock.append(firstFormBlockWrapper,secondFormBlockWrapper,btn)
// document.body.append(wrapperBlock)
//
// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     for(let item of document.forms){
//         for(let elm of item.elements){
//             console.log(elm.value)
//         }
//     }
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)





function createTable(){
    const wrapperOfInput = document.createElement('div');
    wrapperOfInput.style.display='flex';
    wrapperOfInput.style.flexDirection='column'
    wrapperOfInput.style.rowGap='10px'

    const firstInput = document.createElement('input');
    firstInput.type='text'
    firstInput.style.width='300px'
    firstInput.style.height='50px'
    firstInput.style.fontSize='24px'
    const secondInput = document.createElement('input');
    secondInput.type='text'
    secondInput.style.width='300px'
    secondInput.style.height='50px'
    secondInput.style.fontSize='24px'
    const thirdInput = document.createElement('input')
    thirdInput.type='text'
    thirdInput.style.width='300px'
    thirdInput.style.height='50px'
    thirdInput.style.fontSize='24px'

    const btn = document.createElement('button');
    btn.style.padding='20px 50px 20px 50px';
    btn.textContent='Click'
    btn.style.width='300px'
    btn.style.fontSize='36px'


    wrapperOfInput.append(firstInput,secondInput,thirdInput,btn)
    document.body.append(wrapperOfInput)

    btn.addEventListener('click',(e)=>{
        e.preventDefault();

        const table = document.createElement('table')
        table.style.border = '1px solid grey';
        table.style.padding='5px'
        table.style.marginTop='10px'
        const countOfRows = +firstInput.value;
        const countOfColumns = +secondInput.value;
        const valueOfInCell = thirdInput.value;


        for(let i = 0; i<countOfRows;i++){
            const tr = document.createElement('tr');
            tr.style.border='1px solid grey';
            for(let i = 0; i<countOfColumns;i++){
                const td = document.createElement('td')
                td.style.border='1px solid grey';
                td.textContent = valueOfInCell;
                td.style.padding='10px';
                tr.append(td)
            }
            table.append(tr)
        }
        document.body.append(table)
    })
}













// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

const arr = ['сука','блять','нахуй','підарас','далбайоб']
function foo(arr){
    const wrapper = document.createElement('div')
    wrapper.style.display='flex';
    wrapper.style.flexDirection='column';
    wrapper.style.rowGap='10px'
    const input = document.createElement('input')
    input.type='text'
    input.style.width='300px'
    input.style.height='50px'
    input.style.fontSize='24px'
    const btn = document.createElement('button')
    btn.style.padding='20px 50px 20px 50px';
    btn.textContent='Click'
    btn.style.width='300px'
    btn.style.fontSize='36px'

    wrapper.append(input,btn)
    document.body.append(wrapper)


    btn.addEventListener('click',()=>{
        if(arr.includes(input.value.toLowerCase())){
            alert('Ви ввели нецензурне слово....')
            input.value=''
        }else{
            alert('Все гуд....')
            input.value=''
        }
    })

}
//foo(arr)




// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
const secondArr = ['сука','блять','нахуй','підарас','далбайоб']
function secondFoo(arr){
    const wrapper = document.createElement('div')
    wrapper.style.display='flex';
    wrapper.style.flexDirection='column';
    wrapper.style.rowGap='10px'
    const input = document.createElement('input')
    input.type='text'
    input.style.width='300px'
    input.style.height='50px'
    input.style.fontSize='24px'
    const btn = document.createElement('button')
    btn.style.padding='20px 50px 20px 50px';
    btn.textContent='Click'
    btn.style.width='300px'
    btn.style.fontSize='36px'

    wrapper.append(input,btn)
    document.body.append(wrapper)


    btn.addEventListener('click',()=>{
        const wordArr = input.value.replaceAll(',','').split(' ')
        wordArr.forEach(item=>{
            if(arr.includes(item)){
                console.log(item)
                alert('Ви ввели нецензурне слово....')
                input.value=''
            }

        })
    })
}
//secondFoo(arr)