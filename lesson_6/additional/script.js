// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// function cutString(str,n){
//     const arr = [];
//     let newStr=str;
//     for(let i=0;i<str.length/n;i++){
//         console.log(newStr)
//         arr.push(newStr.slice(0, n));
//         newStr=newStr.slice(n)
//     }
//     return arr.join(' ')
// }
// console.log(cutString('наслаждение',3))





// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// function validator(str){
//     if(str.includes('@')){
//         const index=str.indexOf('@')+1
//         const arr=str.split('@')
//         if(arr[0].length>0){
//             if(arr[1].indexOf('.')>=2){
//                 arrDom=arr[1].split('.')
//                 if(arrDom[1].length>=2 && arrDom[1].length <4){
//                     console.log('Перевірка пройшла успішно!')
//                 }else{
//                     console.log('Введіть коректно домен!(від двох до трьох символів)')
//                 }
//             }else{
//                 console.log('Введіть коректно домен пошти')
//             }
//         }else{
//             console.log('Введіть коректні дані')
//         }
//     }
// }
// validator('someeMAIL@gmail.com')




let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// console.log(coursesArray.sort((a,b)=>b.modules.length-a.modules.length))




//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// function count(str,stringsearch){
//     return str.split(stringsearch).length-1
// }

// let symb = "о";
// str = "Астрономия это наука о небесных объектах";
// console.log(count(str,symb))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// function cutString(str,n){
//     const arr=str.split(' ')
//     const newArr=[]
//     for(let i=0;i<n;i++){
//         newArr.push(arr[i])
//     }
//     return newArr.join(' ')
// }
// let str = "Сила тяжести приложена к центру масс тела";
// console.log(cutString(str,5))