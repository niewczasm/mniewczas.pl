const footer = document.getElementById('site-footer');
const main = document.getElementById('site-content');

main.style.marginBottom = footer.offsetHeight + 'px';

window.addEventListener('resize', function() {
    main.style.marginBottom = footer.offsetHeight + 'px';
});