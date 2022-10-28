

document.addEventListener("DOMContentLoaded", () => {
  if (document.title == "Repaso") fetchData();
});

if (document.title == "Repaso") {
  // pokemonGuardado.ataque = 1000;
  console.log(localStorage.length);
  
  for (let index = 0; index < localStorage.length; index++) {
    let pokemonGuardado = JSON.parse(localStorage.getItem(localStorage.key(index)));
    pintarCard(pokemonGuardado)

  }

  document.getElementById("clear").addEventListener("click", (e)=>{
    localStorage.clear()
  })
}

if (document.title == "Formulario") {
  const $formulario = document.getElementById("contact_form")

  $formulario.addEventListener("submit", savePokemon)

}


const fetchData = async function () {

  try {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=6`);
    const data = await res.json();

    console.log(data);
    const { results } = data

    results.forEach(async pokemonApi => {

      const res = await fetch(pokemonApi.url);
      const pokemon = await res.json();

      let [hp, ataque, defensa, especial] = pokemon.stats;

      const pokemonToRender = {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
        imgJuego: pokemon.sprites.front_default,
        imgCvg: pokemon.sprites.other.dream_world.front_default,
        nombre: pokemon.name,
        experiencia: pokemon.base_experience,
        hp: hp.base_stat,
        ataque: ataque.base_stat,
        defensa: defensa.base_stat,
        especial: especial.base_stat,
      };

      pintarCard(pokemonToRender);
    })
  } catch (error) {
    console.log(error);
  }

};

function pintarCard(pokemon) {
  const flex = document.querySelector(".flex-main");
  const template = document.createElement("article")
  template.className = "card"
  template.innerHTML = `
    <div class="card-body">
      <img
        src="#"
        alt="#"
        class="card-body-img"
      />
      <h1 class="card-body-title">
        Victor charst
        <span>26</span>
      </h1>
      <p class="card-body-text">London</p>
      <hr/>
    </div>
    <div class="card-footer">
      <div class="card-footer-social">
          <p>Ataque</p>
        <h3>80K</h3>
      </div>
      <div class="card-footer-social">
          <p>Ataque Especial</p>
          <h3>803K</h3>
      </div>
      <div class="card-footer-social">
          <p>Defensa</p>
          <h3>1.4K</h3>
      </div>
    </div>
`;

  const fragment = document.createDocumentFragment();
  pokemon.imgCvg ? template.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg)
    : template.querySelector(".card-body-img").setAttribute("src", "./assets/pokebola.png")

  template.querySelector(
    ".card-body-title"
  ).innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`;

  template.querySelector(".card-body-text").textContent =
    pokemon.experiencia + " exp";
  template.querySelectorAll(".card-footer-social h3")[0].textContent =
    pokemon.ataque + "K";
  template.querySelectorAll(".card-footer-social h3")[1].textContent =
    pokemon.especial + "K";
  template.querySelectorAll(".card-footer-social h3")[2].textContent =
    pokemon.defensa + "K";

  let button = document.createElement("button")

  !pokemon.imgCvg && button.addEventListener("click", function (e) {
    localStorage.removeItem(pokemon.nombre)
  })
  fragment.appendChild(template);
  flex.appendChild(fragment);
};

function savePokemon(event) {
  event.preventDefault();
  // const pokemonProperties = [
  //   "nombre",
  //   "hp",
  //   "experiencia",
  //   "ataque",
  //   "especial",
  //   "defensa",
  // ]

  let inputs = [...event.target.elements]


  const nuevoPokemon = {};

  inputs.forEach((input) => {

    if (input.id != "form_button") {

      let name = input.name
      nuevoPokemon[name] = input.value

    }

  })

  localStorage.setItem( nuevoPokemon.nombre , JSON.stringify(nuevoPokemon))
  // localStorage.getItem
  // localStorage.clear
  // localStorage.removeItem


  console.log(nuevoPokemon);

}


