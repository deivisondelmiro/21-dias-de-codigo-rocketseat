const sideBar = document.querySelector('#sidebar')
const sideBarBarras = document.querySelector('.sidebarbarras')
const ulClicked = document.querySelector('#ul-header')
const ulHeader = document.querySelector('#ul-header')

function sideBarOn() {
  ulClicked.classList.toggle('ul-clicked')
  ulClicked.classList.toggle('ul')
  sideBar.classList.toggle('sidebarOn')

}
sideBar.addEventListener('click', sideBarOn)
ulHeader.addEventListener('click', sideBarOn)