/* Download button constructor */

function download_button_constructor(parent) {
    const newEl = document.createElement("div")
    newEl.innerText = "Download"

    newEl.style.background = "black"
    newEl.style.color = "white"
    newEl.style.zIndex = 100
    newEl.style.padding = "1rem"
    newEl.style.height = "fit-content"
    newEl.style.borderRadius = "15px"
    newEl.style.cursor = "pointer"
    parent.position = "relative"
    newEl.style.position = "absolute"
    newEl.style.top = 0
    newEl.style.left = 0
    newEl.className = "download_button"

    parent.prepend(newEl)

    return newEl;
}