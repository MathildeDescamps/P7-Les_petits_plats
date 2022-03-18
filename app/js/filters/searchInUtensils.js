import getFiltersElements from "./getFiltersElements";

const searchInUtensils = (input)  => {
   const regex = new RegExp(`${input}`, 'gi');
    getFiltersElements();
    for(i=0; i<utensilsInFilterDOM.length; i++) {
        if (regex.test(utensilsInFilterDOM[i].innerText) === false) {
            utensilsInFilterDOM[i].style.display = "none";
        } else {
            utensilsInFilterDOM[i].style.display = "block";
        }
    }
}

export default searchInUtensils;