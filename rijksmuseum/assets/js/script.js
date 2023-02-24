const apiKey = 'CIRKb1a1';
const mainList = document.querySelector('main ul');
const limit = 10;
var page = 1;

console.log('script loaded');

const fetchArt = async () => {
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&p=${page}&ps=${limit}}`;
    const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	return data;
};

const displayArt = async () => {
	const art = await fetchArt();
	const arts = art.artObjects;
	console.log(arts);
	
	arts.forEach(painting => {
		var li = `<li> <img src="${painting.webImage.url}" alt="${painting.title}"> <h2>${painting.title}</h2> <p>${painting.principalOrFirstMaker}</p> </li>`;

		mainList.insertAdjacentHTML('beforeend', li);

	});
}

fetchArt();
displayArt();
