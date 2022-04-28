import getFiltersElements from "./getFiltersElements.js";

const searchInIngredients = (input)  => {
    const regex = new RegExp(`${input}`, 'gi');
    getFiltersElements();
    ingredientsInFilterDOM.forEach(ingredient => {
        if (regex.test(ingredient.innerText) === false) {
            ingredient.style.display = "none";
        } else {
            ingredient.style.display = "block";
        }
    }); 
}

export default searchInIngredients;