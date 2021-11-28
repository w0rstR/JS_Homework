// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const min=(a,b,c)=>{
    if(a>b){
        if(b>c){
            return c
        }else{
            return b
        }
    }else if(a<b){
        if(a<c){
            return a
        }else {
            return c
        }
    }
}
// console.log(min(101,112,544))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const max=(a,b,c)=>{
    if(a>b){
        if(a>c){
            return a
        }else{
            return c
        }
    }else  if(a<b){
        if(b>c){
            return b
        }else {
            return c
        }
    }
}
// console.log(max(222,21,2220))

// - створити функцію яка повертає найбільше число з масиву
// const maxNumberOfArray=(arr)=>{
//     let max=0;
//     arr.forEach((item,i)=>{
//         if(item>max){
//             max=item;
//         }
//     })
//     return max
// }
// const arr=[123,12222,3,45,622222,7,5,543,5444,5555]
// console.log(maxNumberOfArray(arr))


// - створити функцію яка повертає найменьше число з масиву

// const minNumberOfArray=(arr)=>{
//     let min=arr[0];
//     arr.forEach((item)=>{
//         if(item<min){
//             min=item
//         }
//     })
//     return min
// }
// const arr=[1,12222,232,45,622222,7,5,543,12,5555]
// console.log(minNumberOfArray(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
const sumNumbersOfArray = (arr)=>{
    let sum=0;
    arr.forEach((item)=>{
        sum+=item;
    })
    return sum
}
//
// const arr=[2,1,6,4,-4];
// console.log(sumNumbersOfArray(arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const averageNumbersOfArray=arr=>Math.floor(sumNumbersOfArray(arr)/arr.length)

// const arr=[1,2,3,4,5]
// console.log(averageNumbersOfArray(arr))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

const getAllNumbers=(...arguments)=>{
    let min=arguments[0];
    let max = 0;

    arguments.forEach((item)=>{
        if(item<min){
            min=item;
        }
    })

    arguments.forEach((item)=>{
        if(item>max){
            max=item;
        }
    })
    console.log(`Найбільше число: ${max}`)
    return min
}
// getAllNumbers(2,312,4,4,64,43,62,67,1,6,83,43,231,632,222)


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


const fillArrayOfRandomNumbers=(arr,arrLength,min,max)=>{
    for(let i=0;i<arrLength;i++){
        arr.push(Math.round(Math.random()* (max-min)+min))
    }
    return arr
}
// const arr=[]
// console.log(fillArrayOfRandomNumbers(arr,10,33,199))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const printArrayReverse=(arr)=>{
    let newArr=[]
    for(let i = arr.length - 1; i >= 0;i--){
        newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr
}
// const oldArray=[1,2,3,4,5,6,7,8,9]
// printArrayReverse(oldArray)