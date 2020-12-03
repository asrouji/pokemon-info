const elements = document.querySelectorAll('button');
const name = document.querySelector('#name');
const picture = document.querySelector('#picture');
const type = document.querySelector('#type');
const baseXP = document.querySelector('#baseXP');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

for(let element of elements) {
    element.addEventListener('click', getPokemon)
}

async function getPokemon(event) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + event.target.textContent.toLowerCase());
    const data = await response.json();
    name.textContent = data.name.toString().toUpperCase();
    picture.src = data.sprites.front_shiny;
    type.textContent = 'Type(s): ' + getTypes(data.types);
    baseXP.textContent = 'Base Experience: ' + data.base_experience;
    height.textContent = 'Height: ' + data.height/10 + ' m';
    weight.textContent = 'Weight: ' + data.weight/10 + ' kg';
}

function getTypes(types){
    let typeList = "";
    types.forEach(function(type){
        typeList += " " + type['type']['name'];
    })
    return typeList;
}

