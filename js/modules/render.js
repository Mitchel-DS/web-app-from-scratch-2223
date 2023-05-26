import { fetchArt, searchArt, fetchDetails } from './api.js';

const main = document.querySelector('main');
const sectionDetails = document.querySelector('.details');
const sectionSearch = document.querySelector('.search ul');

export const displayArt = async (art) => {
	// const art = await fetchArt();
	const arts = art.artObjects;
	
	arts.forEach(item => {
		var listItem = `<li><a href="#details/${item.objectNumber}"><img src="${item.webImage.url}" alt="${item.title}"></a></li>`;
		sectionDetails.insertAdjacentHTML('afterbegin', listItem);
	});
}

export const displaySearch = async (data) => {
	console.log(data);
	sectionDetails.innerHTML = '';
	// const searchedArt = await searchArt();
	const searchedArts = data.artObjects;
	console.log('searched for: ' + data);
	
	searchedArts.forEach(test => {
		var results = `<li><a href="#details/${test.objectNumber}"><img src="${test.webImage.url}" alt="${test.title}"></a></li>`;
		main.insertAdjacentHTML('beforeend', results);
	});
}

export const displayDetails = async (art) => {
	// const art = await fetchDetails();
	console.log(art);
	const arts = art.artObject;
	sectionDetails.innerHTML = '';
	sectionSearch.innerHTML = '';

	console.log(arts);
	var listItem = `
	<li>
		<a href="#details/${arts.objectNumber}">
			<img src="${arts.webImage.url}" alt="${arts.title}">
			<p>${arts.title}</p>
		</a>
	</li>
	`;
		main.insertAdjacentHTML('beforeend', listItem);
}