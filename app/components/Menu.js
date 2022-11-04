export function Menu(params) {
    const $menu = document.createElement('footer')
    $menu.id = 'menu'
    let personajes = '', lugares = '', episodios = '', srcPersonajes = '',srcLugares = '',srcEpisodios = ''
    if(location.hash.includes('/personajes')) personajes = 'selected jello-horizontal'

    if(location.hash.includes('/lugares')) lugares = 'selected jello-horizontal'

    if(location.hash.includes('/episodios')) episodios = 'selected jello-horizontal'

    if(localStorage.getItem('darkMode') == 'false' || localStorage.getItem('darkMode') == null){
      srcPersonajes = './app/assets/menu/groups.png'
      srcLugares = './app/assets/menu/place.png'
      srcEpisodios = './app/assets/menu/layers.png'
    }else{
      srcPersonajes = './app/assets/menu/groupsDarkmode.png'
      srcLugares = './app/assets/menu/placeDarkmode.png'
      srcEpisodios = './app/assets/menu/layersDarkmode.png'
    } 

    $menu.innerHTML = `
    <div class="footer__wrapper">
    <a href="#/personajes" >
        <div id="personajes" class="${personajes}">
          <img src="${srcPersonajes}" alt="">
          <p class="slide-in-bottom">personajes</p>
        </div>
    </a>
    <a href="#/lugares" >
    <div id="lugares" class="${lugares}">
      <img src="${srcLugares}" alt="">
      <p class="slide-in-bottom" >lugares</p>
    </div>
    </a>
    <a href="#/episodios" >
      <div id="episodios" class="${episodios}">
        <img src="${srcEpisodios}" alt="">
        <p class="slide-in-bottom" >Episodios</p>
      </div>
    </a>
  </div>`
  return $menu
}