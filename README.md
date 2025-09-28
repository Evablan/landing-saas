# Landing Page SaaS - Template Moderne

Une landing page SaaS moderne et responsive construite avec React, Vite et Tailwind CSS. Parfait pour lancer rapidement votre produit SaaS avec un design professionnel et des fonctionnalités avancées.

## 🚀 Fonctionnalités

- **Design moderne** avec effets glassmorphism et gradients animés
- **Responsive** - Optimisé pour tous les appareils
- **Mode sombre/clair** - Toggle de thème intégré
- **Animations fluides** - Transitions et micro-interactions
- **Accessibilité** - Conforme aux standards WCAG
- **Performance** - Optimisé avec Vite et React
- **SEO Ready** - Structure sémantique et meta tags

## 📋 Sections incluses

- **Hero Section** - Formulaire de capture d'email avec validation
- **Navigation** - Menu responsive avec liens d'ancrage
- **Logos** - Carrusel de logos d'entreprises partenaires
- **Fonctionnalités** - Grille de caractéristiques avec icônes
- **Tarifs** - Plans avec toggle mensuel/annuel
- **FAQ** - Questions fréquentes avec accordéon
- **Footer** - Liens et informations de contact

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI moderne
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **JavaScript ES6+** - Syntaxe moderne
- **CSS3** - Animations et effets visuels
- **HTML5** - Structure sémantique

## 🚀 Installation

### Prérequis
- Node.js 16+ 
- npm ou yarn

### Installation des dépendances
```bash
npm install
# ou
yarn install
```

### Démarrage du serveur de développement
```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## 📦 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Linting
npm run lint
```

## 🎨 Personnalisation

### Couleurs et thème
Modifiez les couleurs dans `src/index.css` :
```css
.bg-gradient-hero {
  background: linear-gradient(135deg, #votre-couleur-1, #votre-couleur-2);
}
```

### Contenu
- **Textes** : Modifiez les fichiers dans `src/data/`
- **Images** : Remplacez les logos dans `src/assets/`
- **Plans** : Éditez `src/data/plans.js`

### Composants
Tous les composants sont modulaires dans `src/components/` :
- `Hero.jsx` - Section principale
- `Navbar.jsx` - Navigation
- `Features.jsx` - Fonctionnalités
- `Pricing/` - Section tarifs
- `FAQ.jsx` - Questions fréquentes

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploadez le dossier dist/
```

### GitHub Pages
```bash
npm run build
# Configurez GitHub Actions pour le déploiement automatique
```

## 📱 Responsive Design

- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## ♿ Accessibilité

- Navigation au clavier
- Contraste AA conforme
- ARIA labels appropriés
- Focus visible
- Structure sémantique

## 🎯 Performance

- **Lighthouse Score** : 95+
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 📄 Licence

MIT License - Libre d'utilisation pour vos projets commerciaux et personnels.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ouvrir une issue
- Proposer une pull request
- Partager vos améliorations

## 📞 Support

Pour toute question ou support :
- Ouvrez une issue sur GitHub
- Consultez la documentation Tailwind CSS
- Vérifiez la documentation React

---

**Créé avec ❤️ pour la communauté développeur**
