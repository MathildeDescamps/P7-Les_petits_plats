import recipes from '../data/recipes.json';
import addTag from './tags/addTag';
import displayResults from './results/displayResults';

////        DOM     ////
//On récupère tous les inputs
let searchbarInput = document.querySelector(".searchbox #searchRecipes input#search");
let ingredientsFilterInput = document.querySelector(".searchbox #ingredients-filter input.ingredients-filter");
let appliancesFilterInput = document.querySelector(".searchbox #appliances-filter input.appliances-filter");
let utensilsFilterInput = document.querySelector(".searchbox #utensils-filter input.utensils-filter");
//Le contenu des filtres
let ingredientsList = document.querySelector(".searchbox #ingredients-filter .filter-items");
let appliancesList = document.querySelector(".searchbox #appliances-filter .filter-items");
let utensilsList = document.querySelector(".searchbox #utensils-filter .filter-items");

let noResultText = document.querySelector(".no-result-message");

////        VARIABLES       ////
//Tableaux contenant les items dans les filtres
let ingredientsInFilter = [];
let appliancesInFilter = [];
let utensilsInFilter = [];
//Recettes à afficher
let recipesToDisplay = [];

//FONCTION : On met tous les ingrédients/appareils/ustensiles dans les filtres
const fillTheFilters = (recipes) => {
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach(({ingredient}) => {
            if(ingredientsInFilter.includes(ingredient) === false) {
                ingredientsInFilter.push(ingredient);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = ingredient;
                ingredientsList.appendChild(filterItem);
            }
        })
        if (appliancesInFilter.includes(recipe.appliance) === false) {
            appliancesInFilter.push(recipe.appliance);
            let filterItem = document.createElement('span');
            filterItem.classList.add('filter-item');
            filterItem.innerText = recipe.appliance;
            appliancesList.appendChild(filterItem);
        }
        recipe.utensils.forEach((utensil) => {
            if (utensilsInFilter.includes(utensil) === false) {
                utensilsInFilter.push(utensil);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = utensil;
                utensilsList.appendChild(filterItem);
            }
        })
    })
}

//AU LANCEMENT DE L'APPLICATION
fillTheFilters(recipes);
let matches = [];
displayResults(matches);

//Gestion des tags
    let ingredientsInFilterDOM = document.querySelectorAll(".searchbox__filters #ingredients-filter .filter-items .filter-item");
    let appliancesInFilterDOM = document.querySelectorAll(".searchbox__filters #appliances-filter .filter-items .filter-item");
    let utensilsInFilterDOM = document.querySelectorAll(".searchbox__filters #utensils-filter .filter-items .filter-item");
    //Pour les tags ingrédient
    ingredientsInFilterDOM.forEach((ingredientDOM, index) => {
        ingredientDOM.addEventListener('click', function () {
            let tagDOM =  `.searchbox__tags .ingredient#tag-${index.toString()}`;
            //Si l'ingrédient n'est pas encore affiché dans les tags
            if (!document.querySelector(tagDOM)) {
                addTag(recipesToDisplay, 'ingredient', ingredientDOM.innerText, index);
            } else return;
        })
    })
    //Pour les tags appareil
    appliancesInFilterDOM.forEach((applianceDOM, index) => {
        applianceDOM.addEventListener('click', function() {
            let tagDOM =  `.searchbox__tags .appliance#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) {
                addTag(recipesToDisplay, 'appliance', applianceDOM.innerText, index);
            }
        })
    })
    //Pour les tags ustensile
    utensilsInFilterDOM.forEach((utensilDOM, index) => {
        utensilDOM.addEventListener('click', function() {
            let tagDOM =  `.searchbox__tags .utensil#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) {
                addTag(recipesToDisplay, 'utensil', utensilDOM.innerText, index);
            }
        })
    })

////        FUNCTIONS       ////

//A partir du moment où l'utilisateur tape quelque chose dans un des inputs, on passe dans le cas 1, 2 ou 3
const search = (e) => {
    //Input de la barre de recherche principale
    let mainInput;

    // 1 : Recherche dans la barre de recherche uniquement
    /* const searchWithSearchbarOnly = () => {
        console.log("1 : Recherche avec barre de recherche uniquement !");
        let input = searchbarInput.value;
        //Expression régulière
        const regex = new RegExp(`${input}`, 'gi');
        //On met les recettes à afficher dans un tableau
        let recipesToDisplay = recipes.filter(recipe => {
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

        //Gestion des tags
        let ingredientsInFilterDOM = document.querySelectorAll(".searchbox__filters #ingredients-filter .filter-items .filter-item");
        let appliancesInFilterDOM = document.querySelectorAll(".searchbox__filters #appliances-filter .filter-items .filter-item");
        let utensilsInFilterDOM = document.querySelectorAll(".searchbox__filters #utensils-filter .filter-items .filter-item");
        //Pour les tags ingrédient
        ingredientsInFilterDOM.forEach((ingredientDOM, index) => {
            ingredientDOM.addEventListener('click', function () {
                let tagDOM =  `.searchbox__tags .ingredient#tag-${index.toString()}`;
                //Si l'ingrédient n'est pas encore affiché dans les tags
                if (!document.querySelector(tagDOM)) {
                    addTag(recipesToDisplay, 'ingredient', ingredientDOM.innerText, index);
                } else return;
            })
        })
        //Pour les tags appareil
        appliancesInFilterDOM.forEach((applianceDOM, index) => {
            applianceDOM.addEventListener('click', function() {
                let tagDOM =  `.searchbox__tags .appliance#tag-${index.toString()}`;
                if (!document.querySelector(tagDOM)) {
                    addTag(recipesToDisplay, 'appliance', applianceDOM.innerText, index);
                }
            })
        })
        //Pour les tags ustensile
        utensilsInFilterDOM.forEach((utensilDOM, index) => {
            utensilDOM.addEventListener('click', function() {
                let tagDOM =  `.searchbox__tags .utensil#tag-${index.toString()}`;
                if (!document.querySelector(tagDOM)) {
                    addTag(recipesToDisplay, 'utensil', utensilDOM.innerText, index);
                }
            })
        })

        displayResults(recipesToDisplay);
    } */
    // 2 : Recherche dans les filtres uniquement
    const searchWithFiltersOnly = () => {

        console.log("2 : Recherche avec les filtres uniquement !");

    }
    // 3 : Recherche dans la barre de recherche et les filtres
    const searchWithSearchbarAndFilters = () => {

        console.log(" 3 : La barre de recherche ET les filtres sont utilisés !");

        //Expressions régulières
        const regex = new RegExp(`${searchbarInput.value}`, 'gi');
        const ingrRegex = new RegExp(`${ingredientsFilterInput.value}`, 'gi');
        const appRegex = new RegExp(`${appliancesFilterInput.value}`, 'gi');
        const utenRegex = new RegExp(`${utensilsFilterInput.value}`, 'gi');

        //On filtre une première fois avec la barre de recherche
        let recipesFilteredOnce = recipes.filter(recipe => {

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
    };

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
    // SI TOUS LES INPUTS SONT VIDES
    if( ((ingredientsFilterInput.value === '') && (appliancesFilterInput.value === '') && (utensilsFilterInput.value === '')) && ((searchbarInput.value === '') || (searchbarInput.value.length < 3 )) ) {
        fillTheFilters(recipes);
        let matches = [];
        displayResults(matches);
        noResultText.innerHTML = "";
        console.log("Tous les inputs sont vides.");
    }

}

////      EVENT LISTENERS       ////
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

export default search;