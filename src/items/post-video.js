async function post_video(node) {
    const story_candidate_arr = window.location.pathname.split("/stories/");
    if (story_candidate_arr.length > 1) return;

    const videoEl = node.querySelector("video.x1lliihq.x5yr21d.xh8yej3")
    if (!videoEl) return;
    const parent = videoEl.parentNode;

    const newEl = download_button_constructor(parent);

    newEl.addEventListener("click", async () => {
        const post_regex = /\/(p|tv|reel|reels)\/([A-Za-z0-9_-]*)(\/?)/
        let post_regex_groups = window.location.pathname.match(post_regex);
        if (!post_regex_groups) {
            let _flag = true;
            const box = parent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (box.tagName === "ARTICLE") {
                const linkEl = box.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0]
                if (linkEl.tagName === "A") {
                    const href = linkEl.href;
                    post_regex_groups = href.match(post_regex);
                    _flag = false;
                }
            }
            if (_flag) return;
        }
        const shortcode = post_regex_groups[2];

        const url = new URL("/graphql/query/", BASE_URL);
        url.searchParams.set("query_hash", QUERY_HASH_MD5);
        url.searchParams.set("variables", JSON.stringify({ shortcode }));

        const response = await fetch(url).then(res => res.json());
        const post_id = response.data.shortcode_media.id;

        const post_info = await get_info(post_id);

        if (post_info.items[0].video_versions && post_info.items[0].media_type === 2) {
            const video_url = post_info.items[0].video_versions.shift().url;
            await download_by_url(video_url, "mp4");
            return;
        }

        const media_list = post_info.items[0].carousel_media;
        if (media_list.length < 2) return;

        const listEl = document.querySelector("ul._acay");
        let pos = -1;
        listEl.childNodes.forEach((child, index) => {
            if (pos !== -1) return;
            const video_tag = child.querySelector("video.x1lliihq.x5yr21d.xh8yej3")
            if (!video_tag) return;
            const candidate_src = video_tag.src;
            const current_src = videoEl.src;
            if (current_src === candidate_src) {
                pos = index;
            }
        })

        if (pos > 0) {
            const video_item = media_list[pos - 1];
            if (video_item.media_type === 2) {
                const video_url = video_item.video_versions.shift().url;
                await download_by_url(video_url, "mp4");
            }
        }
    })
}