import getFiltersElements from "./getFiltersElements";

const searchInAppliances = (input)  => {
    const regex = new RegExp(`${input}`, 'gi');
    getFiltersElements();
    for(let i=0; i<appliancesInFilterDOM.length; i++) {
        if (regex.test(appliancesInFilterDOM[i].innerText) === false) {
            appliancesInFilterDOM[i].style.display = "none";
        } else {
            appliancesInFilterDOM[i].style.display = "block";
        }
    }
}

export default searchInAppliances;