// Adiciona animação suave ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll(".service-card");

	cards.forEach((card, index) => {
		card.style.opacity = "0";
		card.style.transform = "translateY(30px)";

		setTimeout(() => {
			card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
			card.style.opacity = "1";
			card.style.transform = "translateY(0)";
		}, index * 200);
	});
});

// Adiciona efeito de hover nas imagens
const images = document.querySelectorAll(".service-image");
images.forEach((img) => {
	img.addEventListener("mouseenter", function () {
		this.style.transform = "scale(1.05)";
		this.style.transition = "transform 0.3s ease";
	});

	img.addEventListener("mouseleave", function () {
		this.style.transform = "scale(1)";
	});
});

// Adiciona efeito de pulsação nos preços
const prices = document.querySelectorAll(".price-value, .price");
prices.forEach((price) => {
	price.addEventListener("mouseenter", function () {
		this.style.animation = "pulse 0.6s ease-in-out";
	});

	price.addEventListener("animationend", function () {
		this.style.animation = "";
	});
});

// Adiciona animação CSS
const style = document.createElement("style");
style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
document.head.appendChild(style);
