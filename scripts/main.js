let icons = document.querySelectorAll('.icon')

let desktopLevel = document.querySelector('.desktop')
let mobileLevel = document.querySelector('.mobile')

//here's some responsive design in js instead of css because why not?
let resizeLevel = () => {
    if (window.innerWidth < 760) {
        desktopLevel.style.display = 'none'
        mobileLevel.style.display = ''

    } else {
        mobileLevel.style.display = 'none'
        desktopLevel.style.display = ''
    }
}
resizeLevel()
window.addEventListener('resize', ()=>{
    resizeLevel()
})
