---
title: "How to sign your commits?"
date: "2022-07-13"
category: "Tech"
description: "Recently I read that people could falsely commit on my name. This can be done by simply doing a commmit with someone else's config values which values you can easily discover. So how can we show to everyone that my commit is really mine? The solution for this is by using signed commits."
---

Recently I read that people could falsely commit on my name. This can be done by simply doing a commmit with someone else's `git config user.name` and `git config user.email` values which values you can easily discover with `git log`. So how can we show to everyone that my commit is really mine? The solution for this is by using signed commits.

### Prerequisites

In this tutorial we will create a GPG key. If you have Git BASH installed then you don't have to install GPG seperately, because it already comes with Git BASH. In this case you have to run all GPG command from Git Bash. If you want to install GPG seperately there all several options:

- **Windows**: [Gpg4win](https://www.gpg4win.org/)
- **Mac**: [GPG Suite](https://gpgtools.org/)
- **Linux**: Usually already includes GPG. If not run: `sudo apt install gnupg`.

### Tutorial

#### Creating a GPG key

1. Check the version your GPG by running the following command.

    ```bash
    gpg --version
    ```

2. Start creating a new GPG key.

    If you are on GPG version 2.1.17 or higher run the following command.

    ```bash
    gpg --full-generate-key
    ```

    If you are on a lower version than above you should run the following command, because the command above won't work.

    ```bash
    gpg --default-new-key-algo rsa4096 --gen-key
    ```

3. You'll get multiple prompts to select a few options.

    - **Kind of key**: choose an option with RSA. So choose `1` for `RSA and RSA` or `4` which is `RSA (sign only)`.
    - **Key size**: choose `4096`. This is the minimum size to use on GitHub.
    - **Time for key to be valid**: choose `0` if you don't want to the key to expire. Otherwise choose another option.

4. Verify the above selections by choosing `y`.

5. You'll get a few prompts again to create a user ID to identify the key.

    - **Real name**: Enter your name.
    - **Email address**: Enter your email adress. If you want to integrate your GPG key with GitHub make sure you sure an email address that is connected to your GitHub account.
    - **Comment**: You can type whatever you want here. Personally I'd leave this blank.

6. Verify the information by choosing `O`.
7. You'll now receive a prompt to create a passphrase to protect your key. It is important to remember this password!

#### Add GPG key to GitHub

1. To get a list of your GPG keys run the following command.

    ```bash
    gpg --list-secret-keys --keyid-format=long
    ```

    This will give you an output as follows where the GPG key ID is `3R11A123YUIA72O10W1V123AP33467T678ACP098`. Copy this key.

    ```bash
    sec   rsa4096/D24532A121BAC233 2022-07-13 [SC]
        3R11A123YUIA72O10W1V123AP33467T678ACP098
    uid                 [ultimate] NAME <email@email.com>
    ssb   rsa4096/10A271000P554109 2022-07-13 [E]
    ```

2. To make the key ready to upload to GitHub you need to export it. This will print the key in ASCII armor format.

    ```bash
    gpg --armor --export YOUR-OWN-GPG-KEY-ID-HERE
    ```

3. Copy the output in the terminal including the `-----BEGIN PGP PUBLIC KEY BLOCK-----` and `-----END PGP PUBLIC KEY BLOCK-----` statements.

4. Open [GitHub](https://github.com/).
5. Go to _`Settings` → `SSH and GPG keys`_.
6. Click on `New GPG key`.
7. Paste the GPG key in the `Key` field.
8. Click on `Add GPG key`.

#### Setup Git to sign your commits

1. To get a list of your GPG keys run the following command.

    ```bash
    gpg --list-secret-keys --keyid-format=long
    ```

    This will give you an output as follows where the GPG key ID is `3R11A123YUIA72O10W1V123AP33467T678ACP098`. Copy this key.

    ```bash
    sec   rsa4096/D24532A121BAC233 2022-07-13 [SC]
        3R11A123YUIA72O10W1V123AP33467T678ACP098
    uid                 [ultimate] NAME <email@email.com>
    ssb   rsa4096/10A271000P554109 2022-07-13 [E]
    ```

2. To set your GPG signing key globally in Git run the following command with your own key. If you want to have a signing key only for a specific repository you can leave out the `--global` flag.

    ```bash
    git config --global user.signingKey YOUR-OWN-GPG-KEY-ID-HERE
    ```

3. To sign all commits by default run the following command. If you don't use the `--global` flag you can configure git to sign commits by default only for a specific local repository.

```bash
git config --global commit.gpgsign true
```

#### Setup GitKraken to sign your commits

1. To find the location of where GPG is installed on your machine run the following command.

    ```bash
    where gpg
    ```

2. Open GitKraken.
3. Make sure your current profile is the one you want to attach the GPG key to that we generated earlier. Specifically check the email address.
4. Go to _`Preferences` → `GPG`_.
5. Select the location of the GPG Program.
6. Select the signing key you want to couple to your current profile.
7. If you want to sign your commits by default tick the box for that.

### Useful commands

#### Check existing GPG keys

`gpg --list-secret-keys --keyid-format=long`

#### Check your current global git config

`git config --list`

#### Set an email address for a specific local repository

`git config user.email "YOUR-OWN-EMAIL-HERE"`

---

Sources:

- [https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
- [https://www.freecodecamp.org/news/what-is-commit-signing-in-git/](https://www.freecodecamp.org/news/what-is-commit-signing-in-git/)
