import recipes from '../data/recipes.json';

//Éléments du DOM
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
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

//FONCTION : filtrer les recettes en fonction de l'input et des filtres appliqués 
const searchRecipes =  input => {

    //Expression régulière
    const regex = new RegExp(`${input}`, 'gi');

    /*recipes.forEach((recipe) => {

        ingredientsInput.addEventListener('input', () => searchIngredients(ingredientsInput.value));
        const searchIngredients = input => {
            //Expression régulière
            const regex = new RegExp(`${input}`, 'gi');
            recipe.ingredients.forEach(({ingredient}) => {
                if (regex.test(ingredient)) {
                    console.log('');
                }
            })
        }

        //Pour chaque ustensile
        recipe.utensils.forEach((utensil) => {
            if(!matchingUtensils.includes(utensil)) {
                matchingUtensils.push(utensil);
            }
            console.log('utensil : ',utensil);
            //On ajoute l'ustensile à la liste des ustensiles, s'il n'y est pas déjà
            let utensilFilter = document.createElement('span');
            utensilFilter.classList.add('filter-item');
            utensilFilter.innerHTML = utensil;
            utensilsFilter.appendChild(utensilFilter);
            console.log('utensil : ', utensilFilter); 
        })
        //On ajoute l'appareil utilisé à la liste des appareils, s'il n'y est pas déjà
        if(!matchingAppliances.includes(recipe.appliance)) {
            matchingAppliances.push(recipe.appliance);
        }

    })*/

    //FILTRE PRINCIPAL : 

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

    //S'il n'y a rien dans la barre de recherche, on affiche rien dans les résultats de recherche.
    if(input.length === 0) {
        matches = [];
        matchList.innerHTML = '';
        ingredientsAvailable = [];
        ingredientsFilter.innerHTML = '';
        appliancesAvailable = [];
        appliancesFilter.innerHTML = '';
    }

    //On affiche les recettes filtrées
    outputHtml(matches);

    //FILTRES ADDITIONNELS 

    matches.forEach((match) => {

        //On affiche que les ingrédients se trouvant dans les recettes qui matchent : 
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
    //Afficher les ingrédients non filtrés sous forme de tags
    let ingredientsAvailableDOM = document.querySelectorAll(".container .searchbox .searchbox__filters #ingredients-filter .filter-items .filter-item");
    Array.from(ingredientsAvailableDOM).forEach((ingredientAvailable, index) => {
        ingredientAvailable.addEventListener("click", function() {
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
                tagText.innerHTML = ingredientAvailable.innerHTML;
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

    //Afficher les appareils non filtrés sous forme de tags
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

    //Afficher les ustensiles non filtrés sous forme de tags
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

    //Recherche dans les ingrédients
    ingredientsInput.addEventListener("input", function() {
        let input = ingredientsInput.value;
        const regex = new RegExp(`${input}`, 'gi');
        ingredientsFilter.innerHTML = '';
        //On tri dans les ingrédients du dropdown
        if (input.length >= 3) {
            let filteredIngredients = ingredientsAvailable.filter(ingredient => {
                if( regex.test(ingredient) ) {
                    ingredientMatches = true;
                    console.log('ingredient matches : ', ingredient);
                    let ingredientFilter = document.createElement('span');
                    ingredientFilter.classList.add('filter-item');
                    ingredientFilter.innerHTML = ingredient;
                    ingredientsFilter.appendChild(ingredientFilter);
                } else {
                    ingredientMatches  = false;
                }
                return ingredientMatches;
            })
            console.log('ingredients filtered : ', filteredIngredients);
        }
        let newIngredients = Array.from(document.querySelectorAll("#ingredients-filter .filter-items .filter-item"));
        newIngredients.forEach((newIngredient, index) => {
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
                }
            })
        })
    });

    //Recherche dans les appareils
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
            console.log('appliances filtered : ', filteredAppliances);
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
    //Recherche dans les ustensiles
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
            console.log('utensils filtered : ', filteredUtensils);
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
}

//FONCTION : Afficher les recettes filtrées sur la page
const outputHtml = matches => {
    if(matches.length > 0) {
        //Pour chaque recette match, on affiche une card Bootstrap
        const html = matches.map(match => `
            <div class="card">
                <div class="card-inner bg-light-gray">
                    <div class="card-img-top">
                        <img src="https://res.cloudinary.com/tf-lab/image/upload/restaurant/c7ab19e8-630a-4f43-9edf-50389e9cfb93/e1c10c3e-d701-4795-8712-8590aaffe590.jpg" />
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

//On lance la recherche dès que quelqu'un écrit dans la barre de recherche
search.addEventListener('input', () => searchRecipes(search.value));