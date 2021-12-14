import { galleryItems } from './gallery-items.js';
// Change code below this line
const div = document.querySelector('.gallery');

const images = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item"><a class="gallery__link" href=${original}>
  <img class="gallery__image" src=${preview} alt='${description}' />
</a></li>
`).join("");
   
div.insertAdjacentHTML('beforeEnd', images);


     
new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 })