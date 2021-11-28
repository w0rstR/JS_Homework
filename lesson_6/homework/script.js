// - Знайти та вивести довижину настипних стрінгових значень

// 'hello world', 'lorem ipsum', 'javascript is cool'

//console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length)



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

//console.log('hello world'.toUpperCase(), 'lorem ipsum'.toUpperCase(), 'javascript is cool'.toUpperCase())




// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

//console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str=' dirty string   '
// let newStr=str.trim('')
// console.log(newStr)


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// const stringToArray=str=>{
//     let word=''
//     let arr=[]
//     for(let i=0;i<str.length;i++){
//         if(str[i]===" "){
//             arr.push(word)
//             word = ''
//         }else{
//             word+=str[i]
//         }
//     }
//     arr.push(word)
//     console.log(arr)
// }

// function stringToArray(str){
//     const arr=str.split(' ')
//     console.log(arr)
// }
//
// let arr='Каждый охотник желает знать'
// stringToArray(arr)


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// const delete_characters=(str,lengtth)=>{
//     return str.slice(0,7)
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str,7))







// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// const insert_dash=str=>{
//     let word=''
//     let arr=[]
//     for(let i =0;i<str.length;i++){
//         if(str[i]===" "){
//             arr.push(word)
//             word = ''
//         }else{
//             word+=str[i]
//         }
//     }
//     arr.push(word)
//     let newStr=arr.join('-')
//     console.log(newStr)
// }
// let str = "HTML JavaScript PHP";
// insert_dash(str)

// function insert_dash(str){
//     return str.replaceAll(' ','-')
// }
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// const repleceRegister=(str)=>{
//     return str[0].toUpperCase()+str.slice(1)
// }
// console.log(repleceRegister('lorem ipsum dolor sit amet'))





//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// const capitalize=(str)=>{
//     const strArr=str.split(' ')
//     strArr.forEach((item,i)=>{
//         strArr[i]=item.substring(0,1).toUpperCase()+item.slice(1)
//     })
//     return strArr.join(' ')
// }
// let str='lorem ipsum dolor sit amet'
// console.log(capitalize(str))