
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const galleryItemsEl = galleryItems
    .map(({ preview, description, original }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`)
    .join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsEl);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, captionPosition: "bottom", });
