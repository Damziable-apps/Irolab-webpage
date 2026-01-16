# 🎨 IROLAB Landing Page

Page vitrine officielle de l'extension Chrome **IROLAB**.

## 🌐 Live

**Production** : [irolab.app](https://irolab.app)

## 📦 Stack Technique

- **Framework** : React 18
- **Build Tool** : Vite 5
- **Styling** : Tailwind CSS 3
- **Icons** : Lucide React
- **Hosting** : Vercel
- **Font** : Inter (Google Fonts)

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) (s'ouvre automatiquement)

### Build de production

```bash
npm run build
```

Le site sera construit dans le dossier `dist/`

### Preview du build

```bash
npm run preview
```

## 📁 Structure du projet

```
irolab-webpage/
├── public/
│   ├── favicon.svg              # Favicon IROLAB
│   └── screenshots/             # Captures d'écran de l'extension
│       ├── capture-1.png        # Interface Eyedropper
│       ├── capture-2.png        # Menu principal
│       └── capture-3.png        # Historique
├── src/
│   ├── App.jsx                  # Composant principal (Landing Page)
│   ├── main.jsx                 # Point d'entrée React
│   └── index.css                # Styles Tailwind
├── index.html                   # Template HTML
├── vite.config.js               # Configuration Vite
├── tailwind.config.js           # Configuration Tailwind
├── vercel.json                  # Configuration Vercel
└── package.json                 # Dépendances
```

## 🎨 Personnalisation

### Couleurs de la marque

Les couleurs IROLAB sont définies dans `src/App.jsx` :

```javascript
const COLORS = {
  magenta: '#d60cbd',  // Couleur principale
  green: '#05d723',    // Couleur secondaire
  black: '#000000',
  dark: '#0a0a0a',
  gray: '#1a1a1a'
};
```

### Screenshots

Pour ajouter vos captures d'écran :

1. Placez vos images dans `public/screenshots/`
2. Nommez-les : `capture-1.png`, `capture-2.png`, `capture-3.png`
3. Format recommandé : PNG, ratio 9:16 (portrait)

## 🚢 Déploiement

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour les instructions complètes.

### Déploiement rapide sur Vercel

```bash
# Installer la CLI Vercel
npm i -g vercel

# Déployer
vercel --prod
```

## ✨ Fonctionnalités de la page

### Navigation
- Menu fixe avec effet de scroll
- Liens d'ancrage vers les sections
- Design responsive

### Sections
- **Hero** : Présentation avec démo interactive
- **Gallery** : Captures d'écran de l'extension
- **Features** : Grille de fonctionnalités clés
- **Tech Stack** : Technologies utilisées
- **Footer** : Liens et support Ko-fi

### Composants interactifs
- `DemoPlayground` : Simulation de l'interface de l'extension
- Animations et transitions fluides
- Support du `prefers-reduced-motion`

## 📊 Performance

Optimisations incluses :
- ⚡ Build optimisé avec Vite
- 🎨 CSS purgé avec Tailwind
- 📦 Code splitting automatique
- 🖼️ Lazy loading des images
- 🗜️ Compression Brotli/Gzip (Vercel)

## 🔧 Scripts disponibles

```bash
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run preview   # Preview du build local
```

## 🌐 SEO et Meta Tags

Le fichier `index.html` inclut :
- Meta tags Open Graph (Facebook)
- Meta tags Twitter Card
- Description et keywords optimisés
- Favicon et icônes

## 📝 Licence

MIT License - voir [LICENSE](../LICENSE)

## 👨‍💻 Auteur

**Damien Brosseau**
- 🌐 Website : [irolab.app](https://irolab.app)
- ☕ Ko-fi : [ko-fi.com/damienbrosseau](https://ko-fi.com/damienbrosseau)
- 📧 Email : support@irolab.app

---

**IROLAB** - Your colors, mastered 🎨
