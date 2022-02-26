import displayResults from "../results/displayResults";

//Filtrer les recettes avec les tags
const filterWithTags = (recipesToFilter) => {
    //On récupère les tags
    taggedIngredientsDOM = Array.from(document.querySelectorAll('.searchbox__tags .ingredient-tags .tag .tag-text'));
    taggedAppliancesDOM = Array.from(document.querySelectorAll('.searchbox__tags .appliance-tags .tag .tag-text'));
    taggedUtensilsDOM = Array.from(document.querySelectorAll('.searchbox__tags .utensil-tags .tag .tag-text'));
    let taggedIngredients = [];
    let taggedAppliances = [];
    let taggedUtensils = [];
    taggedIngredientsDOM.forEach((taggedIngredient) => {
        taggedIngredients.push(taggedIngredient.innerText);
    })
    taggedAppliancesDOM.forEach((taggedAppliance) => {
        taggedAppliances.push(taggedAppliance.innerText);
    })
    taggedUtensilsDOM.forEach((taggedUtensil) => {
        taggedUtensils.push(taggedUtensil.innerText);
    })
    console.log("tagged ingredient : ", taggedIngredients);
    //On filtres les recettes d'après les tags
    let matches = recipesToFilter.filter(recipe => {
        let recipeIsMatching = false;
        let ingredientIsMatching = false;
        let applianceIsMatching = false;
        let utensilIsMatching = false;
        let ingredientsMatching = 0;
        let appliancesMatching = 0;
        let utensilsMatching = 0;
        let ingredientsInTheRecipe = [];
        let applianceInTheRecipe = [];
        let utensilsInTheRecipe = [];
        ingredientsInTheRecipe = recipe.ingredients.map(({ingredient}) => {
            return ingredient;
        })
        console.log(ingredientsInTheRecipe);
        //On récupère l'appareil de la recette
        applianceInTheRecipe.push(recipe.appliance);
        //On récupère tous les ustensiles de la recette
        utensilsInTheRecipe = recipe.utensils.map((utensil) => {
            return utensil;
        })
        console.log("Recipe : ");
        //On filtre par ingrédient
        console.log("Ingredients correspondants : ")
        if(taggedIngredients.length > 0) {
            taggedIngredients.forEach((taggedIngredient) => {
                if(ingredientsInTheRecipe.includes(taggedIngredient)){
                    console.log("La recette contient le tag : ", taggedIngredient);
                    ingredientsMatching++;
                }
            })
        }
        //On filtre par appareil
        console.log("Appareils correspondants : ");
        if(taggedAppliances.length > 0){
            taggedAppliances.forEach((taggedAppliance) => {
                if(applianceInTheRecipe.includes(taggedAppliance)) {
                    console.log("La recette contient le tag : ", taggedAppliance);
                    appliancesMatching++;
                }
            })
        }
        //On filtre par ustensiles
        console.log("Ustensiles correspondants : ")
        if(taggedUtensils.length > 0) {
            taggedUtensils.forEach((taggedUtensil) => {
                if(utensilsInTheRecipe.includes(taggedUtensil)){
                    console.log("La recette contient le tag : ", taggedUtensil);
                    utensilsMatching++;
                }
            })
        }

        //Si tous les tags correspondent à la recette, alors on doit l'afficher
        if(ingredientsMatching === taggedIngredients.length) {
            ingredientIsMatching = true;
        }
        if(taggedAppliances.length > 0) {
            if(appliancesMatching > 0){
                applianceIsMatching = true;
            }
        }
        if(utensilsMatching === taggedUtensils.length) {
            utensilIsMatching = true;
        }
        if(ingredientIsMatching === true && applianceIsMatching === true && utensilIsMatching === true) {
            recipeIsMatching = true;
        }
        return recipeIsMatching;
    })
    displayResults(matches);
}
export default filterWithTags;