import search from "../index.js";

//Supprimer un tag
const deleteTag = () => {
    //On écoute si l'utilisateur veut supprimer un tag
    crosses = Array.from(document.querySelectorAll(".searchbox .searchbox__tags .tags-wrapper .tag .tag-icon"));
    crosses.forEach((cross) => {
        cross.addEventListener('click', function(e){
            e.target.parentElement.remove();
            search();
        });
    });
}

export default deleteTag;