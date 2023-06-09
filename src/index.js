import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css'
import Notiflix from 'notiflix';

const selectEl = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const infoEl = document.querySelector(".cat-info");

function updateSelect(data) {
  fetchBreeds(data).then(data => {
    const markupBreeds = data
      .map(({ id, name }) => {
        return `<li><option value ='${id}'>${name}</option></li>`;
      })
      .join('');
    selectEl.insertAdjacentHTML('beforeend', markupBreeds);
    
    new SlimSelect({
            select: '#selectElement'
        }); 
  
  }).catch((error) => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'));
};
  
updateSelect();

selectEl.addEventListener("change", onChange);
loaderEl.style.display = 'none'
errorEl.style.display = 'none'
function onChange(e) {
 loaderEl.style.display = 'block'
let breedId = e.target.value
  fetchCatByBreed(breedId).then((data) => {
    
    const markupCats = data[0].breeds
      .map(({ name, description, temperament }) => {
        return `<h1>${name}</h1><p>${description}</p><p>Temperament: ${temperament}</p>`;
      })
      .join('');
    const markupPicture = data
      .map(({ url }) => {
        return `<img src='${url}' width='600'>`
      })
      .join('');
    infoEl.insertAdjacentHTML('afterbegin', markupCats);
    infoEl.insertAdjacentHTML('beforeend', markupPicture);
    
  }).catch((error )=> Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'))
    .finally(() => {
    loaderEl.style.display = 'none'
  });
  infoEl.innerHTML = '';
};
