// Datos de ejemplo basados en tu imagen
const pokemonData = [
    { id: 5, name: "Charmeleon", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { id: 8, name: "Wartortle", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
    { id: 9, name: "Blastoise", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    { id: 11, name: "Metapod", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
    { id: 12, name: "Butterfree", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
    { id: 17, name: "Pidgeotto", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
    { id: 26, name: "Raichu", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" }
];

const pokemonListContainer = document.getElementById('pokemon-list');
const vistosCount = document.getElementById('vistos-count');

// Función para renderizar la lista
function renderDex() {
    vistosCount.innerText = pokemonData.length;
    
    pokemonListContainer.innerHTML = pokemonData.map(pokemon => `
        <div class="pokemon-card">
            <div class="sprite-container">
                <img src="${pokemon.sprite}" alt="${pokemon.name}">
            </div>
            <div class="info-container">
                <span class="pk-number">#${pokemon.id}</span>
                <span class="pk-name">${pokemon.name}</span>
            </div>
        </div>
    `).join('');
}

// Inicializar la carga
document.addEventListener('DOMContentLoaded', renderDex);
