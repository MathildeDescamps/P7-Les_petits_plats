import addTag from "../tags/addTag.js";

//FONCTION : On met tous les ingrédients/appareils/ustensiles dans les filtres
const fillTheFilters = (recipes) => {

    //On récupère le contenu des filtres
    let ingredientsList = document.querySelector(".searchbox #ingredients-filter .filter-items");
    let appliancesList = document.querySelector(".searchbox #appliances-filter .filter-items");
    let utensilsList = document.querySelector(".searchbox #utensils-filter .filter-items");

    //Tableaux contenant les items dans les filtres
    let ingredientsInFilter = [];
    let appliancesInFilter = [];
    let utensilsInFilter = [];

    ingredientsList.innerHTML = "";
    appliancesList.innerHTML = "";
    utensilsList.innerHTML = "";

    //On crée les éléments HTML
    recipes.forEach((recipe) => {
        //ingrédients
        recipe.ingredients.forEach(({ingredient}) => {
            if(ingredientsInFilter.includes(ingredient) === false) {
                ingredientsInFilter.push(ingredient);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = ingredient;
                ingredientsList.appendChild(filterItem);
            }
        })
        //appareils
        if (appliancesInFilter.includes(recipe.appliance) === false) {
            appliancesInFilter.push(recipe.appliance);
            let filterItem = document.createElement('span');
            filterItem.classList.add('filter-item');
            filterItem.innerText = recipe.appliance;
            appliancesList.appendChild(filterItem);
        }
        //ustensiles
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

    //On récupère le contenu HTML des filtres
    let ingredientsInFilterDOM = Array.from(document.querySelectorAll(".searchbox__filters #ingredients-filter .filter-items .filter-item"));
    let appliancesInFilterDOM = Array.from(document.querySelectorAll(".searchbox__filters #appliances-filter .filter-items .filter-item"));
    let utensilsInFilterDOM = Array.from(document.querySelectorAll(".searchbox__filters #utensils-filter .filter-items .filter-item"));
    
    //Pour les tags ingrédient
    ingredientsInFilterDOM.forEach((ingredientDOM, index) => {
        ingredientDOM.addEventListener('click', function () {
            let tagDOM =  `.searchbox__tags .ingredient#tag-${index.toString()}`;
            //Si l'ingrédient n'est pas encore affiché dans les tags
            if (!document.querySelector(tagDOM)) {
                addTag('ingredient', ingredientDOM.innerText, index);
            } else return;
        })
    })
    //Pour les tags appareil
    appliancesInFilterDOM.forEach((applianceDOM, index) => {
        applianceDOM.addEventListener('click', function() {
            let tagDOM =  `.searchbox__tags .appliance#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) {
                addTag('appliance', applianceDOM.innerText, index);
            }
        })
    })
    //Pour les tags ustensile
    utensilsInFilterDOM.forEach((utensilDOM, index) => {
        utensilDOM.addEventListener('click', function() {
            let tagDOM =  `.searchbox__tags .utensil#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) {
                addTag('utensil', utensilDOM.innerText, index);
            }
        })
    })
};

export default fillTheFilters; 