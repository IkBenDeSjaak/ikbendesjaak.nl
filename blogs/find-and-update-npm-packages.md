---
title: "How to find and update NPM packages?"
date: "2022-07-13"
category: "Tech"
description: "GitHub notifies you when you have dependencies in your project with security vulnerabilities. But often it complains about an NPM package I didn't even install by myself. It's a package that a package I did install depends on. But which package that I did install is the parent of that package?"
---

GitHub notifies you when you have dependencies in your project with security vulnerabilities. But often it complains about an NPM package I didn't even install by myself. It's a package that a package I did install depends on. But which package that I did install is the parent of that package?

1. Go to your repository on [GitHub](https://github.com).
2. Go to _`Security` → `Dependabot alerts`_ to find all security issues that this bot has found in your repository.
3. Click on one of the security issues. This will show you the name of the vulnerable package, the reason why this package is vulnerable and which versions are affected.
4. Open a terminal and navigate to the root of your project.

5. To check which package or packages that you installed depends on this package run the following command.

```bash
npm ls NAME-OF-PACKAGE
```

6. To find out what installed packages have newer versions you can run the following command. Note that there is not always a newer version for the parent package you want to update.

```bash
npm outdated
```

7. To update a package to the latest version you can run the following command.

```bash
npm update NAME-OF-PACKAGE --save
```

OR you can also specify a version you want to update to.

```bash
npm update NAME-OF-PACKAGE@1.0.0 --save-dev
```

---

Sources:

-   [https://stackoverflow.com/questions/31923195/how-to-find-reverse-dependencies-on-npm-package](https://stackoverflow.com/questions/31923195/how-to-find-reverse-dependencies-on-npm-package)
-   [https://stackoverflow.com/questions/16525430/npm-check-and-update-package-if-needed](https://stackoverflow.com/questions/16525430/npm-check-and-update-package-if-needed)
