const messageDisplay = document.getElementById('message-display')
function checkAnswer() {

    const checkedButton = document.querySelectorAll('form fieldset div input')

    for(var i = 0; i <= checkedButton.length; i++) {
        checkedButton[i].addEventListener('click', function() {
            if(this.value == 'a') {
                messageDisplay.innerText = 'Você acertou!'
                messageDisplay.style.color = 'rgb(31, 128, 60)'
            } else {
                messageDisplay.innerText = ''
                messageDisplay.innerText = 'Você errou!'
                messageDisplay.style.color = 'rgb(230, 42, 42)'
            }
        })
    }
}

checkAnswer()