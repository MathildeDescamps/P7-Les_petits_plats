// Import recipes :
import recipes from './recipes.json';

console.log(recipes);

let searchRecipes = document.getElementById('searchRecipes');

//Get user input :
searchRecipes.addEventListener("keyup", e => { 
    let searchString = e.target.value; 
    if(searchString) {
        console.log(searchString);
    }
});