
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};



function dogLinkCreator(){
const dogLinksCompleted = [];
 for(dog in dogs){
    const aTag = document.createElement('a');
    aTag.innerHTML = dog;
    aTag.setAttribute("href",dogs[dog]);
    const li = document.createElement('li')
    li.classList.add('dog-link');
    li.appendChild(aTag)
    dogLinksCompleted.push(li)
 } 
 return dogLinksCompleted
}

function attachDogLinks(){

  const dogLink = dogLinkCreator()
  const dropDownList = document.querySelector('.drop-down-dog-list')
  dogLink.forEach(link => {
    dropDownList.appendChild(link)
  })

}

attachDogLinks()