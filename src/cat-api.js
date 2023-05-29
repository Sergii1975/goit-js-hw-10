import Notiflix from 'notiflix';

const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const API = "live_ParOZQNsebJDvbk5X6VZ7m7XFxqsIqxYDg5cbLDClH0GcG3ICPKDG8K3MOuX2nz6";

const CAT_URL = "https://api.thecatapi.com/v1/images/search";

export function fetchBreeds() {
    
    return fetch(`${BASE_URL}?api_key=${API}`)
    .then((response) => {
      
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error )=> Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'));
};

export function fetchCatByBreed(breedId) {

  return fetch(`${CAT_URL}?breed_ids=${breedId}&api_key=${API}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'));
   
};

