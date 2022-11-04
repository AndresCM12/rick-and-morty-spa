export function About(params) {
    let $content = document.createElement('section')
    $content.id = 'about'
    $content.innerHTML = `
    <div class="about__header">
        <h2>Hola, soy <a href="https://twitter.com/4lthea">@maltheada</a></h2>
      </div>
      <div class="about__text__wrapper">
        <p>
          Un estudiante de ingeniería, apasionado por la programación y el
          diseño, más específicamente orientado a un perfil Fronted, ya sea de
          aplicaciones móviles o web.
        </p>
      </div>
      <svg
        id="expandMore"
        width="804"
        height="804"
        viewBox="0 0 804 804"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="expandMorePath"
          d="M555.765 287.765L402 441.195L248.235 287.765L201 335L402 536L603 335L555.765 287.765Z"
          fill="currentColor"
        />
      </svg>
    `
    return $content
}