#!/bin/bash

# Script de push rapide pour Farmer Landing
# Usage: ./push.sh "votre message de commit"

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Vérifier si un message de commit est fourni
if [ -z "$1" ]; then
  echo -e "${RED}❌ Erreur: Veuillez fournir un message de commit${NC}"
  echo -e "${BLUE}Usage: ./push.sh \"votre message de commit\"${NC}"
  exit 1
fi

COMMIT_MESSAGE="$1"

echo -e "${BLUE}🚀 Démarrage du push...${NC}\n"

# Ajouter tous les fichiers
echo -e "${BLUE}📦 Ajout des fichiers...${NC}"
git add -A

# Vérifier s'il y a des changements
if git diff --staged --quiet; then
  echo -e "${RED}❌ Aucun changement à commiter${NC}"
  exit 0
fi

# Afficher les fichiers modifiés
echo -e "\n${GREEN}✓ Fichiers modifiés:${NC}"
git status --short

# Créer le commit
echo -e "\n${BLUE}💾 Création du commit...${NC}"
git commit -m "$COMMIT_MESSAGE

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push vers origin main
echo -e "\n${BLUE}☁️  Push vers GitHub...${NC}"
git push origin main

# Message de succès
if [ $? -eq 0 ]; then
  echo -e "\n${GREEN}✅ Push réussi !${NC}"
  echo -e "${GREEN}🌐 Vercel va automatiquement redéployer votre site${NC}"
else
  echo -e "\n${RED}❌ Erreur lors du push${NC}"
  exit 1
fi
