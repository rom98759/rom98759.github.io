// ===== VARIABLES GLOBALES =====
let isScrolling = false;

// ===== FONCTIONS D'INITIALISATION =====
document.addEventListener('DOMContentLoaded', function () {
	initializeAnimations();
	initializeNavigation();
	initializeTypingEffect();
	initializeScrollEffects();
	initializeProgressBars();
	initializeContactForm();
	initializeMobileMenu();
});

// ===== EFFET DE FRAPPE ANIMÉ =====
function initializeTypingEffect() {
	const typingText = document.getElementById('typingText');
	const texts = [
		'Passionné de cybersécurité et d\'innovation technologique',
		'↑↑↓↓←→←→BA',
		'Étudiant développeur à 42 Angoulême',
		'Spécialisé en C, Python et JavaScript',
		'Créateur de solutions innovantes'
	];

	let textIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let delay = 100;

	function typeWriter() {
		const currentText = texts[textIndex];

		if (isDeleting) {
			typingText.textContent = currentText.substring(0, charIndex - 1);
			charIndex--;
			delay = 50;
		} else {
			typingText.textContent = currentText.substring(0, charIndex + 1);
			charIndex++;
			delay = 100;
		}

		if (!isDeleting && charIndex === currentText.length) {
			isDeleting = true;
			delay = 2000; // Pause avant de commencer à effacer
		} else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			textIndex = (textIndex + 1) % texts.length;
			delay = 500;
		}

		setTimeout(typeWriter, delay);
	}

	// Démarrer l'effet après un délai
	setTimeout(typeWriter, 2500);
}

// ===== NAVIGATION STICKY =====
function initializeNavigation() {
	const navbar = document.getElementById('navbar');
	const navLinks = document.querySelectorAll('.nav-links a');

	// Navigation sticky
	window.addEventListener('scroll', function () {
		if (window.scrollY > 100) {
			navbar.classList.add('visible');
		} else {
			navbar.classList.remove('visible');
		}
	});

	// Smooth scroll pour les liens de navigation
	navLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				const offsetTop = targetElement.offsetTop - 80;
				window.scrollTo({
					top: offsetTop,
					behavior: 'smooth'
				});
			}
		});
	});
}

// ===== MENU MOBILE =====
function initializeMobileMenu() {
	const mobileMenu = document.getElementById('mobileMenu');
	const navLinks = document.getElementById('navLinks');

	mobileMenu.addEventListener('click', function () {
		navLinks.classList.toggle('active');

		// Animation du hamburger
		const spans = mobileMenu.querySelectorAll('span');
		spans.forEach((span, index) => {
			span.style.transform = navLinks.classList.contains('active')
				? `rotate(${index === 1 ? 0 : index === 0 ? 45 : -45}deg) translate(${index === 0 ? '6px, 6px' : index === 2 ? '-6px, 6px' : '0, 0'})`
				: 'none';
		});
	});

	// Fermer le menu mobile lors du clic sur un lien
	navLinks.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', function () {
			navLinks.classList.remove('active');
			const spans = mobileMenu.querySelectorAll('span');
			spans.forEach(span => {
				span.style.transform = 'none';
			});
		});
	});
}

// ===== ANIMATIONS AU SCROLL =====
function initializeScrollEffects() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver(function (entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');

				// Animation spéciale pour la timeline
				if (entry.target.classList.contains('timeline-item')) {
					setTimeout(() => {
						entry.target.style.opacity = '1';
						entry.target.style.transform = 'translateY(0)';
					}, 200);
				}
			}
		});
	}, observerOptions);

	// Observer toutes les sections
	document.querySelectorAll('.section, .timeline-item').forEach(section => {
		observer.observe(section);
	});
}

// ===== BARRES DE PROGRESSION =====
function initializeProgressBars() {
	const progressBars = document.querySelectorAll('.progress-fill');

	const progressObserver = new IntersectionObserver(function (entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const progressBar = entry.target;
				const progress = progressBar.getAttribute('data-progress');

				setTimeout(() => {
					progressBar.style.width = progress + '%';
				}, 300);
			}
		});
	}, { threshold: 0.5 });

	progressBars.forEach(bar => {
		progressObserver.observe(bar);
	});
}

// ===== FORMULAIRE DE CONTACT =====
function initializeContactForm() {
	const contactForm = document.getElementById('contactForm');
	const downloadCV = document.getElementById('downloadCV');

	// Gestion du formulaire de contact
	contactForm.addEventListener('submit', function (e) {
		e.preventDefault();

		// Récupération des données du formulaire
		const formData = new FormData(contactForm);
		const name = formData.get('name');
		const email = formData.get('email');
		const subject = formData.get('subject');
		const message = formData.get('message');

		// Simulation d'envoi (ici vous pourriez intégrer un service d'email)
		showNotification('Message envoyé avec succès! Je vous répondrai rapidement.', 'success');
		contactForm.reset();
	});

	// Téléchargement du CV (simulé)
	downloadCV.addEventListener('click', function (e) {
		e.preventDefault();
		showNotification('Fonctionnalité de téléchargement du CV à implémenter', 'info');
	});
}

// ===== SYSTÈME DE NOTIFICATIONS =====
function showNotification(message, type = 'info') {
	const notification = document.createElement('div');
	notification.className = `notification notification-${type}`;
	notification.textContent = message;

	// Styles de base pour la notification
	notification.style.cssText = `
		position: fixed;
		top: 20px;
		right: 20px;
		padding: 15px 25px;
		border-radius: 8px;
		color: white;
		font-weight: 500;
		z-index: 10000;
		transform: translateX(100%);
		transition: transform 0.3s ease;
		max-width: 350px;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
	`;

	// Couleurs selon le type
	const colors = {
		success: '#27ae60',
		error: '#e74c3c',
		info: '#3498db',
		warning: '#f39c12'
	};

	notification.style.backgroundColor = colors[type] || colors.info;

	document.body.appendChild(notification);

	// Animation d'apparition
	setTimeout(() => {
		notification.style.transform = 'translateX(0)';
	}, 100);

	// Suppression automatique
	setTimeout(() => {
		notification.style.transform = 'translateX(100%)';
		setTimeout(() => {
			if (notification.parentNode) {
				notification.parentNode.removeChild(notification);
			}
		}, 300);
	}, 4000);
}

// ===== ANIMATIONS GÉNÉRALES =====
function initializeAnimations() {
	// Animation de bounce pour les boutons
	document.querySelectorAll('.btn').forEach(btn => {
		btn.addEventListener('mouseenter', function () {
			this.style.transform = 'translateY(-3px) scale(1.05)';
		});

		btn.addEventListener('mouseleave', function () {
			this.style.transform = 'translateY(0) scale(1)';
		});
	});

	// Animation hover pour les cartes de projet
	document.querySelectorAll('.project-card').forEach(card => {
		card.addEventListener('mouseenter', function () {
			this.style.transform = 'translateY(-15px) scale(1.02)';
		});

		card.addEventListener('mouseleave', function () {
			this.style.transform = 'translateY(0) scale(1)';
		});
	});

	// Animation pour les icônes sociales
	document.querySelectorAll('.social-links a').forEach(link => {
		link.addEventListener('mouseenter', function () {
			this.style.transform = 'translateY(-5px) rotate(360deg)';
		});

		link.addEventListener('mouseleave', function () {
			this.style.transform = 'translateY(0) rotate(0deg)';
		});
	});
}

// ===== EASTER EGG =====
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function (e) {
	konamiCode.push(e.keyCode);

	if (konamiCode.length > konamiSequence.length) {
		konamiCode.shift();
	}

	if (konamiCode.toString() === konamiSequence.toString()) {
		activateEasterEgg();
		konamiCode = [];
	}
});

function activateEasterEgg() {
	// Créer un effet Matrix
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	canvas.style.cssText = `
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 9999;
		pointer-events: none;
		background: rgba(0,0,0,0.8);
	`;

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	document.body.appendChild(canvas);

	// Animation Matrix
	const matrix = "01";
	const matrixArray = matrix.split("");
	const fontSize = 15;
	const columns = canvas.width / fontSize;
	const drops = Array(Math.floor(columns)).fill(1);

	function drawMatrix() {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#0F0';
		ctx.font = fontSize + 'px monospace';

		for (let i = 0; i < drops.length; i++) {
			const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);

			if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				drops[i] = 0;
			}
			drops[i]++;
		}
	}

	const matrixInterval = setInterval(drawMatrix, 35);

	// Message Easter Egg
	setTimeout(() => {
		const message = document.createElement('div');
		message.textContent = '🎉 Konami Code activé! Vous avez trouvé l\'Easter Egg! 🎉';
		message.style.cssText = `
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
			color: white;
			padding: 30px;
			border-radius: 15px;
			font-size: 1.2rem;
			font-weight: bold;
			text-align: center;
			z-index: 10000;
			box-shadow: 0 10px 30px rgba(0,0,0,0.3);
			animation: pulse 2s infinite;
		`;

		document.body.appendChild(message);

		setTimeout(() => {
			clearInterval(matrixInterval);
			canvas.remove();
			message.remove();
		}, 5000);
	}, 2000);
}

// ===== PERFORMANCE ET OPTIMIZATION =====
// Throttle pour les événements de scroll
function throttle(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

// Optimisation du scroll
window.addEventListener('scroll', throttle(function () {
	// Mise à jour de la navigation active
	updateActiveNavigation();
}, 16)); // ~60fps

function updateActiveNavigation() {
	const sections = document.querySelectorAll('section[id]');
	const navLinks = document.querySelectorAll('.nav-links a');

	let currentSection = '';

	sections.forEach(section => {
		const sectionTop = section.offsetTop - 100;
		if (window.scrollY >= sectionTop) {
			currentSection = section.getAttribute('id');
		}
	});

	navLinks.forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href') === `#${currentSection}`) {
			link.classList.add('active');
		}
	});
}

// ===== ACCESSIBILITÉ =====
// Support clavier pour la navigation
document.addEventListener('keydown', function (e) {
	if (e.key === 'Tab') {
		document.body.classList.add('using-keyboard');
	}
});

document.addEventListener('mousedown', function () {
	document.body.classList.remove('using-keyboard');
});

// Ajout de styles pour l'accessibilité clavier
const style = document.createElement('style');
style.textContent = `
	.using-keyboard *:focus {
		outline: 2px solid #3498db !important;
		outline-offset: 2px !important;
	}

	@keyframes pulse {
		0% { transform: translate(-50%, -50%) scale(1); }
		50% { transform: translate(-50%, -50%) scale(1.05); }
		100% { transform: translate(-50%, -50%) scale(1); }
	}
`;
document.head.appendChild(style);
