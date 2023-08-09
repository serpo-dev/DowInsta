/* Function to force a browser to download media by URL function */

async function download_by_url(url, extension) {
    return fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const blob_url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a)
            a.href = blob_url;
            a.download = get_file_name(extension);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(blob_url);
            return true
        })
}