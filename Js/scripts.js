const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImageIndex = 0;

const images = [
    'imagens/fotos/tibia1.jpg',
    'imagens/fotos/tibia2.jpg',
    'imagens/fotos/tibia3.jpg',
    'imagens/fotos/img_jogo.jpg',
    'imagens/fotos/img_jogo1.jpg',
    'imagens/fotos/img_jogo2.jpg',
    'imagens/fotos/img_jogo3.jpg',
    'imagens/fotos/img_jogo4.jpg',
    'imagens/fotos/img_jogo5.jpg',
];

function openLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'block';
    lightboxImg.src = images[currentImageIndex];
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    lightboxImg.src = images[currentImageIndex];
}    
   

const menuIcon = document.querySelector('.menu-icon span');
const navLinks = document.querySelector('.nav-links');

function checkScreenSize() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (!isMobile) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
}

checkScreenSize();

menuIcon.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', (e) => {
    const isClickInsideNavLinks = navLinks.contains(e.target);
    const isClickInsideMenuIcon = menuIcon.contains(e.target);
    const isClickInsideAccordion = e.target.closest('.accordion-item') !== null;

    if (!isClickInsideNavLinks && !isClickInsideMenuIcon && !isClickInsideAccordion) {
        navLinks.style.display = 'none';
    }
});

window.addEventListener('resize', checkScreenSize);

const accordionItems = document.querySelectorAll('.accordion-item h3');
accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
