// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map(item => (`<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`)).join('')


var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });