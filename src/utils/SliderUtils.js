export const nextBanner = (active, setActive, length) => {
    if(active===length-1)setActive(0);
    else setActive(active+1);
};
export const previousBanner = (active, setActive, length) => {
    if(active===0)setActive(length-1);
    else setActive(active-1);
};

export const switchVideo = (link, setLink) => {
    var videos = document.getElementsByClassName("video");
    for (let video of videos) {
        if (video.className === `video hiddenVideo`) {
            video.classList.remove(`hiddenVideo`);
        }
        else if (video.className === `video`) {
            video.classList.add(`hiddenVideo`);
        }
    };
    setLink(!link);
}