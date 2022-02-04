import recipes from '../data/recipes.json';

//Éléments du DOM
const search = document.getElementById('search');
const matchList = document.getElementById('results');
const ingredientsFilter = document.querySelector('#ingredients-filter .filter-items');
const utensilsFilter = document.querySelector('#utensils-filter .filter-items');
const appliancesFilter = document.querySelector('#appliances-filter .filter-items');
const ingredientsInput = document.querySelector('#ingredients-filter .ingredients-filter');
const appliancesInput = document.querySelector('#appliances-filter .appliances-filter');
const utensilsInput = document.querySelector('#utensils-filter .utensils-filter');
let tagsWrapper = document.querySelector('.searchbox__tags');

const matchingRecipes = [];
let ingredientsAvailable = [];
let appliancesAvailable = [];
let utensilsAvailable = [];

const matchingIngredients = [];
const matchingUtensils = [];
const matchingAppliances = [];


// FONCTION : filtrer les recettes en fonction de l'input et des filtres appliqués 
const searchRecipes =  input => {

    //Expression régulière
    const regex = new RegExp(`${input}`, 'gi');


    // FILTRE PRINCIPAL : 
    //On crée un tableau 'matches' qui va contenir les recettes filtrées
    let matches = recipes.filter(recipe => {

        let recipeIsMatching = false;

        //L'utilisateur doit taper au moins 3 caractères
        if(input.length >= 3 ) {
            //On recherche dans le nom,
            if(regex.test(recipe.name)) {
                recipeIsMatching = true;
            } 
            //la description,
            else if (regex.test(recipe.description)) {
                recipeIsMatching = true;
            } 
            //et les ingrédients de la recette.
            recipe.ingredients.forEach(({ingredient}) => { 
                if (regex.test(ingredient)) {
                    recipeIsMatching = true;
                }
            })
        }

        return recipeIsMatching;

    });

    //S'il n'y a rien dans la barre de recherche :
    if(input.length === 0) {
        matches = [];
        matchList.innerHTML = '';
        ingredientsAvailable = [];
        ingredientsFilter.innerHTML = '';
        appliancesAvailable = [];
        appliancesFilter.innerHTML = '';
        tagsWrapper.innerHTML = '';
        //On met tous les ingrédients/appareils/ustensiles dans les filtres additionnels
        recipes.forEach((recipe) => {
            recipe.ingredients.forEach(({ingredient}) => {
                if(ingredientsAvailable.includes(ingredient) === false) {
                    ingredientsAvailable.push(ingredient);
                    let ingredientFilter = document.createElement('span');
                    ingredientFilter.classList.add('filter-item');
                    ingredientFilter.innerHTML = ingredient;
                    ingredientsFilter.appendChild(ingredientFilter);
                }
            })
            if (appliancesAvailable.includes(recipe.appliance) === false) {
                appliancesAvailable.push(recipe.appliance);
                let applianceFilter = document.createElement('span');
                applianceFilter.classList.add('filter-item');
                applianceFilter.innerHTML = recipe.appliance;
                appliancesFilter.appendChild(applianceFilter);
            }
            recipe.utensils.forEach((utensil) => {
                if (utensilsAvailable.includes(utensil) === false) {
                    utensilsAvailable.push(utensil);
                    let utensilFilter = document.createElement('span');
                    utensilFilter.classList.add('filter-item');
                    utensilFilter.innerHTML = utensil;
                    utensilsFilter.appendChild(utensilFilter);
                }
            })
        })
    }

    //On affiche les recettes filtrées
    outputHtml(matches);

    //////////////////////////////


    // AFFICHER LES FILTRES ADDITIONNELS 
    matches.forEach((match) => {
        //On affiche que les ingrédients se trouvant dans les recettes qui matchent dans le dropdown : 
        match.ingredients.forEach(({ingredient}) => {
            //On ajoute l'ingrédient à la liste des ingrédients, s'il n'y est pas déjà
            if(ingredientsAvailable.includes(ingredient) === false) {
                ingredientsAvailable.push(ingredient);
                let ingredientFilter = document.createElement('span');
                ingredientFilter.classList.add('filter-item');
                ingredientFilter.innerHTML = ingredient;
                ingredientsFilter.appendChild(ingredientFilter);
            }
        })
        //Idem pour les appareils
        if (appliancesAvailable.includes(match.appliance) === false) {
            appliancesAvailable.push(match.appliance);
            let applianceFilter = document.createElement('span');
            applianceFilter.classList.add('filter-item');
            applianceFilter.innerHTML = match.appliance;
            appliancesFilter.appendChild(applianceFilter);
        }
        //Idem pour les ustensiles 
        match.utensils.forEach((utensil) => {
            if (utensilsAvailable.includes(utensil) === false) {
                utensilsAvailable.push(utensil);
                let utensilFilter = document.createElement('span');
                utensilFilter.classList.add('filter-item');
                utensilFilter.innerHTML = utensil;
                utensilsFilter.appendChild(utensilFilter);
            }
        })
    })
    ////////////////////////////////////////////////////////


    // AJOUT D'UN TAG SANS  RECHERCHE ADDITIONNELLE
    // Ingrédients :
    let ingredientsAvailableDOM = document.querySelectorAll(".container .searchbox .searchbox__filters #ingredients-filter .filter-items .filter-item");
    Array.from(ingredientsAvailableDOM).forEach((ingredientAvailable, index) => {
        ingredientAvailable.addEventListener("click", function() {
            let tagDOM =  `.searchbox__tags .ingredient#tag-${index.toString()}`;
            //Si l'ingrédient n'est pas encore affiché dans les tags
            if (!document.querySelector(tagDOM)) {
                //On crée le tag
                let tag = document.createElement('div');
                tag.classList.add('tag');
                tag.classList.add('bg-blue');
                tag.classList.add('ingredient');
                tag.setAttribute('id', 'tag-'+index.toString());
                tagsWrapper.appendChild(tag);
                //Le nom du tag
                let tagText = document.createElement('p');
                tagText.classList.add('tag-text');
                tagText.innerHTML = ingredientAvailable.innerHTML;
                tag.appendChild(tagText);
                //Et le bouton 'x' pour supprimer le tag
                let icon = document.createElement('span');
                icon.classList.add('tag-icon');
                icon.classList.add('material-icons');
                icon.classList.add('material-icons-outlined');
                icon.innerHTML = 'highlight_off';
                tag.appendChild(icon);
            } else return;
        })
    });
    // Appareils :
    let appliancesAvailableDOM = document.querySelectorAll(".container .searchbox .searchbox__filters #appliances-filter .filter-items .filter-item");
    Array.from(appliancesAvailableDOM).forEach((applianceAvailable, index) => {
        applianceAvailable.addEventListener("click", function() {
            let tagDOM =  `.searchbox__tags .appliance#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) {
                //On crée le tag
                let tag = document.createElement('div');
                tag.classList.add('tag');
                tag.classList.add('bg-green');
                tag.classList.add('appliance');
                tag.setAttribute('id', 'tag-'+index.toString());
                tagsWrapper.appendChild(tag);
                //Le nom du tag
                let tagText = document.createElement('p');
                tagText.classList.add('tag-text');
                tagText.innerHTML = applianceAvailable.innerHTML;
                tag.appendChild(tagText);
                //Et le bouton 'x' pour supprimer le tag
                let icon = document.createElement('span');
                icon.classList.add('tag-icon');
                icon.classList.add('material-icons');
                icon.classList.add('material-icons-outlined');
                icon.innerHTML = 'highlight_off';
                tag.appendChild(icon);
            }
        })
    });
    // Ustensiles :
    let utensilsAvailableDOM = document.querySelectorAll(".container .searchbox .searchbox__filters #utensils-filter .filter-items .filter-item");
    Array.from(utensilsAvailableDOM).forEach((utensilAvailable, index) => {
        utensilAvailable.addEventListener("click", function() {
            let tagDOM =  `.searchbox__tags .utensil#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) {
                //On crée le tag
                let tag = document.createElement('div');
                tag.classList.add('tag');
                tag.classList.add('bg-red');
                tag.classList.add('utensil');
                tag.setAttribute('id', 'tag-'+index.toString());
                tagsWrapper.appendChild(tag);
                //Le nom du tag
                let tagText = document.createElement('p');
                tagText.classList.add('tag-text');
                tagText.innerHTML = utensilAvailable.innerHTML;
                tag.appendChild(tagText);
                //Et le bouton 'x' pour supprimer le tag
                let icon = document.createElement('span');
                icon.classList.add('tag-icon');
                icon.classList.add('material-icons');
                icon.classList.add('material-icons-outlined');
                icon.innerHTML = 'highlight_off';
                tag.appendChild(icon);
            }
        })
    });
    /////////////////////////////////////////////////////////////////////////


    // RECHERCHE DANS LES FILTRES ADDITIONNELS ET AJOUT D'UN TAG
    const searchInIngredientsFilter = ingredientsToFilter => {
        let input = ingredientsInput.value;
        console.log("input : ", input);
        const regex = new RegExp(`${input}`, 'gi');
        ingredientsFilter.innerHTML = '';
        //On tri dans les ingrédients du dropdown
        if (input.length >= 3) {
            let filteredIngredients = ingredientsToFilter.filter(ingredient => {
                if( regex.test(ingredient) ) {
                    ingredientMatches = true;
                    let ingredientFilter = document.createElement('span');
                    ingredientFilter.classList.add('filter-item');
                    ingredientFilter.innerHTML = ingredient;
                    ingredientsFilter.appendChild(ingredientFilter);
                } else {
                    ingredientMatches  = false;
                }
                return ingredientMatches;
            })
        }
        let newIngredients = Array.from(document.querySelectorAll("#ingredients-filter .filter-items .filter-item"));
        newIngredients.forEach((newIngredient, index) => {
            //Au click sur un ingrédient, celui-ci est ajouté aux tags :
            newIngredient.addEventListener("click", function() {
                let tagDOM =  `.searchbox__tags .ingredient#tag-${index.toString()}`;
                if (!document.querySelector(tagDOM)) {
                    //On crée le tag
                    let tag = document.createElement('div');
                    tag.classList.add('tag');
                    tag.classList.add('bg-blue');
                    tag.classList.add('ingredient');
                    tag.setAttribute('id', 'tag-'+index.toString());
                    tagsWrapper.appendChild(tag);
                    //Le nom du tag
                    let tagText = document.createElement('p');
                    tagText.classList.add('tag-text');
                    tagText.innerHTML = newIngredient.innerHTML;
                    tag.appendChild(tagText);
                    //Et le bouton 'x' pour supprimer le tag
                    let icon = document.createElement('span');
                    icon.classList.add('tag-icon');
                    icon.classList.add('material-icons');
                    icon.classList.add('material-icons-outlined');
                    icon.innerHTML = 'highlight_off';
                    tag.appendChild(icon);
                    //On refiltre les recettes, elles doivent correspondre au tag ajouté
                    let doubleMatches = matches.filter(match => {
                        let isMatching = false;
                        match.ingredients.forEach(({ingredient}) => {
                            console.log('ingredient ' ,ingredient);
                            console.log('new ingredient ', newIngredient.textContent);
                            if(ingredient === newIngredient.textContent) {
                                isMatching = true;
                            }
                        })
                        return isMatching;
                    })
                    console.log("double matches : ", doubleMatches);
                }
            })
        })
    } 
    
    // Appareils :
    appliancesInput.addEventListener("input", function () {
        let input = appliancesInput.value;
        const regex = new RegExp(`${input}`, 'gi');
        appliancesFilter.innerHTML = '';
        //On tri dans les appareils du dropdown
        if (input.length >= 3) {
            let filteredAppliances = appliancesAvailable.filter(appliance => {
                let applianceMatches = false;
                if( regex.test(appliance) ) {
                    applianceMatches = true;
                    let applianceFilter = document.createElement('span');
                    applianceFilter.classList.add('filter-item');
                    applianceFilter.innerHTML = appliance;
                    appliancesFilter.appendChild(applianceFilter);
                } else {
                    applianceMatches  = false;
                }
                return applianceMatches;
            })
        }
        let newAppliances = Array.from(document.querySelectorAll("#appliances-filter .filter-items .filter-item"));
        newAppliances.forEach((newAppliance, index) => {
            newAppliance.addEventListener("click", function() {
                let tagDOM =  `.searchbox__tags .appliance#tag-${index.toString()}`;
                if (!document.querySelector(tagDOM)) {
                    //On crée le tag
                    let tag = document.createElement('div');
                    tag.classList.add('tag');
                    tag.classList.add('bg-green');
                    tag.classList.add('appliance');
                    tag.setAttribute('id', 'tag-'+index.toString());
                    tagsWrapper.appendChild(tag);
                    //Le nom du tag
                    let tagText = document.createElement('p');
                    tagText.classList.add('tag-text');
                    tagText.innerHTML = newAppliance.innerHTML;
                    tag.appendChild(tagText);
                    //Et le bouton 'x' pour supprimer le tag
                    let icon = document.createElement('span');
                    icon.classList.add('tag-icon');
                    icon.classList.add('material-icons');
                    icon.classList.add('material-icons-outlined');
                    icon.innerHTML = 'highlight_off';
                    tag.appendChild(icon);
                }
            })
        })
    })
    // Ustensiles :
    utensilsInput.addEventListener("input", function () {
        let input = utensilsInput.value;
        const regex = new RegExp(`${input}`, 'gi');
        utensilsFilter.innerHTML = '';
        //On tri dans les appareils du dropdown
        if (input.length >= 3) {
            let filteredUtensils = utensilsAvailable.filter(appliance => {
                let applianceMatches = false;
                if( regex.test(appliance) ) {
                    applianceMatches = true;
                    let applianceFilter = document.createElement('span');
                    applianceFilter.classList.add('filter-item');
                    applianceFilter.innerHTML = appliance;
                    utensilsFilter.appendChild(applianceFilter);
                } else {
                    utensilsMatches  = false;
                }
                return utensilsMatches;
            })
        }
        let newUtensils = Array.from(document.querySelectorAll("#utensils-filter .filter-items .filter-item"));
        newUtensils.forEach((newUtensil, index) => {
            newUtensil.addEventListener("click", function() {
                let tagDOM =  `.searchbox__tags .utensil#tag-${index.toString()}`;
                if (!document.querySelector(tagDOM)) {
                    //On crée le tag
                    let tag = document.createElement('div');
                    tag.classList.add('tag');
                    tag.classList.add('bg-red');
                    tag.classList.add('utensil');
                    tag.setAttribute('id', 'tag-'+index.toString());
                    tagsWrapper.appendChild(tag);
                    //Le nom du tag
                    let tagText = document.createElement('p');
                    tagText.classList.add('tag-text');
                    tagText.innerHTML = newUtensil.innerHTML;
                    tag.appendChild(tagText);
                    //Et le bouton 'x' pour supprimer le tag
                    let icon = document.createElement('span');
                    icon.classList.add('tag-icon');
                    icon.classList.add('material-icons');
                    icon.classList.add('material-icons-outlined');
                    icon.innerHTML = 'highlight_off';
                    tag.appendChild(icon);
                }
            })
        })
    })
    //////////////////////////////////////////////////////////////////
    if(input.length !== 0) {
        ingredientsInput.addEventListener("input", searchInIngredientsFilter(ingredientsAvailable));
    }

}
/////////////////////////////////////////////////////////////////////////////////////////////////


// FONCTION : Afficher les recettes filtrées sur la page
const outputHtml = matches => {
    if(matches.length > 0) {
        //Pour chaque recette match, on affiche une card Bootstrap
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
///////////////////////////////////////////////////////////////////

//On lance la recherche dès que quelqu'un écrit dans la barre de recherche
search.addEventListener('input', (e) => {
   /*  if(e.target.value === '' && additionnalFilters) {
        searchRecipesWithoutsearchbar();
    }
    //Si l'utilisateur a tapé quelque chose dans la barre de recherche
    else  */searchRecipes(search.value);
})

if(search.value === '') {
    console.log("Démarrage");
    //Mettre des eventListenners sur les 3 filtres additionnels
}