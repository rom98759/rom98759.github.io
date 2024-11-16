# Portfolio

## Description

This is a portfolio of my work. It includes a brief bio, a list of projects, and contact information.

## Add some projects

To add a project, call the `addProject` function with the title and description of the project.
This function will create a new `div` element with the class `project`, and add it to the project list.
Normally, this function is safe to use, as it uses `textContent` to insert the title and description, which prevents the execution of any HTML or JS code.

```javascript
function addProject(title, description) {
	const projectList = document.querySelector('.project-list');
	const projectDiv = document.createElement('div');
	projectDiv.classList.add('project');

	// Utilisation de textContent pour éviter l'exécution de tout code HTML ou JS
	const titleElement = document.createElement('h3');
	titleElement.textContent = title;  // Insère le titre comme texte brut

	const descriptionElement = document.createElement('p');
	descriptionElement.textContent = description;  // Insère la description comme texte brut

	projectDiv.appendChild(titleElement);
	projectDiv.appendChild(descriptionElement);

	projectList.appendChild(projectDiv);
}
```
