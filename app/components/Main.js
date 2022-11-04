export function Main() {
  let $main = document.createElement("div")
  $main.classList.add('welcomePage')
  let $text = document.createElement('p')
  $text.innerText = 'sobre el autor'
  $text.id = 'sobreAutor'
  let img = ''
  if(localStorage.getItem('darkMode') == null || localStorage.getItem('darkMode') == 'false'){
    img = './app/assets/main/brightness_2.svg'
  }else if(localStorage.getItem('darkMode') == 'true'){
    img = './app/assets/main/brightness_5.svg'
  }
  $main.innerHTML = ` <header>
    <img id="colorMode" src="${img}" alt="" />
  </header>
  <main>
   <img src="#" alt="">  </img>
   <img class="welcomeImage" src="./app/assets/main/rickandmorty.png" alt="">
    <div class="welcomeTextWrapper">
      <h2>Bienvenidx</h2>
      <p>
        Esta aplicación es una <span class="stronger">mini - enciclopedia</span> en la que puedes encontrar
        datos curisosos sobre los personajes que participan en la serie de
        televisión <span class="stronger">“Rick y Morty”</span>
      </p>
    </div>
  </main>
  <footer>
    <div id="boton"><a href="#/personajes">Genial, comenzar</a></div>
  </footer>`;
  $main.querySelector('footer').insertAdjacentElement('beforeend', $text)
  $main.querySelector('h2').classList.add('tracking-in-expand')
  return $main;
}
