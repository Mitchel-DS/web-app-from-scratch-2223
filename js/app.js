import { fetchArt, displayArt, displayMoreArt } from './modules/api.js';
import { locationHashChanged } from './modules/routing.js';

const button = document.querySelector('button');

fetchArt();
displayArt();

window.addEventListener('load', locationHashChanged);
button.addEventListener('click', displayMoreArt);