const section = document.querySelector('section'),
    overlay = document.querySelector('.overlay'),
    showModalBtn = document.querySelector('.show-modal'),
    closeBtn = document.querySelector('.close-btn');

const openModal = () => {
    section.classList.add('active')
}

showModalBtn.addEventListener('click', openModal)

overlay.addEventListener('click', () => section.classList.remove('active'))

closeBtn.addEventListener('click', () => section.classList.remove('active'))


