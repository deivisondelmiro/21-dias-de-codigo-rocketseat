function keyPressFunction(event) {
    const paragraph = document.querySelector('#paragraph')
    const keyPressName = event.key
    const keyPressCode = event.code

    console.log(event)

    if (keyPressCode == 'Space') {
        paragraph.textContent = 'SPACE'
    } else if (keyPressName.length !== 0) {
        paragraph.innerHTML = keyPressName.toUpperCase()
    }
}

addEventListener('keydown', keyPressFunction)