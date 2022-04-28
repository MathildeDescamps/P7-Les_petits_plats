import getFiltersElements from "./getFiltersElements.js";

const searchInAppliances = (input)  => {
    const regex = new RegExp(`${input}`, 'gi');
    getFiltersElements();
    appliancesInFilterDOM.forEach(appliance => {
        if (regex.test(appliance.innerText) === false) {
            appliance.style.display = "none";
        } else {
            appliance.style.display = "block";
        }
    }); 
}

export default searchInAppliances;