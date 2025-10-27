# Configuration du système de paiement Farmer

## 🔐 Étape 1 : Récupérer les clés Stripe

1. Va sur ton [Dashboard Stripe en mode Test](https://dashboard.stripe.com/test/apikeys)
2. Copie la **Secret key** (commence par `sk_test_...`)
3. Copie la **Publishable key** (commence par `pk_test_...`)
4. Ajoute-les dans le fichier `.env.local` :

```env
STRIPE_SECRET_KEY=sk_test_ta_cle_ici
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_ta_cle_ici
```

## 🔗 Étape 2 : Configurer le Payment Link Stripe

1. Va sur ton [Payment Link Stripe](https://dashboard.stripe.com/test/payment-links)
2. Clique sur ton lien existant : `https://buy.stripe.com/test_aFa28r2rqeLe9KXgHpcIE00`
3. Clique sur les 3 petits points `⋮` → **Edit link**
4. Dans la section **After payment** :
   - Success URL : `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`
   - Cancel URL : `http://localhost:3000/`
5. Sauvegarde

**Important** : Le `{CHECKOUT_SESSION_ID}` sera automatiquement remplacé par Stripe

## 🧪 Étape 3 : Tester le flow complet

### 3.1 Lancer le serveur de dev

```bash
npm run dev
```

### 3.2 Tester le paiement

1. Ouvre [http://localhost:3000](http://localhost:3000)
2. Clique sur "Obtenir Farmer pour 3€"
3. Tu arrives sur la page Stripe
4. Utilise une carte de test :
   - **Numéro** : `4242 4242 4242 4242`
   - **Date** : N'importe quelle date future (ex: `12/34`)
   - **CVC** : N'importe quel code à 3 chiffres (ex: `123`)
   - **Nom** : N'importe quel nom
   - **Email** : Ton email de test

5. Valide le paiement
6. Tu devrais voir :
   - **Loading** : "Vérification du paiement..."
   - **Success** : "Paiement confirmé !" avec le bouton de téléchargement

### 3.3 Tester la sécurité

Si tu essaies d'accéder à `/success` sans payer ou avec un mauvais `session_id`, tu verras :
- Message d'erreur rouge
- Redirection automatique vers l'accueil après 5 secondes

## ✅ Ce qui fonctionne maintenant

- ✅ Redirection vers Stripe Payment Link
- ✅ Vérification du paiement via API Stripe
- ✅ Protection de la page de téléchargement
- ✅ 3 états visuels : Loading, Success, Error
- ✅ Design premium avec animations
- ✅ Bouton de téléchargement (sans effet pour le moment)

## 🚀 Prochaine étape : Upload du .dmg

Une fois que tu auras uploadé ton fichier sur Vercel Blob, tu devras :

1. Remplacer le `onClick` du bouton dans `/app/success/page.tsx` ligne 134-140
2. Utiliser l'URL Vercel Blob au lieu du `alert()`

Exemple :
```typescript
<button
  onClick={() => {
    window.location.href = "https://VERCEL_BLOB_URL/farmer.dmg";
  }}
  className="..."
>
```

## 📝 Notes importantes

- **Mode Test** : Tous les paiements sont en mode test, aucun vrai argent n'est débité
- **Sécurité** : La vérification se fait côté serveur avec l'API Stripe
- **Session ID** : Unique par transaction, impossible de le réutiliser
- **Email** : L'email du client est récupéré et affiché sur la page success

## 🐛 Debugging

Si ça ne marche pas :

1. Vérifie que `.env.local` contient bien tes clés Stripe
2. Vérifie que tu as configuré l'URL de success dans le Payment Link
3. Regarde la console du navigateur (F12) pour les erreurs
4. Vérifie les logs dans le terminal où tourne `npm run dev`
