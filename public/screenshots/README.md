# 📸 Screenshots IROLAB

Placez vos 3 captures d'écran ici avec les noms suivants :

## Captures requises

### 1. `capture-1.png` - Interface Eyedropper
**Contenu** : Page "Color Selection" avec :
- Bouton "Pick a Color" (violet/magenta)
- Bouton "Extract Site Colors" (rouge/corail)
- Section "Recent Colors" avec grille de couleurs

### 2. `capture-2.png` - Test Area (Main Menu)
**Contenu** : Page "Color Test Area" avec :
- Zone de test interactive
- Sections modifiables
- Palette utilisée en bas
- Simulateur de daltonisme

### 3. `capture-3.png` - Collections/History
**Contenu** : Page "Collections" avec :
- Collection "Web palette.com"
- Section "Untagged" avec couleurs
- Navigation en bas

## Format recommandé

- **Type** : PNG (optimisé)
- **Ratio** : 9:16 (portrait, comme popup d'extension)
- **Taille** : ~500KB max par image
- **Résolution** : Haute qualité, sera automatiquement optimisée

## Comment ajouter les images

### Via Finder (macOS)
1. Ouvrez le Finder
2. Naviguez vers : `/Users/brosseaudamien/Projets_Web/Irolab-webpage/public/screenshots/`
3. Glissez-déposez vos 3 images
4. Renommez-les exactement : `capture-1.png`, `capture-2.png`, `capture-3.png`

### Via Terminal
```bash
cd /Users/brosseaudamien/Projets_Web/Irolab-webpage/public/screenshots/
# Puis copiez vos images ici
```

### Via Cursor
1. Clic droit sur le dossier `public/screenshots/` dans la sidebar
2. "Reveal in Finder"
3. Ajoutez vos images

## Vérification

Après avoir ajouté les images, vérifiez que le site fonctionne :

```bash
npm run dev
```

Puis allez sur http://localhost:3000 et scrollez jusqu'à la section "App Overview" !

---

**Note** : Si les images ne s'affichent pas, vérifiez que :
- Les noms sont exactement `capture-1.png`, `capture-2.png`, `capture-3.png`
- Les fichiers sont bien dans `public/screenshots/`
- Vous avez rechargé la page (Cmd+Shift+R)
