import search from "../index";

//Supprimer un tag
const deleteTag = () => {
    //On écoute si l'utilisateur veut supprimer un tag
    crosses = Array.from(document.querySelectorAll(".searchbox .searchbox__tags .tags-wrapper .tag .tag-icon"));
    for(let i=0; i<crosses.length; i++) {
        crosses[i].addEventListener('click', function(e){
            e.target.parentElement.remove();
            search();
        });
    }
}

export default deleteTag;