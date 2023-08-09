/* Feature is deprecated */



// function create_highlits_video() {
//     /* 
//         Instagram does not allow direct retrieval of story ids.
//         In a highlits set, all stories have the same id in "window.location.pathname".
//         Therefore, it is necessary to cache the user's position and current url
//         when navigating berween stories in highlits.
//     */
//     let POST_POS = 0;
//     let CACHED_URL = "";

//     return async function (node) {
//         const highlits_candidate_arr = window.location.pathname.split("/highlits/");
//         if (highlits_candidate_arr.length === 1) return;

//         const post_id = highlits_candidate_arr[1].split("/").shift();
        
//         const videoEl = node.querySelector("video.x1lliihq.x5yr21d.xh8yej3")
//         if (!videoEl) return;
//         const parent = videoEl.parentNode;
    
//         const newEl = download_button_constructor(parent);
    
//         newEl.addEventListener("click", async () => {
    
//             const post_info = await get_info(post_id);
    
//             const media_list = post_info.items[0].carousel_media;
//             if (media_list.length < 2) return;

//             console.log(media_list)
    
//             const listEl = document.querySelector("ul._acay");
//             let pos = -1;
//             listEl.childNodes.forEach((child, index) => {
//                 if (pos !== -1) return;
//                 const video_tag = child.querySelector("video.x1lliihq.x5yr21d.xh8yej3")
//                 if (!video_tag) return;
//                 const candidate_src = video_tag.src;
//                 const current_src = videoEl.src;
//                 if (current_src === candidate_src) {
//                     pos = index;
//                 }
//             })
    
//             if (pos > 0) {
//                 const video_item = media_list[pos - 1];
//                 if (video_item.media_type === 2) {
//                     const video_url = video_item.video_versions.shift().url;
//                     await download_by_url(video_url, "mp4");
//                 }
//             }
//         })
//     }
// }