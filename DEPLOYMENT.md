# 🚀 Déploiement GitHub → Vercel

Ce guide vous explique comment déployer la landing page IROLAB sur Vercel via GitHub (workflow recommandé).

## Prérequis

- Compte [GitHub](https://github.com) (gratuit)
- Compte [Vercel](https://vercel.com) (gratuit)
- Node.js 18+ installé localement

## 📋 Workflow de déploiement

```
Code local → Git Push → GitHub → Vercel (auto-deploy)
```

Chaque commit sur `main` déploie automatiquement en production !

## Configuration locale

### 1. Installation des dépendances

```bash
npm install
```

### 2. Développement local

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### 3. Build de production

```bash
npm run build
```

Le build sera généré dans le dossier `dist/`

### 4. Prévisualisation du build

```bash
npm run preview
```

## 🔗 Configuration GitHub → Vercel

### Étape 1 : Créer le dépôt GitHub

1. **Initialisez Git** (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit: IROLAB landing page"
```

2. **Créez un repo sur GitHub**
   - Allez sur [github.com/new](https://github.com/new)
   - Nommez-le : `irolab-webpage` ou `irolab-landing`
   - Laissez-le **public** ou **privé** selon vos préférences

3. **Push vers GitHub**

```bash
git remote add origin https://github.com/VOTRE_USERNAME/irolab-webpage.git
git branch -M main
git push -u origin main
```

### Étape 2 : Connecter Vercel à GitHub (recommandé)

1. **Connectez votre compte GitHub à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Sign Up" ou "Log In"
   - Choisissez "Continue with GitHub"
   - Autorisez Vercel à accéder à vos repos

2. **Importez votre projet**
   - Cliquez sur "Add New..." → "Project"
   - Sélectionnez votre dépôt `irolab-webpage`
   - Si le repo n'apparaît pas, cliquez sur "Adjust GitHub App Permissions"

3. **Configuration du projet**
   
   Vercel détecte automatiquement Vite, mais vérifiez :
   - **Framework Preset** : `Vite`
   - **Root Directory** : `./` (racine)
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

   > 💡 Le fichier `vercel.json` configure déjà tout automatiquement !

4. **Variables d'environnement** (optionnel)
   
   Si besoin, ajoutez des variables d'environnement :
   - `VITE_APP_VERSION`
   - `VITE_ANALYTICS_ID`
   - etc.

5. **Déployez**
   - Cliquez sur "Deploy"
   - Attendez 30-60 secondes
   - ✅ Votre site est en ligne !

### Option alternative : Via la CLI Vercel

1. **Installer la CLI Vercel**

```bash
npm i -g vercel
```

2. **Login**

```bash
vercel login
```

3. **Déployer**

```bash
vercel
```

Pour un déploiement en production :

```bash
vercel --prod
```

## Configuration du domaine

### Domaine personnalisé (irolab.app)

1. Dans votre projet Vercel, allez dans **Settings** → **Domains**
2. Ajoutez `irolab.app` et `www.irolab.app`
3. Configurez vos DNS selon les instructions Vercel :

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Attendez la propagation DNS (peut prendre jusqu'à 48h, généralement ~15 min)

## 🔄 Déploiement automatique (CI/CD)

Une fois Vercel connecté à GitHub, **tout est automatisé** :

### Production (branche `main`)
```bash
git add .
git commit -m "Update landing page"
git push origin main
```
→ ✅ Déploiement automatique en production sur `irolab.app`

### Preview (Pull Requests)
1. Créez une branche : `git checkout -b feature/new-section`
2. Faites vos modifications
3. Créez une Pull Request sur GitHub
→ ✅ Vercel génère automatiquement une URL de preview unique !

### Ce que Vercel fait automatiquement :
- ✅ Déploie chaque commit sur `main` en production
- ✅ Crée des previews pour chaque Pull Request
- ✅ Génère des URLs de preview uniques (ex: `irolab-webpage-abc123.vercel.app`)
- ✅ Active HTTPS automatiquement (Let's Encrypt)
- ✅ Optimise les assets (images, CSS, JS)
- ✅ Purge le cache CDN automatiquement
- ✅ Envoie des notifications Discord/Slack (si configuré)

## Performance et Optimisations

Le fichier `vercel.json` inclut déjà :
- Headers de sécurité (X-Frame-Options, CSP, etc.)
- Cache optimisé pour les assets statiques
- Compression Brotli/Gzip automatique
- Rewrites pour le routing SPA

## Variables d'environnement de production

Si vous avez besoin de variables d'environnement :

1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez vos variables (ex: `VITE_ANALYTICS_ID`)
3. Redéployez le projet

⚠️ **Important** : Les variables Vite doivent commencer par `VITE_` pour être accessibles côté client.

## Monitoring et Analytics

Vercel fournit automatiquement :
- 📊 **Analytics** : Trafic, performance, Core Web Vitals
- 🐛 **Error tracking** : Logs d'erreurs en temps réel
- 🚀 **Speed Insights** : Métriques de performance

Activez-les dans **Settings** → **Analytics**

## Commandes utiles

```bash
# Build local
npm run build

# Preview du build
npm run preview

# Deploy en preview
vercel

# Deploy en production
vercel --prod

# Voir les logs
vercel logs

# Lister les déploiements
vercel ls
```

## Support

Pour toute question :
- 📧 Email : support@irolab.app
- 📚 Docs Vercel : [vercel.com/docs](https://vercel.com/docs)

---

**Made with ❤️ by Damien Brosseau**
