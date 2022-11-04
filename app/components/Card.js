export function Card(personajes) {
    
    let {name, species, image, id} = personajes
    const $div = document.createElement('div')
    $div.classList.add('card')
    $div.innerHTML = `
    <img src="${image}" loading="lazy" alt="Foto de ${name}"></img>
    <div class="text__wrapper">
    <h6>${name}</h6>
    <p>${species}</p>
    </div>
    `

    $div.addEventListener('click', ()=>{
        location.hash = `#/detalles/${id}`
        console.log(window.scrollY)
    })
    return $div
}