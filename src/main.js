import { searchImages } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions"


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
            });


const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader")

form.addEventListener("submit", handleSearch);

function handleSearch(event) {
    event.preventDefault();
    gallery.innerHTML = "";
    let inputElement = event.target.elements.name;
    const inputSearch = inputElement.value.trim();
    if (!inputSearch) {
        iziToast.show({
            title: '',
            iconUrl: `${errorImage}`,
            backgroundColor: 'red',
            message: `Enter the data for the search!`,
            position: 'topRight',
        }
        );
        return;
    };
    loader.style.display = "inline-block";
    inputSearch(searchImages)
        .then((arrImg) => {
            if (arrImg.length === 0) {
                iziToast.show({
                    title: '',
                    iconUrl: `${errorImage}`,
                    backgroundColor: 'red',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    position: 'topRight',
                })
            };
            gallery.insertAdjacentHTML("beforeend", renderImages(arrImg));
            lightbox.refresh();
            inputElement.value = "";
            loader.style.display = "none";
        })
        .catch((error) => console.log(error))
}

