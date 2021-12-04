// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль


const bodyBlock = document.querySelector('body')

const arrClasses=[]

function rec(item){
    if(item.className){
        arrClasses.push(item.className)
    }

    if(item.children.length){
        for(let el of item.children){
            // console.log(el)
            rec(el)
        }
    }
}
rec(bodyBlock)

