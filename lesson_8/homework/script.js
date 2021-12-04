// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний



const pContent=document.getElementById('content')
//console.log(pContent.textContent)

const pRules=document.getElementById('rules')
//console.log(pRules.textContent)

pContent.innerText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi cupiditate doloremque, ipsum neque placeat voluptates! Earum explicabo laborum quibusdam? Ad consequatur dignissimos eveniet inventore magnam maiores obcaecati quisquam voluptatem?\n '

pRules.textContent='Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого'


pContent.style.backgroundColor='red';
pRules.style.backgroundColor='red';

pContent.style.color='blue';
pRules.style.color='blue'

console.log(pRules.className)

const fcRules=document.getElementsByClassName('fc_rules')

for(let i=0;i<fcRules.length;i++){
    fcRules[i].style.color='red'
}




