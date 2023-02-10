const nameHeading = document.querySelector('h2');
const bioParagraph = document.querySelector('p');

const fetchStudent = async () => {
    const url = "https://whois.fdnd.nl/api/v1/member?id=cldex4djj47ty0av0n01u0gp1";

    const response = await fetch(url);
	const data = await response.json();
	// console.log(data);
	return data;
};

window.addEventListener('load', async () => {
	console.log('page is loaded');
	const student = await fetchStudent();
	console.log(student.member.name);
	console.log(student.member.bio.html);

	nameHeading.innerHTML = student.member.name + ' ' + student.member.surname;
	bioParagraph.innerHTML = student.member.bio.html;
});