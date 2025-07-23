document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os links que possuem o atributo data-target
  const links = document.querySelectorAll("a[data-target]");

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const seletor = link.getAttribute("data-target");
      const destino = document.querySelector(seletor);

      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Faz a borda caminhar em volta do elemento figure

const figure = document.querySelectorAll('.figure-anime');
let angle = 0;
const speed = 0.5

function animateBorder() {
  angle = (angle + speed) % 360;
  figure.forEach(figure => {
    figure.style.border = '2px solid transparent';
    figure.style.borderRadius = '10px';
    figure.style.borderImage = `linear-gradient(${angle}deg, #0036ac, #0036ac 25%, transparent 50%, #0036ac 75%, #0036ac) 1`;
    figure.style.borderImageSlice = '1';
  });
  requestAnimationFrame(animateBorder);
}

animateBorder();

// Função para que o menu apareça quando o botão for clicado, e para que desapareça quando algum link dentro do menu seja clicado

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("barra-btn");
  const menu = document.getElementById("menu-opcoes");
  const menuLinks = document.querySelectorAll(".menu-link")

  btn.addEventListener("click", function () {
    menu.classList.toggle("active");
    btn.classList.toggle("active");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active")
    })
  })
  });
});

// Evento para que ao passar o mouse em cima da figura mudar o figcaption

    // 1. Pegamos o elemento figcaption pelo ID
    const html = document.getElementById('html');

    // 2. Evento quando o mouse entra na legenda
    html.addEventListener('mouseover', function() {
      // Passo 1: esconde suavemente
      html.textContent = 'Básico';

    });

    html.addEventListener('mouseout', function() {
      // Muda o texto
      html.textContent = 'HTML';
      html.style.color = '#FFF';
    });
    // 3. Evento quando o mouse sai da legenda
    // html.addEventListener('mouseout', function() {
    //   // Volta o texto original
    //   html.textContent = 'HTML';
    
    // });

