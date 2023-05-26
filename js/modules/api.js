import { displayDetails } from "./render.js";

const endpoint = 'https://www.rijksmuseum.nl/api/nl/';
const query = 'collection?key=';
const apiKey = '10XgIStq';
const results = 15;
var pages = 1;

const mainList = document.querySelector('main ul');

// fetch data from API
const fetchArt = async () => {
	const loading = document.querySelector('.loading');
	loading.classList.add('flex');
	try {
		const url = `${endpoint}${query}${apiKey}&p=${pages}&ps=${results}}`;
    	const response = await fetch(url);
		const data = await response.json();
		console.log(data); // check if data is fetched
		loading.classList.remove('flex');
		return data;
	} catch (error) {
		console.log(error);
	}
};

// const displayArt = async () => {
// 	const art = await fetchArt();
// 	const arts = art.artObjects;
// 	console.log(arts);
	
// 	arts.forEach(item => {
// 		var listItem = `<li><a href="#details/${item.objectNumber}"><img src="${item.webImage.url}" alt="${item.title}"></a></li>`;
// 		mainList.insertAdjacentHTML('beforeend', listItem);
// 	});
// }

const displayMoreArt = async () => {
	pages++;
	const art = await fetchArt();
	const arts = art.artObjects;
	console.log(arts);
	
	arts.forEach(item => {
		var listItem = `<li><a href="#details/${item.objectNumber}"><img src="${item.webImage.url}" alt="${item.title}"></a></li>`;
		mainList.insertAdjacentHTML('beforeend', listItem);
	});
}

const fetchDetails = async () => {
	var url = window.location.hash;
	var id = url.substring(url.lastIndexOf('/') + 1);
	console.log(id);
	const loading = document.querySelector('.loading');
	loading.classList.add('flex');
	try {
		const url = `${endpoint}/collection/${id}?key=${apiKey}`;
		const response = await fetch(url);
		const data = await response.json();
		 // check if data is fetched
		loading.classList.remove('flex');
		displayDetails(data);
		// return data;
	} catch (error) {
		console.log(error);
	}
}

// const displayDetails = async () => {
// 	const art = await fetchDetails();
// 	const arts = art.artObject;
// 	mainSection.innerHTML = '';

// 	console.log(arts.title);
// 	var listItem = `
// 	<li>
// 		<a href="#details/${arts.objectNumber}">
// 			<img src="${arts.webImage.url}" alt="${arts.title}">
// 			<p>${arts.title}</p>
// 		</a>
// 	</li>
// 	`;
// 		main.insertAdjacentHTML('beforeend', listItem);
// }

const searchArt = async (searchTerm) => {
	const loading = document.querySelector('.loading');
	loading.classList.add('flex');
	try {
		const url = `${endpoint}${query}${apiKey}&q=${searchTerm}&imgonly=true`;
		const response = await fetch(url);
		const data = await response.json();
		console.log(data); // check if data is fetched
		loading.classList.remove('flex');
		return data;
		// displaySearch();
	} catch (error) {
		console.log(error);
	}
}



export { 
	fetchArt,
	fetchDetails,
	displayMoreArt,
	searchArt
};

