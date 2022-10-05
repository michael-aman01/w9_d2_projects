
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
	let toArray = Array.from(htmlElement.children)
	if(toArray.length > 0){
		toArray.forEach(child => {
			htmlElement.removeChild(child)
		})
	}
	const newTag = document.createElement("p");
	newTag.innerHTML = string;

	htmlElement.appendChild(newTag);

};

htmlGenerator('Party Time.', partyHeader);