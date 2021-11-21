// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

const arr = [2,17,13,6,22,31,45,66,100,-18]
const arrLenght=arr.length
//1.перебрати його циклом while
// let i=0;
// while (i<arrLenght){
//     console.log(arr[i])
//     i++;
// }

//2.перебрати його циклом for

// for(let i=0;i<arrLenght;i++){
//     console.log(arr[i])
// }

//3.перебрати циклом while та вивести  числа тільки з непарним індексом

// let i=0;
// while (i<arrLenght){
//     if((i%2)==1){
//         console.log(arr[i])
//     }
//     i++;
// }

//4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for(let i=0;i<arrLenght;i++){
//     if((i%2)==1){
//         console.log(arr[i])
//     }
// }

//5. перебрати циклом while та вивести  числа тільки парні  значення

// let i=0;
// while (i<arrLenght){
//     if((arr[i]%2)==0){
//         console.log(arr[i])
//     }
//     i++;
// }

//6.перебрати циклом for та вивести  числа тільки парні  значення

// for(let i=0;i<arrLenght;i++){
//     if((arr[i]%2)==0){
//         console.log(arr[i])
//     }
// }

//7.замінити кожне число кратне 3 на слово "okten"

// for(let i=0;i<arrLenght;i++){
//     if((arr[i]%3)==0){
//         arr[i]='okten'
//     }
// }
// arr.forEach((item)=>{
//     console.log(item)
// })

//8. вивести масив в зворотньому порядку.

// for(let i = arrLenght-1; i>=0;i--){
//     console.log(arr[i])
// }

//9.всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i=arrLenght-1;
// while (i>=0){
//     console.log(arr[i])
//     i--;
// }

// for(let i=arrLenght-1;i>=0;i--){
//     console.log(arr[i])
// }


// let i=arrLenght-1;
// while (i>=0){
//     if((i%2)==1){
//         console.log(arr[i])
//     }
//     i--;
// }
//


// for(let i=arrLenght-1;i>=0;i--){
//     if((i%2)==1){
//         console.log(arr[i])
//     }
// }




// let i=arrLenght-1;
// while (i>=0){
//     if((arr[i]%2)==0){
//         console.log(arr[i])
//     }
//     i--;
// }



// for(let i=arrLenght-1;i>=0;i--){
//     if((arr[i]%2)==0){
//         console.log(arr[i])
//     }
// }

//7.замінити кожне число кратне 3 на слово "okten"

// for(let i=arrLenght-1;i>=0;i--){
//     if((arr[i]%3)==0){
//         arr[i]='okten'
//     }
// }


