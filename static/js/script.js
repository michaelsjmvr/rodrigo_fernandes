/* Menu Expansão para Desktop */
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".desktop"); // Mudança para .desktop
    const links = document.querySelectorAll(".desktop a"); // Links do menu desktop

    // Aplicar transição suave
    nav.style.transition = "width 0.3s ease-in-out";

    // Ocultar texto dos links inicialmente
    links.forEach(link => {
        link.setAttribute("data-text", link.textContent.trim());
        link.innerHTML = link.querySelector("i").outerHTML; // Manter ícone
    });

    nav.addEventListener("mouseenter", function () {
        nav.style.width = "200px"; // Expande a largura do menu
        links.forEach(link => {
            link.innerHTML = `${link.querySelector("i").outerHTML} ${link.getAttribute("data-text")}`; // Exibe o texto
        });
    });

    nav.addEventListener("mouseleave", function () {
        nav.style.width = "80px"; // Retorna ao tamanho original
        links.forEach(link => {
            link.innerHTML = link.querySelector("i").outerHTML; // Apenas o ícone
        });
    });
});


/* Rolagem menu ancora */
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            const targetId = this.getAttribute("href"); // Pega o ID do destino
            const targetElement = document.querySelector(targetId); // Seleciona o elemento

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // Move até a posição do elemento
                    behavior: "smooth" // Faz a rolagem ser suave
                });
            }
        });
    });
});

/* Galeria de fotos */
function changeImage(src) {
    document.getElementById("mainImg").src = src;
}

document.getElementById("mainImg").addEventListener("click", function () {
    openLightbox(this.src);
});

function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightboxImg").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


/* Formulário envio whatsapp */
function sendToWhatsApp(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;

    let texto = `Olá, meu nome é *${nome}*.
📧 E-mail: ${email}
📱 Telefone: ${telefone || "Não informado"}
💬 Mensagem: ${mensagem}`;

    let numeroWhatsApp = "5521983763141"; // Código do país + DDD + número
    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
}

/* Menu mobile */
// Função para abrir/fechar o menu mobile
function toggleMenu() {
    let menu = document.querySelector('.mobile');
    menu.classList.toggle('show'); // Alterna a classe 'show' para abrir ou fechar o menu
}

/* rolamendo do menu ancora mobile */
// Função para rolar suavemente até a seção desejada
function scrollToSection(event, sectionId) {
    event.preventDefault(); // Evita o comportamento padrão do link

    const targetSection = document.querySelector(sectionId);
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });

    // Fecha o menu após o clique
    toggleMenu();
}