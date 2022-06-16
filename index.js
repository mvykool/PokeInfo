function myPoke() {


    // traer la URL
    let number = document.getElementById("numero").value;

    let numberToString = number.toString();

    let API = {
        url: "http://pokeapi.co/api/v2/",
        type: "pokemon",
        id: numberToString,
    }

    let { url, type, id, } = API
    let apiUrl = `${url}${type}/${id}`;


    //hacer el fetch pasando la constante con la URL

    fetch(apiUrl)
        .then((data) => data.json())
        .then((pokemon) => generateHtml(pokemon))
        .catch(error => (console.error(error)))



    const generateHtml = (data) => {

        const pokemonChosen = {
            img: data.sprites.other["official-artwork"].front_default,
            name: data.name,
            height: data.height,
            weight: data.weight,
            power: data.types[0].type.name,

        }




        const html = `
    <div class="card m-3" style="width: 12rem;">
    <img src="${pokemonChosen.img}" class="card-img-top" alt="...">
    <div class="card-body ">
    <h5 class="card-title h2">${pokemonChosen.name}</h5><br/>
    <p class="card-text h4">Height: ${pokemonChosen.height}</p> <br/>
    <p class="card-text h4">Weight: ${pokemonChosen.weight}</p> <br/>
    <p class="card-text h4 types">Type: ${pokemonChosen.power}</p> <br/>
    
    </div>
    </div>

   `

        //cambiar colo de background de cada una de los 18 tipos de pokemones

        if (pokemonChosen.power === "grass") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("grass");
            //grass
        } else if (pokemonChosen.power === "electric") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("electric");
            //electric
        } else if (pokemonChosen.power === "water") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("water");
            //water
        } else if (pokemonChosen.power === "normal") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("normal");
            //normal
        } else if (pokemonChosen.power === "fire") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("fire");
            //fire
        } else if (pokemonChosen.power === "ice") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("ice");
            //ice
        } else if (pokemonChosen.power === "fighting") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("fighting");
            //fighting
        } else if (pokemonChosen.power === "poison") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("poison");
            //poison
        } else if (pokemonChosen.power === "ground") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("ground");
            //ground
        } else if (pokemonChosen.power === "flying") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("flying");
            //flying
        } else if (pokemonChosen.power === "psychic") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("psychic");
            //psychic
        } else if (pokemonChosen.power === "bug") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("bug");
            //bug
        } else if (pokemonChosen.power === "rock") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("rock");
            //rock
        } else if (pokemonChosen.power === "ghost") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("ghost");
            //ghost
        } else if (pokemonChosen.power === "dark") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("dark");
            //dark
        } else if (pokemonChosen.power === "dragon") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("dragon");
            //dragon
        } else if (pokemonChosen.power === "steel") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("steel");
            //steel
        } else if (pokemonChosen.power === "fairy") {
            const backgroundChange = document.querySelector(".pokemon");
            backgroundChange.classList.add("fairy");
            //fairy
        } else {
            false
        }




        const pokemonDiv = document.querySelector(".pokemon");

        pokemonDiv.innerHTML = html

    }

}