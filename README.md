# Farmer Landing Page

Landing page ultra-stylée pour Farmer, l'outil de multi-fenêtrage pour Dofus sur Mac.

## Stack Technique

- **Next.js 15** avec App Router
- **Tailwind CSS 4** pour le design
- **Stripe** pour les paiements
- **Vercel** pour l'hébergement
- **Vercel Blob** pour héberger le fichier .dmg
- **lucide-react** pour les icônes

## Installation

```bash
npm install
```

## Configuration

1. Créez un fichier `.env.local` basé sur `.env.example`
2. Ajoutez vos clés Stripe (test ou production)
3. Configurez votre URL de base

```env
STRIPE_SECRET_KEY=sk_test_votre_cle
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

## Configuration Stripe

### 1. Créer un compte Stripe
- Allez sur [stripe.com](https://stripe.com)
- Créez un compte et activez le mode test

### 2. Récupérer vos clés API
- Dashboard → Developers → API keys
- Copiez la Secret key et la Publishable key

### 3. Configurer les webhooks (optionnel mais recommandé)
Pour vérifier les paiements de manière sécurisée :

```bash
# Installer Stripe CLI
brew install stripe/stripe-cli/stripe

# Se connecter
stripe login

# Écouter les webhooks en local
stripe listen --forward-to localhost:3000/api/webhooks
```

## Upload du .dmg sur Vercel Blob

### 1. Installer @vercel/blob

```bash
npm install @vercel/blob
```

### 2. Obtenir un token Vercel Blob
- Allez dans votre projet Vercel
- Settings → Environment Variables
- Créez `BLOB_READ_WRITE_TOKEN`

### 3. Upload du fichier

Créez un script pour uploader votre .dmg :

```typescript
// scripts/upload-dmg.ts
import { put } from '@vercel/blob';

const file = await readFile('./Farmer.dmg');
const blob = await put('farmer.dmg', file, {
  access: 'public',
  token: process.env.BLOB_READ_WRITE_TOKEN,
});

console.log('Upload URL:', blob.url);
```

### 4. Mettre à jour la page de succès
Remplacez l'URL placeholder dans `app/success/page.tsx` par l'URL Vercel Blob.

## Déploiement sur Vercel

### 1. Connecter le repo GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin votre-repo.git
git push -u origin main
```

### 2. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Import your repository
3. Ajoutez les variables d'environnement :
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_BASE_URL`
   - `BLOB_READ_WRITE_TOKEN`
4. Deploy !

### 3. Configurer le domaine personnalisé (optionnel)
- Project Settings → Domains
- Ajoutez votre domaine personnalisé

## Structure du Projet

```
farmer-landing/
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts          # API Stripe checkout
│   ├── success/
│   │   └── page.tsx              # Page après paiement
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Styles globaux
├── .env.example                  # Template variables env
└── README.md
```

## Fonctionnalités de la Landing

✨ **Hero Section** - Design à la Apple avec gradients et animations
🎯 **Features Section** - 3 features principales avec icônes et hover effects
⚖️ **Comparison Section** - Avant/Après avec Farmer
💳 **Pricing Section** - CTA principal pour l'achat
✅ **Success Page** - Téléchargement après paiement

## Prochaines étapes recommandées

1. **Vérification des paiements**
   - Implémenter `/api/webhooks` pour vérifier les paiements Stripe
   - Générer des liens de téléchargement uniques et temporaires

2. **Analytics**
   - Ajouter Google Analytics ou Plausible
   - Tracker les conversions

3. **SEO**
   - Ajouter un sitemap
   - Optimiser les images
   - Ajouter des structured data

4. **Email**
   - Envoyer un email de confirmation avec le lien de téléchargement
   - Utiliser Resend ou SendGrid

## Support

Pour toute question sur le déploiement ou la configuration, consultez :
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Stripe](https://stripe.com/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Vercel Blob](https://vercel.com/docs/storage/vercel-blob)

## License

Farmer © 2025
