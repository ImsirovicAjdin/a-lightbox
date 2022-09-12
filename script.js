let counter = 0;
let imgs = [
    './imgs/desert-mountain-large-image.jpeg',
    './imgs/mountain-purple-large-image.jpeg',
    './imgs/mountain-three-large-image.jpeg',
];

const modalTriggerImg = [...document.getElementsByClassName('triggerModal')];
const modal = document.getElementById('modal-overlay');

for(let i = 0; i < modalTriggerImg.length; i++) {
    modalTriggerImg[i].addEventListener('click', () => {
        modal.classList.toggle('show');
    })
}

function nextSlide() {
    document.slide.src = imgs[counter];
    console.log(counter);
    counter < (imgs.length - 1) ? counter++ : counter = 0;
}

function prevSlide() {
    if (counter <= 0) {
        counter = imgs.length - 1;
    } else {
        counter--;
    }
    img.src = imgs[counter];
}
