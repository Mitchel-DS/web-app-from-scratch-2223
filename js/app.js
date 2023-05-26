import { fetchArt, displayMoreArt, fetchDetails, searchArt } from './modules/api.js';
import { displayArt,  displaySearch, displayDetails } from './modules/render.js';


const moreButton = document.querySelector('button');
const form = document.querySelector('form');
const searchInput = document.querySelector('input');
const artDetails = document.querySelector('.details ul');

const arts = await fetchArt();
displayArt(arts);

const checkhash = async () => {	
	var url = window.location.hash;

	if (url === '') {
		const arts = await fetchArt();
		displayArt(arts);	
	}
 }

window.addEventListener('load', checkhash);


window.addEventListener('hashchange', fetchDetails);
moreButton.addEventListener('click', displayMoreArt);
artDetails.addEventListener('click', displayDetails);

form.addEventListener("submit", async (e) => {
	e.preventDefault();
  
	const searchTerm = searchInput.value;
	console.log(searchTerm);
	// searchArt(searchTerm);
	const data = await searchArt(searchTerm);

	displaySearch(data);
	// console.log(data);
});