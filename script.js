function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-sun2.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto do Leo com capacete preto e luvas laranjas, em cima de sua moto laranja e fazendo sinal de paz e amor com os dedos."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto do Leo fumando charuto, de noite e com efeitos da fumaça do charuto."
    )
  }
}
//fazer o final da ultima aula de javascript
