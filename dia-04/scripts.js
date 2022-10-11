// Pega o parametro que está incluso no onclick do elemento do HTML.
// O documente procura um elemento com o name especificado, e concatena o valor do parametro para ser mostrado na tela
function adicionarParametro(parametro) {
    document.querySelector("[name='mostraValor']").value += parametro
}

// A variável conta, recebe o valor que está dentro do input
// E o eval, calcula transformando a string em tipos númericos, fazendo assim, a operação
function calcular() {
    conta = document.querySelector("[name='mostraValor']").value
    document.querySelector("[name='mostraValor']").value = eval(conta)
}

// Limpa a tela, apagando os dados, atribuindo ao input, um valor vazio, sem nada
function limpaTela() {
    document.querySelector("[name='mostraValor']").value = ''
}