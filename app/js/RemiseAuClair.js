import recipes from '../data/recipes.json';

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
//Les tags wrappers
let ingredientTagsWrapper = document.querySelector('.searchbox__tags .ingredient-tags');
let applianceTagsWrapper = document.querySelector('.searchbox__tags .appliance-tags');
let utensilTagsWrapper = document.querySelector('.searchbox__tags .utensil-tags');
//Les tags
let taggedIngredients = [];
let taggedAppliances = [];
let taggedUtensils = [];
//La section où l'on va afficher les résultats de recherche
const matchList = document.getElementById('results');

////        VARIABLES       ////
//Tableaux contenant les items dans les filtres
let ingredientsInFilter = [];
let appliancesInFilter = [];
let utensilsInFilter = [];

////        FUNCTIONS       ////
//Afficher les résultats de la (ou les) recherche(s)
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
    } else {
        matchList.innerHTML = '';
    }
}
// 0 : Pas de recherche, mais on peut ajouter et supprimer des tags
const noSearchButTags = () => {
    //On met tous les ingrédients/appareils/ustensiles dans les filtres
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
    //On affiche rien dans les résultats
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
                addTag(recipes, 'ingredient', ingredientDOM.innerText, index);
            } else return;
        })
    })
    //Pour les tags appareil
    appliancesInFilterDOM.forEach((applianceDOM, index) => {
        applianceDOM.addEventListener('click', function() {
            let tagDOM =  `.searchbox__tags .appliance#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) {
                addTag(recipes, 'appliance', applianceDOM.innerText, index);
            }
        })
    })
    //Pour les tags ustensile
    utensilsInFilterDOM.forEach((utensilDOM, index) => {
        utensilDOM.addEventListener('click', function() {
            let tagDOM =  `.searchbox__tags .utensil#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) {
                addTag(recipes, 'utensil', utensilDOM.innerText, index);
            }
        })
    })
}
const filterWithTags = (recipesToFilter) => {
    //On récupère les tags
    taggedIngredients = Array.from(document.querySelectorAll('.searchbox__tags .ingredient-tags .tag .tag-text'));
    taggedAppliances = Array.from(document.querySelectorAll('.searchbox__tags .appliance-tags .tag .tag-text'));
    taggedUtensils = Array.from(document.querySelectorAll('.searchbox__tags .utensil-tags .tag .tag-text'));
    console.log("1) ingrédients :")
    taggedIngredients.forEach((taggedIngredient) => {
        console.log(" -  ", taggedIngredient.innerText);
    });
    console.log("2) appareils :")
    taggedAppliances.forEach((taggedAppliance) => {
        console.log(" -  ", taggedAppliance.innerText);
    });
    console.log("3) ustensiles :")
    taggedUtensils.forEach((taggedUtensil) => {
        console.log(" -  ", taggedUtensil.innerText);
    });
}
//Supprimer un tag
const deleteTag = (e, recipesToFilter) => {
    console.log("Tag a supprimer : ", e.target.parentElement);
    e.target.parentElement.remove();
    filterWithTags(recipesToFilter);
}
//Ajouter un tag
const addTag = (recipesToFilter, filterCategory, text, index) => {
    //On crée le tag
    let tag = document.createElement('div');
    tag.classList.add('tag');
    if(filterCategory === 'ingredient') {
        tag.classList.add('bg-blue');
        tag.classList.add('ingredient');
        ingredientTagsWrapper.appendChild(tag);
    } else if (filterCategory === 'utensil') {
        tag.classList.add('bg-red');
        tag.classList.add('utensil');
        utensilTagsWrapper.appendChild(tag);
    } else if (filterCategory === 'appliance') {
        tag.classList.add('bg-green');
        tag.classList.add('appliance');
        applianceTagsWrapper.appendChild(tag);
    }
    tag.setAttribute('id', 'tag-'+index.toString());
    //Le nom du tag
    let tagText = document.createElement('p');
    tagText.classList.add('tag-text');
    tagText.innerText = text;
    tag.appendChild(tagText);
    //Et le bouton 'x' pour supprimer le tag
    let icon = document.createElement('span');
    icon.classList.add('tag-icon');
    icon.classList.add('material-icons');
    icon.classList.add('material-icons-outlined');
    icon.innerText = 'highlight_off';
    tag.appendChild(icon);
    icon.addEventListener("click", deleteTag(event, recipesToFilter));

    //On refiltre les résultats selon le tag ajouté
    filterWithTags(recipesToFilter);
}
//Au lancement de l'appli, on est dans le cas 0, donc on lance la fonction correspondante
noSearchButTags();
//A partir du moment où l'utilisateur tape quelque chose dans un des inputs, on passe dans le cas 1, 2 ou 3
const search = (e) => {
    // 1 : Recherche dans la barre de recherche uniquement
    const searchWithSearchbarOnly = () => {
        console.log("1 : Recherche avec barre de recherche uniquement !");

        //On vide la liste des ingrédients/appareils/ustensiles des filtres car ils vont être mis à jour pour correspondre aux recettes filtrées
        ingredientsInFilter = [];
        appliancesInFilter = [];
        utensilsInFilter = [];
        ingredientsList.innerHTML = '';
        appliancesList.innerHTML = '';
        utensilsList.innerHTML = '';

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
        recipesToDisplay.forEach((recipe) => {
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
    }
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

    //On appelle une fonction différente pour chaque cas d'utilisation
    // 0 : L'utilisateur efface tous les inputs
    if( (ingredientsFilterInput.value === '' && appliancesFilterInput.value === '' && utensilsFilterInput.value === '') && (searchbarInput.value === '') ) {
        noSearchButTags();
    }
    // 1 : L'utilisateur n'utilise que la barre de recherche
    else if( (ingredientsFilterInput.value === '' && appliancesFilterInput.value === '' && utensilsFilterInput.value === '') && (searchbarInput.value !== '') ) {
        if(searchbarInput.value.length > 2) {
            searchWithSearchbarOnly();
        }
    }
    // 2 : L'utilisateur n'utilise que les filtres
    else if ((ingredientsFilterInput.value !== '' || appliancesFilterInput.value !== '' || utensilsFilterInput.value !== '') && (searchbarInput.value === '') ) {
        searchWithFiltersOnly();
    }
    // 3 : L'utilisateur utilise la barre de recherche et les filtres
    else if ( (ingredientsFilterInput.value !== '' || appliancesFilterInput.value !== '' || utensilsFilterInput.value !== '') && (searchbarInput.value !== '') ) {
        searchWithSearchbarAndFilters();
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