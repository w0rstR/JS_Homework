// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calAreaOfRectengle(firstSide,secondSide){
//     return firstSide*secondSide
// }
//
// console.log(calAreaOfRectengle(12,10))





// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function  calcAreaOfCircle(r){
//     return Math.floor(Math.PI*Math.pow(r,2))
// }
// console.log(calcAreaOfCircle(10))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calcAreaOfcylinder(h,r){
//     return Math.floor(2 * Math.PI * r *h)
// }
// console.log(calcAreaOfcylinder(10,5))


// - створити функцію яка приймає масив та виводить кожен його елемент

// const arr=[123,1223,1232133,123213,123213,12321313]
//
// function printOfArray(arr){
//     arr.forEach((item,i)=>{
//         console.log(`${i} element: ${item}`)
//     })
// }
// printOfArray(arr)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function  createAParagraph(textOfParagraph){
//     document.write(
//         `
//             <p>${textOfParagraph}</p>
//         `
//     )
// }
// createAParagraph('dasdasdsadasd')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function  createOfDocumentList(textOfLi){
//     document.write(`
//         <ul>
//             <li>${textOfLi}</li>
//             <li>${textOfLi}</li>
//             <li>${textOfLi}</li>
//         </ul>
//     `)
// }
//
// createOfDocumentList('Text for list')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createOfDocumentList(textOfLi,countOfLi){
//     let ul = document.createElement('ul')
//     let body=document.getElementsByTagName('body')[0]
//
//     for(let i=1;i<=countOfLi;i++){
//         let li = document.createElement('li')
//         li.textContent=textOfLi;
//         ul.append(li)
//     }
//
//     body.append(ul)
// }


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function createListOfDocument(arr){
//     let ul = document.createElement('ul')
//     let body=document.getElementsByTagName('body')[0]
//
//     for(let i=0;i<arr.length;i++){
//         let li = document.createElement('li')
//         li.textContent=arr[i];
//         ul.append(li)
//         console.log(i)
//     }
//
//     body.append(ul)
// }
//
// const arr=['3232',22,4,5,false,22,6,7,'str','lololol',2,5,'strrr']
// createListOfDocument(arr)




//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//

function printKeysOfObjects(arrOfObjects){
    let wrapper = document.getElementsByClassName('wrapper')[0];
    for(let item of arrOfObjects){
        const {id,name,age}=item;

        let userBlock=`
                <div class="user_block">
                    <p>Id:${id}</p>
                    <p>Name:${name}</p>
                    <p>Age:${age}</p>
                </div>
        `
        wrapper.innerHTML+=userBlock
    }

}

const arrOfUsers=[{id:1,name:'Alex',age:22},{id:2,name:'Alex',age:222},{id:1,name:'Alex',age:22},{id:1,name:'Alex',age:22},{id:1,name:'Alex',age:22},{id:1,name:'Alex',age:22}]


printKeysOfObjects(arrOfUsers)