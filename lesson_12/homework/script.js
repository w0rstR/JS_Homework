// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resolve=>{
        const jsonBody = resolve.json()
        return jsonBody
    }).then(result=>{
       //createPost(result)
})


function createPost(arr){
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    for(let i=0;i<5;i++){
        const {id,userId,title,body}=arr[i]
        const post = document.createElement('div')
        post.classList.add('post')

        const userIdBlock = document.createElement('div')
        userIdBlock.textContent=`User id: ${userId}`
        const idBlock = document.createElement('div')
        idBlock.textContent=`Id: ${id}`
        const titleBlock = document.createElement('div')
        titleBlock.textContent=`Title: ${title}`
        const postBody = document.createElement('div')
        postBody.textContent=`Body: ${body}`
        post.append(userIdBlock,idBlock,titleBlock,postBody)
        wrapper.append(post)
    }
    document.body.append(wrapper)
}







//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(resolve=>{
        const result = resolve.json()
        return result
    })
    .then(res=>{
        createComent(res)
    })


function createComent(arr){
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    for(let i=0;i<5;i++){
        const {id,postId,name,email,body}=arr[i]
        const сoment = document.createElement('div')
        сoment.classList.add('coment')

        const comentId = document.createElement('div')
        comentId.textContent=`Coment id: ${postId}`
        const idBlock = document.createElement('div')
        idBlock.textContent=`Id: ${id}`
        const comentName = document.createElement('div')
        comentName.textContent=`Name: ${name}`
        const comentEmail = document.createElement('div')
        comentEmail.textContent=`Email: ${email}`
        const comentBody = document.createElement('div')
        comentBody.textContent=`Body: ${body}`

        сoment.append(comentId,idBlock,comentName,comentEmail,comentEmail,comentBody)
        wrapper.append(сoment)
    }
    document.body.append(wrapper)
}