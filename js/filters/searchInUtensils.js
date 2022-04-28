import getFiltersElements from "./getFiltersElements.js";

const searchInUtensils = (input)  => {
   const regex = new RegExp(`${input}`, 'gi');
    getFiltersElements();
    utensilsInFilterDOM.forEach(utensil => {
        if (regex.test(utensil.innerText) === false) {
            utensil.style.display = "none";
        } else {
            utensil.style.display = "block";
        }
    }); 
}

export default searchInUtensils;