let spanOverlay = document.createElement('span');

const btnOpenModal = document.createElement('button');
const divModal = document.createElement('div');
const iconSuccess = document.createElement('i');
const titleModal = document.createElement('h2');
const messageModal = document.createElement('h3');
const divButtonsModal = document.createElement('div');
const btnCloseModal = document.createElement('button');
const btnConfirmModal = document.createElement('button');

// add class
btnOpenModal.classList.add('show-modal');
spanOverlay.classList.add('overlay');
divModal.classList.add('modal-box');
iconSuccess.classList.add('fa-regular', 'fa-check-circle');
divButtonsModal.classList.add('buttons-modal');
btnCloseModal.classList.add('close-btn');
btnConfirmModal.classList.add('open-btn');

// set text
btnOpenModal.innerText = 'Abrir Modal';
titleModal.innerText = 'Concluído!';
messageModal.innerText = 'Você baixou com sucesso todos os arquivos de código-fonte.';
btnCloseModal.innerText = 'Ok, Fechar';
btnConfirmModal.innerText = 'Abrir Pasta';


const sectionPai = document.createElement('section');

sectionPai.appendChild(btnOpenModal)
sectionPai.appendChild(spanOverlay)
sectionPai.appendChild(divModal);

divModal.appendChild(iconSuccess);
divModal.appendChild(titleModal);
divModal.appendChild(messageModal);
divModal.appendChild(divButtonsModal);

divButtonsModal.appendChild(btnCloseModal);
divButtonsModal.appendChild(btnConfirmModal);
document.body.appendChild(sectionPai);
