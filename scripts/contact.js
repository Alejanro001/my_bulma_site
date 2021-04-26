let inputName = document.querySelector('.input-name')
let inputEmail = document.querySelector('.input-email')
let inputMessage = document.querySelector('.input-message')
let help = document.querySelector('.help')
let submitButton = document.querySelector('.submit')
submitButton.addEventListener('click', function () {
    if (inputName.value == '' || inputEmail.value == '' || inputMessage.value == '') {
        inputName.value == '' && inputName.classList.add('is-danger')
        inputEmail.value == '' && inputEmail.classList.add('is-danger')
        inputMessage.value == '' && inputMessage.classList.add('is-danger')
        help.classList.add('is-danger')
        help.innerHTML = 'Oh no! Looks like some fields are empty'
    } else {
        inputName.classList.remove('is-danger')
        inputEmail.classList.remove('is-danger')
        inputMessage.classList.remove('is-danger')
        inputName.classList.add('is-success')
        inputEmail.classList.add('is-success')
        inputMessage.classList.add('is-success')
        // inputName.value = ''
        // inputEmail.value = ''
        // inputMessage.value = ''
        help.classList.add('is-success')
        help.classList.remove('is-danger')
        help.innerHTML = 'Your message was sent!'
    }

})
// inputName.addEventListener('change', function(){
//     console.log(inputName.value)
// })