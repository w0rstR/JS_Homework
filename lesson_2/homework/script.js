// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//

// const time = 29;
//
// if(time <= 15){
//     console.log('перша частина години')
// }else if (time <= 30){
//     console.log('друга частина години')
// }else if (time <= 45){
//     console.log('третя частина години')
// }else{
//     console.log('четверта частана години')
// }


//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let  day = 22
//
// if(day <=11){
//     console.log('перша половина місяця')
// }else if(day<=21){
//     console.log('друга половина місяця')
// }else if(day<=31){
//     console.log('третя половина місяця')
// }


//
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// const test = false;
//
//
// if(test !== true){
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }
//
// const t = test !== true ? 'Вірно'  : 'Невірно'
// console.log(t)


//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// const a = -3
//
// if(a!==0){
//     console.log('Вірно')
// }else {
//     console.log('Невірно')
// }

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// const day = +prompt('Введіть порядковий номер дня тижня...')
//
// switch (day){
//     case 1:
//         console.log('Понеділок')
//         break
//     case 2:
//         console.log('Вівторок')
//         break
//     case 3:
//         console.log('Середа')
//         break
//     case 4:
//         console.log('Четвер')
//         break
//     case 5:
//         console.log('Пятниця')
//         break
//     case 6:
//         console.log('Субота')
//         break
//     case 7:
//         console.log('Неділя')
//         break
//     default :
//         console.log('Введіть коректні дані..')
// }

//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//

// const year = 2000
//
// if( year % 4 == 0 ){
//     console.log('Рік високосний')
// }else {
//     console.log('Рік не високосний')
// }


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

const answer = prompt('Яка офіційна назва JavaScript?')

if(answer==='ECMAScript'){
    alert('Правильно!')
}else {
    alert('Не знаєте? ECMAScript!')
}