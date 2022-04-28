import addTag from "../tags/addTag";

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
    for(let i=0; i<recipes.length; i++) {
        //ingrédients
        for(let j=0; j<recipes[i].ingredients.length; j++) {
            if(ingredientsInFilter.includes(recipes[i].ingredients[j].ingredient) === false) {
                ingredientsInFilter.push(recipes[i].ingredients[j].ingredient);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipes[i].ingredients[j].ingredient;
                ingredientsList.appendChild(filterItem);
            }
        }
        //appareils
        if (appliancesInFilter.includes(recipes[i].appliance) === false) {
            appliancesInFilter.push(recipes[i].appliance);
            let filterItem = document.createElement('span');
            filterItem.classList.add('filter-item');
            filterItem.innerText = recipes[i].appliance;
            appliancesList.appendChild(filterItem);
        }
        //ustensiles
        for(let j=0; j<recipes[i].utensils.length; j++) {
            if (utensilsInFilter.includes(recipes[i].utensils[j]) === false) {
                utensilsInFilter.push(recipes[i].utensils[j]);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipes[i].utensils[j];
                utensilsList.appendChild(filterItem);
            }
        }
    }

    //On récupère le contenu HTML des filtres
    ingredientsInFilterDOM = Array.from(document.querySelectorAll(".searchbox__filters #ingredients-filter .filter-items .filter-item"));
    appliancesInFilterDOM = Array.from(document.querySelectorAll(".searchbox__filters #appliances-filter .filter-items .filter-item"));
    utensilsInFilterDOM = Array.from(document.querySelectorAll(".searchbox__filters #utensils-filter .filter-items .filter-item"));
    
    //Pour les tags ingrédient
    for(let i=0; i<ingredientsInFilterDOM.length; i++) {
        ingredientsInFilterDOM[i].addEventListener('click', function (e) {
            let tagDOM =  `.searchbox__tags .ingredient#tag-${i.toString()}`;
            //Si l'ingrédient n'est pas encore affiché dans les tags
            if (!document.querySelector(tagDOM)) {
                addTag('ingredient', e.target.innerText, i);
            }
        })
    }
    //Pour les tags appareil
    for(let i=0; i<appliancesInFilterDOM.length; i++) {
        appliancesInFilterDOM[i].addEventListener('click', function(e) {
            let tagDOM =  `.searchbox__tags .appliance#tag-${i.toString()}`;
            if (!document.querySelector(tagDOM)) {
                addTag('appliance', e.target.innerText, i);
            }
        })
    }
    //Pour les tags ustensile
    for(let i=0; i<utensilsInFilterDOM.length; i++) {
        utensilsInFilterDOM[i].addEventListener('click', function(e) {
            let tagDOM =  `.searchbox__tags .utensil#tag-${i.toString()}`;
            if (!document.querySelector(tagDOM)) {
                addTag('utensil', e.target.innerText, i);
            }
        })
    }
};

export default fillTheFilters; 