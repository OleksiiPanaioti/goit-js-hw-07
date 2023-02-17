import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createImagesCardsMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryPictureClick);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);






// function that creates markup
function createImagesCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` 
        <div class="gallery__item">
            <a class="gallery__link" 
            href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    }).join('');

    return markup

}

// Реалізація делегування на div.gallery і отримання url великого зображення.
 
function onGalleryPictureClick(e) {
    e.preventDefault()
    
    const isGalleryImageEl = e.target.nodeName

    if (isGalleryImageEl !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `)

    instance.show();

    galleryContainer.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {

        console.log(evt);
        instance.close();
    }
    });
    
}



// створюемо лайтбокс 

