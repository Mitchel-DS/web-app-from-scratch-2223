import { fetchArt, displayArt, searchArt } from './modules/api.js';
import { locationHashChanged } from './modules/routing.js';

// fetchArt();
displayArt();

window.addEventListener('load', locationHashChanged);
window.onhashchange = locationHashChanged;