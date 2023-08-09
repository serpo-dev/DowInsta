function story_image(node) {
    const frames = node.querySelectorAll("img._aa63._ac51")

    frames.forEach((f) => {
        const parent = f.parentNode.parentNode;
        if (parent.querySelector(".download_button")) {
            return
        }

        const newEl = download_button_constructor(parent);

        newEl.addEventListener("click", async (event) => {
            event.stopPropagation();

            const url = f.srcset.split(" ")[0];
            await download_by_url(url, extension = "jpg").then(() => parent.appendChild(link))
        })
    })
}
