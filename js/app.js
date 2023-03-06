import { displayArt } from './modules/api.js';
import { locationHashChanged } from './modules/routing.js';

displayArt();

window.onhashchange = locationHashChanged;