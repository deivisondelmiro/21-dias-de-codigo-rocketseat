document.querySelector('#items-um').addEventListener("wheel", event => {
    if (event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
})

document.querySelector('#items-dois').addEventListener("wheel", event => {
    if (event.deltaY > 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
})