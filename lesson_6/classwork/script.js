//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд


// function parseString(str){
//     return str.replaceAll('..',' ').replaceAll('---',' ').replaceAll('__',' ')
// }
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// console.log(parseString(n1))
// console.log(parseString(n2))
// console.log(parseString(n3))

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.



function genRandomNumberOfArray(size){
    const arr=[]
    for(let i =0;i<size;i++){
        arr.push(Math.round(Math.random()*100))
    }
    return arr
}
//console.log(genRandomNumberOfArray(20))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


//const newArray=genRandomNumberOfArray(20)

//growth
//console.log(newArray.sort((a,b)=>a-b))

//decrease
//console.log(newArray.sort((a,b)=>b-a))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// const newArray=genRandomNumberOfArray(20)
// const arrOfNewNumbers=newArray.filter((item)=> !(item%2))
// console.log(arrOfNewNumbers)


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// const newArray=genRandomNumberOfArray(20)
//
// const transArray = newArray.map((item)=> item.toString())
// console.log(transArray)




// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]



// function  sortNums(direction,arr){
//     if(direction==='ascending'){
//         return arr.sort((a,b)=>a-b)
//     }else if(direction === 'descending'){
//         return arr.sort((a,b)=>b-a)
//     }else{
//         console.log('error')
//     }
// }
//
// let nums = [11,21,3]
// console.log(sortNums('ascending',nums)) // [3,11,21]
// console.log(sortNums('descending',nums)) // [21,11,3]






//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

//console.log(coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration))

// console.log(coursesAndDurationArray.filter((item)=>{
//     return item.monthDuration>5
// }))

