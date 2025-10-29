"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download, MousePointer, Layers, Save, Sparkles, Play, Coffee, MessageSquare, Bug } from "lucide-react";

// Hook pour détecter l'OS de l'utilisateur
function useDetectOS() {
  const [os, setOS] = useState<'mac' | 'windows' | 'unknown'>('unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes('mac') || userAgent.includes('darwin')) {
      setOS('mac');
    } else if (userAgent.includes('win')) {
      setOS('windows');
    } else {
      // Fallback : Mac par défaut si détection échoue
      setOS('mac');
    }
  }, []);

  return os;
}

export default function Home() {
  const os = useDetectOS();

  const handleDownload = () => {
    const link = document.createElement('a');

    if (os === 'windows') {
      // Téléchargement Windows
      link.href = '/Dofus Switcher v1.0.0.zip';
      link.download = 'Dofus-Switcher-v1.0.0.zip';
    } else {
      // Téléchargement macOS (par défaut)
      link.href = '/Farmer.dmg';
      link.download = 'Farmer.dmg';
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Labels dynamiques selon l'OS
  const osLabel = os === 'windows' ? 'Windows' : 'macOS';
  const fileType = os === 'windows' ? '.zip' : '.dmg';

  // Screenshots dynamiques selon l'OS (placeholder pour le moment)
  const screenshots = {
    main: os === 'windows' ? '/farmer-screenshot.jpg' : '/farmer-screenshot.jpg',
    feature1: os === 'windows' ? '/farmer-screenshot.jpg' : '/farmer-screenshot.jpg', // Installation
    feature2: os === 'windows' ? '/farmer-screenshot.jpg' : '/farmer-screenshot.jpg', // Organisation
    feature3: os === 'windows' ? '/farmer-screenshot.jpg' : '/farmer-screenshot.jpg', // Sauvegarde
    feature4: os === 'windows' ? '/farmer-screenshot.jpg' : '/farmer-screenshot.jpg', // Raccourcis
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Sticky Support Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Coffee className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300 hidden sm:inline">
              Farmer est gratuit
            </span>
            <span className="text-sm text-gray-300 sm:hidden">
              Soutenez le projet
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://buymeacoffee.com/baptistemorillon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-medium text-white hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 hover:scale-105"
            >
              <Coffee className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Buy me a coffee</span>
              <span className="sm:hidden">Soutenir</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-12">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">
              Pour les joueurs Dofus sur {os === 'windows' ? 'Windows & Mac' : 'Mac & Windows'}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Farmer
          </h1>

          <p className="text-xl md:text-3xl text-gray-300 mb-4 font-semibold">
            Le multi-fenêtrage réinventé
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Switche entre tes fenêtres Dofus à la vitesse de l&apos;éclair
          </p>

          {/* CTA Button */}
          <button
            onClick={handleDownload}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/50"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger pour {osLabel}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Gratuit • Open Source • Fichier {fileType}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Installation Video Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Installation en{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                30 secondes
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Y a plus qu&apos;à cliquer
            </p>
          </div>

          {/* Video Container */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            {/* Video wrapper */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black p-3 rounded-3xl border border-white/10 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center">
                {/* TODO: Remplacer par votre vidéo */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/30 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-gray-400">Vidéo d&apos;installation à venir</p>
                  <p className="text-sm text-gray-500 mt-2">Télécharger • Installer • Jouer</p>
                </div>
              </div>
            </div>

            {/* Floating time badge */}
            <div className="absolute -top-4 -right-4 hidden lg:block">
              <div className="bg-green-500/90 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg border border-green-400/50">
                ⚡ 30s chrono
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 4 features principales avec screenshots */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Tout ce dont vous avez besoin,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                rien de plus
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Quatre fonctionnalités qui changent tout
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature 1 - Installation simple */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                  <Download className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">Feature 01</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Installation{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ultra-simple
                  </span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-6">
                  Téléchargez le .dmg, glissez dans Applications, lancez. C&apos;est tout.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Aucun compte à créer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Aucune configuration compliquée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>Farmer fonctionne immédiatement</span>
                  </li>
                </ul>
              </div>

              {/* Screenshot */}
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-2xl border border-blue-500/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={screenshots.feature1}
                    alt={`Installation simple de Farmer sur ${osLabel}`}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2 - Organisation des fenêtres */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Screenshot */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-2xl border border-purple-500/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={screenshots.feature2}
                    alt={`Organisation des fenêtres Dofus sur ${osLabel}`}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 hidden lg:block">
                  <div className="bg-purple-500/90 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-purple-400/50 animate-pulse">
                    Glissez & déposez 🎯
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-400 font-medium">Feature 02</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Organisez{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    comme vous voulez
                  </span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-6">
                  Sélectionnez les fenêtres que vous voulez utiliser, dans l&apos;ordre qui vous convient.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Détection automatique de toutes vos fenêtres Dofus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Réorganisez par glisser-déposer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Contrôle total sur l&apos;ordre de vos fenêtres</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Ordres pré-définis */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6">
                  <Save className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-pink-400 font-medium">Feature 03</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Sauvegardez{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                    vos setups
                  </span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-6">
                  Enregistrez vos ordres de fenêtres préférés et rechargez-les en un clic.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">✓</span>
                    <span>Créez des configurations Farm, PvP, Donjon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">✓</span>
                    <span>Autant de setups que nécessaire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">✓</span>
                    <span>Switchez instantanément entre configurations</span>
                  </li>
                </ul>
              </div>

              {/* Screenshot */}
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-2xl border border-pink-500/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={screenshots.feature3}
                    alt={`Sauvegarde des configurations sur ${osLabel}`}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 hidden lg:block">
                  <div className="bg-pink-500/90 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-pink-400/50 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    Setup en 1 clic 💾
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 - Raccourcis clavier/souris */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Screenshot */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-2 rounded-2xl border border-green-500/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={screenshots.feature4}
                    alt={`Configuration des raccourcis sur ${osLabel}`}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                {/* Floating badges - Multiple shortcuts */}
                <div className="absolute -bottom-4 -left-4 hidden lg:flex gap-2">
                  <div className="bg-green-500/90 backdrop-blur-xl text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg border border-green-400/50">
                    ⌘1
                  </div>
                  <div className="bg-green-500/90 backdrop-blur-xl text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg border border-green-400/50" style={{ animationDelay: '0.2s' }}>
                    ⌘2
                  </div>
                  <div className="bg-green-500/90 backdrop-blur-xl text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg border border-green-400/50" style={{ animationDelay: '0.4s' }}>
                    M4
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                  <MousePointer className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Feature 04</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Raccourcis{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    ultra-rapides
                  </span>
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-6">
                  Bindez vos raccourcis clavier ou boutons de souris pour switcher à la vitesse de l&apos;éclair.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Support clavier complet (⌘, ⌥, ⌃, ⇧)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Boutons souris (M3, M4, M5...)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Aucun menu, vous êtes déjà sur la bonne fenêtre</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Prêt à{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              transformer
            </span>{" "}
            votre expérience ?
          </h2>
          <p className="text-xl text-gray-400 mb-16">
            Téléchargez Farmer maintenant et commencez à jouer comme jamais
          </p>

          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl" />
            <div className="relative">
              <div className="text-7xl font-bold mb-4">100% Gratuit</div>
              <div className="text-gray-300 text-lg mb-8">Lifetime</div>

              <ul className="space-y-4 text-left max-w-md mx-auto mb-10 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Toutes les features incluses</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Mises à jour gratuites à vie</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Aucun compte requis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Téléchargement immédiat</span>
                </li>
              </ul>

              <button
                onClick={handleDownload}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Download className="w-6 h-6" />
                <span>Télécharger Farmer maintenant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-500 mt-6">
                Compatible {os === 'windows' ? 'Windows 10+' : 'macOS 13+'} • Fichier {fileType}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback & Bug Report Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Feedback & Bug Report
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Votre retour est précieux pour améliorer Farmer. Signalez un bug, proposez une feature, ou partagez votre expérience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* GitHub Issues */}
            <a
              href="https://airtable.com/appfFqCYGSrnHTIt1/shrUSnWe7gNggTib7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Bug className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Reporter un Bug</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Signalez un problème technique ou un comportement inattendu de l&apos;application.
                </p>
                <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Ouvrir une issue</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* Feature Request */}
            <a
              href="https://airtable.com/appfFqCYGSrnHTIt1/shrUSnWe7gNggTib7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Proposer une Feature</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Partagez vos idées pour améliorer Farmer et ajouter de nouvelles fonctionnalités.
                </p>
                <div className="flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Suggérer une idée</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-center text-gray-400 text-sm">
              Vous pouvez aussi me contacter directement via{" "}
              <a href="mailto:morillon.bapt@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                email
              </a>
              {" "}ou sur{" "}
              <a href="https://x.com/mrbee_m" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p className="text-sm">
            Farmer © 2025 • Conçu avec ❤️‍🔥 pour la communauté Dofus Mac
          </p>
          <p className="text-xs mt-2">
            Dofus est une marque déposée d&apos;Ankama. Farmer est un projet indépendant.
          </p>
        </div>
      </footer>
    </div>
  );
}
