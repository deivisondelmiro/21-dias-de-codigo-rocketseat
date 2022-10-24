const sidebarIcon = document.querySelector('#sidebar-icon')

function sidebarVisibility() {
    let nav = document.querySelector('nav')
    let span = document.querySelectorAll('span')

    nav.classList.toggle('buttonSidebarClicked')
    for(i = 0; i <= span.length; i++) {
        span[i].classList.toggle('spanClicked')
    }
}
sidebarIcon.addEventListener('click', sidebarVisibility)