const video = document.querySelector('.about__video video');
const playBtn = document.querySelector('.play-btn');

let isPlay = false;

video.addEventListener('click', playVideo);

function playVideo() {
    if (!isPlay) {
        isPlay = true;
        video.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playBtn.classList.add('anim');
    } else {
        isPlay = false;
        video.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtn.classList.remove('anim');
    }
}

const tabs = document.querySelectorAll('.gallery__tabs-item');
const tabContents = document.querySelectorAll('.gallery__tabs-content');

tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabs[tabIndex].classList.add('active');
        tabContents[tabIndex].classList.add('active');
    });
});

new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    focus: 'center',
    arrows: true,
}).mount();