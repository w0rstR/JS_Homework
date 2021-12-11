// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


// const wrapper = document.createElement('div')
// const form = document.createElement('form')
// form.classList.add('form')
// const btn = document.createElement('button')
// btn.classList.add('btn');
// btn.textContent='Click'
//
// firstInput = document.createElement('input')
// firstInput.placeholder='first input'
// firstInput.classList.add('input')
// secondInput = document.createElement('input')
// secondInput.placeholder='first input'
// secondInput.classList.add('input')
//
//
// form.append(firstInput,secondInput,btn)
// wrapper.append(form)
// document.body.append(wrapper)
//
//
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const [firstInput,secondInput] = document.querySelectorAll('.input')
//
//     const obj={
//         firstInput:firstInput.value,
//         secondInput:secondInput.value
//     }
//
//     let valueOfStorege = JSON.parse(localStorage.getItem('ItemLists'))
//     if(valueOfStorege==null) valueOfStorege = [];
//     valueOfStorege.push(obj)
//     localStorage.setItem('ItemLists',JSON.stringify(valueOfStorege))
//
// })

//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


// const wrapper = document.createElement('div')
// const form = document.createElement('form')
// form.classList.add('form')
// const btn = document.createElement('button')
// btn.classList.add('btn');
// btn.textContent='Click'
//
// const firstInput = document.createElement('input')
// firstInput.placeholder='Car model'
// firstInput.classList.add('input')
// const secondInput = document.createElement('input')
// secondInput.placeholder='Car type'
// secondInput.classList.add('input')
// const thirdInput = document.createElement('input')
// thirdInput.placeholder='Car volume'
// thirdInput.classList.add('input')
//
//
// form.append(firstInput,secondInput,thirdInput,btn)
// wrapper.append(form)
// document.body.append(wrapper)
//
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const [model,type,volume] = document.querySelectorAll('.input')
//
//     const obj={
//         carModel:model.value,
//         carType:type.value,
//         carVolume:volume.value
//     }
//
//     let valueOfStorege = JSON.parse(localStorage.getItem('ItemLists'))
//     if(valueOfStorege==null) valueOfStorege = [];
//     valueOfStorege.push(obj)
//     localStorage.setItem('ItemLists',JSON.stringify(valueOfStorege))
// })
