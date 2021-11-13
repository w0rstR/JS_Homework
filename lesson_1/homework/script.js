// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let x = 'hello';
// let y = 'owu';
// let z = 'com';
// let j = 'ua';
// let g = 1;
// let t = 10;
// let q = -999;
// let w = 123;
// let k = 3.14;
// let e = 2.7;
// let u = 16;
// let p = true;
// let h = false;



//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let allVariables=`
//     ${x}
//     ${y}
//     ${z}
//     ${j}
//     ${g}
//     ${t}
//     ${q}
//     ${w}
//     ${k}
//     ${e}
//     ${u}
//     ${p}
//     ${h}
// `
// console.log(x,y,z,j,g,t,q,w,k,e,u,p,h)
// document.write(allVariables)
// alert(allVariables)

// - Переприсвоїти кожній змінній з завдання значення на довільне.

// x = 'owu';
// y = 'com';
// z = 'ua';
// j = 'HELLO';
// g = 277713;
// t = 103122;
// q = 9993122;
// w = 131231231223;
// k = 333.14444;
// e = 1112.7444;
// u = 1214124126;
// p = false
// h = false


//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// let secondAllVariables=`
//     ${x}
//     ${y}
//     ${z}
//     ${j}
//     ${g}
//     ${t}
//     ${q}
//     ${w}
//     ${k}
//     ${e}
//     ${u}
//     ${p}
//     ${h}
// `
// console.log(x,y,z,j,g,t,q,w,k,e,u,p,h)
// document.write(secondAllVariables)
// alert(secondAllVariables)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// const firstName = 'Maksym';
// const lastName = 'Saturchak';
// const middleName = 'Oleksandrovych'
//
// const person = firstName + ' ' +lastName + ' ' + middleName
// console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".


// const firstName = prompt('Введіть ваше імя: ')
// const middleName = prompt('Введіть ваше імя по-батькові: ')
// const ages = prompt('Скільки вам років?')
//
// console.log(`Вітаю ${firstName} ${middleName}. Тобі ${ages} років`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// const first_num = 5 > 6
// const second_num =  5 === 6
// const third_num =  5 >= 6
// const fourth_num =  10 == 10
// const fifth_num =  10 <= 10
// const sixth_num = 10 !== 10
// const seventh_num = 10 < 10
// const eight_num = 10 > 10
// const nineth_num = 123 === '123'
// const tenth_num = 123 == '123'
// console.log(first_num,second_num,third_num,fourth_num,fifth_num,sixth_num,seventh_num,eight_num,nineth_num,tenth_num)



// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
//
// В першому випадку у нас строка 205 тому, що для строк є оператор +, змінну a конвертне в строку і складе дві строки.
// у всіх інших випадка буде number тому, що для строк немає оператора -,*,/ . str конвертне в число і виконає ці операції.Тобто в 3 останніх результат буде number