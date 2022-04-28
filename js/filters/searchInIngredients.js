import getFiltersElements from "./getFiltersElements";

const searchInIngredients = (input)  => {
    const regex = new RegExp(`${input}`, 'gi');
    getFiltersElements();
    for(let i=0; i<ingredientsInFilterDOM.length; i++) {
        if (regex.test(ingredientsInFilterDOM[i].innerText) === false) {
            ingredientsInFilterDOM[i].style.display = "none";
        } else {
            ingredientsInFilterDOM[i].style.display = "block";
        }
    }
}

export default searchInIngredients;