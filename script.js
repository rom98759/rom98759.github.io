// Function to dynamically add projects
// function addProject(title, description) {
// 	const projectList = document.querySelector('.project-list');
// 	const projectDiv = document.createElement('div');
// 	projectDiv.classList.add('project');

// 	projectDiv.innerHTML = `
//         <h3>${title}</h3>
//         <p>${description}</p>
//     `;

// 	projectList.appendChild(projectDiv);
// }

// Add example projects dynamically
// document.addEventListener('DOMContentLoaded', () => {
// 	addProject('Libft', 'Developed a C library containing utility functions such as ft_atoi, ft_strdup, and more. Conforms to 42 coding standards.');
// 	addProject('Get Next Line', 'Developed a program that reads a line of text from a file or standard input.');
// 	addProject('Push Swap', 'Developed an optimized sorting algorithm to sort an array of numbers using two stacks.');
// });


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
}
