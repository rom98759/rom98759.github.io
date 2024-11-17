// ========== 1. Fetch et affichage des projets GitHub ==========
fetch('https://api.github.com/users/rom98759/repos')
	.then(response => response.json())
	.then(data => {
		const projectsContainer = document.getElementById('github-projects');
		data.forEach(repo => {
			// Exclusion des dépôts spécifiques
			if (repo.name !== '42-project-badges' && repo.name !== 'rom98759.github.io') {
				const projectDiv = document.createElement('div');
				projectDiv.classList.add('project');
				projectDiv.innerHTML = `
					<h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
					<p>${repo.description}</p>
				`;
				projectsContainer.appendChild(projectDiv);
			}
			const br = document.createElement('br');
			projectsContainer.appendChild(br);
		});
	});

// ========== 2. Gestion du menu latéral ==========
document.addEventListener("DOMContentLoaded", () => {
	// Récupérer les éléments HTML
	const menuToggle = document.getElementById("menu-toggle");
	const closeMenu = document.getElementById("close-menu");
	const sideMenu = document.getElementById("side-menu");
	const menuLinks = document.querySelectorAll("#side-menu a");

	// ===================== Ouverture du menu =====================
	menuToggle.addEventListener("click", () => {
		// Ajoute la classe 'open' pour afficher le menu avec une animation
		sideMenu.classList.add("open");
	});

	// ===================== Fermeture du menu =====================
	closeMenu.addEventListener("click", () => {
		// Retire la classe 'open' pour masquer le menu
		sideMenu.classList.remove("open");
	});

	// ===================== Fermeture du menu après la navigation =====================
	menuLinks.forEach(link => {
		link.addEventListener("click", (e) => {
			e.preventDefault(); // Empêche le comportement par défaut

			const targetId = link.getAttribute("href").substring(1); // Récupère l'ID de la section cible
			const targetSection = document.getElementById(targetId);

			if (targetSection) {
				// Ferme le menu après un léger délai pour une navigation fluide
				setTimeout(() => {
					targetSection.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
				}, 300); // délai de 300ms pour s'assurer de la fermeture du menu
			}

			// Retirer la classe 'open' pour fermer le menu immédiatement
			sideMenu.classList.remove("open");
		});
	});

	// ===================== Fermeture du menu si l'utilisateur clique en dehors =====================
	document.addEventListener("click", (e) => {
		if (sideMenu.classList.contains("open") && !sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
			sideMenu.classList.remove("open"); // Ferme le menu si on clique à l'extérieur
		}
	});

	// ===================== Fermeture automatique du menu sur redimensionnement de la fenêtre =====================
	window.addEventListener("resize", () => {
		// Si la largeur de la fenêtre devient supérieure à 768px (écran large), ferme le menu
		if (window.innerWidth > 768) {
			sideMenu.classList.remove("open");
		}
	});

	// ===================== Amélioration du support tactile (mobile) =====================
	menuLinks.forEach(link => {
		// Sur les appareils tactiles, le menu se ferme après un toucher
		link.addEventListener("touchstart", () => {
			setTimeout(() => {
				sideMenu.classList.remove("open");
			}, 300); // Ajout d'un délai pour garantir une transition fluide
		});
	});

	// ===================== Animation de la transition pour le menu =====================
	// Ajouter un effet de transition lors de l'ouverture et fermeture du menu
	sideMenu.style.transition = "transform 0.3s ease, opacity 0.3s ease";

	// ===================== Fermer le menu automatiquement sur de très petits écrans =====================
	// Si la largeur de la fenêtre devient très petite, fermer le menu automatiquement
	if (window.innerWidth <= 768) {
		sideMenu.classList.remove("open"); // Ferme le menu sur les petits écrans
	}
});


// ========== 3. Gestion du thème et Easter Egg ==========
let clickCount = 0; // Compteur de clics

function toggleTheme() {
	// Bascule entre les classes pour les thèmes
	document.body.classList.toggle('light-mode');
	document.body.classList.toggle('dark-mode');

	// Changer l'icône
	const icon = document.getElementById('theme-icon');
	if (document.body.classList.contains('light-mode')) {
		icon.classList.replace('fa-moon', 'fa-sun'); // Soleil pour le mode clair
	} else {
		icon.classList.replace('fa-sun', 'fa-moon'); // Lune pour le mode sombre
	}

	// Gestion du Easter Egg après 10 clics
	clickCount++;
	if (clickCount === 10) {
		displayEasterEgg();
		clickCount = 0; // Réinitialiser le compteur
	}
}

// Fonction pour afficher le Easter Egg
function displayEasterEgg() {
	const easterEgg = document.createElement('div');
	easterEgg.textContent = '42';
	easterEgg.style.cssText = `
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 10rem;
		font-weight: bold;
		color: #ff5733;
		z-index: 9999;
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
		transition: all 0.3s ease;
	`;
	document.body.appendChild(easterEgg);

	// Animation d'agrandissement
	setTimeout(() => {
		easterEgg.style.transform = 'translate(-50%, -50%) scale(3)';
		easterEgg.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0)';
		console.log('« The answer to the ultimate question of life, the universe and everything is 42 »');
	}, 1000);

	// Animation de rétrécissement
	setTimeout(() => {
		easterEgg.style.transform = 'translate(-50%, -50%) scale(0)';
	}, 2000);

	// Suppression après l'animation
	setTimeout(() => {
		easterEgg.remove();
	}, 3000);
}
