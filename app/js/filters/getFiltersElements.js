//FONCTION : On récupère tous les ingrédients/appareils/ustensiles présent dans les filtres
const getFiltersElements = () => {
    ingredientsInFilter = [];
    appliancesInFilter = [];
    utensilsInFilter = [];
    ingredientsInFilterDOM = Array.from(document.querySelectorAll(".searchbox #ingredients-filter .filter-items .filter-item"));
    ingredientsInFilter = ingredientsInFilterDOM.map((ingredientInFilter) => {
        return ingredientInFilter.innerText;
    });
    appliancesInFilterDOM = Array.from(document.querySelectorAll(".searchbox #appliances-filter .filter-items .filter-item"));
    appliancesInFilter = appliancesInFilterDOM.map((applianceInFilter) => {
        return applianceInFilter.innerText;
    });
    utensilsInFilterDOM = Array.from(document.querySelectorAll(".searchbox #utensils-filter .filter-items .filter-item"));
    utensilsInFilter = utensilsInFilterDOM.map((utensilInFilter) => {
        return utensilInFilter.innerText;
    });
}

export default getFiltersElements;