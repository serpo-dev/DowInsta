/* Variables */

const BASE_URL = "https://www.instagram.com";
const QUERY_HASH_MD5 = '9f8827793ef34641b2fb195d4d41151c'



/* Load scan modules */

function scan(node) {
    post_image(node);
    post_video(node);
    story_image(node);
    story_video(node);
}

/* Load watchers */

function main() {
    
    start_DOM_observer(scan)
    start_DOM_loaded(scan)
}

main();

