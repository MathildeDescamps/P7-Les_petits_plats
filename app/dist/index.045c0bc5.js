let dropdowns = document.querySelectorAll(".searchbox__filters .filter");
dropdowns.forEach((dropdown)=>{
    let dropdownToggle = document.querySelector("#" + dropdown.id + " .filter-input .material-icons");
    dropdownToggle.addEventListener("click", function(event) {
        let filterItems = document.querySelector("#" + dropdown.id + " .filter-items");
        if (filterItems.style.display === "none") filterItems.style.display = "flex";
        else filterItems.style.display = "none";
    });
});

//# sourceMappingURL=index.045c0bc5.js.map
