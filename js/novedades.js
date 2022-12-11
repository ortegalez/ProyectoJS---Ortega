
// ========================= Globeles ===========================

const cardPokemon = document.querySelector('.card-pokemon');

const contenedorNovedades = document.querySelector('.novedades-pokemon');

const cardRick = document.querySelector('.card-rick');

const contenedorNovedades2 = document.querySelector('.novedades-rick');

const arrayIdsPokemones = [25, 9, 1, 7, 4, 18, 149, 151, 143]  // Ids de Pokemones que quiero mostrar

// let shopContent = document.getElementById("shopContent")
// shopContent.innerHTML = '<img src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" width="400px">'


let gifPokemon = document.querySelector(".gif-pokemon")

gifPokemon.innerHTML = '<img src="../images/giphy.gif" alt="Ash y pikachu">'


// ===================== Funciones ================

// Función para acceder a la API de Pokemón
function traerPokemones(arr) {
        gifPokemon.innerHTML = "";
        arr.forEach(numero => {id = numero
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => imagenPokemon(data))
    });
}


// Función para crear card de Pokemón
function imagenPokemon(pokemon) {
    const cardPokemon = document.createElement('div');
    cardPokemon.className = 'card-pokemon';
    const nombrePokemon = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
    cardPokemon.innerHTML = `
            <img class="imagen-pokemon" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            <h4 class="nombre-pokemon"> Modelo de ${nombrePokemon}</h4>
            `            
    contenedorNovedades.append(cardPokemon)
}


// Función para acceder a la API de Rick and Morty
function traerRick(id) {    
    
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => imagenRick(data))
}


// Función para crear card del personaje
function imagenRick(personaje) {
    const cardRick = document.createElement('div');
    cardRick.className = 'card-rick';
    cardRick.innerHTML = `
            <img class="imagen-rick" src="${personaje.image}" alt="Rick">
            <h4 class="nombre-rick"> Modelo de ${personaje.name}</h4>
            `            
    contenedorNovedades2.append(cardRick)
}


// Funcion pedir la cantidad de items a mostrar
const rickAndMorty = (items) => {
    for(let i=1; i<=items; i++) {
        traerRick(i)
    }
}


const pedirProductosDelay = () => {
      return new Promise( (resolve, reject) => {
          setTimeout(() => {
              resolve(arrayIdsPokemones)
          }, 3000)
      })
    }


pedirProductosDelay()
  .then((res) => {
      productosAmonstrar = res
      traerPokemones(productosAmonstrar)
  })


// traerPokemones(arrayIdsPokemones)
rickAndMorty(9);
