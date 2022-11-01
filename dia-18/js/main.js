const buttonGerador = document.querySelector('#button_gerador')

function geradorSenha() {
    const senhaNaTela = document.querySelector('#senha_na_tela')
    let numerosGerados
    let senhaFinalGerada = ''

    for(let i = 0; i <= 7; i++) {
        numerosGerados = Math.floor(Math.random() * 9)
        senhaFinalGerada += numerosGerados
    }

    senhaNaTela.setAttribute('title', senhaFinalGerada)
    senhaNaTela.innerText = senhaFinalGerada
}

buttonGerador.addEventListener('click', geradorSenha)