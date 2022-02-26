import filterWithTags from "./filterWithTags";
import search from "../index";

//Supprimer un tag
const deleteTag = (recipesToFilter) => {
    //On écoute si l'utilisateur veut supprimer un tag
    crosses = Array.from(document.querySelectorAll(".searchbox .searchbox__tags .tags-wrapper .tag .tag-icon"));
    crosses.forEach((cross) => {
        cross.addEventListener('click', function(e){
            e.target.parentElement.remove();
            filterWithTags(recipesToFilter);
            search();
        });
    });
    
    //e.target.parentElement.remove();
    filterWithTags(recipesToFilter);
}
export default deleteTag;