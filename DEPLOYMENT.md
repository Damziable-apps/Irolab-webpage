# 🚀 Déploiement sur Vercel

Ce guide vous explique comment déployer la landing page IROLAB sur Vercel.

## Prérequis

- Compte [Vercel](https://vercel.com) (gratuit)
- Dépôt Git (GitHub, GitLab, ou Bitbucket)
- Node.js 18+ installé localement

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

## Déploiement sur Vercel

### Option 1 : Via l'interface Vercel (recommandé)

1. **Connectez votre dépôt Git**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New..." → "Project"
   - Importez votre dépôt GitHub/GitLab/Bitbucket

2. **Configuration du projet**
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`

3. **Variables d'environnement** (optionnel)
   - Vous pouvez ajouter des variables d'environnement si nécessaire
   - Par exemple : `VITE_APP_VERSION`, `VITE_API_URL`, etc.

4. **Déployez**
   - Cliquez sur "Deploy"
   - Vercel va automatiquement détecter la configuration grâce au fichier `vercel.json`

### Option 2 : Via la CLI Vercel

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

## Déploiement automatique

Vercel va automatiquement :
- ✅ Déployer chaque commit sur la branche principale en production
- ✅ Créer des previews pour chaque Pull Request
- ✅ Générer des URLs de preview uniques
- ✅ Activer HTTPS automatiquement
- ✅ Optimiser les assets (images, CSS, JS)

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
