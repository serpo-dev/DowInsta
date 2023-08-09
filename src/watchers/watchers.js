/* Watchers */

function start_DOM_observer(scan_func) {
    var observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                const addedNodes = Array.from(mutation.addedNodes);
                addedNodes.forEach(node => {
                    scan_func(node);
                })
            }
        })
    })

    const targetNode = document.body;
    const config = { childList: true, subtree: true }
    observer.observe(targetNode, config)
}

function start_DOM_loaded(scan_func) {
    scan_func(document)
}
