// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// function clickInfo(){
//     document.body.addEventListener('click',(event)=>{
//         const target = event.target;
//         console.log(`Tag name:${target.tagName}`)
//         console.log(`Classes name:${target.className}`)
//         console.log(`List of id: ${target.id}`)
//         console.log(`Size width: ${target.offsetWidth} and height: ${target.offsetHeight}`)
//     })
// }
//
// clickInfo()


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина



function showPopup(){
    const container = document.querySelector('.container')
    const popup = document.querySelector('.popup')
    const popupContent = document.querySelector('.popup-content')

    container.addEventListener('click',(event)=>{
        const target = event.target;
        if(popup.textContent[1]==='d-block'){
            popup.classList.remove('d-block')
            popup.classList.add('d-none')
        }else{
            popup.classList.remove('d-none')
            popup.classList.add('d-block')
            const tagName = document.createElement('div')
            tagName.textContent=`Tag name: ${target.tagName}`
            const listOfClasses = document.createElement('div')
            listOfClasses.textContent = `Classes: ${target.className}`
            const listOfId = document.createElement('div')
            listOfId.textContent = `Id: ${target.id}`
            const size = document.createElement('div')
            size.textContent = `Size width: ${target.offsetWidth} and height: ${target.offsetHeight}`
            popupContent.append(tagName,listOfClasses,listOfId,size)

            setTimeout(()=>{
                popup.classList.remove('d-block')
                popup.classList.add('d-none')
            },8000)
        }
    })
}
//showPopup()



// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


const usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];


//
// const userWrapper = document.querySelector('.user-wrapper')
// const userBlock = document.createElement('div')
// const userContainer = document.querySelector('.user-container')
// userContainer.style.display='flex';
// userContainer.style.columnGap='10px';
// userContainer.style.justifyContent='center';
// userContainer.style.marginTop='10px'
// const arrOfCheckBoxs = document.querySelectorAll('input')
//
//
// function working(){
//     arrOfCheckBoxs.forEach((checkbox,i)=>{
//         checkbox.addEventListener('change',()=>{
//             userContainer.innerHTML=``
//             const filteredArray = filter(arrOfCheckBoxs,usersWithAddress)
//             createUser(filteredArray)
//         })
//     })
// }
// //working()
// function filter(checkBox,arr){
//     const [first,second,third] = checkBox;
//
//     const filteredArr = arr.filter(item=>{
//         if(first.checked && second.checked && third.checked){
//
//             return item.status=== false && item.age >= 29 && item.address.city==='Kyiv'
//
//         }else if(first.checked && second.checked){
//
//             if(third.checked === false){
//                 return item.status=== false && item.age>=29
//             }
//
//         }else if(first.checked && third.checked){
//
//             if(second.checked===false){
//                 return item.status=== false && item.address.city==='Kyiv'
//             }
//         }else if(second.checked && third.checked){
//
//             if(first.checked===false){
//                 return item.age>=29 && item.address.city==='Kyiv'
//             }
//         }else if(first.checked){
//             return item.status=== false
//         }else if(second.checked){
//             return item.age >= 29
//         }else if(third.checked){
//             return item.address.city==='Kyiv'
//         }
//     })
//     console.log(filteredArr)
//     return filteredArr
// }
//
// function createUser(arr){
//     arr.forEach(user=>{
//         const userBlock = document.createElement('div')
//         userBlock.style.padding='20px'
//         userBlock.style.border = '1px solid grey';
//         userBlock.style.borderRadius = '10px'
//         userBlock.style.width='300px';
//         userBlock.style.fontSize='24px'
//         userBlock.style.backgroundColor='#65676b'
//         userBlock.style.color='white'
//
//
//         const userId= document.createElement('div')
//         userId.textContent = `User id: ${user.id}`
//         const userName= document.createElement('div')
//         userName.textContent = `User name: ${user.name}`
//         const userAge= document.createElement('div')
//         userAge.textContent = `User age: ${user.age}`
//         const userStatus= document.createElement('div')
//         userStatus.textContent = `User status: ${user.status}`
//
//         const userAddressBlock= document.createElement('div')
//         const userCity= document.createElement('div')
//         userCity.textContent = `User city: ${user.address.city}`
//         const userStreet= document.createElement('div')
//         userStreet.textContent = `User street: ${user.address.street}`
//         const userNumber= document.createElement('div')
//         userNumber.textContent = `Number of street: ${user.address.number}`
//
//         userAddressBlock.append(userCity,userStreet,userNumber)
//         userBlock.append(userId,userName,userAge,userStatus,userAddressBlock)
//
//         userContainer.append(userBlock)
//     })
//
// }
//

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне



// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// const slides = document.querySelectorAll('.slide')
// const btns= document.querySelectorAll('.btn')
// let slideIndex = 1;
//
// btns.forEach(btn=>{
//     btn.addEventListener('click',(event)=>{
//         const target = event.target
//         console.log(target)
//         if(target.id==='next'){
//             plusSlides(1)
//         }else{
//             plusSlides(-1)
//         }
//     })
// })
//
// function showSlide(n){
//     if(n>slides.length){
//         slideIndex = 1;
//     }
//
//     if(n<1){
//         slideIndex=slides.length
//     }
//
//     clearActiveClasses();
//     slides[slideIndex-1].classList.add('active')
//
// }
//
// function plusSlides(n){
//     showSlide(slideIndex+=n)
// }
//
//
// slides.forEach(slide=>{
//     slide.addEventListener('click',()=>{
//         clearActiveClasses()
//       slide.classList.toggle('active')
//     })
// })
//
//
// function clearActiveClasses(){
//     slides.forEach(slide=>{
//         slide.classList.remove('active')
//     })
// }

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

function selection() {
    if (window.getSelection)
        console.log(window.getSelection())
    return window.getSelection();

}
selection();

