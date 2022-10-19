const buttonClick = document.getElementById('buttonClick')

const boxLoadInside = document.getElementById('boxLoadInside')

let numeroPorcentagem = document.getElementById('numeroPorcentagem')

function startAnimation() {
    boxLoadInside.classList.toggle('animation')
}

buttonClick.addEventListener('click', startAnimation)