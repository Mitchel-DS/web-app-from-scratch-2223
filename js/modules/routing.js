function locationHashChanged() {
	console.log(window.location.hash);
	if (location.hash === '') {
		// do something
	}
}

export { locationHashChanged };