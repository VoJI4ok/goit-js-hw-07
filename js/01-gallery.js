import { galleryItems } from './gallery-items.js';
// Change code below this line

const palletContainer = document.querySelector(`.gallery`);
const galleryMarkup = createbigGallery(galleryItems);

const instanceOptions ={
    onShow: (instance) => {
      document.onkeydown = event => {
             if (event.code === 'Escape') instance.close();
      };
    },
  }
  

palletContainer.insertAdjacentHTML('beforeend', galleryMarkup);
palletContainer.addEventListener('click', onImageClick);
function createbigGallery (galleryItems){
    return galleryItems.map(({preview, original,description}) => {
        return ` 
        <div class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
     </a>
     </div> 
`;

    })
   .join('');
}

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
    imageOpenClose(event);
  }
  
  function imageOpenClose(evt) {
    const instance = basicLightbox.create(`
      <img class= "original-img" src = '${evt.target.dataset.source}' width = '1280'>`,instanceOptions );
    instance.show();
   }

