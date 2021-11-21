// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом
//  - додати його в інший масив.


//1.

// let arr = []
//
// for(let i =2;i < 102;i++){
//     if(i%2==0){
//         arr.push(i)
//     }
// }


// let arr = []
//
// for(let i =2;i < 102;i++){
//     if(i%2==1){
//         arr.push(i)
//     }
// }


// let arr=[]
//
// for(let i=0;i<20;i++){
//
//     arr.push(Math.floor(Math.random()*10))
// }

// let arr=[]
//
// const max=732
// const min =8
//
// for(let i=0;i<20;i++){
//     arr.push(Math.floor(Math.random()*(max-min)+min))
// }



//2.
// let arr=[]
//
// for(let i=1;i<=20;i++){
//     arr.push(Math.floor(Math.random()*10))
// }
//
// for(let i=1;i<=arr.length;i++){
//     if(i%3==0){
//         console.log(`Кожен третій елемент: ${arr[i]}`)
//     }
// }


//3.
// let arr=[]
//
// for(let i=1;i<=20;i++){
//     arr.push(Math.floor(Math.random()*13))
// }
// console.log(arr)
// for(let i=1;i<=arr.length;i++){
//     if(i%3==0){
//         if(arr[i]%2==0){
//             console.log(`Кожен третій парний елемент: ${arr[i]}`)
//         }
//     }
// }

//4.

// let arr=[]
// let newArr=[]
//
// for(let i=1;i<=20;i++){
//     arr.push(Math.floor(Math.random()*13))
// }
//
// for(let i=1;i<=arr.length;i++){
//     if(i%3==0){
//         if(arr[i]%2==0){
//             console.log(`Кожен третій парний елемент: ${arr[i]}`)
//             newArr.push(arr[i])
//         }
//     }
// }
// console.log(newArr)


//5.


// const arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
//
// for(let i =0;i<arr.length;i++){
//     if(arr[i+1]%2==0){
//         console.log(arr[i])
//     }
// }


//6.
// const arr = [100,250,50,168,120,345,188]
// let sum=0;
//
//
// arr.forEach((item)=>{
//     sum+=item;
// })
//
// console.log(Math.floor(sum/arr.length))



//7.
//
// let arr=[]
//
// for(let i =1;i<20;i++){
//     arr.push(Math.floor(Math.random()*13))
// }
// arr.forEach((item,i)=>{
//     arr[i]=item*5;
// })


//8.

// const arr=[34343,'dasdasd',323232,543534,false,false,'dsds','sdadas',123,true,'fff',222]
// let newArr=[]
//
// arr.forEach((item)=>{
//     if(typeof(item)=='number'){
//         newArr.push(item)
//     }
// })
// console.log(newArr)