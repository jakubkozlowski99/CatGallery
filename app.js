const THUMBNAILS = document.querySelectorAll('.thumbnail img');
const POPUP = document.querySelector('.popup');
const POPUP_CLOSE = document.querySelector('.popup__close');
const POPUP_IMAGE = document.querySelector('.popup__img');
const ARROW_LEFT = document.querySelector('.popup__arrow--left');
const ARROW_RIGHT = document.querySelector('.popup__arrow--right');

THUMBNAILS.forEach(thumbnail => {
    thumbnail.addEventListener("click", (e) => {
        // Handle thumbnail click event
        POPUP.classList.remove('hidden');
        POPUP_IMAGE.src = e.target.src; // Set the popup image source to the clicked thumbnail's source
    });
});

POPUP_CLOSE.addEventListener('click', () => {
    // Handle popup close button click event
    POPUP.classList.add('hidden');
});

ARROW_LEFT.addEventListener('click', () => {
    // Handle left arrow click event
    const currentIndex = Array.from(THUMBNAILS).findIndex(thumbnail => thumbnail.src === POPUP_IMAGE.src);
    const previousIndex = (currentIndex - 1 + THUMBNAILS.length) % THUMBNAILS.length; // Calculate previous index with wrap-around
    POPUP_IMAGE.src = THUMBNAILS[previousIndex].src; // Update popup image source to the previous thumbnail's source
});

ARROW_RIGHT.addEventListener('click', () => {
    // Handle right arrow click event
    const currentIndex = Array.from(THUMBNAILS).findIndex(thumbnail => thumbnail.src === POPUP_IMAGE.src);
    const nextIndex = (currentIndex + 1) % THUMBNAILS.length; // Calculate next index with wrap-around
    POPUP_IMAGE.src = THUMBNAILS[nextIndex].src; // Update popup image source to the next thumbnail's source
});