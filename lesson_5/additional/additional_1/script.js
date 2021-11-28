// - Дано натуральное число n. Выведите все числа от 1 до n.
//
// const printNumbers=n=>{
//     for(let i=1;i<n;i++){
//         console.log(i)
//     }
// }
// printNumbers(10)




// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// const printTwoNumbers=(a,b)=>{
//     if(a<b){
//         for(let i=a+1;i<=b;i++){
//             console.log(i)
//         }
//     }else{
//         for(let i=a-1;i>=b;i--){
//             console.log(i)
//         }
//     }
// }
// printTwoNumbers(20,10)


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// const foo=(arr,i)=>{
//     const firstValue=arr[i+1]
//     const secondValue=arr[i]
//     arr[i]=firstValue
//     arr[i+1]=secondValue
//     console.log(arr)
// }
// foo([9,8,0,4], 2)


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// const transferElementOfArray=arr=>{
//     let firstArr=[]
//     let secondArr=[]
//
//     arr.forEach(item=>{
//         if(item===0){
//             firstArr.push(item)
//         }else{
//             secondArr.push(item)
//         }
//     })
//     const newArr=[...secondArr,...firstArr]
//     return newArr
// }
// console.log(transferElementOfArray([0,1,2,3,4]))
