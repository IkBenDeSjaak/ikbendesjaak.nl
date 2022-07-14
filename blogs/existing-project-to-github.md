---
title: "How to push an existing project to GitHub?"
date: "2021-10-12"
category: "Tech"
description: "Sometimes I want to push a project to GitHub. But often when I do that my project is somehow nested in some folders on GitHub instead of having the root of my project there. That's why I decided to figure out how to make sure that won't happen anymore and how I'll always be able to push a fresh project to GitHub."
---

Sometimes I want to push a project to GitHub. But often when I do that my project is somehow nested in some folders on GitHub instead of having the root of my project there. That's why I decided to figure out how to make sure that won't happen anymore and how I'll always be able to push a fresh project to GitHub.

1. Create a new empty repository on [GitHub](https://github.com) and don't thick any boxes that will already add files to your repository.
2. Go to the project on your file system and add a `.gitignore` file to the root of your project. On GitHub you can find some useful [templates](https://github.com/github/gitignore) for `.gitignore` files.
3. Open a terminal.
4. Run the following command in the terminal to create a new Git repository.

```bash
git init
```

5. To stage all files of your project before committing run the following command.

```bash
git add .
```

6. To commit all staged files run the following command after replace `WRITE YOUR OWN MESSAGE` with your own commit message.

```bash
git commit -m "WRITE YOUR OWN MESSAGE"
```

7. Run the following command to rename the local branch from `master` to `main`. We have to do this because the default master branch on GitHub is called `main`, but the default branch created with the `git init` command is called `master`.

```bash
git branch --move main
```

OR you could also use a shortcut with the following command.

```bash
git branch -M main
```

8. Copy the remote URL of your repository on GitHub.

9. Run the following command to add a remote to the repository so git knows to what remote you want to push your files. Replace the example remote URL with your own URL.

```sh
git remote add origin https://github.com/IkBenDeSjaak/EXAMPLE.git
```

10. To finally push your files to your repository use the following command.

```sh
git push -u origin main
```
