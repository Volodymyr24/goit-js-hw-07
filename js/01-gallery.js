import { galleryItems } from './gallery-items.js';
// Change code below this line

const div = document.querySelector('.gallery');

const images = galleryItems.map(({preview, original, description}) => 
    `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${ description}
      />
    </a>
  </div>`).join("");
    div.insertAdjacentHTML('beforeEnd', images);

    div.addEventListener("click", modalOpen)

    const instance = basicLightbox.create(`
            <img src="" width="800" height="600">
            `)
    
    function modalOpen(e){
        e.preventDefault();
        if (e.target === e.currentTarget) {
            return }
        const image = instance.element().querySelector('img')
        image.src = e.target.getAttribute('data-source');
         
         instance.show()
    }
    function onEscape(e){
      if (e.keyCode === 27){
        instance.close()
        console.log("yes")
      }
        return
    }
      

    if (instance.close()){
      document.removeEventListener('keydown', onEscape);
      console.log("no")
    }
    document.addEventListener('keydown', onEscape)
    