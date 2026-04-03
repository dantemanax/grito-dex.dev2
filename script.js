const pokemonData = [
    { id: 5, name: "Charmeleon", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { id: 8, name: "Wartortle", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
    { id: 9, name: "Blastoise", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    { id: 11, name: "Metapod", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
    { id: 12, name: "Butterfree", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
    { id: 17, name: "Pidgeotto", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
    { id: 26, name: "Raichu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" },
    { id: 25, name: "Pikachu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" }
];

const gridContainer = document.getElementById('pokemon-grid');
const vistosCount = document.getElementById('vistos-count');

function renderGrid() {
    vistosCount.innerText = pokemonData.length;
    
    gridContainer.innerHTML = pokemonData.map(pokemon => `
        <button class="pokemon-btn" onclick="alert('¡Grito de ${pokemon.name}!')">
            <span class="pk-id">#${pokemon.id}</span>
            <img src="${pokemon.sprite}" alt="${pokemon.name}">
            <span class="pk-name">${pokemon.name}</span>
        </button>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderGrid);
