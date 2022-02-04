//Il faut tout englober dans une fonction géante "search", qui contient des conditions pour les différents cas d'utilisation. 
//On met des event listeners sur tous ces inputs à la fin de la fonction.
    // 1er cas : recherche simple avec la barre de recherche uniquement
        // => Condition : rien dans les filtres, quelque chose dans la barre de recherche (au moins 3 caractères)
    // 2ème cas : recherche avec les filtres uniquement
        // => Condition : rien dans la barre de recherche, quelque chose dans au moins l'un des filtres
import recipes from '../data/recipes.json';

//On récupère tous les inputs du DOM
let searchbarInput = document.querySelector(".searchbox #searchRecipes input#search");
let ingredientsFilterInput = document.querySelector(".searchbox #ingredients-filter input.ingredients-filter");
let appliancesFilterInput = document.querySelector(".searchbox #appliances-filter input.appliances-filter");
let utensilsFilterInput = document.querySelector(".searchbox #utensils-filter input.utensils-filter");

let ingredientsList = document.querySelector(".searchbox #ingredients-filter .filter-items");
let appliancesList = document.querySelector(".searchbox #appliances-filter .filter-items");
let utensilsList = document.querySelector(".searchbox #utensils-filter .filter-items");

//On récupère la section où l'on va afficher les résultats de recherche
const matchList = document.getElementById('results');

const search = (e) => {

    let input = e.target.value;

    //Expression régulière
    const regex = new RegExp(`${input}`, 'gi');

    //Recherche avec la barre de recherche uniquement
    const searchWithSearchbarOnly = () => {
        console.log("1 : Recherche avec barre de recherche uniquement !");

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

        displayResults(recipesToDisplay);
    }
    
    //Recherche avec les filtres uniquement
    const searchWithFiltersOnly = () => {
        console.log("2 : Recherche avec les filtres uniquement !");

        //Tableaux contenant les items dans les filtres
        let ingredientsInFilter = [];
        let appliancesInFilter = [];
        let utensilsInFilter = [];
        ingredientsList.innerHTML = '';
        appliancesList.innerHTML = '';
        utensilsList.innerHTML = '';

        //On affiche au départ tous les ingrédients/appareils/ustensiles dans les filtres
        recipes.forEach((recipe) => {
            recipe.ingredients.forEach(({ingredient}) => {
                if(ingredientsInFilter.includes(ingredient) === false) {
                    ingredientsInFilter.push(ingredient);
                    let filterItem = document.createElement('span');
                    filterItem.classList.add('filter-item');
                    filterItem.innerHTML = ingredient;
                    ingredientsList.appendChild(filterItem);
                }
            })
            if (appliancesInFilter.includes(recipe.appliance) === false) {
                appliancesInFilter.push(recipe.appliance);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerHTML = recipe.appliance;
                appliancesList.appendChild(filterItem);
            }
            recipe.utensils.forEach((utensil) => {
                if (utensilsInFilter.includes(utensil) === false) {
                    utensilsInFilter.push(utensil);
                    let filterItem = document.createElement('span');
                    filterItem.classList.add('filter-item');
                    filterItem.innerHTML = utensil;
                    utensilsList.appendChild(filterItem);
                }
            })
        })
    }

    //On appelle une fonction différente selon le cas d'utilisation
    if( (ingredientsFilterInput.value === '' && appliancesFilterInput.value === '' && utensilsFilterInput.value === '') && (searchbarInput.value !== '') ) {
        searchWithSearchbarOnly();
    } else if ((ingredientsFilterInput.value !== '' || appliancesFilterInput.value !== '' || utensilsFilterInput.value !== '') && (searchbarInput.value === '') ) {
        searchWithFiltersOnly();
    }
}

//Afficher les résultats de recherche
const displayResults = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class="card">
                <div class="card-inner bg-light-gray">
                    <div class="card-img-top" style="background: url('https://fakeimg.pl/800x400/C6BEBE/?text=Yummy')">
                    </div>
                    <div class="card-body">
                        <div>
                            <h4 class="card-title">${match.name}</h4>
                            <div class="time">
                                <span class="material-icons material-icons-outlined">access_time</span>
                                <p>${match.time} min</p>
                            </div>
                        </div>
                        <div class="description">
                            <p class="card-text">${match.description.slice(0, 200) + '...'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join(' ');
        matchList.innerHTML = html;
    }
}

//Events listeners
searchbarInput.addEventListener("input", (e) => {
    if(e.target.value.length > 2) {
        search(e);
    } else if (e.target.value.length === 0) {
        console.log("La barre de recherche est vide !");
        search(e);
    }
});
ingredientsFilterInput.addEventListener("input", (e) => {
    search(e);
});
appliancesFilterInput.addEventListener("input", (e) => {
    search(e);
});
utensilsFilterInput.addEventListener("input", (e) => {
    search(e);
});