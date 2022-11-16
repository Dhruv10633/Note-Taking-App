const in1=document.querySelector('input')

const add=document.querySelector('#add')

const ul1=document.querySelector('ul')



let flag=1;
add.addEventListener('click',()=>{
    const li=document.createElement('li')

    const del=document.createElement('button')
    del.className='inButt'
    del.innerText='❌'

    const moveUp=document.createElement('button')
    moveUp.className='inButt'
    moveUp.innerText='🔼'

    const moveDn=document.createElement('button')
    moveDn.className='inButt'
    moveDn.innerText='🔽'

    const txt=document.createElement('p')
    txt.style.display='inline-block'
    txt.innerText=in1.value
    
    ul1.appendChild(li)
    li.appendChild(del)
    li.appendChild(moveUp)
    li.appendChild(moveDn)
    li.appendChild(txt)


    in1.value=null;

    del.addEventListener('click',()=>{
        li.remove();
    })    
    moveUp.addEventListener('click',()=>{
        if(li.previousElementSibling){    //if a previous sibling exists
            li.parentNode.insertBefore(li,li.previousElementSibling);
        }
    }) 
    moveDn.addEventListener('click',()=>{
        if(li.nextElementSibling){    //if a previous sibling exists
            li.parentNode.insertBefore(li.nextElementSibling,li);
        }
    })
})


