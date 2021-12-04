// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const newBlock = document.createElement('div')

newBlock.classList.add('wrap','collapse','alpha','beta')
newBlock.textContent='Lorem ipsum dolor sit amet.';
newBlock.style.backgroundColor='grey';
newBlock.style.color='green';
newBlock.style.fontSize='24px';
//document.body.append(newBlock)

// const newBlockClone=newBlock.cloneNode(true)
// document.body.appendChild(newBlockClone)
// document.body.append(newBlock.cloneNode(true))












// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// const arr=['Main','Products','About us','Contacts'];
// const ul=document.querySelector('ul')
// arr.forEach(item=>{
//     const li = document.createElement('li')
//     li.textContent=item
//     ul.append(li)
// })





// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.forEach(item=>{
//     const element = document.createElement('div')
//     element.innerText=`Course: ${item.title} --- Duration: ${item.monthDuration}`
//     document.body.append(element)
// })









// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.forEach(item=>{
//     const box = document.createElement('div')
//     const headerBlock = document.createElement('h1')
//     const paraghBlock= document.createElement('p')
//
//     box.classList.add('item')
//     headerBlock.classList.add('heading')
//     paraghBlock.classList.add('description')
//
//     headerBlock.innerText=`${item.title}`;
//     paraghBlock.innerText=`${item.monthDuration}`
//
//     box.append(headerBlock,paraghBlock)
//     document.body.append(box)
// })
