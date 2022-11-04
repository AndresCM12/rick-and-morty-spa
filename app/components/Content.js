export function Content() {
    const $main = document.createElement('main')
    $main.id = 'mainContent'
    $main.classList.add('opacity-in')
    $main.innerHTML = `
    <div id="loading" class="loading__wrapper"> 
      <img src="./app/assets/Rolling-2.4s-224px.svg" alt="">
    </div>
    <div class="cards__wrapper"> 
    </div>
    `
    return $main
}