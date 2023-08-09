async function story_video(node) {
    const story_candidate_arr = window.location.pathname.split("/stories/");
    if (story_candidate_arr.length === 1) return;

    const videoEl = node.querySelector("video.x1lliihq.x5yr21d.xh8yej3")
    if (!videoEl) return;
    const parent = videoEl.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

    const newEl = download_button_constructor(parent);

    newEl.addEventListener("click", async () => {
        const story_id = story_candidate_arr[1].split("/")[1];
        const post_info = await get_info(story_id);

        if (post_info.items[0].video_versions && post_info.items[0].media_type === 2) {
            const video_url = post_info.items[0].video_versions.shift().url;
            await download_by_url(video_url, "mp4");
            return;
        }
    })
}