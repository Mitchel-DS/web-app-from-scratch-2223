const endpoint = 'https://www.rijksmuseum.nl/api/nl/';
const query = 'collection?key=';
const apiKey = 'CIRKb1a1';
const mainSearchInput = document.querySelector('main form input');
const mainList = document.querySelector('main ul');
const results = 15;
var pages = 1;

const fetchArt = async () => {
	try {
		const url = `${endpoint}${query}${apiKey}&p=${pages}&ps=${results}}`;
    	const response = await fetch(url);
		const data = await response.json();
		console.log(data); // check if data is fetched
		return data;
	} catch (error) {
		console.log(error);
	}
    
};

const displayArt = async () => {
	const art = await fetchArt();
	const arts = art.artObjects;
	console.log(arts);
	
	arts.forEach(item => {
		// var listItem = `<li> <img src="${item.webImage.url}" alt="${item.title}"> <h2>${item.title}</h2> <p>${item.principalOrFirstMaker}</p> </li>`;
		var listItem = `<li> <img src="${item.webImage.url}" alt="${item.title}"></li>`;
		mainList.insertAdjacentHTML('beforeend', listItem);
	});
}

const searchArt = async () => {
	const search = mainSearchInput.value;
	console.log(search);
}

export { fetchArt, displayArt, searchArt };

