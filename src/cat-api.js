
const BASE_URL = "https://api.thecatapi.com/v1/breeds";
const API = "live_ParOZQNsebJDvbk5X6VZ7m7XFxqsIqxYDg5cbLDClH0GcG3ICPKDG8K3MOuX2nz6";

const CAT_URL = "https://api.thecatapi.com/v1/images/search";

export function fetchBreeds() {
     const params = new URLSearchParams({
    api_key: API,
    
     });
    return fetch(`${BASE_URL}?${params}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

export function fetchCatByBreed(breedId) {
  const breed_ids = new URLSearchParams({
    // apikey: API,
    
     });
  return fetch(`${CAT_URL}?breed_ids=abys&api_key=${API}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

