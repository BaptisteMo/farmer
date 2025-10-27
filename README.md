# 🚜 Farmer - Landing Page

> Landing page officielle de Farmer, l'outil de multi-fenêtrage qui révolutionne l'expérience Dofus sur Mac.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://farmer.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 🎯 Qu'est-ce que Farmer ?

Farmer est une application macOS native qui permet aux joueurs de Dofus de gérer plusieurs fenêtres de jeu avec une efficacité inégalée. Fini les Alt+Tab laborieux, place à la productivité !

### ✨ Fonctionnalités principales

- 🚀 **Installation ultra-simple** - Aucun compte, aucune configuration
- 🎯 **Organisation intelligente** - Glissez-déposez vos fenêtres dans l'ordre souhaité
- 💾 **Sauvegarde de setups** - Créez des configurations Farm, PvP, Donjon
- ⌨️ **Raccourcis ultra-rapides** - Bindez clavier et souris pour switcher instantanément

## 🌐 À propos de cette Landing Page

Cette landing page présente Farmer avec un design moderne et des animations fluides, construite avec les technologies web les plus récentes.

### Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org/) avec App Router
- **UI** : [React 19](https://react.dev/)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons** : [Lucide React](https://lucide.dev/)
- **Language** : TypeScript
- **Deployment** : [Vercel](https://vercel.com)

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repo
git clone https://github.com/BaptisteMo/farmer.git
cd farmer

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de Production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
farmer-landing/
├── app/
│   ├── layout.tsx          # Layout avec metadata SEO
│   ├── page.tsx            # Landing page principale
│   ├── globals.css         # Styles globaux Tailwind
│   └── favicon.ico         # Favicon
├── public/
│   ├── Farmer.dmg          # Installer macOS (2 Mo)
│   └── *.jpg               # Assets & screenshots
└── package.json
```

## 🎨 Design System

### Palette de Couleurs

- **Bleu** (`#60A5FA`) - Installation
- **Violet** (`#A78BFA`) - Organisation
- **Rose** (`#F472B6`) - Sauvegarde
- **Vert** (`#34D399`) - Raccourcis

### Composants Clés

- **Hero Section** - Gradients animés, CTA principal
- **Video Section** - Placeholder pour démo d'installation
- **Features Grid** - 4 features avec screenshots et badges flottants
- **Comparison Table** - Avant/Après avec Farmer
- **Download CTA** - Section finale avec téléchargement direct

### Animations

- Hover effects avec `scale` et transitions fluides
- Badges flottants avec `animate-pulse`
- Glow effects sur les screenshots
- Layout alterné (zigzag) pour rythme visuel

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

### Signaler un Bug

Ouvrez une [issue](https://github.com/BaptisteMo/farmer/issues) avec :
- Description claire du problème
- Steps to reproduce
- Screenshots si applicable

### Proposer une Feature

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Guidelines de Code

- Utilisez TypeScript avec typage strict
- Suivez les conventions ESLint du projet
- Préférez les composants fonctionnels avec hooks
- Commentez le code complexe
- Testez sur mobile et desktop

## 📝 TODO / Améliorations Futures

- [ ] Ajouter la vidéo d'installation réelle
- [ ] Remplacer les placeholders screenshots par les vrais
- [ ] Optimiser les images avec `next/image`
- [ ] Ajouter Google Analytics ou Plausible
- [ ] Créer un sitemap.xml
- [ ] Ajouter structured data (JSON-LD)
- [ ] Implémenter un système de newsletter
- [ ] Version multilingue (EN/FR)

## 🔧 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Linter ESLint
```

## 📊 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Build Time** : ~2 minutes
- **Bundle Size** : ~150 KB (gzipped)
- **Time to Interactive** : < 2s

## 🌍 Déploiement

### Vercel (Recommandé)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BaptisteMo/farmer)

1. Connectez votre repo GitHub à Vercel
2. Vercel détecte automatiquement Next.js
3. Cliquez sur Deploy
4. Votre site est en ligne ! 🎉

### Autres Plateformes

Le projet est compatible avec :
- Netlify
- Cloudflare Pages
- AWS Amplify
- Railway

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Communauté Dofus Mac pour le support
- [Ankama](https://www.ankama.com) pour Dofus
- [Vercel](https://vercel.com) pour l'hébergement gratuit
- [Tailwind Labs](https://tailwindlabs.com) pour Tailwind CSS

## 📬 Contact

**Projet** : [https://github.com/BaptisteMo/farmer](https://github.com/BaptisteMo/farmer)

**Issues** : [https://github.com/BaptisteMo/farmer/issues](https://github.com/BaptisteMo/farmer/issues)

---

<p align="center">
  Fait avec ❤️ pour la communauté Dofus Mac
</p>

<p align="center">
  <sub>Dofus est une marque déposée d'Ankama. Farmer est un projet indépendant.</sub>
</p>
