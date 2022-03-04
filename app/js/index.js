import recipes from '../data/recipes.json';
import displayResults from './results/displayResults';
import fillTheFilters from './filters/fillTheFilters';
import getFiltersElements from './filters/getFiltersElements';
import filterWithTags from './tags/filterWithTags';

////        DOM     ////
//Tous les inputs
let searchbarInput = document.querySelector(".searchbox #searchRecipes input#search");
let ingredientsFilterInput = document.querySelector(".searchbox #ingredients-filter input.ingredients-filter");
let appliancesFilterInput = document.querySelector(".searchbox #appliances-filter input.appliances-filter");
let utensilsFilterInput = document.querySelector(".searchbox #utensils-filter input.utensils-filter");
//Le conteneur du message à afficher si 0 résultat
let noResultText = document.querySelector(".no-result-message");
///////////////////////


////        LANCEMENT DE L'APPLICATION       ////
let recipesToDisplay;
fillTheFilters(recipes);
getFiltersElements();
let matches = [];
displayResults(matches);
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
        //On ne garde que les recettes contenant le mainInput dans leur nom, description ou ingrédients.
        recipesToDisplay = recipes.filter(recipe => {
            let recipeIsMatching = false;
            //On recherche dans le nom de la recette,
            if(regex.test(recipe.name)) {
                recipeIsMatching = true;
            } 
            //la description,
            else if (regex.test(recipe.description)) {
                recipeIsMatching = true;
            } 
            //et les ingrédients.
            recipe.ingredients.forEach(({ingredient}) => { 
                if (regex.test(ingredient)) {
                    recipeIsMatching = true;
                }
            })
            return recipeIsMatching;
        })
        //On met à jour les éléments dans les filtres
        fillTheFilters(recipesToDisplay);
    }

    //S'IL Y A DES TAGS
    if(Array.from(document.querySelectorAll(".searchbox .searchbox__tags .tags-wrapper .tag")).length > 0){
        tagsAreUsed = true;
        if(recipesToDisplay.length > 0) {
            console.log("Barre + tags");
            filterWithTags(recipesToDisplay);
        }
        else {
            console.log("Tags uniquement");
            filterWithTags(recipes);
        }
    }

    // SI LA RECHERCHE DANS LE FILTRE INGRÉDIENT EST UTILISÉ : 
    if (ingredientsFilterInput.value !== '' ) {
        console.log("la recherche dans le filtre ingrédient est utilisée");
        //searchWithFiltersOnly();
    }

    // SI LA RECHERCHE DANS LE FILTRE APPAREIL EST UTILISÉ : 
    if (appliancesFilterInput.value !== '') {
        console.log("la recherche dans le filtre appareil est utilisée");
        //searchWithFiltersOnly();
    }

    // SI LA RECHERCHE DANS LE FILTRE USTENSILE EST UTILISÉ : 
    if (utensilsFilterInput.value !== '') {
        console.log("la recherche dans le filtre ustensile est utilisée");
        //searchWithFiltersOnly();
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
        console.log("Tous les inputs sont vides.");
    }

    console.log("recipes to display : ", recipesToDisplay);

}
///////////////////////////////////////


//////        EVENT LISTENERS     ////
//searchbar
searchbarInput.addEventListener("input", (e) => {
    search(e);
});
//ingredients filter
ingredientsFilterInput.addEventListener("input", (e) => {
    search(e);
});
//appliances filter
appliancesFilterInput.addEventListener("input", (e) => {
    search(e);
});
//utensils filter
utensilsFilterInput.addEventListener("input", (e) => {
    search(e);
});
/////////////////////////////////////////

export default search;