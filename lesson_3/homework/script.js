// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


//const arrOfNumber=[1,2,3,4,5];

// for(let i=0;i<arrOfNumber.length;i++){
//     console.log(arrOfNumber[i])
// }

// arrOfNumber.forEach((item)=>{
//     console.log(item)
// })

// for(let i of arrOfNumber){
//     console.log(i)
// }

//const arrOfString=['str','qwe','ert','tyu','bnm']

// for(let i=0;i<arrOfString.length;i++){
//     console.log(arrOfString[i])
// }


// arrOfString.forEach((item)=>{
//     console.log(item)
// })

//
// for(let i of arrOfString){
//     console.log(i)
// }


// const arr = [233,421,412,654,555,'dsa','fasfasd','dasasd','dasasd','fasd']

// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i])
// }


// arr.forEach((item)=>{
//     console.log(item)
// })

// for(let i of arr){
//     console.log(i)
// }





// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// const arr=[]
//
// for(let i=0;i<10;i++){
//     arr.push(Math.floor(Math.random()*(i+5)))
// }
// arr.forEach((item)=>{
//     console.log(item)
// })


//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// for(let i=0;i<10;i++){
//     document.write('<div>Довільний текст</div>')
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for(let i=1;i<=10;i++){
//     document.write(`<div>Елемент з номером: ${i}</div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

//let i=0
// while (i<=20){
//     document.write('<h1>Довільний текст</h1>')
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 1;
// while (i<=20){
//     document.write(`<h1>Елемент під номером: ${i}</h1>`)
//     i++;
// }



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const arr = [23,321,524,7534,124,421,654,124,47,345]
//
// arr.forEach((item)=>{
//     console.log(item)
// })


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// const arr = ['dsa','dsadas','dasdas','dasasdasd','asdasd','dascasd','asdasd','asdasd','asdasd','asdasd']
//
// arr.forEach((item)=>{
//     console.log(item)
// })

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// const arr = [1,321,312,true,'sdsd',false,323,'Apple','XIAOMI',3232]
// arr.forEach((item)=>{
//     console.log(item)
// })


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// const arr=[3213,321321,321321,312321,6546,6546,6546456,645645,6456,6543,'321321','312312','ddsadsa','dasdas','dasdas','hgfhfg','dsadasd','sdadasdasdas','dsadas','dasads',true,true,false,true,true,false,false,false,true,false]
//
// arr.forEach((item)=>{
//     if(typeof(item)=='boolean'){
//         console.log(item)
//     }
// })

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// const arr=[3213,321321,321321,312321,6546,6546,6546456,645645,6456,6543,'321321','312312','ddsadsa','dasdas','dasdas','hgfhfg','dsadasd','sdadasdasdas','dsadas','dasads',true,true,false,true,true,false,false,false,true,false]
//
// arr.forEach((item)=>{
//     if(typeof(item)=='number'){
//         console.log(item)
//     }
// })

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// const arr=[3213,321321,321321,312321,6546,6546,6546456,645645,6456,6543,'ffgfgf','ghghghgh','ddsadsa','dasdas','dasdas','hgfhfg','dsadasd','sdadasdasdas','dsadas','dasads',true,true,false,true,true,false,false,false,true,false]
//
//
// arr.forEach((item)=>{
//     if(typeof(item)=='string'){
//         console.log(item)
//     }
// })


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

//let arr=[]

// for(let i=1;i<=10;i++){
//     if((i%2)==0){
//         arr.push(Math.floor(Math.random()*(i+3)))
//     }else if((i%2)==1){
//         const item = 'str'+ Math.floor(Math.random()*(i+3))
//         arr.push(item)
//     }
// }
// arr.forEach((item)=>{
//     console.log(item)
// })

// const arr = [true,323,767,555,'str',false,false,3232,'dsds','dssd']
//
// arr.forEach((item)=>{
//     console.log(item)
// })



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=1;i<=10;i++){
//     console.log(`Поточний номер кроку: ${i}`)
//     document.write(`<div>Поточний номер кроку: ${i}</div>`)
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i=1;i<=100;i++){
//     console.log(`Поточний номер кроку: ${i}`)
//     document.write(`<div>Поточний номер кроку: ${i}</div>`)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(let i=1;i<=100;i+=2){
//     console.log(`Поточний номер кроку: ${i}`)
//     document.write(`<div>Поточний номер кроку: ${i}</div>`)
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write


// for(let i=1;i<100;i++){
//     if((i%2)==0){
//         console.log(`Парний крок: ${i}`)
//         document.write(`<div>Парний крок: ${i}</div>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for(let i=1;i<=100;i++){
//     if((i%2)==1){
//         console.log(`Непарний крок: ${i}`)
//         document.write(`<div>Непарний крок: ${i}</div>`)
//     }
// }