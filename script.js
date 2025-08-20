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


// estilização da área de cursos

  const galeria = document.querySelector('.img-cursos');
  const total = galeria.querySelectorAll('img').length;
  const colunas = Math.min(total, 3);
  galeria.style.gridTemplateColumns = `repeat(${colunas}, 1fr)`;


// Animação área de projetos

function animarProjetos() {
    // Aqui busco todos os containers de fotos que criei no HTML usando seletores CSS
    const fotoContainers = document.querySelectorAll('.foto-container');     
        // Adiciono evento de hover para destacar a foto quando o mouse passa por cima
        // Isso torna a galeria de vocês mais interativa e divertida de explorar
        container.addEventListener('mouseenter', () => {
            // Verifico se o container é um HTMLElement antes de modificar suas propriedades
            // Isso é uma boa prática para evitar erros no JavaScript
            if (container instanceof HTMLElement) {
                container.style.zIndex = '10';  // Valor alto de z-index traz a foto para frente
            }
        });
        
        // Quando o mouse sai da foto, ela volta ao seu estado normal
        // Isso garante que a interface fique organizada quando não estiver em uso
        container.addEventListener('mouseleave', () => {
            // Mesma verificação de tipo para garantir compatibilidade em todos os navegadores
            if (container instanceof HTMLElement) {
                container.style.zIndex = '3';  // Valor menor de z-index coloca a foto de volta na camada normal
            }
        });
    };