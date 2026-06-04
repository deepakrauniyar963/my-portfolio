# 🚀 Git, GitHub & Vercel Complete Handbook

## From Zero to Live Website (Deepak Edition)

Author: Deepak Rauniyar

---

# Chapter 1: What Are Git, GitHub and Vercel?

## Git

Git ek Version Control System hai.

Ye track karta hai:

* Kaunsi file change hui
* Kab change hui
* Kisne change ki
* Purane version par kaise wapas jaana hai

Think:

Git = Time Machine for Code

---

## GitHub

GitHub ek cloud storage platform hai jahan Git repositories store hoti hain.

Think:

Git = Local Diary

GitHub = Online Backup

---

## Vercel

Vercel website ko internet par live karta hai.

Think:

Laptop → GitHub → Vercel → Live Website

---

# Chapter 2: Required Software

Install these before starting.

## VS Code

Purpose:

Code editor

Download:

https://code.visualstudio.com

---

## Node.js

Purpose:

React/Vite projects run karne ke liye

Download:

https://nodejs.org

Install LTS Version.

---

## Git

Purpose:

Version Control

Download:

https://git-scm.com/downloads

---

# Chapter 3: Verify Installation

Open Terminal in VS Code:

Ctrl + `

Run:

```bash
node -v
```

---

Run:

```bash
npm -v
```

---

Run:

```bash
git --version
```

All commands should return versions.

---

# Chapter 4: Open Project

VS Code

File → Open Folder

Select:

my-portfolio

---

# Chapter 5: Run Project Locally

Install packages:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Expected:

```text
http://localhost:5173
```

Open in browser.

---

# Chapter 6: Test Production Build

Before deployment always run:

```bash
npm run build
```

Success example:

```text
✓ built in 1.79s
```

If build fails:

Fix errors first.

Never deploy broken builds.

---

# Chapter 7: Create GitHub Repository

Login GitHub.

Click:

* → New Repository

Repository Name:

```text
my-portfolio
```

Visibility:

Public

Do NOT select:

* README
* License
* .gitignore

Click:

Create Repository

---

# Chapter 8: First Git Setup

Only once per computer:

```bash
git config --global user.name "Deepak Rauniyar"
```

```bash
git config --global user.email "deepakrauniyar963@gmail.com"
```

Verify:

```bash
git config --global user.name
```

```bash
git config --global user.email
```

---

# Chapter 9: Upload Project To GitHub

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Create commit:

```bash
git commit -m "Initial Portfolio Upload"
```

Create main branch:

```bash
git branch -M main
```

Connect GitHub:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
```

Example:

```bash
git remote add origin https://github.com/deepakrauniyar963/my-portfolio.git
```

Verify:

```bash
git remote -v
```

Push:

```bash
git push -u origin main
```

Browser login aa sakta hai.

Allow kar dena.

---

# Chapter 10: Verify GitHub Upload

Open repository.

You should see:

```text
src
public
package.json
vite.config.js
```

Upload successful.

---

# Chapter 11: Deploy To Vercel

Login:

https://vercel.com

Continue with GitHub

---

Click:

Add New

↓

Project

↓

Import Repository

↓

my-portfolio

---

Verify:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

Click:

Deploy

---

# Chapter 12: Live Website

Example:

```text
https://my-portfolio.vercel.app
```

Your website is now live.

---

# Chapter 13: Change Vercel URL

Dashboard

↓

Project

↓

Settings

↓

General

↓

Project Name

Change:

```text
my-portfolio-drab-kappa-71
```

To:

```text
deepakrauniyar
```

New URL:

```text
https://deepakrauniyar.vercel.app
```

---

# Chapter 14: Future Updates

Whenever code changes:

Check status:

```bash
git status
```

Add changes:

```bash
git add .
```

Create commit:

```bash
git commit -m "Describe changes"
```

Push:

```bash
git push
```

Vercel automatically redeploys.

No need to upload again.

---

# Chapter 15: Most Common Commands

## Check Changed Files

```bash
git status
```

---

## See Connected Repository

```bash
git remote -v
```

---

## See Commit History

```bash
git log
```

---

## Pull Latest Code

```bash
git pull
```

---

## Push Latest Code

```bash
git push
```

---

# Chapter 16: Common Errors

## Author Identity Unknown

Fix:

```bash
git config --global user.name "Deepak Rauniyar"
```

```bash
git config --global user.email "deepakrauniyar963@gmail.com"
```

---

## Remote Origin Already Exists

Fix:

```bash
git remote remove origin
```

Then:

```bash
git remote add origin REPOSITORY_URL
```

---

## Build Failed

Run:

```bash
npm run build
```

Read error carefully.

---

## Everything Up-To-Date

Meaning:

```text
No new changes to push.
```

Not an error.

---

## LF / CRLF Warnings

Meaning:

Windows line ending warning.

Safe to ignore.

---

# Final Workflow (The Only Things You'll Use Most)

For daily updates:

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "What changed"
```

```bash
git push
```

Done.

Vercel will automatically deploy the new version.

---

# Real Project Flow

```text
Write Code
     ↓
npm run build
     ↓
git add .
     ↓
git commit -m "Update"
     ↓
git push
     ↓
GitHub
     ↓
Vercel Auto Deploy
     ↓
Live Website Updated
```

---

# Congratulations

You now know:

✅ Git

✅ GitHub

✅ Repository Creation

✅ Uploading Code

✅ Commits

✅ Branches

✅ Vercel Deployment

✅ Automatic Updates

✅ Common Errors

✅ Complete Portfolio Deployment Workflow

You can now take a React/Vite project from your laptop to a live website on the internet.
