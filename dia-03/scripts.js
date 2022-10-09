const buttonSend = document.querySelector('button')

buttonSend.addEventListener('click', newContentButtonSend)

buttonSend.addEventListener('mouseover', buttonEffectMouse)

function newContentButtonSend() {
    buttonSend.classList.add('buttonSend', 'buttonEffectMouse')
    buttonSend.innerHTML = `✔️`
}

function buttonEffectMouse() {
    if (buttonSend) {
        buttonSend.classList.remove('buttonEffectMouse')
    }
}