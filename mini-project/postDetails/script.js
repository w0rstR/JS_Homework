window.onload = async ()=>{
    const wrapper = document.querySelector('.wrapper')
    const idPost = JSON.parse(localStorage.getItem('idPost'))
    console.log(idPost[0].postId)

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost[0].postId}`)
        .then(res=>{
            return res.json();
        }).then(result=>{
            console.log(result)
            createPost(result)
        })

    async function createPost(post){
        const postWrapper = document.createElement('div')
        postWrapper.classList.add('post-wrapper')

        const {userId,id,title,body} = post;
        const postBlock = document.createElement('div')
        postBlock.classList.add('post')
        const userIdBlock = document.createElement('div')
        userIdBlock.textContent=`Post id: ${userId}`
        const idBlock = document.createElement('div')
        idBlock.innerText=`Id: ${idBlock}`
        const titleBlock = document.createElement('div')
        titleBlock.textContent=`Title: ${title}`
        const postBody = document.createElement('div')
        postBody.textContent=`Body: ${body}`
        const btn = document.createElement('button')
        btn.classList.add('post-btn')
        btn.textContent = 'Show post details'


        postBlock.append(userIdBlock,id,titleBlock,postBody,btn)
        postWrapper.append(postBlock)
        wrapper.append(postWrapper)

        btn.addEventListener('click',async ()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost[0].postId}/comments`)
                .then(res=>{
                    return res.json();
                }).then(result=>{
                    console.log(result)
                    createCommentsOfPost(result)
                })
        })

    }
    async function createCommentsOfPost(arr){
        const mainWrap = document.querySelector('.wrapper-comment')

        arr.forEach(comment=>{
            const {postId, id, name, email, body} = comment;
            const commentBlock = document.createElement('div')
            commentBlock.classList.add('comment-block')
            const comentId = document.createElement('div')
            comentId.textContent = `Coment id: ${postId}`
            const idBlock = document.createElement('div')
            idBlock.textContent = `Id: ${id}`
            const comentName = document.createElement('div')
            comentName.textContent = `Name: ${name}`
            const comentEmail = document.createElement('div')
            comentEmail.textContent = `Email: ${email}`
            const comentBody = document.createElement('div')
            comentBody.textContent = `Body: ${body}`
            commentBlock.append(comentId, idBlock, comentName, comentEmail, comentBody)
            mainWrap.append(commentBlock)
        })
    }

    btnRestart = document.querySelector('.btn-restart')
    btnRestart.addEventListener('click',()=>{
        window.location.href=`../user/index.html`
        localStorage.clear()
    })
}
