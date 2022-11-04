import { About } from "../components/About.js";
import { Content } from "../components/Content.js";
import { Header } from "../components/Header.js";
import { Main } from "../components/Main.js";
import { Menu } from "../components/Menu.js";
import { ajax } from "./rickandmorty_api.js";
import api from "../helpers/restapi.js";
import { Card } from "../components/Card.js";
import { DetallesP } from "../components/DetallesP.js";
import { Loader } from "../components/Loader.js";
import { CardPlace } from "../components/CardPlace.js";
import { CardEpisodes } from "../components/CardEpisodes.js";
import { DetallesL } from "../components/DetallesL.js";
import { DetallesE } from "../components/DetallesE.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("app"),
    $content = d.getElementById("content");

  let { hash } = location;
  window.scroll(0, 0);
  if (!hash || hash === "#/") {
    $main.appendChild(Main());
    $main.appendChild(About());
  } else if (hash.includes("#/personajes")) {
    $main.innerHTML = null;
    $main.appendChild(Header("Personajes"));
    $main.appendChild(Content());
    $main.appendChild(Menu());
    const $cardsWrapper = document.querySelector("main .cards__wrapper");

    await ajax({
      url: api.CHARACTER,
      cbs: (cards) => {
        let aCards = [];
        cards.results.map((card) => {
          aCards.push(Card(card));
        });
        aCards.map((card) => {
          $cardsWrapper.appendChild(card);
        });
        console.log(aCards);
      },
    });
  } else if (hash.includes("detalles/")) {
    $main.appendChild(Loader());
    const idPersonaje = location.hash.substring(
      location.hash.indexOf("/") + 10
    );
    let detailsContent = [];
    await ajax({
      url: api.CHARACTERDETAIL + idPersonaje,
      cbs: (details) => {
        console.log(details);
        detailsContent.push(DetallesP(details));
      },
    });

    $main.appendChild(detailsContent[0]);
  } else if (hash.includes("#/lugares")) {
    $main.innerHTML = null;
    $main.appendChild(Header("Lugares"));
    $main.appendChild(Loader());
    const $div = document.createElement("div");
    $div.id = "lugaresCards";
    $div.classList.add("opacity-in");

    await ajax({
      url: api.LOCATION,
      cbs: (Places) => {
        Places.results.map((place) => {
          $div.appendChild(CardPlace(place));
        });
      },
    });

    $main.appendChild($div);
    $main.appendChild(Menu());
  } else if (hash.includes("#/lugar_")) {
    $main.appendChild(Loader());
    const idLugar = location.hash.substring(location.hash.indexOf("_") + 1);
    await ajax({
      url: api.LOCATIONDETAIL + idLugar,
      cbs: (Lugares) => {
        $main.appendChild(DetallesL(Lugares));
      },
    });
  } else if (hash.includes("#/episodios")) {
    $main.innerHTML = null;
    $main.appendChild(Header("Episodios"));
    $main.appendChild(Loader());
    const $div = document.createElement("div");
    $div.id = "lugaresCards";
    $div.classList.add("opacity-in");
    await ajax({
      url: api.EPISODES,
      cbs: (Episodes) => {
        Episodes.results.map((Episode) => {
          $div.appendChild(CardEpisodes(Episode));
        });
      },
    });
    $main.appendChild($div);
    $main.appendChild(Menu());
  } else if (hash.includes("#/episodio_")) {
    $main.appendChild(Loader());
    const idEpisodio = location.hash.substring(location.hash.indexOf("_")+1)
    await ajax({url:api.EPISODESDETAIL+idEpisodio, cbs: (Episodio)=>{
      $main.appendChild(DetallesE(Episodio))
    }})
  }
  console.log(document.querySelectorAll("#loading"));
  if (document.querySelectorAll("#loading").length != 0) {
    document.querySelector("#loading").style.display = "none";
  }
}
