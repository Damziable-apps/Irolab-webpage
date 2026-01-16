# ⚡ Quick Start - IROLAB Landing Page

Guide de démarrage ultra-rapide pour déployer votre landing page sur Vercel via GitHub.

## 🚀 En 5 minutes chrono

### 1️⃣ Installation locale (1 min)

```bash
cd /Users/brosseaudamien/Projets_Web/Irolab-webpage
npm install
npm run dev
```

✅ Ouvrez http://localhost:5173

### 2️⃣ Ajout des screenshots (1 min)

Placez vos 3 captures d'écran dans `public/screenshots/` :

```bash
public/screenshots/
├── capture-1.png  # Eyedropper interface
├── capture-2.png  # Main menu
└── capture-3.png  # History
```

Format : PNG, ratio 9:16 (portrait), ~500KB max

### 3️⃣ Push sur GitHub (2 min)

```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit: IROLAB landing page"

# Créer un repo sur GitHub : https://github.com/new
# Nom suggéré : irolab-webpage

# Push
git remote add origin https://github.com/VOTRE_USERNAME/irolab-webpage.git
git branch -M main
git push -u origin main
```

### 4️⃣ Déployer sur Vercel (1 min)

1. Allez sur [vercel.com](https://vercel.com)
2. "Continue with GitHub"
3. "Add New Project"
4. Sélectionnez `irolab-webpage`
5. Cliquez sur "Deploy"

⏱️ 30 secondes plus tard → **Votre site est en ligne !** 🎉

### 5️⃣ Domaine personnalisé (optionnel)

Dans Vercel :
- Settings → Domains
- Add `irolab.app`
- Configurez vos DNS selon les instructions

---

## 🔄 Workflow quotidien

```bash
# Faire des modifications
npm run dev

# Build et test
npm run build
npm run preview

# Déployer
git add .
git commit -m "feat: nouvelle section"
git push
```

→ Vercel déploie automatiquement ! ✨

---

## 📚 Guides complets

- **Déploiement détaillé** : [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Documentation technique** : [WEBPAGE_README.md](./WEBPAGE_README.md)
- **Contribution** : [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 🆘 Problèmes courants

### Build échoue sur Vercel

```bash
# Tester localement
npm run build

# Vérifier les dépendances
npm ci
```

### Images ne s'affichent pas

- Vérifiez que les images sont dans `public/screenshots/`
- Format PNG recommandé
- Noms exacts : `capture-1.png`, `capture-2.png`, `capture-3.png`

### Modifications non visibles

- Videz le cache du navigateur (Cmd+Shift+R)
- Attendez 1-2 minutes (propagation CDN)
- Vérifiez le déploiement dans Vercel Dashboard

---

**C'est tout !** Votre landing page IROLAB est en ligne 🚀

Questions ? → support@irolab.app
