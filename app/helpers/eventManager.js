document.addEventListener("click", (element) => {
  if (element.target.id == "sobreAutor") {
    element.path[3].childNodes[1].style = "height: 340px";
    setTimeout(() => {
      element.path[3].childNodes[1]
        .querySelector("#expandMore")
        .classList.add("shake-horizontal");
    });

    element.path[3].childNodes[1]
      .querySelector("#expandMore")
      .classList.remove("shake-horizontal");
  } else if (element.target.id == "expandMore") {
    element.path[1].style = "height: 0px";
  } else if (element.target.id == "expandMorePath") {
    element.path[2].style = "height: 0px";
  }

  //colorMode
  else if (element.target.id == "colorMode") {
    setTimeout(() => {
      element.target.classList.add("rotate-center");
    });
    element.target.classList.remove("rotate-center");

    if (
      localStorage.getItem("darkMode") == "false" ||
      localStorage.getItem("darkMode") == null
    ) {
      document.querySelector("body").classList.remove("lightMode");
      document.querySelector("body").classList.add("darkMode");
      element.target.src = "./app/assets/main/brightness_5.svg";
      //console.log(element.target);
      localStorage.setItem("darkMode", "true");
    } else if (localStorage.getItem("darkMode") == "true") {
      document.querySelector("body").classList.remove("darkMode");
      document.querySelector("body").classList.add("lightMode");
      element.target.src = "./app/assets/main/brightness_2.svg";
      localStorage.setItem("darkMode", "false");
    }
  } else if (element.target.id != "about") {
  }
});
