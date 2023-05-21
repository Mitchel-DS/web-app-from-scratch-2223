function locationHashChanged() {
	const mainContainer = document.querySelector('main');
	const hash = window.location.hash;
	console.log(hash);

	if (hash === '') {
		// do something

	} else if (hash === 'details') {
		// do something
		mainContainer.innerHTML = `<h1>About</h1>`;
	}
}

window.onhashchange = locationHashChanged;
export { locationHashChanged };