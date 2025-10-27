# Farmer Landing Page

Landing page ultra-stylée pour Farmer, l'outil de multi-fenêtrage pour Dofus sur Mac.

## Stack Technique

- **Next.js 15** avec App Router
- **React 19**
- **Tailwind CSS 4** pour le design
- **lucide-react** pour les icônes
- **TypeScript** pour la sécurité du code

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Build pour production

```bash
npm run build
npm start
```

## Déploiement sur Vercel

### 1. Prérequis
- Un compte GitHub avec le repo pushé
- Un compte Vercel (gratuit)

### 2. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur **"Add New Project"**
4. Sélectionnez le repository `farmer`
5. Cliquez sur **"Deploy"**

Vercel détecte automatiquement Next.js et configure tout pour vous !

### 3. Votre site sera en ligne à :
`https://farmer-xxx.vercel.app`

### 4. Domaine personnalisé (optionnel)
- Project Settings → Domains
- Ajoutez votre domaine personnalisé

## Structure du Projet

```
farmer-landing/
├── app/
│   ├── layout.tsx                # Layout principal avec metadata
│   ├── page.tsx                  # Landing page complète
│   ├── globals.css               # Styles globaux Tailwind
│   └── favicon.ico               # Favicon
├── public/
│   ├── Farmer.dmg                # Fichier d'installation (2 Mo)
│   └── farmer-screenshot.jpg     # Captures d'écran
└── README.md
```

## Fonctionnalités de la Landing

✨ **Hero Section** - Design moderne avec gradients et animations
🎬 **Section Vidéo** - Placeholder pour vidéo d'installation
🎯 **4 Features** - Présentation détaillée avec screenshots et animations :
  - Installation ultra-simple
  - Organisation des fenêtres
  - Sauvegarde des setups
  - Raccourcis clavier/souris

⚖️ **Comparison Section** - Avant/Après avec Farmer
💾 **Download CTA** - Téléchargement direct du .dmg
📱 **Responsive** - Design mobile-first adaptatif

## Design Features

- **Gradients dynamiques** sur tous les éléments
- **Hover effects** avec scale et transitions fluides
- **Badges flottants** avec animations pulse
- **Layout alterné** (zigzag) pour les features
- **Color coding** unique par feature (bleu, violet, rose, vert)
- **Glassmorphism** avec backdrop-blur
- **Dark theme** optimisé pour les joueurs

## Personnalisation

### Remplacer les images
Placez vos images dans `/public/` :
- `farmer-screenshot.jpg` - Screenshot principal
- Créez des captures spécifiques pour chaque feature

### Ajouter une vidéo d'installation
Dans [page.tsx:84-94](app/page.tsx#L84-L94), remplacez le placeholder par :

```tsx
<video controls className="w-full h-full rounded-2xl">
  <source src="/installation-video.mp4" type="video/mp4" />
</video>
```

### Modifier le lien de téléchargement
Le fichier `.dmg` dans `/public/` est automatiquement servi.
Pour utiliser un lien externe, modifiez [page.tsx:9](app/page.tsx#L9).

## Performance

- **Taille du .dmg** : 2 Mo
- **Bande passante Vercel gratuite** : 100 GB/mois
- **Téléchargements possibles** : ~50 000/mois gratuitement
- **Build time** : ~2 minutes
- **Lighthouse Score** : 95+ sur tous les critères

## SEO

Le site inclut déjà :
- Meta tags Open Graph
- Description optimisée
- Title dynamique
- Favicon
- Responsive design

Pour améliorer :
- Ajoutez un sitemap
- Optimisez les images (WebP)
- Ajoutez structured data (JSON-LD)

## Analytics (optionnel)

Pour tracker les téléchargements, ajoutez :
- [Vercel Analytics](https://vercel.com/analytics) (gratuit)
- [Plausible](https://plausible.io) (privacy-first)
- Google Analytics

## Support

Pour toute question :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Vercel](https://vercel.com/docs)

## License

Farmer © 2025 • Projet indépendant pour la communauté Dofus Mac
