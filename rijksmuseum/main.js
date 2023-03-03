const apiKey = 'CIRKb1a1';
const mainList = document.querySelector('main ul');
const results = 10;
var pages = 1;

const fetchArt = async () => {
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&p=${pages}&ps=${results}}`;
    const response = await fetch(url);
	const data = await response.json();
	console.log(data); // check if data is fetched
	return data;
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

displayArt();
fetchArt();

