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
    taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => {
        return taggedIngredient.innerText;
    })
    taggedAppliances = taggedAppliancesDOM.map((taggedAppliance) => {
        return taggedAppliance.innerText;
    })
    taggedUtensils = taggedUtensilsDOM.map((taggedUtensil) => {
        return taggedUtensil.innerText;
    })

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
        ingredientsInTheRecipe = recipe.ingredients.map(({ingredient}) => {
            return ingredient;
        })
        //On récupère l'appareil de la recette
        appliancesInTheRecipe.push(recipe.appliance);

        //On récupère tous les ustensiles de la recette
        utensilsInTheRecipe = recipe.utensils.map((utensil) => {
            return utensil;
        })

        //S'il y a au moins 1 tag ingrédient, on vérifie que cet (ou ces) ingrédient(s) est (ou sont) dans la recette
        if(taggedIngredients.length > 0) {
            taggedIngredients.forEach((taggedIngredient) => {
                if(ingredientsInTheRecipe.includes(taggedIngredient)){
                    ingredientsMatching++;
                }
            })
        }
        //Idem pour les appareils
        if(taggedAppliances.length > 0){
            taggedAppliances.forEach((taggedAppliance) => {
                if(appliancesInTheRecipe.includes(taggedAppliance)) {
                    appliancesMatching++;
                }
            })
        }
        //Idem pour les ustensiles
        if(taggedUtensils.length > 0) {
            taggedUtensils.forEach((taggedUtensil) => {
                if(utensilsInTheRecipe.includes(taggedUtensil)){
                    utensilsMatching++;
                }
            })
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