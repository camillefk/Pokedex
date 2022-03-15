const listSelectPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listSelectPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const openPokemonCard = document.querySelector('.open')
        openPokemonCard.classList.remove('open')

        const idSelectedPokemon = pokemon.attributes.id.value

        const idPokemonCardToOpen = 'card' + idSelectedPokemon
        
        const pokemonCardToOpen = document.getElementById('card-' + idSelectedPokemon)
        pokemonCardToOpen.classList.add('open')

        const activePokemonInListing = document.querySelector('.active')
        activePokemonInListing.classList.remove('active')

        const pokemonSelectedInListing = document.getElementById(idSelectedPokemon)
        pokemonSelectedInListing.classList.add('active')
    })
})