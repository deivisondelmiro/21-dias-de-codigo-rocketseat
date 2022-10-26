const buttonPhrase = document.getElementById('button-phrase')

function newPhrase() {
    fetch(`https://api.adviceslip.com/advice`).then(response => {
        return response.json()
    }).then(body => {
        let newMessage = document.getElementById('new-message')
        let phrase = body.slip.advice
        newMessage.innerHTML = phrase
    })
}
buttonPhrase.addEventListener('click', newPhrase)