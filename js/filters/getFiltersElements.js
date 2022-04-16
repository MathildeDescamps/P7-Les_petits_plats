//FONCTION : On récupère tous les ingrédients/appareils/ustensiles présent dans les filtres
const getFiltersElements = () => {

    ingredientsInFilter = [];
    appliancesInFilter = [];
    utensilsInFilter = [];

    ingredientsInFilterDOM = Array.from(document.querySelectorAll(".searchbox #ingredients-filter .filter-items .filter-item"));
    for(i=0; i<ingredientsInFilterDOM.length; i++) {
        ingredientsInFilter.push(ingredientsInFilterDOM[i].innerText);
    }

    appliancesInFilterDOM = Array.from(document.querySelectorAll(".searchbox #appliances-filter .filter-items .filter-item"));
    for(i=0; i<appliancesInFilterDOM.length; i++) {
        appliancesInFilter.push(appliancesInFilterDOM[i].innerText);
    }

    utensilsInFilterDOM = Array.from(document.querySelectorAll(".searchbox #utensils-filter .filter-items .filter-item"));
    for(i=0; i<utensilsInFilterDOM.length; i++) {
        utensilsInFilter.push(utensilsInFilterDOM[i].innerText);
    }

}

export default getFiltersElements;