const fetchStudent = async () => {
    const url = "https://wd-tribe-api.netlify.app/.netlify/functions/member?id=cldex4djj47ty0av0n01u0gp1";

    const response = await fetch(url);
	const data = await response.json();
	// console.log(data);
	return data;
};

window.addEventListener('load', async () => {
	console.log('page is loaded');
	const student = await fetchStudent();
	console.log(student);
});