// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function checkArgs(a,b){
//     return b ? a+b:a;
// }


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
//
// function arrayComposes(firstArr,secondArr){
//     let newArr=[]
//
//
//
//     for(let i=0;i<firstArr.length;i++){
//         let elementOfFirstArray=firstArr[i]
//         let elementOfSecondArray=secondArr[i]
//         let composeElement=elementOfFirstArray+elementOfSecondArray
//         newArr.push(composeElement)
//     }
//     return newArr
// }
//
// const firstArray=[1,2,3,4]
// const secondArray=[3,5,7,9]
// console.log(arrayComposes(firstArray,secondArray))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function arrayOfKeys(arr){
//     let arrayKeys=[]
//     arr.forEach((item)=>{
//         for( let key in item){
//             arrayKeys.push(key)
//         }
//     })
//     return arrayKeys
//
// }
// const arr=[{name: 'Dima', age: 13}, {model: 'Camry'}]
// console.log(arrayOfKeys(arr))

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// function arrayOfProperty(arr){
//     let arrayProperty=[]
//     arr.forEach((item)=>{
//         for( let key in item){
//             arrayProperty.push(item[key])
//         }
//     })
//     return arrayProperty
// }
//
//
// const arr=[{name: 'Dima', age: 13}, {model: 'Camry'}];
// console.log(arrayOfProperty(arr))