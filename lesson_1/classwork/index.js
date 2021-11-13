// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

// const arr=[]
//
// for (let i=0;i<10;i++){
//     let num = Math.floor(Math.random()*10)
//     arr.push(num)
// }
// console.log(arr)
///////////////////////////////////////////////
// let result=0;
// for (let i=0; i<arr.length;i++){
//     result+=arr[i]
// }
// console.log(result)
//////////////////////////////////////////////

/////////////////////////////
// let result = 0;
// arr.forEach(item=>{
//     result+=item
// })
// console.log(result)
/////////////////////////////////

///////////////////////////////////////////////////////////
// const result = arr.reduce((sum,currentValue)=>{
//     return sum+=currentValue
// })
// console.log(result)
//////////////////////////////////////////////////////////





// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

const first_book = {
    name:'Apple',
    count_of_page:500,
    genre:'Fantasy',
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

const second_book={
   name:'Clean Code',
    genre:'programing',
    author:'Robert C. Martin'
}
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

const third_book={
    name:'Fantasy ',
    count_of_page: 800,
    genre:'Fantasy ',
    author: 'Joanne Rowling'
}

const array_of_books=[first_book,second_book,third_book]

for(let book of array_of_books){
    console.log(book)
}

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
function culc_area_of_rectengle(height,width){
    const s=height*width;
    console.log('Площа прямокутника:',s);
    return s;
}
area_of_rectengle = culc_area_of_rectengle(23,10)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

function count_of_cylinder_capacity(heightC,dC){
    const PI=3.14;
    const v = PI * Math.pow(dC/2,2) / heightC;
    console.log(`Обєм циліндра заввишки ${heightC}м та дыаметром основи ${dC}м дорівнює: ${v}`)
    return v;
}
count_of_cylinder_capacity(10,4)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

function count_of_hypotenuse(n,m){
    const count = Math.sqrt(Math.pow(n,2)+Math.pow(m,2))
    console.log(`Гіпотенуза прямокутного трикутника зі стронами ${n} та ${m} дорівнює: ${count}`)
    return count
}

count_of_hypotenuse(3,4)