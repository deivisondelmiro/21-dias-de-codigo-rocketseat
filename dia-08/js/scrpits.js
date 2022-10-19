const body = document.getElementById('corBody')

const circle = document.getElementById('circle')

const corBodyMudada = body.classList.contains('active')

function mudarBody() {
    body.classList.toggle('active')
    circle.classList.toggle('circleActive')

}

circle.addEventListener('click', mudarBody)