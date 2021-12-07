// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас  елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

const mainHeader = document.querySelector('#main_header')
mainHeader.id = 'sept-2021';

const ulItem = document.querySelectorAll('ul')

ulItem.forEach(item=>{
    item.style.width='400px';
})

const linkList = document.getElementsByClassName('linkList')
for(let i=0;i<linkList.length;i++){
    linkList[i].style.width='150%';
}

const foundItem=document.getElementsByClassName('listElement2')
foundItemTextContent = foundItem[0].textContent
console.log(foundItemTextContent)


const allLiItem=document.querySelectorAll('li')
allLiItem.forEach(item=>{
    item.style.backgroundColor='grey'
})

const allItemA=document.querySelectorAll('a')
allItemA.forEach(item=>{
    item.classList.add('anchor')
})

allItemA.forEach(item=>{
    if(item.textContent==='link3'){
        item.style.fontSize='40px'
    }
})

allItemA.forEach(item=>{
    item.classList.add(`element_${item.textContent}`)
})

const subHeaderItems=document.querySelectorAll('.sub-header')
//const color = prompt('Введіть колір:')

// subHeaderItems.forEach(item=>{
//     item.style.backgroundColor=color;
// })


// const color = prompt('Введіть колір:')
// subHeaderItems.forEach(item=>{
//     if(item.textContent==='content 2 segment'){
//         item.style.color=color
//     }
// })


//
// const text = prompt('Введіть будь-який текст:')
// const firstItemContent = document.querySelector('.content_1')
// firstItemContent.textContent=text

const allPElements=document.querySelectorAll('p')
allPElements.forEach(item=>{
    item.style.padding='20px'
})

const allTextSecondElement = document.querySelectorAll('.text2')
allTextSecondElement.forEach(item=>{
    item.textContent='sep-2021'
})
