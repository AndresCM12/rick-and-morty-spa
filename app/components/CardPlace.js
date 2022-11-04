import { setIcons } from "../helpers/setIcons.js";
export function CardPlace(lugares) {
  const { dimension, name, type, url, id } = lugares;
  const $div = document.createElement("div");
  $div.classList.add("place__card");
  let icon = setIcons(type);
  $div.innerHTML = `  
    ${icon}
  <div class="text__wrapper">
    <span>${type}</span>
    <p>${name}</p>
    <h6>${dimension}</h6>
  </div>
  <svg
    width="101"
    height="100"
    viewBox="0 0 101 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.1496 69.125L42.0833 75L67.3333 50L42.0833 25L36.1496 30.875L55.4237 50L36.1496 69.125Z"
      fill="currentcolor"
    />
  </svg>`;
  $div.addEventListener('click', ()=>{
    location.hash = `#/lugar_${id}`
  })
  return $div;
}

