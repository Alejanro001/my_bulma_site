let tabItems = document.querySelectorAll('.tab-item')
let tabContents = document.querySelectorAll('.tab-content')
for(let i = 1; i <= tabContents.length -1; i++){
    tabContents[i].style.display ='none'
}
tabItems.forEach(item =>{
    item.addEventListener('click', ()=>(
        tabContents.forEach(content =>{
            if(content.dataset.name != item.dataset.name){
                content.style.display = 'none'
            }else{
                content.style.display = ''
            }
        })
    ))
})