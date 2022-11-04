import { ajax } from "../helpers/rickandmorty_api.js";

export function DetallesE(Episodio) {
  const $div = document.createElement("div");
  let { name, air_date, episode, characters, id } = Episodio;
  $div.id = "locationDetailContainer";
  $div.innerHTML = `
        <div class="title-wrapper">
        <svg id="goBack" width="110" height="110" viewBox="0 0 110 110" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.6667 50.4166H35.8875L61.5083 24.7958L55 18.3333L18.3333 55L55 91.6666L61.4625 85.2041L35.8875 59.5833H91.6667V50.4166Z" fill="currentcolor"/>
        </svg>
          
            <h2 class="slide-in-left">Detalles</h2>
        </div>

      <div class="main-container opacity-in">
        <div class="icon-wrapper">
          ${id}
        </div>
        <div class="info-wrapper">
          <h3>Información</h3>
          <div class="info-wrapper--cards">
            <svg  width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M91.8333 24.1667V91.8333H24.1667V24.1667H91.8333ZM97.15 14.5H18.85C16.4333 14.5 14.5 16.4333 14.5 18.85V97.15C14.5 99.0833 16.4333 101.5 18.85 101.5H97.15C99.0833 101.5 101.5 99.0833 101.5 97.15V18.85C101.5 16.4333 99.0833 14.5 97.15 14.5V14.5ZM53.1667 33.8333H82.1667V43.5H53.1667V33.8333ZM53.1667 53.1667H82.1667V62.8333H53.1667V53.1667ZM53.1667 72.5H82.1667V82.1667H53.1667V72.5ZM33.8333 33.8333H43.5V43.5H33.8333V33.8333ZM33.8333 53.1667H43.5V62.8333H33.8333V53.1667ZM33.8333 72.5H43.5V82.1667H33.8333V72.5Z" fill="currentcolor"/>
              </svg>
            <div>
              <p>Nombre</p>
              <h6>${name}</h6>
            </div>
          </div>
          <div class="info-wrapper--cards">
          <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M133 38H19C12.0333 38 6.33333 43.7 6.33333 50.6667V101.333C6.33333 108.3 12.0333 114 19 114H133C139.967 114 145.667 108.3 145.667 101.333V50.6667C145.667 43.7 139.967 38 133 38ZM133 101.333H19V50.6667H31.6667V76H44.3333V50.6667H57V76H69.6667V50.6667H82.3333V76H95V50.6667H107.667V76H120.333V50.6667H133V101.333Z" fill="currentcolor"/>
          </svg>
              
            <div>
              <p>Fecha de salida</p>
              <h6>${air_date}</h6>
            </div>
          </div>
          <div class="info-wrapper--cards">
          <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0233 124.45L24.51 127.997V70.8067L9.12 107.92C6.52333 114.38 9.62666 121.79 16.0233 124.45V124.45ZM139.523 101.017L108.11 25.2067C106.147 20.4567 101.523 17.5434 96.6467 17.4167C95 17.4167 93.29 17.6701 91.6433 18.3667L44.9667 37.6834C40.2167 39.6467 37.3033 44.2067 37.1767 49.0834C37.1133 50.7934 37.43 52.5034 38.1267 54.1501L69.54 129.96C71.5033 134.773 76.19 137.687 81.13 137.75C82.7767 137.75 84.4233 137.433 86.0067 136.8L132.62 117.483C139.08 114.823 142.183 107.413 139.523 101.017V101.017ZM49.9067 55.4167C46.4233 55.4167 43.5733 52.5667 43.5733 49.0834C43.5733 45.6001 46.4233 42.7501 49.9067 42.7501C53.39 42.7501 56.24 45.6001 56.24 49.0834C56.24 52.5667 53.39 55.4167 49.9067 55.4167V55.4167ZM37.24 125.083C37.24 132.05 42.94 137.75 49.9067 137.75H59.09L37.24 84.9301V125.083Z" fill="currentcolor"/>
        </svg>

            <div>
              <p>Episodio</p>
              <h6>${episode}</h6>
            </div>
          </div>
        </div>
      </div>
  `;

  const $cardwrapper = document.createElement("div");
  $cardwrapper.classList.add("residents-wrapper");
  $cardwrapper.classList.add("opacity-in");

  const $h3 = document.createElement("h3");

  $h3.innerText = "Personajes";
  $cardwrapper.appendChild($h3);
  const $gridwrapper = document.createElement("div");
  $gridwrapper.classList.add("grid-wrapper");

  let cards = [];
  characters.map((residente) => {
    crearCard(residente).then((respuesta) => {
      $gridwrapper.appendChild(respuesta);
    });
  });
  $cardwrapper.appendChild($gridwrapper);
  cards.map((persona) => {
    console.log(persona);
  });
  $div.appendChild($cardwrapper);
  const $btnBack = $div.querySelector("#goBack");
  $btnBack.addEventListener("click", () => {
    history.back();
  });
  return $div;
}

async function crearCard(info) {
  let $card = document.createElement("div");
  $card.classList.add("residents-cards");
  await ajax({
    url: info,
    cbs: (personaje) => {
      let { name, species, image, id } = personaje;
      $card.innerHTML = `<img src="${image}" loading="lazy" alt="imagen del personaje">
          <div>
            <h6>${name}</h6>
            <p>${species}</p>
          </div>
          <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.1496 69.125L42.0833 75L67.3333 50L42.0833 25L36.1496 30.875L55.4237 50L36.1496 69.125Z" fill="currentcolor"/>
            </svg>
            `;
      $card.addEventListener("click", () => {
        location.hash = `#/detalles/${id}`;
      });
    },
  });

  return $card;
}
