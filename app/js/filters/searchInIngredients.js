import getFiltersElements from "./getFiltersElements";

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