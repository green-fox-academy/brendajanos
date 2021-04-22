import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?
 function chooseEffective(pokemonOfAsh: Pokemon[],wildPokemon: Pokemon) : string {
    let effectivePokemon = pokemonOfAsh.find((pokemon)=>pokemon.isEffectiveAgainst(wildPokemon)) 
    return effectivePokemon.name
 }
// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Squrtle', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}