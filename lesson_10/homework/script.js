// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const item = document.createElement('div')
// item.id='text';
// item.textContent='Block';
// item.style.backgroundColor='blue';
// item.style.width='100px';
// item.style.textAlign='center';
// item.style.padding='20px';
// item.style.marginTop='20px'
// item.classList.add('d-block')
// document.body.append(item)
//
// const btn = document.querySelector('button')
// btn.addEventListener('click',()=>{
//
//     if(item.className==='d-block'){
//         console.log('d-block')
//         item.classList.remove('d-block')
//         item.classList.add('d-none')
//         item.style.display='none'
//     }else if(item.className==='d-none'){
//         console.log('d-none')
//         item.classList.remove('d-none')
//         item.classList.add('d-block')
//         item.style.display='block'
//     }
//
// })




//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const button = document.createElement('button')
// button.style.padding='10px';
// button.textContent='Click';
// button.style.marginTop='20px'
// document.body.append(button)
//
// button.addEventListener('click',()=>{
//     button.style.display='none'
// })
//





// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const form = document.createElement('form')
// form.style.marginTop='20px'
// const input = document.createElement('input')
// input.placeholder='Введіть свій вік....'
// input.type='text';
// input.name='descriptionAge';
//
// form.append(input)
// document.body.append(form)
//
// const btn = document.createElement('button')
// btn.textContent='Click me and submit';
// btn.style.marginTop='5px';
// document.body.append(btn)
//
// btn.addEventListener('click',(event)=>{
//     event.preventDefault();
//     if(+input.value<18){
//         alert('Вік менше 18')
//         input.value='';
//     }else{
//         alert('Ви ввели некоректні дані!!!')
//         input.value='';
//     }
//
//     console.log(document.forms)
//
// })



// - Создайте меню, которое раскрывается/сворачивается при клике
//
// const arrInfo=['Меню','Контакти','О нас','График']
//
// const burgerMenuWrapper = document.createElement('div')
// burgerMenuWrapper.style.marginTop='50px';
// const burgerMenuBtnContainer = document.createElement('div')
// burgerMenuBtnContainer.style.padding='5px'
// const btn = document.createElement('button')
// btn.textContent='CLICK';
// btn.style.padding='10px 30px 10px 30px'
// btn.style.border='none';
// btn.style.outline='none';
// btn.style.backgroundColor='#c1e8e3'
// burgerMenuBtnContainer.append(btn)
//
// const menuBox = document.createElement('ul')
// menuBox.style.padding='15px 0px 15px 10px';
// menuBox.style.margin='0px'
// menuBox.style.width='200px'
// menuBox.style.backgroundColor='#a9c7c3'
// menuBox.style.listStyleType='none'
// menuBox.style.borderRadius='10px'
// menuBox.classList.add('d-block')
//
//
// arrInfo.forEach(item=>{
//     const itemLi = document.createElement('li')
//     itemLi.classList.add('menubox-li')
//     itemLi.style.padding='5px'
//     const itemA = document.createElement('a')
//     itemA.textContent=item;
//     itemA.style.fontSize='24px'
//     itemLi.append(itemA)
//     menuBox.append(itemLi)
// })
//
//
// btn.addEventListener('click',()=>{
//     if(menuBox.className==='d-block'){
//         menuBox.classList.remove('d-block');
//         menuBox.classList.add('d-none');
//         menuBox.style.display='none';
//     }else{
//         menuBox.classList.remove('d-none');
//         menuBox.classList.add('d-block');
//         menuBox.style.display='block';
//     }
// })
//
//
// burgerMenuWrapper.append(burgerMenuBtnContainer)
// burgerMenuWrapper.append(menuBox)
// document.body.append(burgerMenuWrapper)




// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// const arr = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}]
//
//
// const wrapperBlock = document.createElement('div')
// wrapperBlock.style.border='1px solid red'
// wrapperBlock.style.display='flex';
// wrapperBlock.style.width='1000px';
// wrapperBlock.style.flexWrap='wrap'
// wrapperBlock.style.margin='0 auto'
// wrapperBlock.style.justifyContent='center';
// wrapperBlock.style.columnGap='30px'
//
// arr.forEach(item=>{
//      const {title,body} = item;
//      const itemWrap = document.createElement('div')
//
//      const itemTitle = document.createElement('h1')
//      itemTitle.textContent = title;
//      itemTitle.style.marginTop = '10px';
//
//      const itemBody = document.createElement('div')
//      itemBody.textContent = body;
//      itemBody.style.marginTop='10px';
//      itemBody.classList.add('d-block')
//      itemBody.id='item-body'
//
//      const btn = document.createElement('button');
//      btn.id='btn'
//      btn.style.marginTop='10px';
//      btn.textContent = 'Click';
//      btn.style.padding = '10px 30px 10px 30px';
//      btn.style.border='none';
//      btn.style.outline='none';
//      btn.style.backgroundColor='#c1e8e3'
//      itemWrap.append(itemTitle,itemBody,btn);
//
//
//     btn.addEventListener('click',()=>{
//         if(itemBody.className==='d-block'){
//             itemBody.classList.remove('d-block')
//             itemBody.classList.add('d-none');
//             itemBody.style.display='none';
//         }else{
//             itemBody.classList.remove('d-none')
//             itemBody.classList.add('d-block');
//             itemBody.style.display='block';
//         }
//     })
//      wrapperBlock.append(itemWrap)
//
// })
//
// document.body.append(wrapperBlock)

