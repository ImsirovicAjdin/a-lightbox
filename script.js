const img = document.getElementById('triggerModal');
const modal = document.getElementById('modal-overlay');
const closeClass = document.getElementsByClassName('close');

img.addEventListener('click', () => {
    modal.classList.toggle('show')
})

for (let i = 0; i < closeClass.length; i++) {
    closeClass[i].addEventListener('click', function() {
        modal.classList.remove('show');
    })
}