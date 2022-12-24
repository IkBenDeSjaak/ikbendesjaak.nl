---
title: "How to copy files from an old repo to a new repo?"
date: "2022-12-23"
category: "Tech"
description: "When migrating from one version control system to another you want to keep all the files from the old repository obviously, but what can be more tricky is keeping the whole commit history as well. This little tutorial will show how to transfer all files from one repository to another including the commit history."
---

When migrating from one version control system to another you want to keep all the files from the old repository obviously, but what can be more tricky is keeping the whole commit history as well. This little tutorial will show how you can get all files from one repository to another including the commit history.

1. Create a new empty repository on [GitHub](https://github.com) and don't thick any boxes that will initialize the repository.
2. Open a terminal.
3. Clone the old repository with the `--bare` flag.

    ```bash
    git clone --bare https://github.com/EXAMPLE-USER/OLD-REPO-NAME.git
    ```

4. Navigate to the old repository in the terminal.

    ```bash
    cd OLD-REPO-NAME.git
    ```

5. Mirror-push to the new repository.

    ```bash
    git push --mirror https://github.com/EXAMPLE-USER/NEW-REPO-NAME.git
    ```

6. Get out of the old repository directory.

    ```bash
    cd ..
    ```

7. Remove the old repository folder. Remove this folder manually if this command does not work.

    ```bash
    rm -rf OLD-REPO-NAME.git
    ```

You have now succesfully copied all files and commit history from one repository to another.
