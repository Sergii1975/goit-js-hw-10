!function(){var e="live_ParOZQNsebJDvbk5X6VZ7m7XFxqsIqxYDg5cbLDClH0GcG3ICPKDG8K3MOuX2nz6";function n(){var n=new URLSearchParams({api_key:e});return fetch("".concat("https://api.thecatapi.com/v1/breeds","?").concat(n)).then((function(e){if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log(e)}))}var t=document.querySelector("select.breed-select"),c=(document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info"));n().then((function(e){console.log(e)})),n().then((function(e){var n=e.map((function(e){var n=e.id,t=e.name;return"<li><option value ='".concat(n,"'>").concat(t,"</option></li>")})).join("");t.insertAdjacentHTML("beforeend",n)})),(new URLSearchParams({}),fetch("".concat("https://api.thecatapi.com/v1/images/search","?breed_ids=abys&api_key=").concat(e)).then((function(e){if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){console.log(e);var n=e.map((function(e){var n=e.name,t=e.description,c=e.reference_image_id,o=e.temperament;return"<li><h1>".concat(n,"</h1><img src=").concat(c," alt='").concat(n,"' width='200'><p>").concat(o,"</p><p>").concat(t,"</p></li>")})).join("");c.insertAdjacentHTML("beforeend",n)}))}();
//# sourceMappingURL=index.18077307.js.map
