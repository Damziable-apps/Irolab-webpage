# 🤝 Guide de contribution

Merci de votre intérêt pour contribuer à la landing page IROLAB !

## 🚀 Workflow de développement

### 1. Fork et Clone

```bash
# Fork le projet sur GitHub, puis :
git clone https://github.com/VOTRE_USERNAME/irolab-webpage.git
cd irolab-webpage
npm install
```

### 2. Créer une branche

```bash
git checkout -b feature/ma-super-feature
# ou
git checkout -b fix/correction-bug
```

### 3. Développer

```bash
npm run dev
```

Faites vos modifications dans `src/`

### 4. Tester

```bash
# Build de production
npm run build

# Tester le build
npm run preview
```

### 5. Commit

Utilisez des messages de commit clairs :

```bash
git add .
git commit -m "feat: ajout section témoignages"
# ou
git commit -m "fix: correction responsive mobile"
# ou
git commit -m "docs: mise à jour README"
```

**Convention de commits** :
- `feat:` nouvelle fonctionnalité
- `fix:` correction de bug
- `docs:` documentation
- `style:` formatage, CSS
- `refactor:` refactoring
- `perf:` amélioration performance
- `test:` ajout de tests
- `chore:` tâches de maintenance

### 6. Push et Pull Request

```bash
git push origin feature/ma-super-feature
```

Puis créez une Pull Request sur GitHub.

## 📋 Standards de code

### Structure des composants

```jsx
// Composant fonctionnel React
const MonComposant = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  
  // Logique du composant
  
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
};
```

### Classes Tailwind

- Utilisez les classes Tailwind utilitaires
- Groupez par type : layout → spacing → colors → typography → effects
- Exemple : `flex items-center gap-4 px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800`

### Couleurs de la marque

Toujours utiliser les couleurs IROLAB définies :

```javascript
const COLORS = {
  magenta: '#d60cbd',  // Primaire
  green: '#05d723',    // Secondaire
  black: '#000000',
  dark: '#0a0a0a',
  gray: '#1a1a1a'
};
```

## ✅ Checklist avant PR

- [ ] Le code build sans erreur (`npm run build`)
- [ ] Pas de warnings ESLint
- [ ] Le site est responsive (mobile, tablet, desktop)
- [ ] Les animations respectent `prefers-reduced-motion`
- [ ] Les images ont des attributs `alt`
- [ ] Le code est commenté si nécessaire
- [ ] La documentation est à jour

## 🎨 Design Guidelines

- **Dark mode only** : fond noir (`#000000`)
- **Contraste élevé** : respecter WCAG AA
- **Animations subtiles** : transitions 200-300ms
- **Espacement cohérent** : utiliser l'échelle Tailwind (4, 6, 8, 12, etc.)
- **Icônes** : Lucide React uniquement

## 🐛 Reporter un bug

Utilisez les [GitHub Issues](https://github.com/VOTRE_USERNAME/irolab-webpage/issues) avec :

- Description claire du bug
- Étapes pour reproduire
- Comportement attendu vs observé
- Screenshots si pertinent
- Navigateur et version

## 💡 Proposer une feature

1. Ouvrez une issue pour discuter de la feature
2. Attendez validation avant de coder
3. Créez votre PR avec la feature

## 📞 Questions ?

- 💬 GitHub Issues : [github.com/Damziable-apps/Irolab/issues](https://github.com/Damziable-apps/Irolab/issues)
- All support is provided through GitHub Issues for transparency and community benefit

---

Merci de contribuer à IROLAB ! 🎨
