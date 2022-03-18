import recipes from '../data/recipes.json';
import displayResults from './results/displayResults';
import fillTheFilters from './filters/fillTheFilters';
import getFiltersElements from './filters/getFiltersElements';
import filterWithTags from './tags/filterWithTags';
import searchInIngredients from './filters/searchInIngredients';
import searchInAppliances from './filters/searchInAppliances';
import searchInUtensils from './filters/searchInUtensils';

////        DOM     ////
//Tous les inputs
let searchbarInput = document.querySelector(".searchbox #searchRecipes input#search");
let ingredientsFilterInput = document.querySelector(".searchbox #ingredients-filter input.ingredients-filter");
let appliancesFilterInput = document.querySelector(".searchbox #appliances-filter input.appliances-filter");
let utensilsFilterInput = document.querySelector(".searchbox #utensils-filter input.utensils-filter");
//Le conteneur du message à afficher si 0 résultat
let noResultText = document.querySelector(".no-result-message");
//Les items dans les filtres
let ingredientsInFilterDOM = [];
let appliancesInFilterDOM = [];
let utensilsInFilterDOM = [];
///////////////////////

////        LANCEMENT DE L'APPLICATION       ////
let recipesToDisplay;
fillTheFilters(recipes);
getFiltersElements();
let matches = [];
displayResults(matches);
//Recherche dans les ingrédients/appareils/ustensils :
ingredientsFilterInput.addEventListener("input", function(e) {
    document.querySelector(".searchbox__filters #ingredients-filter .filter-items").style.display = "flex";
    searchInIngredients(e.target.value);
});
appliancesFilterInput.addEventListener("input", function(e) {
    document.querySelector(".searchbox__filters #appliances-filter .filter-items").style.display = "flex";
    searchInAppliances(e.target.value);
});
utensilsFilterInput.addEventListener("input", function(e) {
    document.querySelector(".searchbox__filters #utensils-filter .filter-items").style.display = "flex";
    searchInUtensils(e.target.value);
});
////////////////////////////////////////////////////////////


////        RECHERCHE        ////
const search = (e) => {
    recipesToDisplay = [];
    let tagsAreUsed = false;
    let mainInput;

    // SI LA BARRE DE RECHERCHE EST UTILISÉE :
    if( (searchbarInput.value.length > 2) ) {
        mainInput = searchbarInput.value;
        const regex = new RegExp(`${mainInput}`, 'gi');
        for(i=0; i<recipes.length; i++) {
            let recipeIsMatching = false;
            //On recherche dans le nom de la recette,
            if(regex.test(recipes[i].name)) {
                recipeIsMatching = true;
            } 
            //la description,
            else if (regex.test(recipes[i].description)) {
                recipeIsMatching = true;
            } 
            //et les ingrédients.
            for(j=0; j<recipes[i].ingredients.length; j++) {
                if(regex.test(recipes[i].ingredients[j].ingredient)) {
                    recipeIsMatching = true;
                }
            }
            if(recipeIsMatching === true) {
                recipesToDisplay.push(recipes[i]);
            };
        }
        //On met à jour les éléments dans les filtres
        fillTheFilters(recipesToDisplay);
    }

    //S'IL Y A DES TAGS
    if(Array.from(document.querySelectorAll(".searchbox .searchbox__tags .tags-wrapper .tag")).length > 0){
        tagsAreUsed = true;
        if(recipesToDisplay.length > 0) {
            recipesToDisplay = filterWithTags(recipesToDisplay);
        }
        else {
            recipesToDisplay = filterWithTags(recipes);
        }
    }

    // S'IL Y A DES RÉSULTATS, ON LES AFFICHE, SINON ON AFFICHE UN MESSAGE
    if(recipesToDisplay.length > 0) {
        noResultText.innerHTML = "";
        displayResults(recipesToDisplay);
    } else {
        let matches = [];
        displayResults(matches);
        noResultText.innerHTML = "<p>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>";
    }

    // SI LA BARRE DE RECHERCHE EST VIDE ET QU'IL N'Y A PAS DE TAG
    if ( ( (searchbarInput.value === '') || (searchbarInput.value.length < 3 ) ) && tagsAreUsed === false ) {
        fillTheFilters(recipes);
        let matches = [];
        displayResults(matches);
        noResultText.innerHTML = "";
    }

}
///////////////////////////////////////


//////        EVENT LISTENERS     ////
//searchbar
searchbarInput.addEventListener("input", (e) => {
    search(e);
});
/////////////////////////////////////////

export default search;