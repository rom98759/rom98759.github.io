# Portfolio Moderne - Romain Caillier

## 🎯 Description
Portfolio personnel moderne et responsive développé en HTML/CSS/JavaScript vanilla pour présenter le parcours, les compétences et les projets d'un étudiant développeur à 42 Angoulême.

## ✨ Fonctionnalités

### 🎨 Design et Interface
- **Design moderne et épuré** avec une palette de couleurs professionnelle
- **Animations fluides** et effets de transition
- **Navigation sticky** qui apparaît au scroll
- **Responsive design** adapté mobile/tablette/desktop
- **Effet de frappe animé** pour le texte d'introduction

### 📱 Sections Principales
1. **Hero Section** - Présentation avec effet de frappe
2. **À propos** - Biographie et objectifs professionnels
3. **Présentation personnelle** - Langues, soft skills et passions
4. **Compétences techniques** - Barres de progression animées
5. **Timeline formation** - Parcours académique avec ligne temporelle
6. **Portfolio** - Projets avec overlay interactif
7. **Contact** - Formulaire et informations de contact

### 🚀 Animations et Interactions
- **Scroll animations** - Apparition progressive des sections
- **Hover effects** sur les cartes et boutons
- **Progress bars animées** pour les compétences
- **Timeline interactive** avec points de jalonnement
- **Easter egg** avec code Konami (↑↑↓↓←→←→BA)

### 📱 Responsive Features
- **Menu mobile** avec animation hamburger
- **Grid adaptatif** pour tous les écrans
- **Images optimisées** et responsive
- **Navigation tactile** pour mobile

## 🛠️ Technologies Utilisées
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec Grid et Flexbox
- **JavaScript ES6+** - Interactions et animations
- **Font Awesome** - Icônes vectorielles
- **Google Fonts** - Police Poppins

## 📁 Structure des Fichiers
```
Portfolio/
├── portfolio_moderne.html    # Nouveau portfolio HTML
├── styles_moderne.css        # Styles CSS modernes
├── script_moderne.js         # JavaScript interactif
├── img/                     # Images du portfolio
│   ├── 42.png               # Favicon
│   ├── 42_ecole.jpg         # Photo école 42
│   ├── libft.jpg            # Image projet Libft
│   ├── printf.jpg           # Image projet Printf
│   ├── push_swap.jpg        # Image projet Push Swap
│   ├── minitalk.png         # Image projet Minitalk
│   └── B2B.jpg              # Image projet Born2beRoot
└── README_moderne.md        # Documentation
```

## 🎨 Palette de Couleurs
- **Primary**: #2c3e50 (Bleu foncé)
- **Secondary**: #3498db (Bleu)
- **Accent**: #e74c3c (Rouge)
- **Background**: #f8f9fa (Gris clair)
- **Text**: #333 (Gris foncé)

## 🚀 Installation et Utilisation

### Prérequis
- Navigateur web moderne
- Serveur web local (optionnel)

### Déploiement Local
1. Cloner ou télécharger les fichiers
2. Ouvrir `portfolio_moderne.html` dans un navigateur
3. Ou servir via un serveur local :
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve .

   # PHP
   php -S localhost:8000
   ```

### Déploiement GitHub Pages
1. Renommer `portfolio_moderne.html` en `index.html`
2. Commit et push vers GitHub
3. Activer GitHub Pages dans les paramètres du repository

## 🎯 Fonctionnalités Avancées

### Animations CSS
- **Keyframes** pour les animations d'apparition
- **Transform** et **transition** pour les interactions
- **CSS Grid** et **Flexbox** pour la mise en page
- **Backdrop-filter** pour les effets de flou

### JavaScript Interactif
- **Intersection Observer** pour les animations de scroll
- **Event listeners** optimisés avec throttling
- **Local Storage** pour les préférences (future implémentation)
- **Form validation** et gestion des soumissions

### Accessibilité
- **Navigation clavier** supportée
- **Aria labels** pour les éléments interactifs
- **Contrast ratio** respecté
- **Focus indicators** visibles

## 🔧 Personnalisation

### Modifier les Couleurs
Éditer les variables CSS dans `styles_moderne.css` :
```css
:root {
    --primary-color: #votre-couleur;
    --secondary-color: #votre-couleur;
    --accent-color: #votre-couleur;
}
```

### Ajouter des Projets
Dupliquer une section `.project-card` dans le HTML et modifier :
- L'image du projet
- Le titre et la description
- Les liens GitHub/Demo
- Les tags technologiques

### Modifier les Compétences
Ajuster les barres de progression :
```html
<div class="progress-fill" data-progress="85"></div>
```

## 📱 Compatibilité
- **Chrome** 80+
- **Firefox** 75+
- **Safari** 13+
- **Edge** 80+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🐛 Fonctionnalités à Implémenter
- [ ] Téléchargement de CV réel
- [ ] Envoi de formulaire de contact
- [ ] Mode sombre/clair
- [ ] Multilingue (FR/EN)
- [ ] Blog intégré
- [ ] Analytics

## 🎉 Easter Eggs
- **Konami Code** : ↑↑↓↓←→←→BA pour un effet Matrix
- **Double-click** sur le logo pour une surprise
- **Keyboard shortcuts** pour la navigation

## 📞 Support
Pour toute question ou suggestion :
- **Email**: rcaillie@student.42angouleme.fr
- **GitHub**: [rom98759](https://github.com/rom98759)
- **LinkedIn**: [Romain Caillier](https://www.linkedin.com/in/romain-caillier/)

---

**Développé avec ❤️ et du café ☕ par Romain Caillier**
