const section = document.querySelector('section'),
    overlay = document.querySelector('.overlay'),
    showModalBtn = document.querySelector('.show-modal'),
    closeBtn = document.querySelector('.close-btn');

const openModal = () => {
    section.classList.add('active')
}

showModalBtn.addEventListener('click', openModal)

const openPopup = (title, message, textBtnClose, textBtnConfirm) => {
    titleModal.innerText = title;
    messageModal.innerText = message;
    btnCloseModal.innerText = textBtnClose;
    btnConfirmModal.innerText = textBtnConfirm;
    section.classList.add('active')
}

overlay.addEventListener('click', () => section.classList.remove('active'))

closeBtn.addEventListener('click', () => section.classList.remove('active'))


