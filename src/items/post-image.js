/* Scan modules */

function post_image(node) {
    const frames = node.querySelectorAll("._aagu")

    frames.forEach((f) => {
        const parent = f.parentNode.parentNode;
        if (parent.querySelector(".download_button")) {
            return
        }

        const newEl = download_button_constructor(parent);

        newEl.addEventListener("click", async (event) => {
            event.stopPropagation();

            const link = parent.childNodes[1];
            parent.removeChild(link);

            const img = f.querySelector("img");
            const url = img.src;
            await download_by_url(url, extension = "jpg").then(() => parent.appendChild(link))
        })
    })
}
