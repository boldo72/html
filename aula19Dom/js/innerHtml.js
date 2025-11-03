const container = document.querySelector(".container");
container.style.backgroundColor = "lightblue";

const titulo = document.getElementById("titulo");
titulo.style.fontSize = "28px";
titulo.style.color = "white";
titulo.textContent = "Conhecendo o DOM";

const paragrafo = "<p> eu sei usar innerHTML</p>";
container.innerHTML += paragrafo;
paragrafo.style.fontSize = "18px";
paragrafo.style.color = "white";
paragrafo.textContent = "Este é um exemplo de manipulação do DOM";