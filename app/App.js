import { Header } from "./components/Header.js"
import { Main } from "./components/Main.js"
import { Menu } from "./components/Menu.js"
import { Router } from "./helpers/Router.js"

export function App(){
    const $root = document.querySelector('#app')
        $root.innerHTML = null
        Router()
}