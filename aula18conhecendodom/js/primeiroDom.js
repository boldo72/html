//const corpo = document.body;
const corpo = querySelector(".corpo");
const container = document.querySelector(".conteiner");
const titulo = document.getElementById('titulo')
const paragrafo = document.querySelector('[data-info="intro"]')



corpo.style.backgroundColor = "#d79595ff";
container.style.border = "2px solid black";
titulo.style.fontFamily = 'arial';
titulo.style.color = 'black';
titulo.style.fontSize = '48px';
titulo.textContent += 'Dom';
paragrafo.textContent += ' DOM';
paragrafo.style.color = 'black';
