import fillTheFilters from "../filters/fillTheFilters";

//Filtrer les recettes avec les tags
const filterWithTags = (recipesToFilter) => {

    //On récupère les tags et on les stock dans des tableaux
    taggedIngredientsDOM = Array.from(document.querySelectorAll('.searchbox__tags .ingredient-tags .tag .tag-text'));
    taggedAppliancesDOM = Array.from(document.querySelectorAll('.searchbox__tags .appliance-tags .tag .tag-text'));
    taggedUtensilsDOM = Array.from(document.querySelectorAll('.searchbox__tags .utensil-tags .tag .tag-text'));
    let taggedIngredients = [];
    let taggedAppliances = [];
    let taggedUtensils = [];
    const recipesToDisplay = [];

    for(i=0; i<taggedIngredientsDOM.length; i++) {
        taggedIngredients.push(taggedIngredientsDOM[i].innerText);
    }
    for(i=0; i<taggedAppliancesDOM.length; i++) {
        taggedAppliances.push(taggedAppliancesDOM[i].innerText);
    }
    for(i=0; i<taggedUtensilsDOM.length; i++) {
        taggedUtensils.push(taggedUtensilsDOM[i].innerText);
    }

    //On filtres les recettes avec les tags
    for(i=0; i<recipesToFilter.length; i++) {
        let recipeIsMatching = false;
        let ingredientIsMatching = false;
        let applianceIsMatching = false;
        let utensilIsMatching = false;
        let ingredientsMatching = 0;
        let appliancesMatching = 0;
        let utensilsMatching = 0;
        let ingredientsInTheRecipe = [];
        let appliancesInTheRecipe = [];
        let utensilsInTheRecipe = [];

        //On récupère les ingrédient de la recette
        for(j=0; j<recipesToFilter[i].ingredients.length; j++) {
            ingredientsInTheRecipe.push(recipesToFilter[i].ingredients[j].ingredient);
        }
        //On récupère l'appareil de la recette
        appliancesInTheRecipe.push(recipesToFilter[i].appliance);

        //On récupère tous les ustensiles de la recette
        for(j=0; j<recipesToFilter[i].utensils.length; j++) {
            utensilsInTheRecipe.push(recipesToFilter[i].utensils[j]);
        }

        //S'il y a au moins 1 tag ingrédient, on vérifie que cet (ou ces) ingrédient(s) est (ou sont) dans la recette
        if(taggedIngredients.length > 0) {
            for(j=0; j<taggedIngredients.length; j++) {
                if(ingredientsInTheRecipe.includes(taggedIngredients[j])){
                    ingredientsMatching++;
                }
            }
        }
        //Idem pour les appareils
        if(taggedAppliances.length > 0){
            for(j=0; j<taggedAppliances.length; j++) {
                if(appliancesInTheRecipe.includes(taggedAppliances[j])) {
                    appliancesMatching++;
                }
            }
        }
        //Idem pour les ustensiles
        if(taggedUtensils.length > 0) {
            for(j=0; j<taggedUtensils.length; j++) {
                if(utensilsInTheRecipe.includes(taggedUtensils[j])){
                    utensilsMatching++;
                }
            }
        }

        //Est-ce que la recette contient tous les ingrédients tagués ?
        if(ingredientsMatching === taggedIngredients.length) {
            ingredientIsMatching = true;
        }
        //Est-ce que la recette contient l'un des appareils tagués ?
        if(taggedAppliances.length > 0) {
            if(appliancesMatching > 0){
                applianceIsMatching = true;
            }
        } else applianceIsMatching = true;
        //Est-ce que la recette contient tous les ustensiles tagués ?
        if(utensilsMatching === taggedUtensils.length) {
            utensilIsMatching = true;
        }

        //Si la recette correspond aux tags, alors c'est un match.
        if((ingredientIsMatching === true) && (applianceIsMatching === true) && (utensilIsMatching === true)) {
            recipeIsMatching = true;
        }
        if(recipeIsMatching === true) {
            recipesToDisplay.push(recipesToFilter[i]);
        }
    }

    fillTheFilters(recipesToDisplay);
    return recipesToDisplay;

};

export default filterWithTags;