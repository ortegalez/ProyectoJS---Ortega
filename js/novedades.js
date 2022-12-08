// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) => 
  
//     data.forEach(post => { 
//         const li = document.createElement('li')
//         li.innerHTML = `
//         <h4>${post.title}</h4>
//         <p>${post.body}</p>`

//     lista.appendChild(li)
//     })
  
  
//   )

// let tituloObjeto = document.querySelector('.titulo-api')

// const lista = document.querySelector('#listado')

const cardPokemon = document.querySelector('.card-pokemon');
// const imgPokemon = document.querySelector('.img-pokemon');
// const nombrePokemon = document.querySelector('.nombre-pokemon')

// https://img.freepik.com/foto-gratis/hombre-joven-camiseta-blanca-ropa-estilo-casual-pantalones-vaqueros-azules-blanco_231208-6079.jpg?w=360&t=st=1670472750~exp=1670473350~hmac=ff1d051c3e203680bbadbbdc0451b01b438370415dfd3c20f5282eefad13f5c5
// https://img.freepik.com/foto-gratis/modelo-camiseta-negra-aislada-vista-frontal_125540-1073.jpg?w=740&t=st=1670520446~exp=1670521046~hmac=79b95075ffb98286c5cbdc58a28cec6d3ca2522be660ce908a2a4d8ae61b2d0c
// https://img.freepik.com/foto-gratis/camiseta-negra-simple-usada-hombre_53876-102772.jpg?w=740&t=st=1670520601~exp=1670521201~hmac=0e0874c3c65bc8c52f076fbf1aa955c87b72b5e79b04c23b8a408bcfd60869b3



function traerPokemon(pokemon) {    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => imagenPokemon(data))
}

// for(let i=1; i<20; i++) {
//     traerPokemon(i)
// }

traerPokemon("pikachu")
traerPokemon("blastoise")
traerPokemon("bulbasaur")
traerPokemon("squirtle")
traerPokemon("charmander")
traerPokemon("pidgeot")
traerPokemon("dragonite")
traerPokemon("mew")
traerPokemon("snorlax")




const contenedorNovedades = document.querySelector('.novedades-pokemon')

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
