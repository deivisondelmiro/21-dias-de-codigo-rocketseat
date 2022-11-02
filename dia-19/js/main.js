const buttonCarregarImagens = document.querySelector('#carregar_imagens')
buttonCarregarImagens.addEventListener('click', criarImagem)

function criarImagem() {
  const containerImagens = document.querySelector('#list-images')

  for(let i = 0; i <= 5; i++) {
    let imageUns = fetch("https://api.unsplash.com/photos/random/?client_id=9_5Ry1GXKEQds1lOto_ZGfyabyQtmjadmWW3TK62ZCc").then((response) => response.json()).then(data =>
    containerImagens.innerHTML += `<img class="img-config" src=${data.urls.small}>`
    )
  }
}