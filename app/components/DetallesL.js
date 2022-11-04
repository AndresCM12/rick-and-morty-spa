import { ajax } from "../helpers/rickandmorty_api.js";
import { setIcons } from "../helpers/setIcons.js";

export function DetallesL(Lugar) {
  let { name, type, dimension, residents, created } = Lugar;
  const $div = document.createElement("div");
  $div.id = "locationDetailContainer";
  let $icon = setIcons(type);
  let fecha = created.substring(0, 10)
  $div.innerHTML = `
        <div class="title-wrapper">
        <svg id="goBack" width="110" height="110" viewBox="0 0 110 110" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
        <path d="M91.6667 50.4166H35.8875L61.5083 24.7958L55 18.3333L18.3333 55L55 91.6666L61.4625 85.2041L35.8875 59.5833H91.6667V50.4166Z" fill="currentcolor"/>
        </svg>
          
            <h2 class="slide-in-left">Detalles</h2>
        </div>

      <div class="main-container opacity-in">
        <div class="icon-wrapper">
          ${$icon}
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
            <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.9517 9.66663C31.2717 9.66663 9.66666 31.32 9.66666 58C9.66666 84.68 31.2717 106.333 57.9517 106.333C84.68 106.333 106.333 84.68 106.333 58C106.333 31.32 84.68 9.66663 57.9517 9.66663ZM91.4467 38.6666H77.1883C75.6417 32.625 73.4183 26.825 70.5183 21.46C79.4117 24.505 86.8067 30.6916 91.4467 38.6666ZM58 19.5266C62.0117 25.3266 65.1533 31.755 67.2317 38.6666H48.7683C50.8467 31.755 53.9883 25.3266 58 19.5266ZM20.59 67.6666C19.8167 64.5733 19.3333 61.335 19.3333 58C19.3333 54.665 19.8167 51.4266 20.59 48.3333H36.9267C36.54 51.5233 36.25 54.7133 36.25 58C36.25 61.2866 36.54 64.4766 36.9267 67.6666H20.59ZM24.5533 77.3333H38.8117C40.3583 83.375 42.5817 89.175 45.4817 94.54C36.5883 91.495 29.1933 85.3566 24.5533 77.3333V77.3333ZM38.8117 38.6666H24.5533C29.1933 30.6433 36.5883 24.505 45.4817 21.46C42.5817 26.825 40.3583 32.625 38.8117 38.6666V38.6666ZM58 96.4733C53.9883 90.6733 50.8467 84.245 48.7683 77.3333H67.2317C65.1533 84.245 62.0117 90.6733 58 96.4733ZM69.31 67.6666H46.69C46.255 64.4766 45.9167 61.2866 45.9167 58C45.9167 54.7133 46.255 51.475 46.69 48.3333H69.31C69.745 51.475 70.0833 54.7133 70.0833 58C70.0833 61.2866 69.745 64.4766 69.31 67.6666ZM70.5183 94.54C73.4183 89.175 75.6417 83.375 77.1883 77.3333H91.4467C86.8067 85.3083 79.4117 91.495 70.5183 94.54V94.54ZM79.0733 67.6666C79.46 64.4766 79.75 61.2866 79.75 58C79.75 54.7133 79.46 51.5233 79.0733 48.3333H95.41C96.1833 51.4266 96.6667 54.665 96.6667 58C96.6667 61.335 96.1833 64.5733 95.41 67.6666H79.0733Z" fill="currentcolor"/>
              </svg>
              
            <div>
              <p>Tipo</p>
              <h6>${type}</h6>
            </div>
          </div>
          <div class="info-wrapper--cards">
            <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M88.2084 36.7333L61.625 21.3633C59.4017 20.0583 56.5984 20.0583 54.375 21.3633L27.7917 36.7333C25.5684 38.0383 24.1667 40.4066 24.1667 43.0166V73.7083C24.1667 76.3183 25.5684 78.6866 27.7917 79.9916L54.375 95.3616C56.5984 96.6666 59.4017 96.6666 61.625 95.3616L88.2084 79.9916C90.4317 78.6866 91.8334 76.3183 91.8334 73.7083V43.0166C91.8334 40.4066 90.4317 38.0383 88.2084 36.7333V36.7333ZM33.8334 72.3066V49.9766L53.1667 61.19V83.4716L33.8334 72.3066V72.3066ZM58 52.8283L38.6667 41.615L58 30.45L77.3334 41.615L58 52.8283ZM62.8334 83.4716V61.19L82.1667 49.9766V72.3066L62.8334 83.4716ZM33.8334 9.66663H16.9167C12.905 9.66663 9.66669 12.905 9.66669 16.9166V33.8333H19.3334V19.3333H33.8334V9.66663ZM82.1667 9.66663H99.0834C103.095 9.66663 106.333 12.905 106.333 16.9166V33.8333H96.6667V19.3333H82.1667V9.66663ZM33.8334 106.333H16.9167C12.905 106.333 9.66669 103.095 9.66669 99.0833V82.1666H19.3334V96.6666H33.8334V106.333ZM82.1667 106.333H99.0834C103.095 106.333 106.333 103.095 106.333 99.0833V82.1666H96.6667V96.6666H82.1667V106.333Z" fill="currentcolor"/>
              </svg>
            <div>
              <p>Dimensión</p>
              <h6>${dimension}</h6>
            </div>
          </div>

        </div>
      </div>
  `;

  const $cardwrapper = document.createElement("div");
  $cardwrapper.classList.add("residents-wrapper");
  $cardwrapper.classList.add("opacity-in");

  const $h3 = document.createElement("h3");

  $h3.innerText = "Residentes";
  $cardwrapper.appendChild($h3);
  const $gridwrapper = document.createElement("div");
  $gridwrapper.classList.add("grid-wrapper");

  let cards = [];
  residents.map((residente) => {
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
