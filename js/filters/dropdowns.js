const dropdowns = () => {
    let dropdowns = document.querySelectorAll(".searchbox__filters .filter");
    const openOrCloseFilter = (e, childNodes) => {
        for(l=0; l<childNodes.length; l++) {
            if(childNodes[l].classList && childNodes[l].classList.contains('filter-items')){
                if(childNodes[l].style.display === "" || childNodes[l].style.display === "none"){
                    childNodes[l].style.display = "flex";
                } else if (childNodes[l].style.display === "flex"){
                    childNodes[l].style.display = "none";
                }
            }
        }
    };

    //Pour chaque dropdown
    for(i=0; i<dropdowns.length; i++) {
        let dropdownInput;
        let dropdownToggle;
        let currentDropdown = dropdowns[i];
        //Pour chaque tag html enfant de dropdown
        for(j=0; j<currentDropdown.childNodes.length; j++) {
            //Si l'enfant à la classe 'filter-input'
            if(currentDropdown.childNodes[j].classList && currentDropdown.childNodes[j].classList.contains('filter-input')){
                dropdownInput = currentDropdown.childNodes[j];
                for(k=0; k<dropdownInput.childNodes.length; k++) {
                    if(dropdownInput.childNodes[k].classList && dropdownInput.childNodes[k].classList.contains('material-icons')){
                        dropdownToggle = dropdownInput.childNodes[k];
                        dropdownToggle.addEventListener('click', function(e) {
                            openOrCloseFilter(e, currentDropdown.childNodes);
                        });
                    }
                } 
            }
        }
    }
}

export default dropdowns;