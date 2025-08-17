#!/usr/bin/env node
import inquirer from 'inquirer';
import shell from 'shelljs';
import simpleGit from 'simple-git';
import fetch from 'node-fetch';

const git = simpleGit();

const main = async () => {
  console.log('🚀 Installation automatique du LaravelDaily Starter Kit avec laravel-ml-starter');

  const { repoName, useGitHub } = await inquirer.prompt([
    { type: 'input', name: 'repoName', message: 'Nom du projet local / dépôt GitHub :' },
    { type: 'confirm', name: 'useGitHub', message: 'Créer aussi un dépôt GitHub ?' }
  ]);

  // Clonage du Starter Kit
  shell.exec(`git clone https://github.com/LaravelDaily/starter-kit.git ${repoName}`);
  shell.cd(repoName);

  // Installation des dépendances
  shell.exec('composer install');
  shell.exec('npm install');

  // Configuration Laravel
  const copyCmd = process.platform === 'win32' ? 'copy .env.example .env' : 'cp .env.example .env';
  shell.exec(copyCmd);
  shell.exec('php artisan key:generate');
  shell.exec('php artisan migrate --seed');
  shell.exec('npm run build');

  // Git local
  await git.init();
  await git.add('.');
  await git.commit('Initial commit');

  // Dépôt GitHub
  if (useGitHub) {
    const { token, privateRepo } = await inquirer.prompt([
      { type: 'password', name: 'token', message: 'Ton GitHub Personal Access Token (permission repo) :' },
      { type: 'confirm', name: 'privateRepo', message: 'Le dépôt doit-il être privé ?' }
    ]);

    const res = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        name: repoName,
        private: privateRepo
      })
    });

    if (!res.ok) {
      console.error('❌ Échec de la création du dépôt GitHub', await res.text());
      process.exit(1);
    }
    const { ssh_url } = await res.json();
    await git.addRemote('origin', ssh_url);
    await git.push('origin', 'main');
    console.log('✅ Dépôt GitHub créé et code poussé');
  }

  console.log('🎉 Installation complète terminée !');
};

main();
