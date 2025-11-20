function scrollMove() {
    const elements = document.querySelectorAll('.scroll-move');
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', scrollMove);
scrollMove();
