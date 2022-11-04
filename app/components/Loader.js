export function Loader(params) {
    const $div = document.createElement('div')
    $div.classList.add('loading__wrapper')
    $div.id = 'loading'
    $div.innerHTML = `<img src="./app/assets/Rolling-2.4s-224px.svg" alt="">`

    return $div
}