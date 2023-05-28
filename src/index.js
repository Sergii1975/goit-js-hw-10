import { fetchBreeds } from './cat-api.js';
import {fetchCatByBreed} from './cat-api.js';

const selectEl = document.querySelector("select.breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const infoEl = document.querySelector(".cat-info");



function getBreeds(data) {
  fetchBreeds(data).then((data) => {
    console.log(data)

  });
}
getBreeds('objectsPromice')


function updateSelect(data) {
  fetchBreeds(data).then(data => {
    // console.log(data);
    const markupBreeds = data
      .map(({ id, name }) => {
        return `<li><option value ='${id}'>${name}</option></li>`;
      })
      .join('');
    selectEl.insertAdjacentHTML('beforeend', markupBreeds);
  });
}
updateSelect();

selectEl.addEventListener("change", onChange);

function onChange(e) {
 
let breedId = e.target.value
   fetchCatByBreed(breedId).then((data) => {
    console.log(data)
     
    const markupCats = data
      .map(({ name, description, reference_image_id, temperament}) => {
        return `<li><h1>${name}</h1><img src=${reference_image_id} alt='${name}' width='200'><p>${temperament}</p><p>${description}</p></li>`;
        
      })
      .join('');
    infoEl.insertAdjacentHTML('beforeend', markupCats);

  });
}

// function getCatByBreed(data) {
 
//   fetchCatByBreed(data).then((data) => {
//     console.log(data)
     
//     const markupCats = data
//       .map(({ name, description, reference_image_id, temperament}) => {
//         return `<li><h1>${name}</h1><img src=${reference_image_id} alt='${name}' width='200'><p>${temperament}</p><p>${description}</p></li>`;
//         // return `<li><option value =${reference_image_id}></li>`;
//       })
//       .join('');
//     infoEl.insertAdjacentHTML('beforeend', markupCats);

//   });
  
//   }
// getCatByBreed()

