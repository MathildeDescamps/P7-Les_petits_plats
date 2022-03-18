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
    recipesToDisplay = recipesToFilter.filter(recipe => {

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
        for(i=0; i<recipe.ingredients.length; i++) {
            ingredientsInTheRecipe.push(recipe.ingredients[i].ingredient);
        }
        //On récupère l'appareil de la recette
        appliancesInTheRecipe.push(recipe.appliance);

        //On récupère tous les ustensiles de la recette
        for(i=0; i<recipe.utensils.length; i++) {
            utensilsInTheRecipe.push(recipe.utensils[i]);
        }

        //S'il y a au moins 1 tag ingrédient, on vérifie que cet (ou ces) ingrédient(s) est (ou sont) dans la recette
        if(taggedIngredients.length > 0) {
            for(i=0; i<taggedIngredients.length; i++) {
                if(ingredientsInTheRecipe.includes(taggedIngredients[i])){
                    ingredientsMatching++;
                }
            }
        }
        //Idem pour les appareils
        if(taggedAppliances.length > 0){
            for(i=0; i<taggedAppliances.length; i++) {
                if(appliancesInTheRecipe.includes(taggedAppliances[i])) {
                    appliancesMatching++;
                }
            }
        }
        //Idem pour les ustensiles
        if(taggedUtensils.length > 0) {
            for(i=0; i<taggedUtensils.length; i++) {
                if(utensilsInTheRecipe.includes(taggedUtensils[i])){
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
        return recipeIsMatching;
    });

    fillTheFilters(recipesToDisplay);
    return recipesToDisplay;

};

export default filterWithTags;