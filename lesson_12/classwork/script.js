// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста




async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
        .then(response=>{
            const result = response.json();
            return result
        }).then(r=>{
             createPost(r)
        })
}
getData()


const arrOfComments=[]

async function createPost(arr){
    const wrapper = document.createElement('div')
    const postContainer = document.createElement('div')
    postContainer.classList.add('post-container')
    wrapper.classList.add('wrapper')
    for(let i=0;i<5;i++){
        const {id,postId,name,email,body}=arr[i]
        const post = document.createElement('div')
        post.classList.add('post')

        const userIdBlock = document.createElement('div')
        userIdBlock.textContent=`Post id: ${postId}`
        const idBlock = document.createElement('div')
        idBlock.textContent=`Id: ${id}`
        const nameBlock = document.createElement('div')
        nameBlock.textContent=`Name: ${name}`
        const emailBlock = document.createElement('div')
        emailBlock.textContent=`Email: ${email}`
        const postBody = document.createElement('div')
        postBody.textContent=`Body: ${body}`
        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.textContent='Click!'
        post.append(userIdBlock,idBlock,nameBlock,emailBlock,postBody,btn)
        postContainer.append(post)
        wrapper.append(postContainer)
    }

    document.body.append(wrapper)
    for(let i=0;i<5;i++){
        const  respone = await  fetch(`https://jsonplaceholder.typicode.com/posts/${i+1}/comments`)
            .then(res=>{
                const comment = res.json()
                return comment
            }).then(res=>{
                arrOfComments.push(res)
                createCommentForPost(arrOfComments[i],i)
            })
    }
    const commentContainer = document.querySelectorAll('.container-comment   ')
    const btn = document.querySelectorAll('.btn')
    btn.forEach((button,i)=>{
        button.addEventListener('click',()=>{
            if(commentContainer[i].classList.contains('d-block')){
                commentContainer[i].classList.remove('d-block')
                commentContainer[i].classList.add('d-none')
            }else{
                commentContainer[i].classList.remove('d-none')
                commentContainer[i].classList.add('d-block')
            }
        })
    })

}
async function createCommentForPost(arr,index){
    const container = document.createElement('div')
    container.classList.add('container-comment')
    container.classList.add('d-block')

    arr.forEach(comment=>{
        const {postId,id,name,email,body}=comment;
        const commentBlock = document.createElement('div')
        commentBlock.classList.add('comment-block')
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
        commentBlock.append(comentId,idBlock,comentName,comentEmail,comentBody)
        container.append(commentBlock)
    })

    const post = document.querySelectorAll('.post')[index]
    post.append(container)
}

