const cardPokemon = document.querySelector('.card-pokemon');

const contenedorNovedades = document.querySelector('.novedades-pokemon');

function traerPokemon(pokemon) {    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => imagenPokemon(data))
}

// for(let i=1; i<20; i++) {
//     traerPokemon(i)
// }

traerPokemon("pikachu");;
traerPokemon("blastoise");
traerPokemon("bulbasaur");
traerPokemon("squirtle");
traerPokemon("charmander");
traerPokemon("pidgeot");
traerPokemon("dragonite");
traerPokemon("mew");
traerPokemon("snorlax");

function imagenPokemon(pokemon) {

    const cardPokemon = document.createElement('div');
    cardPokemon.className = 'card-pokemon';
    cardPokemon.innerHTML = `
            <img class="imagen-pokemon" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            <h4 class="nombre-pokemon"> Modelo de ${pokemon.name}</h4>
            `            
    contenedorNovedades.append(cardPokemon)
}


// function imagenPokemon(pokemon) {
//     const img = document.createElement('img');
//     img.src = pokemon.sprites.other.dream_world.front_default;
//     const h4 = document.createElement('h4');
//     h4.textContent = pokemon.name;
//     const div = document.createElement('div');
//     div.appendChild(img);
//     div.appendChild(h4);
//     cardPokemon.appendChild(div);
// }
