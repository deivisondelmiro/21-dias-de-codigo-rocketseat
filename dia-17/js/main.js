function keyPressFunction(event) {
    const paragraph = document.querySelector('#paragraph')
    const keyPressName = event.key
    const keyPressCode = event.code

    if (keyPressCode == 'Space') {
        paragraph.textContent = 'BACKSPACE'
    } else if (keyPressName.length !== 0) {
        paragraph.innerHTML = keyPressName.toUpperCase()
    }
}

addEventListener('keydown', keyPressFunction)