let vid = null;

function loadPlayer() {
    // load custom video player at the beginning with Space and Enter
    let img = document.querySelector("img#lazyLoadThumbnailContainer");
    if (img != null) {
        img.click();
    }
}

document.addEventListener('keydown', async (e) => {
    console.log(document.querySelector("window"))

    if (vid == null || vid == undefined) {
        vid = document.querySelector("video")
    }
    switch(e.code) {
        case "ArrowRight":
            vid.fastSeek(vid.currentTime + 15);
            break
        case "ArrowLeft":
            vid.fastSeek(vid.currentTime - 15);
            break
        case "Space":
        case "Enter":
            loadPlayer();
            break;
        case "NumpadEnter":
            loadPlayer();
            // 'Click' the pause button
            document.querySelector("div#buttonPlugin1").click();
            break;
    }
});
