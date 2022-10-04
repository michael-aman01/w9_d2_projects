
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
	const newTag = document.createElement("p");
	newTag.innerHTML = string;
	htmlElement.appendChild(newTag);
};

htmlGenerator('Party Time.', partyHeader);