const leftSide = document.querySelector('.js-leftSide'),
    leftSideInner = document.querySelector('.js-leftSideInner'),
    title = document.querySelector('.js-title'),
    content = document.querySelector('.js-content'),
    close = document.querySelector('.js-close'),
    names = document.querySelectorAll('.js-name');
let activeButton;

names.forEach(name => name.addEventListener('click', function(event) {
    activeteButton(event);
    // get content title 
    // content paragraphs here
    // from external json file
    // display it inside title & content elements
    showLeftSide();
}));

close.addEventListener('click', function() {
    closeLeftSide();
    activeButton.classList.remove('active');
});

function showLeftSide() {
    leftSide.classList.add('active');
    leftSideInner.scrollTop = 0;
    leftSide.scrollTop = 0;
}

function closeLeftSide() {
    leftSide.classList.remove('active');
}

function activeteButton() {
    activeButton = event.target;

    if (activeButton.classList.contains('active')) return false;

    names.forEach(name => name.classList.remove('active'));
    activeButton.classList.add('active');
}