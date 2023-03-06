function locationHashChanged() {
	console.log(window.location.hash);
	if (location.hash === '#home') {
		// do something
	}
}

export { locationHashChanged };