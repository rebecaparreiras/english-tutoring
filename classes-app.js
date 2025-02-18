const classAccessElements = document.querySelectorAll('.class-access');
const enterPasswordModal = document.getElementById('enter-password');
const overlay = document.getElementById('overlay');
let menuIcon = document.querySelector('#menu-icon')
let menu = document.querySelector('.menu')

// Função para mostrar o modal e o overlay
function showModal() {
    enterPasswordModal.style.display = 'block';
    overlay.style.display = 'block';
}

// Função para esconder o modal e o overlay
function hideModal() {
    enterPasswordModal.style.display = 'none';
    overlay.style.display = 'none';
}

// Adiciona evento de clique em cada .class-access
classAccessElements.forEach(element => {
    element.addEventListener('click', showModal);
});

// Adiciona evento de clique no overlay para fechar o modal
overlay.addEventListener('click', hideModal);

// Adiciona evento de clique fora do modal para fechá-lo
document.addEventListener('click', function (event) {
    if (!enterPasswordModal.contains(event.target) && !event.target.closest('.class-access')) {
        hideModal();
    }
});

// Menu mobile
menuIcon.onclick = () => {
    menu.classList.toggle('active');
};

