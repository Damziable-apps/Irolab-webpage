# IROLAB 🎨

**Extension Chrome gratuite** Manifest V3 pour designers et développeurs. Choisissez, validez et partagez vos couleurs en toute simplicité avec synchronisation Cloud optionnelle.

> 🌐 **Site web** : [irolab.app](https://irolab.app)  
> 📦 **Chrome Web Store** : _À venir_  
> 💬 **Support** : support@irolab.app

## ✨ Fonctionnalités

### 🎯 Sélection de couleurs

- **EyeDropper API** : Pipette intégrée pour sélectionner n'importe quelle couleur à l'écran
- **Bouton dynamique** : Le bouton "Pick a Color" prend la couleur sélectionnée comme arrière-plan avec texte adaptatif
- **Extraction de site web** : Extrait automatiquement les couleurs d'un site web et les organise par tags

### 🎨 Zone de test interactive (Test Area)

- Prévisualisation en temps réel de vos couleurs
- Application de couleurs par drag & drop
- Menu contextuel (clic droit) pour accéder rapidement à l'historique
- Système d'annulation (Undo) pour les changements de palette
- Simulation de daltonisme (protanopie, deutéranopie, tritanopie)

### 📚 Historique et collections

- Sauvegarde automatique des couleurs
- Organisation par tags (sites web, projets, etc.)
- Filtrage par tag et par source (eyedropper, website, playground)
- Affichage des 8 dernières couleurs "pipette" en accès rapide
- Suppression des doublons automatique

### 🔄 Synchronisation Cloud (optionnelle)

- Backend **Supabase** pour la synchronisation multi-appareils
- Authentification email/password ou mode invité
- Sync automatique toutes les 30 secondes
- Indicateur visuel de l'état de synchronisation

### 🎨 Formats de couleur

- **HEX** : `#FF5733`
- **RGB** : `rgb(255, 87, 51)`
- **HSL** : `hsl(14, 100%, 60%)`
- **OKLCH** : `oklch(0.65 0.25 45)`

### 💡 Interface moderne

- Menu déroulant vertical avec texte et icônes
- Tips défilants dans le header pour guider l'utilisateur
- Animations bounce et transitions fluides
- Design responsive et accessible (WCAG AA)
- Support de `prefers-reduced-motion`

## 📦 Structure du projet

```
irolab/
├── src/
│   ├── popup/              # Interface principale (React)
│   │   └── App.jsx
│   ├── background/         # Service Worker (sync, storage)
│   │   └── background.js
│   ├── content/            # Scripts injectés dans les pages
│   │   └── content.js
│   ├── components/         # Composants UI réutilisables
│   │   ├── AuthForm.jsx
│   │   ├── Card.jsx
│   │   ├── ColorHistory.jsx
│   │   ├── ColorPicker.jsx
│   │   ├── ColorPlayground.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Icons.jsx
│   │   ├── Modal.jsx
│   │   ├── Palette.jsx
│   │   ├── SyncPrompt.jsx
│   │   └── WebsiteColors.jsx
│   ├── hooks/              # Hooks React personnalisés
│   │   ├── useAuth.js           # Authentification Supabase
│   │   ├── useCloudSync.js      # Synchronisation Cloud
│   │   ├── useColorSpace.js     # Gestion des couleurs
│   │   └── useSyncPrompt.js     # Prompt de synchronisation
│   ├── lib/                # Logique métier et utilitaires
│   │   ├── auth.js              # Fonctions d'authentification
│   │   ├── ColorManager.ts      # Gestionnaire de couleurs
│   │   ├── colorUtils.js        # Utilitaires couleur
│   │   ├── paletteValidation.js # Validation et simulation daltonisme
│   │   ├── supabase.js          # Client Supabase
│   │   └── tailwindColors.ts    # Palette Tailwind
│   └── styles/             # CSS global
│       └── index.css
├── entrypoints/            # Points d'entrée WXT
│   ├── background.ts
│   ├── content.ts
│   └── popup/
├── supabase/               # Schéma de base de données
│   └── schema.sql
└── public/                 # Assets statiques
    ├── icons/
    └── brand/
        └── kofi.svg
```

## 🔧 Technologies utilisées

- **Framework** : React 18 avec hooks
- **Build** : WXT (Web Extension Tools) + Vite
- **UI** : Tailwind CSS
- **Backend** : Supabase (Auth + Database)
- **Couleurs** : Culori (conversion et manipulation)
- **API** : EyeDropper API, Chrome Extension API

## 🌐 Plateformes et Services

### Infrastructure

- **[Vercel](https://vercel.com)** : Hébergement de la vitrine web (irolab.app)
- **[Supabase](https://supabase.com)** : Backend as a Service
  - Authentification (email/password)
  - Base de données PostgreSQL
  - Synchronisation temps réel
  - Row Level Security (RLS)

### Services Email

- **[Resend](https://resend.com)** : Service d'envoi d'emails transactionnels
  - Emails de confirmation d'inscription
  - Réinitialisation de mot de passe
  - Notifications et support
- **Adresse d'envoi** : `noreply@irolab.app`
  - Domaine vérifié avec SPF/DKIM
  - Template personnalisé aux couleurs IROLAB

### Configuration Email (Supabase)

Pour configurer l'envoi d'emails dans Supabase :

1. Aller dans **Settings** → **Authentication** → **SMTP Settings**
2. Activer **Custom SMTP**
3. Utiliser les credentials Resend :
   ```
   Host: smtp.resend.com
   Port: 587
   Username: resend
   Password: [API Key Resend]
   Sender email: noreply@irolab.app
   Sender name: IROLAB
   ```

Voir `SUPABASE_EMAIL_SETUP.md` pour plus de détails.

## 🎯 Configuration requise

- **Node.js** 18+ et npm
- **Navigateur** : Chrome/Edge/Brave (Manifest V3)
- **Compte Supabase** (optionnel, pour la sync Cloud)

## 📚 Documentation

### Configuration et Setup

- **Démarrage rapide** : `SUPABASE_QUICK_START.md`
- **Setup Supabase complet** : `SUPABASE_SETUP.md`
- **Configuration emails** : `SUPABASE_EMAIL_SETUP.md`
- **Setup Vercel & Vitrine web** : `VERCEL_SETUP.md`

### Architecture et Tests

- **Architecture du projet** : `docs/ARCHITECTURE.md`
- **Guide de test** : `TEST_GUIDE.md`
- **Guide de déploiement** : `DEPLOYMENT_GUIDE.md`

### Chrome Web Store

- **Référence rapide** : `CHROME_STORE_QUICK_REFERENCE.md`
- **Justifications de confidentialité** : `CHROME_STORE_PRIVACY_JUSTIFICATIONS.md`

## ☕ Support

Si vous trouvez IROLAB utile, vous pouvez me soutenir sur [Ko-fi](https://ko-fi.com/damienbrosseau) ❤️

## 📄 Licence

Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

**IROLAB** - Simplifie ton workflow couleur : choisis, valide et partage 🎨
