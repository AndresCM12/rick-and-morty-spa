export function Header(title) {
  let $header = document.createElement("header");
  $header.id = "header";
  let src = "";
  if (
    localStorage.getItem("darkMode") == null ||
    localStorage.getItem("darkMode") == "false"
  ) {
    src = "./app/assets/menu.png";
  } else if (localStorage.getItem("darkMode") == "true") {
    src = "./app/assets/menuDarkmode.png";
  }
  $header.innerHTML = `
    <h2 class="slide-in-left">${title}</h2>
    <img src="${src}" alt="">`;
  return $header;
}
