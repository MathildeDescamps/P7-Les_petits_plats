const dropdowns = () => {
    let dropdowns = document.querySelectorAll(".searchbox__filters .filter");

    dropdowns.forEach((dropdown) => {
        let dropdownInput;
        let dropdownToggle;
        dropdown.childNodes.forEach((childNode) => {
            if(childNode.classList && childNode.classList.contains('filter-input')){
                dropdownInput = childNode;
                dropdownInput.childNodes.forEach((childNode) => {
                    if(childNode.classList && childNode.classList.contains('material-icons')){
                        dropdownToggle = childNode;
                        dropdownToggle.addEventListener('click', function() {
                            dropdown.childNodes.forEach((childNode) => {
                                if(childNode.classList && childNode.classList.contains('filter-items')){
                                    if(childNode.style.display === "" || childNode.style.display === "none"){
                                        childNode.style.display = "flex";
                                    } else if (childNode.style.display === "flex"){
                                        childNode.style.display = "none";
                                    }
                                }
                            })
                        });
                    }
                })
            }
        })
    })
}

export default dropdowns;