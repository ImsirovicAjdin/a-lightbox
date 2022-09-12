let counter = 0;
let imgs = [
    './imgs/desert-mountain-large-image.jpeg',
    './imgs/mountain-purple-large-image.jpeg',
    './imgs/mountain-three-large-image.jpeg',
];

const modalTriggerImg = [...document.getElementsByClassName('triggerModal')];
const modal = document.getElementById('modal-overlay');
const closeClass = document.getElementsByClassName('close');

for(let i = 0; i < modalTriggerImg.length; i++) {
    modalTriggerImg[i].addEventListener('click', () => {
        document.slide.src = imgs[i];
        modal.classList.toggle('show');
    })
}

function closeModal() {
    modal.classList.toggle('show');
}

function nextSlide() {
    console.log("Counter value before 'next' btn click:" + counter);
    counter < (imgs.length - 1) ? counter++ : counter = 0;
    document.slide.src = imgs[counter];
    console.log("Counter value after 'next' btn click:" + counter);
}

function prevSlide() {
    console.log("Counter value before prev btn click: " + counter);
    if (counter <= 0) {
        counter = imgs.length - 1;
    } else {
        counter--;
    }
    document.slide.src = imgs[counter];
    console.log("Counter value after prev btn click: " + counter);
}
