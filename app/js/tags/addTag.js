import search from '../index';
import deleteTag from './deleteTag';

//Les tags wrappers
let ingredientTagsWrapper = document.querySelector('.searchbox__tags .ingredient-tags');
let applianceTagsWrapper = document.querySelector('.searchbox__tags .appliance-tags');
let utensilTagsWrapper = document.querySelector('.searchbox__tags .utensil-tags');

//Ajouter un tag
const addTag = (filterCategory, text, index) => {
    //On crée le tag
    let tag = document.createElement('div');
    tag.classList.add('tag');
    if(filterCategory === 'ingredient') {
        tag.classList.add('bg-blue');
        tag.classList.add('ingredient');
        ingredientTagsWrapper.appendChild(tag);
    } else if (filterCategory === 'utensil') {
        tag.classList.add('bg-red');
        tag.classList.add('utensil');
        utensilTagsWrapper.appendChild(tag);
    } else if (filterCategory === 'appliance') {
        tag.classList.add('bg-green');
        tag.classList.add('appliance');
        applianceTagsWrapper.appendChild(tag);
    }
    tag.setAttribute('id', 'tag-'+index.toString());
    //Le nom du tag
    let tagText = document.createElement('p');
    tagText.classList.add('tag-text');
    tagText.innerText = text;
    tag.appendChild(tagText);
    //Et le bouton 'x' pour supprimer le tag
    let icon = document.createElement('span');
    icon.classList.add('tag-icon');
    icon.classList.add('material-icons');
    icon.classList.add('material-icons-outlined');
    icon.innerText = 'highlight_off';
    tag.appendChild(icon);

    deleteTag();
    search();

}
export default addTag;