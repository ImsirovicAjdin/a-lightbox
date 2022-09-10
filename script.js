const img = document.getElementById('triggerModal');
const modal = document.getElementById('modal-overlay');

img.addEventListener('click', () => {
    modal.classList.toggle('show')
})