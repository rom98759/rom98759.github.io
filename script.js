
fetch('https://api.github.com/users/rom98759/repos')
	.then(response => response.json())
	.then(data => {
		const projectsContainer = document.getElementById('github-projects');
		data.forEach(repo => {
			if (repo.name !== '42-project-badges' && repo.name !== 'rom98759.github.io') {
				const projectDiv = document.createElement('div');
				projectDiv.classList.add('project');
				projectDiv.innerHTML = `
					<h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
					<p>${repo.description}</p>
				`;
				projectsContainer.appendChild(projectDiv);
			}
		});
	});


let clickCount = 0;  // Compteur de clics

function toggleTheme() {
	// Bascule entre les classes de mode
	document.body.classList.toggle('light-mode');
	document.body.classList.toggle('dark-mode');

	// Récupère l'icône
	const icon = document.getElementById('theme-icon');

	// Change l'icône en fonction du mode
	if (document.body.classList.contains('light-mode')) {
		// print the current theme
		console.log('light mode');
		icon.classList.remove('fa-moon');
		icon.classList.add('fa-sun'); // Icône de soleil pour le mode clair
	} else {
		// print the current theme
		console.log('dark mode');
		icon.classList.remove('fa-sun');
		icon.classList.add('fa-moon'); // Icône de lune pour le mode sombre
	}


	// Incrémente le compteur de clics
	clickCount++;

	// Si l'utilisateur a cliqué 42 fois
	if (clickCount === 5) {
		// Crée un élément avec le numéro 42
		const easterEgg = document.createElement('div');
		easterEgg.textContent = '42';
		easterEgg.style.position = 'fixed';
		easterEgg.style.top = '50%';
		easterEgg.style.left = '50%';
		easterEgg.style.transform = 'translate(-50%, -50%)';
		easterEgg.style.fontSize = '10rem';
		easterEgg.style.fontWeight = 'bold';
		easterEgg.style.color = '#ff5733'; // Couleur du texte
		easterEgg.style.zIndex = '9999'; // S'assurer qu'il est au-dessus de tout
		easterEgg.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
		easterEgg.style.transition = 'all 0.3s ease'; // Transition initiale

		// Ajoute l'élément à la page
		document.body.appendChild(easterEgg);

		// Lance animation grow
		setTimeout(() => {
			easterEgg.style.transform = 'translate(-50%, -50%) scale(3)'; // Fait grossir l'élément encore plus
			easterEgg.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0)'; // Cache l'ombre
		}, 1000); // Attend 1s avant de lancer l'animation

		// Lance animation shrink
		setTimeout(() => {
			easterEgg.style.transform = 'translate(-50%, -50%) scale(0)'; // Fait rétrécir l'élément
		}, 2000); // Attend 2s avant de lancer l'animation

		// Supprime l'élément après l'animation
		setTimeout(() => {
			easterEgg.remove();
			clickCount = 0; // Réinitialise le compteur de clics
		}, 2000); // Attend 2s avant de supprimer l'élément


	}
}
