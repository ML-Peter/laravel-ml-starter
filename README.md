
# Laravel Blade Starter

**Laravel Blade Starter** est un outil CLI qui permet d’installer et de configurer automatiquement le **LaravelDaily Starter Kit**.
En une commande, tu obtiens un projet Laravel prêt à l’emploi avec authentification, migrations et compilation des assets.

## 🚀 Installation


Clone le dépôt et installe l’outil globalement :

```bash
git clone https://github.com/<ton-compte>/laravel-ml-starter.git
cd laravel-ml-starter
npm install -g .
```


Vérifie que l’installation fonctionne :

```bash
laravel-blade-starter --version
```

## ⚡ Utilisation


Lance la commande :

```bash
laravel-blade-starter
```

Tu seras guidé par un assistant interactif :

* Nom de ton projet local
* Option de création automatique d’un dépôt GitHub
* Dépôt **public** ou **privé** si GitHub est choisi


## 🛠️ Fonctionnalités

* 📥 Clone automatiquement le **LaravelDaily Starter Kit**
* 📦 Installe les dépendances **PHP** (Composer) et **JS** (NPM)
* ⚙️ Configure `.env` et génère la clé Laravel
* 🗄️ Lance les migrations avec `--seed`
* 🎨 Compile les assets avec `npm run build`
* 🌍 Option : crée et configure automatiquement un dépôt **GitHub** (via token personnel)


## 📋 Pré-requis

Avant d’utiliser `laravel-ml-starter`, assure-toi d’avoir installé :

* [Git](https://git-scm.com/)
* [PHP](https://www.php.net/) (>= 8.1 recommandé)
* [Composer](https://getcomposer.org/)
* [Node.js & NPM](https://nodejs.org/)
* [MySQL](https://www.mysql.com/) ou autre SGBD compatible avec Laravel


## 🔑 Création de dépôt GitHub (optionnel)

Si tu actives l’option GitHub, il te faudra :

* Un [Personal Access Token](https://github.com/settings/tokens) avec la permission `repo`.
* Le script créera automatiquement le dépôt et y poussera ton code.


## 🎉 Exemple d’installation complète

```bash
laravel-ml-starter
```

Réponds aux questions → et ton projet Laravel est prêt à être utilisé sur **[http://127.0.0.1:8000](http://127.0.0.1:8000)** 🎉


## 📄 Licence

MIT © 2025 – Créé par **Pierre MULEMBA**
