---
sidebar_position: 1
title: Git & GitHub
description: Git and GitHub workshop guide.
---

# Git & GitHub

This guide covers the commands used during the workshop.

## 1. Check Git

```bash
git --version
```

## 2. Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 3. Create a Repository

```bash
mkdir somnog9-demo
cd somnog9-demo
git init
```

## 4. First Commit

```bash
git add .
git commit -m "Initial commit"
```

## 5. Push to GitHub

Create an empty repository on GitHub, then connect your local repository:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git branch -M main
git push -u origin main
```

> Keep this page open while following the facilitator's practical exercise.
